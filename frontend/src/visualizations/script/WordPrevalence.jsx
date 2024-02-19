import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
// import { getGameTitles } from "../../utils/games";

import "./script.css";

function WordPrevalence(props) {
  const { game } = props;
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll(".main-svg").remove();
    d3.selectAll(".examples").remove();

    // set the dimensions and margins of the graph
    var margin = { top: 25, right: 60, bottom: 35, left: 60 };
    const width = 800;
    const height = 500;
    //   width = 800 - margin.left - margin.right,
    //   height = 700 - margin.top - margin.bottom;

    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("class", "main-svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewbox", [0, 0, width, height]);
    //   .attr("width", width + margin.left + margin.right)
    //   .attr("height", height + margin.top + margin.bottom)
    //   .append("g")
    //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // ----------------
    // Create a tooltip
    // ----------------
    // ----------------
    // Create a tooltip
    // ----------------
    // var tooltip = d3
    //   .select("body")
    //   .append("div")
    //   .style("opacity", 0)
    //   .attr("class", "tooltip genderlinecounts-tooltip")
    //   .style("position", "absolute")
    //   .style("top", 0)
    //   .style("background-color", "white")
    //   .style("border-radius", "5px")
    //   .style("padding", "10px");
    const examples = d3
      .select(ref.current)
      .append("div")
      .attr("class", "examples")
      .style("display", "none");
    let enterTimeout, leaveTimeout;

    // can be sliders later
    const domainMax = 37e-5;
    const thresholds = 60;
    const yScaleFn = "Log";

    let bins = d3
      .bin()
      .thresholds(thresholds)
      .domain([0, domainMax])
      .value((d) => d.occurrence)(data);

    bins = bins.filter((b) => b.length !== 0);
    console.log(bins);

    const fmtWord = (d) => `<span class="word ${d.set}">${d.word}</span>`;

    const tooltipTemplate = (bin, body) => `
    <h3>Range: ${bin.x0}%&nbsp;-&nbsp;${bin.x1}%</h3>
    ${body.map(fmtWord).join("")}`;

    const xScale = d3
      .scaleLinear()
      .domain([bins[0].x0, bins[bins.length - 1].x1])
      .range([margin.left, width - margin.right]);

    // const yScale = () => {
    const bucketProportions = bins
      .map((bin) => {
        let groups = d3.group(bin, (d) => d.set);
        //   console.log("groups", groups);
        return [game].map((set) =>
          groups.get(set) ? groups.get(set).length : 0
        );
      })
      .reduce((prev, curr) => [...prev, ...curr]);

    const yScale = d3[`scale${yScaleFn}`]()
      .domain([1, d3.max(bucketProportions)]) // Guard against dividing by zero in a log scale.
      .range([height - margin.bottom, margin.top]);
    // };

    const fmt = d3.format("0.04f");

    const xAxis = d3.axisBottom(xScale).tickFormat((t) => `${fmt(t * 100)}%`);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(xAxis)
      .call((g) =>
        g
          .append("text")
          .attr("x", width - margin.right)
          .attr("y", margin.bottom - 2)
          .attr("fill", "currentColor")
          .attr("text-anchor", "end")
          .text("Prevalence →")
      );

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(yAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .clone()
          .attr("x2", width - margin.left - margin.right)
          .attr("stroke-opacity", 0.1)
      )
      .call((g) =>
        g
          .append("text")
          .attr("x", -margin.left)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text("↑ Count")
      );

    // Draw bars
    const barOpacity = 0.9;
    const g = svg
      .selectAll("g.bin")
      .data(bins)
      .join("g")
      .attr("class", "bin")
      .attr("fill-opacity", barOpacity)
      .on("mouseenter", (event) =>
        d3.select(event.target).attr("fill-opacity", 1)
      )
      .on("mouseleave", (event) =>
        d3.select(event.target).attr("fill-opacity", barOpacity)
      );

    g.append("rect").data(bins).call(drawBars("#6AAA64"));
    //   g.append("rect").call(
    //     drawBars(colorScale("answer"), (word) => word.set === "answer")
    //   );

    function drawBars(color) {
      return (g) => {
        g.attr("x", (bin) => xScale(bin.x0))
          .attr("y", (bin) => {
            // console.log("y", yScale(bin.length));
            return yScale(bin.length);
          })
          .attr("width", (bin) => xScale(bin.x1) - xScale(bin.x0))
          .attr(
            "height",
            (bin) =>
              height - margin.bottom - yScale(bin.length ? bin.length : 0)
          )
          .attr("fill", color);
      };
    }

    g.append("rect")
      .data(bins)
      .call(drawBars("transparent"))
      .on("mouseenter", (event) => {
        clearTimeout(enterTimeout);
        clearTimeout(leaveTimeout);
        enterTimeout = setTimeout(() => {
          const bin = d3.select(event.target).datum();
          const exampleWords = Array.from(
            d3.group(bin, (d) => d.set),
            ([key, val]) =>
              val.sort((a, b) => d3.ascending(a.day, b.day)).slice(0, 10)
          )
            .reduce((prev, curr) => [...prev, ...curr])
            .map((d) => ({
              set: d.set,
              word: d.word,
            }));

          console.log("examplewords", exampleWords);
          examples
            .style("display", "block")
            .html(tooltipTemplate(bin, exampleWords));

          const bbox = examples.node().getBoundingClientRect();
          console.log("bbox", bbox);
          const x_mu = (xScale(bin.x0) + xScale(bin.x1)) / 2;
          console.log("mu", x_mu);
          const leftExtent = x_mu - bbox.width / 2 - margin.left;
          console.log("leftExtend", leftExtent);
          const point = (leftExtent > 0 ? 0.5 : x_mu / bbox.width) * 100 + 8;

          console.log("bin", bin);
          console.log("x0", xScale(bin.x0));

          console.log("x1", xScale(bin.x1));
          examples
            .transition(750)
            .style(
              "clip-path",
              `polygon(0% 0%, 100% 0%, 100% 90%, ${
                point - 5
              }% 90%, ${point}% 100%, ${point + 5}% 90%, 0% 90%)`
            )

            // .style("left", )
            .style(
              "left",
              `${
                leftExtent > 0
                  ? xScale(bin.x0) -
                    bbox.width / 2 +
                    (xScale(bin.x1) - xScale(bin.x0)) / 2
                  : 0
                //   ? (xScale(bin.x1) + xScale(bin.x0)) / 2 -
                //     bbox.width / 2 +
                //     xScale(bin.x1) -
                //     xScale(bin.x0)
                // (xScale(bin.x1) - xScale(bin.x0))
                //   ? xScale(bin.x0) -
                //     bbox.width / 2 +
                //     (xScale(bin.x1) - xScale(bin.x0)) / 2
                // 0
              }px`
            )
            .style("top", yScale(bin.length) + 100 + "px");
          // .style("top", `${yScale(bin.length) - bbox.height - 5}px`);
        }, 250);
      })
      .on("mouseleave", (event) => {
        clearTimeout(enterTimeout);
        leaveTimeout = setTimeout(() => examples.style("display", "none"), 250);
      });
  }, [data, windowWidth, game]);

  useEffect(() => {
    fetch(`/api/scripts/prevalence?game=${game}`, {
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

  return <div ref={ref} style={{ border: "1px solid red" }} />;
}

export default WordPrevalence;
