import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import { characterBars } from "../../utils/characters";

import { getGameFromCode } from "../../utils/games";

import "./characters.css";

function CharacterBar(props) {
  const [data, setData] = useState();
  const [charData, setCharData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    // d3.selectAll("g > *").remove();

    // set the dimensions and margins of the graph
    var margin = { top: 50, right: 10, bottom: 30, left: 10 },
      width = 300 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

    Object.keys(data).map((key, i) => {
      const thisData = data[key];

      const svg = d3
        .select(ref.current)
        .append("svg")
        .style("margin-right", "30px")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

      svg
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + 20 + ")")
        .append("text")
        .text(getGameFromCode(key));

      const dots = svg
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      dots
        .append("svg:image")
        .attr("width", "97%")
        .attr("xlink:href", characterBars[i])
        .attr("x", 0)
        .attr("y", 0);

      const balls = thisData.length;
      const balls_per_row = 10;
      const rows = balls / balls_per_row;
      const full_rows = Math.ceil(balls / balls_per_row) - 1;
      const rest = Math.round((rows - full_rows) * 10);

      let index = 0;

      // full rows
      for (let r = 0; r < full_rows; r++) {
        for (let k = 1; k <= balls_per_row; k++) {
          dots
            .append("rect")
            .attr("x", (k - 1) * 30)
            .attr("y", 0 + r * 30)
            .attr("width", 20)
            .attr("height", 20)
            .attr("id", `${key}-${index}-${thisData[index].name}`)
            .style("border", "1px solid red")
            .style("opacity", 0)
            .style("cursor", "pointer")
            .on("click", buttonClick);

          index += 1;
        }
      }

      // partial row
      for (let r = 1; r <= rest; r++) {
        dots
          .append("rect")
          .attr("x", (r - 1) * 30)
          .attr("y", 0 + full_rows * 30)
          .attr("width", 20)
          .attr("height", 20)
          .attr("id", `${key}-${index}-${thisData[index].name}`)
          .style("border", "1px solid red")
          .style("opacity", 0)
          .style("cursor", "pointer")
          .on("click", buttonClick);

        //   .append("svg:image")
        //   .attr("x", (r - 1) * 30)
        //   .attr("y", 0 + full_rows * 30)
        //   .attr("width", 20)
        //   .attr("height", 20)
        //   .attr("xlink:href", thisData[index].img)
        //   .attr("preserveAspectRatio", "xMinYMin slice");

        index += 1;
      }
    });

    function buttonClick(e) {
      console.log(e.srcElement.id);
      const splits = e.srcElement.id.split("-");
      setCharData(data[splits[0]][splits[1]]);
    }
  }, [data, windowWidth]);

  useEffect(() => {
    fetch(`/api/characters/bar`, {
      method: "GET",
      mode: "cors",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div
        className="characters-bar__container"
        ref={ref}
        style={{ border: "1px solid blue" }}
      ></div>
      {charData && (
        <div>
          <img src={charData.img} alt={charData.name} />
          <h1>{charData.name}</h1>
          <p>{charData.class}</p>
        </div>
      )}
    </>
  );
}

export default CharacterBar;
