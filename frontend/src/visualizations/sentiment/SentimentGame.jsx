import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
// import { getGameTitles } from "../../utils/games";

function SentimentGame(props) {
  const { game } = props;
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll("g > *").remove();

    // set the dimensions and margins of the graph
    var margin = { top: 30, right: 30, bottom: 70, left: 30 },
      width = 800 - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom;

    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let maxPos = 0,
      maxNeg = 0;
    for (const d of data.Main) {
      maxPos = Math.max(maxPos, d.positive);
      maxNeg = Math.max(maxNeg, d.negative);
    }

    // X axis
    // const x = d3.scaleBand().domain(groups).range([0, width]).padding([0.25]);
    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(data.Main.map((d) => d.chapter))
      .padding(0.2);
    //   .selectAll("text")
    //   .attr("transform", "translate(-10,0)rotate(-45)")
    //   .style("text-anchor", "end");

    // Add Y axis
    var y1 = d3
      .scaleLinear()
      .domain([0, Math.max(maxPos, maxNeg)])
      .range([height / 2, 0]);
    // svg
    //   .append("g")
    //   .call(d3.axisLeft(y1).tickSize(0))
    //   .selectAll("text")
    //   .style("visibility", "hidden");

    // Bars
    svg
      .selectAll("mybar")
      .data(data.Main)
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(d.chapter);
      })
      .attr("y", function (d) {
        return y1(d.positive);
      })
      .attr("width", x.bandwidth())
      .attr("height", function (d) {
        return height / 2 - y1(d.positive);
      })
      .attr("fill", "#e6ad57");

    // Bars
    svg
      .selectAll("mybar")
      .data(data.Main)
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(d.chapter);
      })
      .attr("y", function (d) {
        return height / 2 + 1;
      })
      .attr("width", x.bandwidth())
      .attr("height", function (d) {
        return height / 2 - y1(d.negative);
      })
      .attr("fill", "#69b3a2");

    svg
      .append("g")
      .attr("transform", "translate(0," + height / 2 + ")")
      .call(d3.axisBottom(x).tickSize(0))

      .selectAll("text")
      .style("visibility", "hidden");
  }, [data, windowWidth]);

  useEffect(() => {
    fetch(`/api/sentiment/sentiments?game=${game}`, {
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

  return <svg ref={ref} style={{ border: "1px solid red" }} />;
}

export default SentimentGame;
