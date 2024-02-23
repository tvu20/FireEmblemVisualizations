import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { findBounds } from "../../utils/bounds";
import { emotionColor } from "../../utils/colors";
// import { getGameTitles } from "../../utils/games";

import "./sentiment.css";

function EmotionGame(props) {
  const { game, includeNeutral } = props;
  const [data, setData] = useState();
  const [labels, setLabels] = useState();
  const [chapTitle, setChapTitle] = useState("");
  const [chapDesc, setChapDesc] = useState("");
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  const [keys, setKeys] = useState();

  // const keys = ["anger", "fear", "sadness", "neutral", "surprise", "joy"];

  useEffect(() => {
    if (includeNeutral) {
      setKeys(["anger", "fear", "sadness", "neutral", "surprise", "joy"]);
    } else {
      setKeys(["anger", "fear", "sadness", "surprise", "joy"]);
    }
  }, [includeNeutral]);

  useEffect(() => {
    setChapDesc("");
    setChapTitle("");
  }, [game, includeNeutral]);

  // const keys = ["surprise", "fear", "neutral", "anger", "sadness", "joy"];

  const showLegend = () => {
    return keys?.map((item, key) => {
      return (
        <div
          className="flex-legend-item"
          key={key}
          style={{ color: emotionColor[item] }}
        >
          <div className="flex-legend-item-square"></div>
          <p>{item}</p>
        </div>
      );
    });
  };

  useEffect(() => {
    if (!data) return;

    d3.selectAll("svg > *").remove();
    d3.selectAll(".emotion-label").remove();

    // const margin = { top: 20, right: 30, bottom: 20, left: 30 };
    const width = 1000;
    const height = 600;
    const graphMargin = 40;

    const svg = d3
      .select(ref.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", width)
      .attr("height", height)
      .attr("style", "max-width: 100%; height: auto;");

    // const keys = ["surprise", "fear", "neutral", "anger", "sadness", "joy"];

    // Add X axis
    const x = d3
      .scaleLinear()
      .domain(
        d3.extent(data, function (d, i) {
          return i;
        })
      )
      .range([0, width]);

    // stack
    const stackedData = d3
      .stack()
      .offset(d3.stackOffsetWiggle)
      // .offset(d3.stackOffsetSilhouette)
      .keys(keys)
      .value((d, key) => d.emotions[key])(data);
    const boundaries = findBounds(stackedData);

    // Add Y axis
    const y = d3
      .scaleLinear()
      .domain(boundaries)
      .range([height - graphMargin, graphMargin]);
    // .append("text")
    // .attr("x", width)
    // .attr("y", -10)
    // .attr("fill", "currentColor")
    // .attr("text-anchor", "end")
    // .text("Story progression →");

    // Area generator

    const area = d3
      .area()
      .x((d, i) => x(i))
      .y0((d) => {
        return y(d[0]);
      })
      .y1((d) => y(d[1]))
      .curve(d3.curveMonotoneX);

    const mouseover = function (d) {
      d3.selectAll(".myArea").style("opacity", 0.2);
      d3.select(this)
        .style("opacity", 1)
        .style("fill-opacity", 0.75)
        .style("transition", "opacity 0.3s")
        .style("stroke", (d) => emotionColor[d.key]);
    };

    const mouseleave = function (d) {
      d3.selectAll(".myArea")
        .style("opacity", 1)
        .style("fill-opacity", 0.6)
        .style("stroke", "none");
    };

    // areas.transition().duration(600).ease(d3.easeLinear).style("opacity", 1);
    const areas = svg
      .selectAll("mylayers")
      .data(stackedData)
      .enter()
      .append("path")
      .attr("class", "myArea")
      .style("fill", function (d) {
        return emotionColor[d.key];
      })
      .style("fill-opacity", 0.6)
      .attr("d", area)
      .style("opacity", 0)
      .on("mouseover", mouseover)
      .on("mouseleave", mouseleave);

    areas.append("title").text(({ key }) => key);

    areas.transition().duration(600).ease(d3.easeLinear).style("opacity", 1);

    // // Append the horizontal axis atop the area.
    // svg.append("g").call(d3.axisBottom(x).tickSizeOuter(0));

    const clickTest = function (d) {
      // d3.select(this.parentNode);
      // console.log(d.srcElement.id);
      // const idArray = d.srcElement.id.split("-");
      // const index = idArray[idArray.length - 1];
      // console.log(index);
      const index = d.srcElement.id[d.srcElement.id.length - 1];
      // console.log(labels[+index].name);
      setChapTitle(labels[+index].name);
      setChapDesc(labels[+index].description);
      // console.log(d3.select(d.srceElement));
      // console.log("clicked");
      // console.log(e.srcElement);
    };

    labels.forEach((label, i) => {
      // const lHeight =
      //   stackedData[0][label.chapter][0] - (includeNeutral ? 30 : 15);

      // console.log(lHeight);
      // console.log(label.height);
      svg
        .append("line")
        // .attr("y1", y(-1 * lHeight))
        // // .attr("y1", y(-1 * label.height))
        // // .attr("y2", y(lHeight))
        // .attr("y2", y(lHeight))
        .attr("y1", y(boundaries[0]) + graphMargin)
        .attr("y2", y(boundaries[1]) - graphMargin)
        .attr("x1", x(label.chapter))
        .attr("x2", x(label.chapter))
        .attr("stroke", "#323436")
        .style("opacity", 0)
        .attr("stroke-width", "2")
        .style("stroke-dasharray", "3, 3")
        .transition()
        .duration(600)
        .ease(d3.easeLinear)
        .style("opacity", 1);
    });

    labels.forEach((label, i) => {
      let index = i;
      // const lHeight = -1 * height;
      // const lHeight =
      //   stackedData[0][label.chapter][0] - (includeNeutral ? 30 : 15);
      svg
        .append("g")
        // .attr(
        //   "transform",
        //   `translate(${x(label.chapter) + 7},${
        //     i % 2 === 0
        //       ? y(lHeight) - label.translate
        //       : y(-1 * lHeight) + label.translate
        //   })`
        // )
        .attr(
          "transform",
          `translate(${x(label.chapter) + 7},${
            i % 2 === 0 ? height - label.translate : label.translate
          })`
        )
        .style("font-size", "14px")
        .style("opacity", 0)
        .attr("fill", "white")
        .call((g) => {
          label.short.map((t, i) => {
            return g
              .append("text")
              .attr("class", "emotion-label-text")
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .attr("font-weight", 600)
              .text(t)
              .attr("id", "label-id-" + index)
              .attr("transform", `translate(0,${15 * i})`);
          });
        })
        .on("click", clickTest)
        .transition()
        .duration(600)
        .ease(d3.easeLinear)
        .style("opacity", 1);
    });
  }, [data, windowWidth, keys, includeNeutral, labels]);

  useEffect(() => {
    let fetchCall = `/api/sentiment/emotions?game=${game}`;
    if (game === "FE16AM") {
      fetchCall = "/api/sentiment/emotions?game=FE16&route=AzureMoon";
    } else if (game === "FE16CF") {
      fetchCall = "/api/sentiment/emotions?game=FE16&route=CrimsonFlower";
    } else if (game === "FE16VW") {
      fetchCall = "/api/sentiment/emotions?game=FE16&route=VerdantWind";
    }
    fetch(fetchCall, {
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
        setData(data.data);
        setLabels(data.labels);
      });
  }, [game]);

  return (
    <>
      <div className="flex-legend">{showLegend()}</div>
      <div className="emotion-game__top-shelf">
        <p>↑ Positive valence</p>
      </div>
      <svg ref={ref} style={{ border: "1px solid red" }} />
      <div className="emotion-game__bottom-shelf">
        <p>↓ Negative valence</p>
        <p>Story progression →</p>
      </div>
      <div className="emotion-game__label">
        <h2>{chapTitle}</h2>
        <p>{chapDesc}</p>
      </div>
    </>
  );
}

export default EmotionGame;
