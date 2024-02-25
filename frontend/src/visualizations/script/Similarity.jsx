import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
// import { getGameTitles } from "../../utils/games";

import "./script.css";

function Similarity(props) {
  const [data, setData] = useState();
  const ref = useRef();
  const ref2 = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll("g > *").remove();

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 30 },
      width = 700 - margin.left - margin.right,
      height = 150 - margin.top - margin.bottom;

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

    const height_one = 75;

    // Add X axis
    var x = d3.scaleLinear().domain([0, 1]).range([0, width]);
    const xAxis = svg
      .append("g")
      .attr("transform", "translate(0," + height_one + ")")
      .call(d3.axisBottom(x));

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

    // // Add a clipPath: everything out of this area won't be drawn.
    // var clip = svg
    //   .append("defs")
    //   .append("svg:clipPath")
    //   .attr("id", "clip")
    //   .append("svg:rect")
    //   .attr("width", width)
    //   .attr("height", height)
    //   .attr("x", 0)
    //   .attr("y", 0);

    // // Add brushing
    // var brush = d3
    //   .brushX() // Add the brush feature using the d3.brush function
    //   .extent([
    //     [0, 0],
    //     [width, height],
    //   ]) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
    //   .on("end", updateChart); // Each time the brush selection changes, trigger the 'updateChart' function

    // Create the scatter variable: where both the circles and the brush take place
    var scatter = svg.append("g").attr("clip-path", "url(#clip)");

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
        .style("top", d.pageY + 5 + "px");
    };

    // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
    var mouseleave = function (d) {
      tooltip
        //   .transition().duration(200)
        .style("opacity", 0)
        .style("display", "none");
    };

    // Add circles
    scatter
      .selectAll("circle")
      .data(data.tdidf)
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
      .style("opacity", 0.5)
      .style("stroke", "white")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

    // // Add the brushing
    // scatter.append("g").attr("class", "brush").call(brush);

    // // A function that set idleTimeOut to null
    // var idleTimeout;
    // function idled() {
    //   idleTimeout = null;
    // }

    // // A function that update the chart for given boundaries
    // function updateChart(e) {
    //   // console.log(e);
    //   const extent = e.selection;

    //   // If no selection, back to initial coordinate. Otherwise, update X axis domain
    //   if (!extent) {
    //     if (!idleTimeout) return (idleTimeout = setTimeout(idled, 350)); // This allows to wait a little bit
    //     x.domain([0, 1]);
    //   } else {
    //     x.domain([x.invert(extent[0]), x.invert(extent[1])]);
    //     scatter.select(".brush").call(brush.move, null); // This remove the grey brush area as soon as the selection has been done
    //   }

    //   // Update axis and circle position
    //   xAxis.transition().duration(1000).call(d3.axisBottom(x));
    //   scatter
    //     .selectAll("circle")
    //     .transition()
    //     .duration(1000)
    //     .attr("cx", function (d) {
    //       return x(d.x);
    //     })
    //     .attr("cy", height_one);
    // }

    // -------------------------
    // SECOND GRAPH!!!
    // -------------------------

    const svg2 = d3
      .select(ref2.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis
    var x2 = d3.scaleLinear().domain([0, 1]).range([0, width]);
    const xAxis2 = svg2
      .append("g")
      .attr("transform", "translate(0," + height_one + ")")
      .call(d3.axisBottom(x));

    // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
    // Its opacity is set to 0: we don't see it by default.
    var tooltip2 = d3
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

    var scatter2 = svg2.append("g").attr("clip-path", "url(#clip)");

    // A function that change this tooltip when the user hover a point.
    // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
    var mouseover2 = function (d) {
      tooltip2.style("opacity", 1).style("display", "block");
    };

    var mousemove2 = function (d) {
      tooltip2
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
        .style("top", d.pageY + 5 + "px");
    };

    // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
    var mouseleave2 = function (d) {
      tooltip2
        //   .transition().duration(200)
        .style("opacity", 0)
        .style("display", "none");
    };

    // Add circles
    scatter2
      .selectAll("circle")
      .data(data.jaccard)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return x2(d.x);
      })
      .attr("cy", function (d) {
        return height_one;
        // return y(d.y);
      })
      .attr("r", 5)
      .style("fill", (d) => color[d.group])
      .style("opacity", 0.5)
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

  return (
    <>
      <svg ref={ref} style={{ border: "1px solid red" }} />
      <svg ref={ref2} style={{ border: "1px solid red" }} />
    </>
  );
}

export default Similarity;
