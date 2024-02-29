import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
// import { getGameTitles } from "../../utils/games";

import "./script.css";

function Complexity(props) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState();

  const [categories, setCategories] = useState(["FE", "Game", "Other"]);

  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!filteredData) return;

    d3.selectAll("g > *").remove();

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 700 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const color = {
      FE: "#4281f5",
      Game: "#f2aa18",
      Other: "#b81a29",
    };

    // Add X axis
    var x = d3.scaleLinear().domain([0, 20]).range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear().domain([3.8, 4.7]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
    // Its opacity is set to 0: we don't see it by default.
    var tooltip = d3
      .select("body")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("position", "absolute")
      .style("top", 0);

    // A function that change this tooltip when the user hover a point.
    // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
    var mouseover = function (d) {
      tooltip.style("opacity", 1).style("display", "block");
    };

    var mousemove = function (d) {
      tooltip
        .html(
          "<h2>" +
            d.srcElement.__data__.name +
            "</h2><p><b>Type of media: </b>" +
            d.srcElement.__data__.category +
            "</p><b>Avg words per sentence: </b>" +
            d.srcElement.__data__.x +
            "</p><b>Avg word length: </b>" +
            d.srcElement.__data__.y +
            "</p>"
        )
        .style("left", d.pageX + 6 + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
        .style("top", d.pageY + 5 + "px");
    };

    // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
    var mouseleave = function (d) {
      tooltip
        //   .transition().duration(200)
        .style("opacity", 0)
        .style("display", "none");
    };

    function createScatter(currData) {
      d3.selectAll("circle").remove();

      svg
        .append("g")
        .selectAll("dot")
        .data(currData)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
          return x(d.x);
        })
        .attr("cy", function (d) {
          return y(d.y);
        })
        .attr("r", 5)
        .style("fill", (d) => color[d.group])
        //   .style("fill", "#69b3a2")
        //   .style("opacity", 0.3)
        .style("stroke", "white")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);
    }

    // // When the button is changed, run the updateChart function
    // d3.select("#othergames-checkbox").on("change", function (d) {
    //   console.log("checkedChange", d.target.checked);

    //   if (d.target.checked) {
    //     createScatter(data);
    //   } else {
    //     createScatter(data.filter((d) => d.group !== "Other"));
    //   }
    //   // console.log(d.target.checked);
    //   // // recover the option that has been chosen
    //   // var selectedOption = d3.select(this).property("value");
    //   // run the updateChart function with this selected option
    //   // update(d.target.checked, false);
    // });

    createScatter(filteredData);
  }, [filteredData, windowWidth]);

  useEffect(() => {
    fetch(`/api/scripts/complexity`, {
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

  useEffect(() => {
    const filtered = data.filter((d) => categories.includes(d.group));

    setFilteredData(filtered);
  }, [categories, data]);

  return (
    <>
      <p>Other RPG games</p>
      <input
        id="game-checkbox"
        type="checkbox"
        checked={categories.includes("Game")}
        onChange={(e) => {
          if (e.target.checked) {
            setCategories((prevState) => [...prevState, "Game"]);
          } else {
            setCategories((prevState) => prevState.filter((d) => d !== "Game"));
          }
        }}
      />
      <p>Other media</p>
      <input
        id="other-checkbox"
        type="checkbox"
        checked={categories.includes("Other")}
        onChange={(e) => {
          if (e.target.checked) {
            setCategories((prevState) => [...prevState, "Other"]);
          } else {
            setCategories((prevState) =>
              prevState.filter((d) => d !== "Other")
            );
          }
        }}
      />
      <svg ref={ref} style={{ border: "1px solid red" }} />
    </>
  );
}

export default Complexity;
