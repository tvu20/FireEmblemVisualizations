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
    const dataN = structuredClone(data);
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

    // ----------------
    // Create a tooltip
    // ----------------
    var tooltip = d3
      .select("body")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px");

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function (d) {
      const subgroup = d3.select(this.parentNode).datum().key;
      const value = d.target.__data__.data[subgroup];

      //   var subgroupValue = d.data[subgroupName];
      //   console.log(subgroupValue);
      tooltip
        .html("subgroup: " + subgroup + "<br>" + "Value: " + value)
        .style("opacity", 1);

      // Reduce opacity of all rect to 0.2
      d3.selectAll(".myRect").style("opacity", 0.2);
      // Highlight all rects of this subgroup with opacity 0.8. It is possible to select them since they have a specific class = their name.
      d3.selectAll("." + subgroup).style("opacity", 1);
    };
    const mousemove = function (d) {
      tooltip.style("left", d.pageX + 20 + "px").style("top", d.pageY + "px");
      //   console.log("move");
      //   console.log(d3.pointer(this));
      //   tooltip
      //     .style("left", d3.pointer(this)[0] + 90 + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
      //     .style("top", d3.pointer(this)[1] + "px");
    };
    const mouseleave = function (d) {
      tooltip.style("opacity", 0);
      // Back to normal opacity: 0.8
      d3.selectAll(".myRect").style("opacity", 0.8);
    };

    // Show the bars
    svg
      .append("g")
      .selectAll("g")
      // Enter in the stack data = loop key per key = group per group
      .data(stackedData)
      .enter()
      .append("g")
      .attr("class", function (d) {
        return "myRect " + d.key;
      }) // Add a class to each subgroup: their name
      .attr("fill", function (d) {
        return color(d.key);
      })
      .style("transition", "opacity 0.2s")
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
      //   .attr("subgroup", function (d) {
      //     console.log
      //     return d.key;
      //   })
      .attr("width", x.bandwidth())
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);
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
