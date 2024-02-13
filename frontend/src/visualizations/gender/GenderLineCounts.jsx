import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getGameTitles } from "../../utils/games";

import "./gender.css";

function GenderLineCounts() {
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll("g > *").remove();

    // console.log(windowWidth);

    // set the dimensions and margins of the graph
    const margin = { top: 10, right: 30, bottom: 50, left: 50 },
      width = Math.min(windowWidth * 0.85, 1200) - margin.left - margin.right,
      height = 550 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    //   .style("padding-bottom", 20);

    // List of subgroups
    const subgroups = ["F", "A", "M"];
    const mapGender = (g) => {
      const mapping = {
        M: "Male",
        F: "Female",
        A: "Avatar",
      };
      return mapping[g];
    };

    // List of groups
    const groups = getGameTitles();
    console.log(groups);

    // Add X axis
    const x = d3.scaleBand().domain(groups).range([0, width]).padding([0.25]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain")
      .remove();

    svg
      .selectAll("text")
      .attr("transform", "translate(0,10)")
      //   .style("text-anchor", "end")
      .style("font-size", 14)
      .style("font-weight", 400)
      .style("font-family", "Inter");
    //   .call(d3.axisBottom(x).tickSizeOuter(0));

    // Add Y axis
    const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
    // svg.append("g").call(d3.axisLeft(y));

    // color palette = one color per subgroup
    const color = d3
      .scaleOrdinal()
      .domain(subgroups)
      .range(["#d64d7b", "#8e6cb8", "rgba(106, 163, 204, 0.2)"]);

    // color palette = one color per subgroup
    const highlightColor = d3
      .scaleOrdinal()
      .domain(subgroups)
      .range(["#d64d7b", "#8e6cb8", "#6aa3cc"]);

    const lowlightColor = d3
      .scaleOrdinal()
      .domain(subgroups)
      .range([
        "rgba(214, 77, 123, 0.2)",
        "rgba(121, 82, 168, 0.2)",
        "rgba(106, 163, 204, 0.2)",
      ]);

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
    let stackedData = d3.stack().keys(subgroups)(Object.values(dataN));

    stackedData[1] = stackedData[1].filter(
      (element) => !Array.isArray(element) || element[1] - element[0] > 0.1
    );

    stackedData[1].index = 1;
    stackedData[1].key = "A";

    // console.log("stackeddata", stackedData);

    // ----------------
    // Create a tooltip
    // ----------------
    var tooltip = d3
      .select("body")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip genderlinecounts-tooltip")
      .style("position", "absolute")
      .style("top", 0)
      .style("background-color", "white")
      .style("border-radius", "5px")
      .style("padding", "10px");

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function (d) {
      const game = d.srcElement.getAttribute("game");
      const subgroup = d3.select(this.parentNode).datum().key;
      const value = d.target.__data__.data[subgroup];

      //   var subgroupValue = d.data[subgroupName];
      //   console.log(subgroupValue);
      tooltip
        .html(
          "<h5>" +
            game +
            "</h5> Gender: <b>" +
            mapGender(subgroup) +
            "<br>" +
            Math.round(value * 10) / 10 +
            "%</b> of lines"
        )
        .style("opacity", 1);

      // Reduce opacity of all rect to 0.2
      //   d3.selectAll(".myRect").style("opacity", 0.2);
      d3.selectAll(".myRect").attr("fill", function (d) {
        return lowlightColor(d.key);
      });
      // Highlight all rects of this subgroup with opacity 0.8. It is possible to select them since they have a specific class = their name.
      //   d3.selectAll("." + subgroup).style("opacity", 1);
      d3.selectAll("." + subgroup).attr("fill", function (d) {
        return highlightColor(d.key);
      });
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
      d3.selectAll(".myRect").attr("fill", function (d) {
        return color(d.key);
      });
      //   d3.selectAll(".myRect").style("opacity", 0.8);
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
      // no bar at the beginning thus:
      .attr("height", function (d) {
        return height - y(0);
      }) // always equal to 0
      .attr("y", function (d) {
        return y(d[0]);
        // return y(0);
      })
      .attr("game", function (d) {
        return d.data.group;
      })
      .attr("width", x.bandwidth())
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

    // Animation
    svg
      .selectAll("rect")
      .transition()
      .duration(500)
      .attr("y", function (d) {
        return y(d[1]);
      })
      .attr("height", function (d) {
        return y(d[0]) - y(d[1]);
      })
      //   .attr("height", function (d) {
      //     return height - y(d.Value);
      //   })
      .delay(function (d, i) {
        // console.log(i);
        return i * 100;
      });
  }, [data, windowWidth]);

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

  return <svg ref={ref} />;
}

export default GenderLineCounts;
