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

    const margin = { top: 20, right: 30, bottom: 20, left: 30 };
    const width = 1000;
    const height = 600;
    const graphMargin = 50;

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

    // // not sure what this does...
    // svg
    //   .append("g")
    //   .attr("transform", "translate(0," + height * 0.9 + ")")
    //   .select(".domain")
    //   .remove();

    // stack
    const stackedData = d3
      .stack()
      .offset(d3.stackOffsetSilhouette)
      .keys(keys)
      .value((d, key) => d.emotions[key])(data);
    const boundaries = findBounds(stackedData);

    console.log(stackedData);

    // Add Y axis
    const y = d3
      .scaleLinear()
      .domain(boundaries)
      .range([height - graphMargin, graphMargin]);

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

    // Show the areas
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

    areas.transition().duration(600).ease(d3.easeLinear).style("opacity", 1);

    // Append the horizontal axis atop the area.
    // svg
    //   .append("g")
    //   .call(d3.axisBottom(x).tickSizeOuter(0));

    const labels = [
      {
        chapter: 2,
        short: ["2: Kidnap", "and rescue"],
        height: 100,
        translate: 20,
        textArray: [
          "Chapter 2: Rescue",
          "The youngest kids of the Greil mercenaries are kidnapped by bandits. Ike and co. launch a rescue mission.",
        ],
      },
      {
        chapter: 7,
        short: ["7: Greil's", "death"],
        translate: 15,
        height: 150,
        textArray: [
          "Chapter 7: Shades of Evil",
          "Ike's father, Greil, is challenged to a duel by an unknown knight and killed. Ike carries his body home.",
        ],
      },
      {
        chapter: 11,
        short: ["11: Escape!"],
        translate: 7,
        height: 210,
        textArray: [
          "Chapter 11: Blood Runs Red",
          "The party attempts to escape by boat. Ike witnesses the racism and apathy of the civilians in the ocean harbour.",
        ],
      },
      {
        chapter: 17,
        short: ["17: Saving Reyson"],
        translate: 20,
        height: 190,
        textArray: [
          "Chapter 17: Day Breaks",
          "Reyson is rescued from the evil duke Oliver. Ike discovers that Reyson's sister, Leanne, is alive.",
        ],
      },
      {
        chapter: 27,
        short: ["27: Duel", "with Greil's", "murderer"],
        translate: 30,
        height: 170,
        textArray: [
          "Chapter 27: Moment of Fate",
          "Ike storms the castle of the invading forces and duels against the man who murdered his father.",
        ],
      },
    ];

    console.log("stackeddata", stackedData);

    labels.forEach((label, i) => {
      const lHeight =
        stackedData[0][label.chapter][0] - (includeNeutral ? 30 : 15);

      // console.log(lHeight);
      // console.log(label.height);
      svg
        .append("line")
        .attr("y1", y(-1 * lHeight))
        // .attr("y1", y(-1 * label.height))
        // .attr("y2", y(lHeight))
        .attr("y2", y(lHeight))
        // .attr("y1", y(boundaries[0]) + graphMargin)
        // .attr("y2", y(boundaries[1]) - graphMargin)
        .attr("x1", x(label.chapter))
        .attr("x2", x(label.chapter))
        .attr("stroke", "#323436")
        .attr("stroke-width", "2")
        .style("stroke-dasharray", "3, 3");
    });

    labels.forEach((label, i) => {
      const lHeight =
        stackedData[0][label.chapter][0] - (includeNeutral ? 30 : 15);
      svg
        .append("g")
        .attr(
          "transform",
          `translate(${x(label.chapter) + 7},${
            i % 2 === 0
              ? y(lHeight) - label.translate
              : y(-1 * lHeight) + label.translate
          })`
        )
        // .attr(
        //   "transform",
        //   `translate(${x(label.chapter) + 10},${
        //     i % 2 === 0 ? height - label.translate : label.translate
        //   })`
        // )
        .style("font-size", "14px")
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
              .attr("transform", `translate(0,${15 * i})`);
          });
        });
    });

    // labels.forEach((label, i) => {
    //   svg
    //     .append("g")
    //     .attr(
    //       "transform",
    //       `translate(${x(label.chapter) + 10},${i % 2 === 0 ? 430 : 20})`
    //     )
    //     .style("font-size", "11px")
    //     .attr("fill", "white")
    //     .call((g) => {
    //       g.append("rect")
    //         .attr("fill", "white")
    //         .attr("width", "122")
    //         .attr("height", "85")
    //         .attr("transform", `translate(-5,-15)`);
    //       label.textArray.map((t, i) => {
    //         return g
    //           .append("text")
    //           .attr("class", "emotion-label-text")
    //           .attr("fill", "currentColor")
    //           .attr("text-anchor", "start")
    //           .attr("font-weight", i === 0 ? 600 : 400)
    //           .text(t)
    //           .attr("transform", `translate(0,${15 * i})`);
    //       });
    //     });
    // });
  }, [data, windowWidth, keys]);

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
        setData(data);
      });
  }, [game]);

  return (
    <>
      <div className="flex-legend">{showLegend()}</div>
      <svg ref={ref} style={{ border: "1px solid red" }} />
    </>
  );
}

export default EmotionGame;
