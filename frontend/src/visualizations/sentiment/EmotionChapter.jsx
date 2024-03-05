import React, { useState, useEffect, useRef, useCallback } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { emotionColor } from "../../utils/colors";
// import { getGameTitles } from "../../utils/games";

import "./sentiment.css";

function EmotionChapter(props) {
  const { game, route, chapter } = props;
  const [data, setData] = useState();
  const ref = useRef();
  const firstUpdate = useRef(true);
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    // d3.selectAll("g > *").remove();

    const width = 800;
    const height = width * 0.6;

    const keys = ["anger", "fear", "sadness", "neutral", "surprise", "joy"];

    // function randomData() {
    //   const labels = keys;
    //   return labels.map(function (label) {
    //     return { label: label, value: Math.random() };
    //   });
    // }

    const svg = d3
      .select(ref.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", width)
      .attr("height", height)
      .attr("style", "max-width: 100%; height: auto; border: 1px solid red")
      .attr("id", "the-chart");

    const g = svg.append("g");

    g.append("g").attr("class", "slices");
    g.append("g").attr("class", "labels");
    g.append("g").attr("class", "lines");

    const radius = Math.min(width, height) / 2;

    const pie = d3
      .pie()
      .sort(null)
      .value(function (d) {
        return d.value;
      });

    const arc = d3
      .arc()
      .outerRadius(radius * 0.8)
      .innerRadius(radius * 0.4);

    const outerArc = d3
      .arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    g.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const key = function (d) {
      return d.data.label;
    };

    // if (firstUpdate.current) {
    //   firstUpdate.current = false;
    //   change(randomData());
    //   return;
    // }

    // change(randomData());

    function change(data) {
      // console.log(data);
      /* ------- PIE SLICES -------*/

      const pieData = pie(data);
      const slice = g
        .select(".slices")
        .selectAll("path.slice")
        .data(pieData, key);

      slice
        .enter()
        .insert("path")
        .style("fill", function (d) {
          return emotionColor[d.data.label];
          //   return color(d.data.label);
        })
        .attr("class", "slice")
        .merge(slice)
        .transition()
        .duration(1000)
        .attrTween("d", function (d) {
          this._current = this._current || d;
          const interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            return arc(interpolate(t));
          };
        });

      slice.exit().remove();

      /* ------- TEXT LABELS -------*/

      const text = g.select(".labels").selectAll("text").data(pie(data), key);

      function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
      }

      text
        .enter()
        .append("text")
        .attr("dy", ".35em")
        .text(function (d) {
          return d.data.label;
        })
        .merge(text)
        .transition()
        .duration(1000)
        .attrTween("transform", function (d) {
          this._current = this._current || d;
          const interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            const d2 = interpolate(t);
            const pos = outerArc.centroid(d2);
            pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
            return "translate(" + pos + ")";
          };
        })
        .styleTween("text-anchor", function (d) {
          this._current = this._current || d;
          const interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            const d2 = interpolate(t);
            return midAngle(d2) < Math.PI ? "start" : "end";
          };
        });

      text.exit().remove();

      /* ------- SLICE TO TEXT POLYLINES -------*/

      const polyline = g
        .select(".lines")
        .selectAll("polyline")
        .data(pie(data), key);

      polyline
        .join("polyline")
        .transition()
        .duration(1000)
        .attrTween("points", function (d) {
          this._current = this._current || d;
          const interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            const d2 = interpolate(t);
            const pos = outerArc.centroid(d2);
            pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
            return [arc.centroid(d2), outerArc.centroid(d2), pos];
          };
        });

      polyline.exit().remove();
    }

    // When the button is changed, run the updateChart function
    d3.select("#selectButton").on("click", function (d) {
      var game = d3.select("#emotion-select-game").property("value");
      var route = d3.select("#emotion-select-route").property("value");
      var chapter = d3.select("#emotion-select-chapter").property("value");

      fetch(
        `/api/sentiment/emotions-chapter?game=${game}&route=${route}&chapter=${chapter}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "access-control-allow-origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          change(data);
        });
    });
  }, [data, windowWidth]);

  useEffect(() => {
    fetch(
      `/api/sentiment/emotions-chapter?game=FE16&route=AzureMoon&chapter=22-OathOfTheDagger`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "access-control-allow-origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <button id="selectButton" disabled={!chapter}>
        Submit
      </button>
      {/* <select id="selectButton">
        <option value="fpc">Playable Characters</option>
        <option value="npc">Non-Playable Characters</option>
        <option value="combined">All Characters</option>
      </select> */}
      <svg ref={ref} style={{ border: "1px solid red" }} />
    </>
  );
}

export default EmotionChapter;
