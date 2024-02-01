import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import { getGameTitles } from "../../utils/games";

function GenderLineCounts() {
  const [data, setData] = useState();
  const ref = useRef();

  useEffect(() => {
    if (!data) return;

    // set the dimensions and margins of the graph
    const margin = { top: 10, right: 30, bottom: 20, left: 50 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // List of subgroups
    const subgroups = ["M", "F", "A"];

    // List of groups
    const groups = getGameTitles();
    console.log(groups);

    // Add X axis
    const x = d3.scaleBand().domain(groups).range([0, width]).padding([0.2]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSizeOuter(0));

    // Add Y axis
    const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // color palette = one color per subgroup
    const color = d3
      .scaleOrdinal()
      .domain(subgroups)
      .range(["#e41a1c", "#377eb8", "#4daf4a"]);

    // Normalize the data -> sum of each group must be 100!
    console.log(data);
    const dataN = structuredClone(data);
    console.log(dataN);
    for (const d in data) {
      let total = 0;
      for (const label of subgroups) {
        total += data[d][label];
      }
      // normalizing
      for (const label of subgroups) {
        dataN[d][label] = (data[d][label] / total) * 100;
      }

      dataN[d]["group"] = d;
    }

    //stack the data? --> stack per subgroup
    const stackedData = d3.stack().keys(subgroups)(Object.values(dataN));

    // Show the bars
    svg
      .append("g")
      .selectAll("g")
      // Enter in the stack data = loop key per key = group per group
      .data(stackedData)
      .enter()
      .append("g")
      .attr("fill", function (d) {
        return color(d.key);
      })
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(function (d) {
        return d;
      })
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(d.data.group);
      })
      .attr("y", function (d) {
        return y(d[1]);
      })
      .attr("height", function (d) {
        return y(d[0]) - y(d[1]);
      })
      .attr("width", x.bandwidth());
  }, [data]);

  useEffect(() => {
    fetch("/api/gender/line-counts", {
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
    <div style={{ height: "100vh" }}>
      <h1>Gender Line Counts</h1>
      <svg ref={ref} />
    </div>
  );
}

export default GenderLineCounts;
