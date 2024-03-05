import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { storyIcons } from "../../utils/story.js";
// import { getGameTitles } from "../../utils/games";

import "./sentiment.css";

const STAGE_COLORS = {
  setup: "#e65507",
  pursuit: "#e3b027",
  trials: "#389c2a",
  darkness: "#175234",
  journey: "#6e441f",
  finale: "#b5046b",
  rebuild: "#2f2266",
};

function StoryProgression(props) {
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll(".story-progression-container > svg").remove();

    var margin = { top: 30, right: 10, bottom: 0, left: 10 },
      width = 800 - margin.left - margin.right;

    const div = d3.select(ref.current);

    Object.entries(data).map(([key, value], index) => {
      const height = value.guide
        ? 160 - margin.top - margin.bottom
        : 140 - margin.top - margin.bottom;

      const svg = div
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        // .style("border", "1px solid blue")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      const x = d3.scaleLinear().domain([0, value.chapters]).range([0, width]);

      //   svg
      //     .append("g")
      //     .attr("transform", "translate(0," + height / 2 + ")")
      //     .call(d3.axisBottom(x));

      const act_height = 30;
      const stage_height = 40;
      const moments_height = 85;

      if (value.guide) {
        svg
          .append("line")
          .attr("x1", 0)
          .attr("x2", width)
          .attr("y1", 120)
          .attr("y2", 120)
          .style("stroke", "#333")
          .style("stroke-width", "1px");

        svg
          .append("rect")
          .attr("x", -10)
          .attr("y", -20)
          .attr("width", width + 20)
          .attr("height", 140)
          .style("fill", "white")
          .style("opacity", 0.3);
      }

      svg
        .append("text")
        .attr("transform", "translate(0,7)")
        .text(key)
        .style("font-size", "16px")
        .style("font-weight", 500);

      value.acts.map((act, index) => {
        const actRect = svg
          .append("g")
          .attr(
            "transform",
            "translate(" + x(act.start) + "," + act_height + ")"
          );

        actRect
          .append("rect")
          .attr("x", 0)
          .attr("y", -16)
          .attr("width", 40 + index * 3)
          .attr("height", 20)
          .style("fill", "gray");

        actRect
          .append("text")
          .attr("transform", "translate(" + 3 + ",0)")
          .text("  ACT " + act.name)
          .style("fill", "white")
          .style("font-size", "13px");
      });

      value.stages.map((stage) => {
        const stageG = svg
          .append("g")
          .attr(
            "transform",
            "translate(" + x(stage.start) + "," + stage_height + ")"
          );

        stageG
          .append("rect")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", x(stage.end) - x(stage.start))
          .attr("height", 40)
          .style("fill", STAGE_COLORS[stage.id]);

        stageG
          .append("text")
          .attr("transform", "translate(" + 3 + ",30)")
          .text(stage.short)
          .style("fill", "white")
          .style("font-size", "12px")
          .style("font-weight", 500);
      });

      value.moments.map((moment) => {
        const g = svg
          .append("g")
          .attr(
            "transform",
            "translate(" + x(moment.start) + "," + moments_height + ")"
          );

        g.append("svg:image")
          .attr(
            "xlink:href",
            storyIcons[moment.id]
            // "https://static.vecteezy.com/system/resources/previews/021/013/593/non_2x/key-lock-icon-on-transparent-background-free-png.png"
          )
          .attr("height", "20px")
          .attr("x", -10);

        // const line = g
        //   .append("rect")
        //   .attr("x", 0)
        //   .attr("y", 0)
        //   .attr("width", 2)
        //   .attr("height", 20);
      });

      const g = svg
        .append("g")
        .attr(
          "transform",
          "translate(" + x(value.midpoint) + "," + act_height + ")"
        );

      if (value.group === 4) {
        g.append("rect")
          .attr("x", -69)
          .attr("y", -16)
          .attr("width", 70)
          .attr("height", 20)
          .style("fill", "black");

        g.append("rect")
          .attr("x", -1)
          .attr("y", 0)
          .attr("width", 2)
          .attr("height", 10);
        g.append("text")
          .attr("transform", "translate(-66,0)")
          .text("MIDPOINT")
          .style("fill", "white")
          .style("font-size", "13px");

        g.append("rect")
          .attr("x", 1)
          .attr("y", -16)
          .attr("width", 40)
          .attr("height", 20)
          .style("fill", "gray");

        g.append("text")
          .attr("transform", "translate(3,0)")
          .text("Act III")
          .style("fill", "white")
          .style("font-size", "13px");
      } else {
        g.append("rect")
          .attr("x", -34)
          .attr("y", -16)
          .attr("width", 70)
          .attr("height", 20)
          .style("fill", "black");

        g.append("rect")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", 2)
          .attr("height", 10);

        g.append("text")
          .attr("transform", "translate(-31,0)")
          .text("MIDPOINT")
          .style("fill", "white")
          .style("font-size", "13px");
      }
    });
  }, [data, windowWidth]);

  useEffect(() => {
    fetch(`/api/sentiment/story-progression`, {
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
      <div
        className="story-progression-container"
        ref={ref}
        style={{ border: "1px solid red" }}
      />
      <div className="story-progression-information"></div>
    </>
  );
}

export default StoryProgression;
