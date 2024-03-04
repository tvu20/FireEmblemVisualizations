import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions.jsx";
import { storyIcons } from "../../utils/story.js";
// import { getGameTitles } from "../../utils/games";

import "./sentiment.css";

const STAGE_COLORS = {
  setup: "#e65507",
  pursuit: "#e3b027",
  trials: "#389c2a",
  journey: "#6e441f",
  finale: "#b5046b",
};

function StoryProgression(props) {
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll(".story-progression-container > svg").remove();

    var margin = { top: 30, right: 10, bottom: 0, left: 10 },
      width = 800 - margin.left - margin.right,
      height = 140 - margin.top - margin.bottom;

    const div = d3.select(ref.current);

    Object.entries(data).map(([key, value]) => {
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
    <div
      className="story-progression-container"
      ref={ref}
      style={{ border: "1px solid red" }}
    />
  );
}

export default StoryProgression;
