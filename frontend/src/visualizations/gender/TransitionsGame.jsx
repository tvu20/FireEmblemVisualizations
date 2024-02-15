import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
// import { getGameTitles } from "../../utils/games";

function TransitionsGame(props) {
  const { game } = props;
  const [data, setData] = useState();
  const ref = useRef();
  // const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll("g > *").remove();

    // set the dimensions and margins of the graph
    // var margin = { top: 30, right: 30, bottom: 70, left: 30 },
    //   width = 800 - margin.left - margin.right,
    //   height = 700 - margin.top - margin.bottom;

    const colors = {
      male: d3.rgb(37, 79, 217),
      female: d3.rgb(237, 88, 152),
      avatar: d3.rgb(169, 103, 201),
      none: d3.rgb(102, 102, 102),
      neutral: d3.rgb(23, 117, 25),
    };

    const width = 1080;
    const height = width;
    const innerRadius = Math.min(width, height) * 0.5 - 20;
    const outerRadius = innerRadius + 6;

    // Compute a dense matrix from the weighted links in data.
    const names = [
      "male",
      "female",
      Array.from(d3.union(data.flatMap((d) => [d.source, d.target]))).includes(
        "avatar"
      )
        ? "avatar"
        : "",
      "neutral",
      "none",
    ];
    // const names = Array.from(
    //   d3.union(data.flatMap((d) => [d.source, d.target]))
    // );
    const index = new Map(names.map((name, i) => [name, i]));
    const matrix = Array.from(index, () => new Array(names.length).fill(0));
    for (const { source, target, value } of data)
      matrix[index.get(source)][index.get(target)] += value;

    console.log(matrix);

    const chord = d3
      .chordDirected()
      .padAngle(12 / innerRadius)
      .sortSubgroups(d3.descending)
      .sortChords(d3.descending);

    const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

    const ribbon = d3
      .ribbonArrow()
      .radius(innerRadius - 0.5)
      .headRadius(15)
      .padAngle(1 / innerRadius);

    // const colors = d3.schemeCategory10;

    // const formatValue = (x) => `${x.toFixed(0)}`;

    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "width: 100%; height: auto; font: 10px sans-serif;");
    //   .attr("width", width + margin.left + margin.right)
    //   .attr("height", height + margin.top + margin.bottom)
    //   .append("g")
    //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const chords = chord(matrix);

    // const textId = DOM.uid("text");

    svg
      .append("path")
      .attr("id", "0-text-1")
      .attr("fill", "none")
      .attr(
        "d",
        d3.arc()({ outerRadius, startAngle: 0, endAngle: 2 * Math.PI })
      );

    svg
      .append("g")
      .attr("fill-opacity", 0.75)
      .selectAll()
      .data(chords)
      .join("path")
      .attr("d", ribbon)
      .attr("fill", (d) => {
        return colors[names[d.source.index]];
      })
      .style("mix-blend-mode", "multiply")
      .append("title")
      .text(
        (d) =>
          `${names[d.source.index]} to ${names[d.target.index]}: ${
            d.source.value
          } transitions`
      );

    const g = svg.append("g").selectAll().data(chords.groups).join("g");

    g.append("path")
      .attr("d", arc)
      .attr("fill", (d) => {
        return colors[names[d.index]];
      })
      // .attr("fill", (d) => colors[d.index])
      .attr("stroke", "rgba(0, 0, 0, 0)");

    g.append("text")
      .attr("dy", -3)
      .append("textPath")
      .attr("xlink:href", "#0-text-1")
      .attr("startOffset", (d) => d.startAngle * outerRadius)
      .text((d) => names[d.index])
      .style("font-size", 18);

    g.append("title").text(
      (d) => `${names[d.index]}
to ${d3.sum(matrix[d.index])}
: ${d3.sum(matrix, (row) => row[d.index])} transitions`
    );
  }, [data]);

  useEffect(() => {
    fetch(`/api/gender/transition?game=${game}`, {
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

  return <svg ref={ref} style={{ border: "1px solid red" }} />;
}

export default TransitionsGame;
