import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
// import { getGameTitles } from "../../utils/games";

import "./script.css";

function Similarity(props) {
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll("g > *").remove();

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 30 },
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

    const height_one = 300;

    // Add X axis
    var x = d3.scaleLinear().domain([0, 1]).range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height_one + ")")
      .call(d3.axisBottom(x));

    // // Add Y axis
    // var y = d3.scaleLinear().domain([3.8, 4.7]).range([height, 0]);
    // svg.append("g").call(d3.axisLeft(y));

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
            "</p>"
        )
        .style("left", d.pageX + 6 + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
        .style("top", height_one + 5 + "px");
    };

    // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
    var mouseleave = function (d) {
      tooltip
        //   .transition().duration(200)
        .style("opacity", 0)
        .style("display", "none");
    };

    // Add dots
    svg
      .append("g")
      .selectAll("dot")
      .data(data.tdidf) // the .filter part is just to keep a few dots on the chart, not all of them
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return x(d.x);
      })
      .attr("cy", function (d) {
        return height_one;
        // return y(d.y);
      })
      .attr("r", 5)
      .style("fill", (d) => color[d.group])
      //   .style("fill", "#69b3a2")
      //   .style("opacity", 0.3)
      .style("stroke", "white")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);
  }, [data, windowWidth]);

  useEffect(() => {
    fetch(`/api/scripts/similarity-others`, {
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

  return <svg ref={ref} style={{ border: "1px solid red" }} />;
}

export default Similarity;
