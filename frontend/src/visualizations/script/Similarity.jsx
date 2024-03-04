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

    d3.selectAll("svg").remove();

    // // set the dimensions and margins of the graph
    // var margin = { top: 10, right: 30, bottom: 30, left: 30 },
    //   width = 700 - margin.left - margin.right,
    //   height = 400 - margin.top - margin.bottom;

    const div = d3.select(ref.current);

    var margin = { top: 30, right: 20, bottom: 30, left: 20 },
      width = 250 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;

    // ---------
    // TOOLTIP SECTION
    // ---------

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
            "</p><b>Year: </b>" +
            d.srcElement.__data__.year +
            // "</p><b>Similarity score (out of 1): </b>" +
            // d.srcElement.__data__.x +
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

    // ---------
    // GRAPH SECTION
    // ---------

    const color = {
      "Fire Emblem": "#4281f5",
      Prose: "#BE3144",
      Plays: "#FAA300",
      "Movie Scripts": "#FAA300",
      "First Person Shooter": "#00ad32",
      Fighting: "#00ad32",
      "Action RPG": "#00ad32",
      "Strategy RPG": "#00ad32",
      "Puzzle/Platform": "#00ad32",
      "Visual Novel": "#00ad32",
    };

    // const color = {
    //   "Fire Emblem": "#4281f5",
    //   "Single-Player RPG": "#f2aa18",
    //   Other: "#b81a29",
    // };

    const height_one = 30;
    const height_two = 100;
    const bar_height = 40;

    // Add X axis
    var x = d3.scaleLinear().domain([0, 1]).range([0, width]);

    Object.entries(data).forEach(([key, value], index) => {
      const svg = div
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style("border", "1px solid blue")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // labels
      svg
        .append("text")
        .attr("x", -2)
        .attr("y", 0)
        .attr("fill", "currentColor")
        .attr("text-anchor", "end")
        .attr("font-size", "18px")
        .attr("text-anchor", "start")
        .style("font-weight", 600)
        .text(key);
      svg
        .append("text")
        .attr("x", 45)
        .attr("y", height_one - 7)
        .attr("fill", "currentColor")
        .attr("text-anchor", "end")
        .attr("font-size", "14px")
        .text("TD-IDF");

      svg
        .append("text")
        .attr("x", 50)
        .attr("y", height_two - 7)
        .attr("fill", "currentColor")
        .attr("text-anchor", "end")
        .attr("font-size", "14px")
        .text("Jaccard");

      svg
        .append("text")
        .attr("x", width)
        .attr("y", height_two + bar_height + 20)
        .attr("fill", "currentColor")
        .attr("text-anchor", "end")
        .attr("font-size", "12px")
        .text("Similarity →");

      // TDIDF!!!!!

      const rects = svg.append("g");

      // gray bars
      rects
        .append("rect")
        .attr("x", 0)
        .attr("y", height_one)
        .attr("width", width + 1)
        .attr("height", bar_height)
        .style("fill", "gray")
        .style("opacity", 0.2);
      rects
        .append("rect")
        .attr("x", 0)
        .attr("y", height_two)
        .attr("width", width + 1)
        .attr("height", bar_height)
        .style("fill", "gray")
        .style("opacity", 0.2);

      const rectsT = svg.append("g");

      // Add rects for current group
      rectsT
        .selectAll("rect")
        .data(value)
        .enter()
        .append("rect")
        .attr("x", function (d) {
          return x(d.tdidf);
        })
        .attr("y", function (d) {
          return height_one;
          // return y(d.y);
        })
        .attr("width", 2)
        .attr("height", bar_height)
        .style("fill", color[key])
        .style("opacity", 0.5)
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);

      if (key !== "Fire Emblem") {
        const rectsFE = svg.append("g");
        // Add rects
        rectsFE
          .selectAll("rect")
          .data(data["Fire Emblem"])
          .enter()
          .append("rect")
          .attr("x", function (d) {
            return x(d.tdidf);
          })
          .attr("y", function (d) {
            return height_one;
            // return y(d.y);
          })
          .attr("width", 2)
          .attr("height", bar_height)
          .style("fill", color["Fire Emblem"])
          .style("opacity", 0.5);
      }

      // JACCARD!!!!!

      const rectsJ = svg.append("g");

      // Add rects for current group
      rectsJ
        .selectAll("rect")
        .data(value)
        .enter()
        .append("rect")
        .attr("x", function (d) {
          return x(d.jaccard);
        })
        .attr("y", function (d) {
          return height_two;
          // return y(d.y);
        })
        .attr("width", 2)
        .attr("height", bar_height)
        .style("fill", color[key])
        .style("opacity", 0.5)
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);

      if (key !== "Fire Emblem") {
        const rectsFE = svg.append("g");
        // Add rects
        rectsFE
          .selectAll("rect")
          .data(data["Fire Emblem"])
          .enter()
          .append("rect")
          .attr("x", function (d) {
            return x(d.jaccard);
          })
          .attr("y", function (d) {
            return height_two;
            // return y(d.y);
          })
          .attr("width", 2)
          .attr("height", bar_height)
          .style("fill", color["Fire Emblem"])
          .style("opacity", 0.5);
      }
    });
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

  return <div ref={ref} style={{ border: "1px solid red" }} />;
}

export default Similarity;
