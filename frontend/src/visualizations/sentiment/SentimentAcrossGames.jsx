import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getGameShortenedTitleFromCode } from "../../utils/games";

function SentimentAcrossGames(props) {
  const { game } = props;
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    // d3.selectAll("svg > *").remove();

    // set the dimensions and margins of the graph
    var margin = { top: 30, right: 0, bottom: 30, left: 50 },
      width = 210 - margin.left - margin.right,
      height = 210 - margin.top - margin.bottom;

    const sumstat = Object.keys(data)
      .filter((d) => d !== "average")
      .map((key) => ({
        key: key,
        chart_data: data[key],
      }));

    // const allKeys = sumstat.map(function (d) {
    //   return d.key;
    // });
    // console.log(allKeys);

    // Add an svg element for each group. The will be one beside each other and will go on the next row when no more room available
    var svg = d3
      .select(ref.current)
      .selectAll("uniqueChart")
      .data(sumstat)
      .enter()
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis --> it is a date format
    var x = d3.scaleLinear().domain([0, 100]).range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height / 2 + ")")
      .call(d3.axisBottom(x).tickSize(0))
      .selectAll("text")
      .style("visibility", "hidden");

    //Add Y axis
    var y = d3.scaleLinear().domain([-100, 100]).range([height, 0]);
    svg
      .append("g")
      .call(d3.axisLeft(y).tickSize(0))
      .selectAll("text")
      .style("visibility", "hidden");

    // // color palette
    // var color = d3
    //   .scaleOrdinal()
    //   .domain(allKeys)
    //   .range([
    //     "#e41a1c",
    //     "#377eb8",
    //     "#4daf4a",
    //     "#984ea3",
    //     "#ff7f00",
    //     "#ffff33",
    //     "#a65628",
    //     "#f781bf",
    //     "#999999",
    //   ]);

    // Draw the line
    svg
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "#93319e")
      .attr("stroke-width", 1.9)
      .attr("d", function (d) {
        return d3
          .line()
          .x(function (d) {
            return x(d.x);
          })
          .y(function (d) {
            return y(+d.y);
          })
          .curve(d3.curveBasis)(d.chart_data);
      });

    // Add titles
    svg
      .append("text")
      .attr("text-anchor", "start")
      .attr("y", -5)
      .attr("x", 0)
      .text(function (d) {
        return getGameShortenedTitleFromCode(d.key);
      })
      .attr("font-family", "Gill Sans, Century Gothic, sans-serif")
      .attr("font-size", 14)
      .attr("opacity", 1)
      .style("fill", "black");
    // .style("fill", "#123622");

    // SECOND LINE CHART!!!!!
  }, [data, windowWidth]);

  useEffect(() => {
    fetch(`/api/sentiment/sentiment-curves`, {
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
  }, [game]);

  return (
    <>
      <div ref={ref} style={{ border: "1px solid red" }} />
    </>
  );
}

export default SentimentAcrossGames;
