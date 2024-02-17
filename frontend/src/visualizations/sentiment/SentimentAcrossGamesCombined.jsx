import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
// import { getGameTitles } from "../../utils/games";

function SentimentAcrossGamesCombined(props) {
  const { game } = props;
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    // d3.selectAll("svg > *").remove();

    // set the dimensions and margins of the graph
    var margin = { top: 30, right: 30, bottom: 30, left: 30 },
      width = 600 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    const sumstat = Object.keys(data).map((key) => ({
      key: key,
      chart_data: data[key],
    }));

    const allKeys = sumstat.map(function (d) {
      return d.key;
    });
    // console.log(allKeys);

    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleLinear().domain([0, 100]).range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height / 2 + ")")
      .call(d3.axisBottom(x).tickSize(0))
      .selectAll("text")
      .style("visibility", "hidden");

    // Add Y axis
    var y = d3.scaleLinear().domain([-100, 100]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // color palette
    var res = sumstat.map(function (d) {
      return d.key;
    }); // list of group names

    const color = (tag) => {
      if (tag === "average") return "red";
      return "#6e6e6e";
    };

    // Set the gradient
    svg
      .append("linearGradient")
      .attr("id", "line-gradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0)
      .attr("y1", y(-100))
      .attr("x2", 0)
      .attr("y2", y(0))
      .selectAll("stop")
      .data([
        { offset: "0%", color: "blue" },
        { offset: "100%", color: "red" },
      ])
      .enter()
      .append("stop")
      .attr("offset", function (d) {
        return d.offset;
      })
      .attr("stop-color", function (d) {
        return d.color;
      });

    // Draw the line
    svg
      .selectAll(".line")
      .data(sumstat)
      .enter()
      .append("path")
      .attr("fill", "none")
      .attr("stroke", (d) =>
        d.key === "average" ? "url(#line-gradient)" : color(d.key)
      )
      .attr("opacity", (d) => (d.key === "average" ? 1 : 0.2))
      .attr("stroke-width", (d) => (d.key === "average" ? 3 : 1.5))
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
      <svg ref={ref} style={{ border: "1px solid red" }} />
    </>
  );
}

export default SentimentAcrossGamesCombined;
