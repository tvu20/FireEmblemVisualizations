import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getGameTitles } from "../../utils/games";

import "./gender.css";

function ClassesTimeline(props) {
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll(".classes-timeline-div > g").remove();

    const colors = {
      M: d3.rgb(90, 148, 185),
      F: d3.rgb(195, 120, 150),
      A: d3.rgb(233, 187, 108),
    };
    // const colors = {
    //   M: d3.rgb(10, 195, 215),
    //   F: d3.rgb(227, 123, 168),
    //   A: d3.rgb(169, 103, 201),
    // };

    const mapGender = (g) => {
      const mapping = {
        M: "Male",
        F: "Female",
        A: "All",
      };
      return mapping[g];
    };

    // set the dimensions and margins of the graph
    var margin = { top: 50, right: 15, bottom: 30, left: 50 },
      width = 1000 - margin.left - margin.right,
      height = 1100 - margin.top - margin.bottom;

    // ----------------
    // Create a tooltip
    // ----------------
    var tooltip = d3
      .select("body")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip genderlinecounts-tooltip");

    const mouseover = function (d) {
      const note = d.srcElement.getAttribute("note");
      const range = d.srcElement.getAttribute("range");
      const title = d.srcElement.getAttribute("title");
      tooltip
        .html("<h5>" + title + "</h5>" + range + "<br/>" + note)
        .style("opacity", 1);
    };

    const mouseleave = function (d) {
      tooltip.style("opacity", 0);
      //   d3.selectAll(".myRect").style("opacity", 0.8);
    };

    const svg = d3
      .select(ref.current)
      //   .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // const line = svg
    //   .append("line")
    //   .attr("y1", margin.top - 10)
    //   .attr("y2", height - margin.bottom)
    //   .attr("stroke", "rgba(0,0,0,0.2)")
    //   .style("pointer-events", "none");

    const mousemove = function (d) {
      //   console.log(d);
      //   line.attr("x1", d.screenX).attr("x2", d.screenX);
      tooltip.style("left", d.pageX + 20 + "px").style("top", d.pageY + "px");
    };

    const groups = getGameTitles();

    const x = d3.scaleLinear().domain([1, 16]).range([55, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + -20 + ")")
      //   .attr("transform", "translate(0," + height + ")")
      .call(
        d3
          .axisTop(x)
          .ticks(16)
          .tickSizeOuter(0)
          .tickFormat(function (d, i) {
            return groups[i];
          })
      );
    svg
      .append("g")
      .attr("transform", "translate(0," + (height + 10) + ")")
      .call(
        d3
          .axisBottom(x)
          .ticks(16)
          .tickSizeOuter(0)
          .tickFormat(function (d, i) {
            return groups[i];
          })
      );

    data.forEach((value, index) => {
      console.log(index);

      const row = svg
        .append("g")
        .attr("transform", "translate(0," + index * 24 + ")")
        .attr("border", "1px solid red");

      row
        .append("text")
        .attr("x", -50)
        .attr("y", 5)
        .attr("class", "classes-timeline-text")
        .text(value.name);

      // for each item in the timeline
      value.timeline.forEach((t, index) => {
        if (t.end === t.start) {
          // row.append("circle").attr("cx", x(t.start)).attr("cy", 0).attr("r", 10).attr("fill", colors[t.gender])
          row
            .append("rect")
            .attr("height", 20)
            .attr("width", 20)
            .attr("fill", colors[t.gender])
            .attr("rx", 9)
            .attr("y", -10)
            .attr("x", x(t.start) - 10)
            .on("mouseover", mouseover)
            .attr("title", value.name + ": " + mapGender(t.gender))
            .attr("note", t.note)
            .attr("range", "<b>Game</b>: FE" + t.start)
            .on("mouseleave", mouseleave);
        } else {
          row
            .append("rect")
            .attr("height", 20)
            .attr("width", x(t.end - t.start) + 25)
            .attr("fill", colors[t.gender])
            .attr("rx", 9)
            .attr("y", -10)
            .attr("x", x(t.start) - 10)
            .on("mouseover", mouseover)
            .attr("title", value.name + ": " + mapGender(t.gender))
            .attr("note", t.note)
            .attr("range", "<b>Games</b>: FE" + t.start + " - FE" + t.end)
            .on("mouseleave", mouseleave);
        }
      });

      svg.on("mousemove", mousemove);
    });
  }, [data, windowWidth]);

  useEffect(() => {
    fetch(`/api/gender/class-timeline`, {
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
      <div className="flex-legend" style={{ marginBottom: "10px" }}>
        <div className="flex-legend-item" key="M">
          <div
            className="flex-legend-item-square"
            style={{ color: "#5a94b9" }}
          ></div>
          <p style={{ margin: "0px", fontSize: "14px" }}>Male-Only</p>
        </div>

        <div className="flex-legend-item">
          <div
            className="flex-legend-item-square"
            style={{ color: "#c37795" }}
          ></div>
          <p style={{ margin: "0px", fontSize: "14px" }}>Female-Only</p>
        </div>

        <div className="flex-legend-item">
          <div
            className="flex-legend-item-square"
            style={{ color: "#e9bb6c" }}
          ></div>
          <p style={{ margin: "0px", fontSize: "14px" }}>Any Gender</p>
        </div>
      </div>
      <div style={{ maxWidth: "90vw", overflow: "scroll" }}>
        <svg className="classes-timeline-div" ref={ref} />
      </div>
    </>
  );
}

export default ClassesTimeline;
