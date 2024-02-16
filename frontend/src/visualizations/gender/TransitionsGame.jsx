// import React, { useState, useEffect, useRef } from "react";
// import * as d3 from "d3";

// import useWindowDimensions from "../../hooks/useWindowDimensions";
// // import { getGameTitles } from "../../utils/games";

// function TransitionsGame(props) {
//   const { game } = props;
//   const [data, setData] = useState();
//   const ref = useRef();
//   // const { width: windowWidth } = useWindowDimensions();

//   useEffect(() => {
//     if (!data) return;

//     d3.selectAll("g > *").remove();

//     // set the dimensions and margins of the graph
//     // var margin = { top: 30, right: 30, bottom: 70, left: 30 },
//     //   width = 800 - margin.left - margin.right,
//     //   height = 700 - margin.top - margin.bottom;

//     const colors = {
//       male: d3.rgb(37, 79, 217),
//       female: d3.rgb(237, 88, 152),
//       avatar: d3.rgb(169, 103, 201),
//       none: d3.rgb(102, 102, 102),
//       neutral: d3.rgb(23, 117, 25),
//     };

//     const width = 1080;
//     const height = width;
//     const innerRadius = Math.min(width, height) * 0.5 - 20;
//     const outerRadius = innerRadius + 6;

//     const avatarGames = ["FE12", "FE13", "FE14", "FE16"];

//     // Compute a dense matrix from the weighted links in data.
//     const names = [
//       "male",
//       "female",
//       avatarGames.includes(game) ? "avatar" : "",
//       "neutral",
//       "none",
//     ];
//     // const names = [
//     //   "male",
//     //   "female",
//     //   Array.from(d3.union(data.flatMap((d) => [d.source, d.target]))).includes(
//     //     "avatar"
//     //   )
//     //     ? "avatar"
//     //     : "",
//     //   "neutral",
//     //   "none",
//     // ];

//     console.log(data[game]);

//     const createMatrix = () => {
//       const index = new Map(names.map((name, i) => [name, i]));
//       const matrix = Array.from(index, () => new Array(names.length).fill(0));

//       for (const { source, target, value } of data[game])
//         matrix[index.get(source)][index.get(target)] += value;

//       return matrix;
//     };

//     const matrix = createMatrix();

//     const chord = d3
//       .chordDirected()
//       .padAngle(12 / innerRadius)
//       .sortSubgroups(d3.descending)
//       .sortChords(d3.descending);

//     const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

//     const ribbon = d3
//       .ribbonArrow()
//       .radius(innerRadius - 0.5)
//       .headRadius(15)
//       .padAngle(1 / innerRadius);

//     // const colors = d3.schemeCategory10;

//     // const formatValue = (x) => `${x.toFixed(0)}`;

//     const svg = d3
//       .select(ref.current)
//       .attr("width", width)
//       .attr("height", height)
//       .attr("viewBox", [-width / 2, -height / 2, width, height])
//       .attr("style", "width: 100%; height: auto; font: 10px sans-serif;");
//     //   .attr("width", width + margin.left + margin.right)
//     //   .attr("height", height + margin.top + margin.bottom)
//     //   .append("g")
//     //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//     const chords = chord(matrix);

//     // const textId = DOM.uid("text");

//     svg
//       .append("path")
//       .attr("id", "0-text-1")
//       .attr("fill", "none")
//       .attr(
//         "d",
//         d3.arc()({ outerRadius, startAngle: 0, endAngle: 2 * Math.PI })
//       );

//     svg
//       .append("g")
//       .attr("fill-opacity", 0.75)
//       .selectAll()
//       .data(chords)
//       .join("path")
//       .attr("d", ribbon)
//       .attr("fill", (d) => {
//         return colors[names[d.source.index]];
//       })
//       .style("mix-blend-mode", "multiply")
//       .append("title")
//       .text(
//         (d) =>
//           `${names[d.source.index]} to ${names[d.target.index]}: ${
//             d.source.value
//           } transitions`
//       );

//     const g = svg.append("g").selectAll().data(chords.groups).join("g");

//     g.append("path")
//       .attr("d", arc)
//       .attr("fill", (d) => {
//         return colors[names[d.index]];
//       })
//       // .attr("fill", (d) => colors[d.index])
//       .attr("stroke", "rgba(0, 0, 0, 0)");

//     g.append("text")
//       .attr("dy", -3)
//       .append("textPath")
//       .attr("xlink:href", "#0-text-1")
//       .attr("startOffset", (d) => d.startAngle * outerRadius)
//       .text((d) => names[d.index])
//       .style("font-size", 18);

//     g.append("title").text(
//       (d) => `${names[d.index]}
// to ${d3.sum(matrix[d.index])}
// : ${d3.sum(matrix, (row) => row[d.index])} transitions`
//     );
//   }, [data, game]);

//   useEffect(() => {
//     // fetch(`/api/gender/transition?game=${game}`, {
//     fetch(`/api/gender/transitions`, {
//       method: "GET",
//       mode: "cors",
//       headers: {
//         "access-control-allow-origin": "*",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

//   return <svg ref={ref} style={{ border: "1px solid red" }} />;
// }

// export default TransitionsGame;

import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import * as d3Sankey from "d3-sankey";

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
    d3.selectAll("rect > *").remove();

    // console.log(
    //   Array.from(
    //     d3.union(data[game].flatMap((d) => [d.source, d.target]))
    //   ).filter((d) => d !== "none")
    // );

    const nodesPresent = Array.from(
      d3.union(data.flatMap((d) => [d.source, d.target]))
    );

    const nodesComplete = [
      { name: "Male first", category: "male" },
      { name: "Female first", category: "female" },
      { name: "Avatar first", category: "avatar" },
      { name: "Neutral first", category: "neutral" },
      { name: "Male second", category: "male" },
      { name: "Female second", category: "female" },
      { name: "Avatar second", category: "avatar" },
      { name: "Neutral second", category: "neutral" },
    ];

    const nodesList = nodesComplete.filter((d) =>
      nodesPresent.includes(d.name)
    );

    console.log("nodeslist", nodesList);

    console.log(
      "links",
      data.filter((d) => d.source !== "none" && d.target !== "none")
    );

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

    const width = 928;
    const height = 600;
    const format = d3.format(",.0f");

    // A unique identifier for clip paths (to avoid conflicts).
    const uid = `O-${Math.random().toString(16).slice(2)}`;

    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

    // Constructs and configures a Sankey generator.
    const sankey = d3Sankey
      .sankey()
      .nodeId((d) => d.name)
      // .nodeAlign(d3.sankeyJustify) // d3.sankeyLeft, etc.
      .nodeWidth(15)
      .nodePadding(10)
      .extent([
        [1, 5],
        [width - 1, height - 5],
      ]);

    // Applies it to the data. We make a copy of the nodes and links objects
    // so as to avoid mutating the original.
    const { nodes, links } = sankey({
      nodes: nodesList,
      links: data.filter((d) => d.source !== "none" && d.target !== "none"),
    });

    console.log("nodes", nodes);

    // Defines a color scale.
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Creates the rects that represent the nodes.
    const rect = svg
      .append("g")
      .attr("stroke", "#000")
      .selectAll()
      .data(nodes)
      .join("rect")
      .attr("x", (d) => d.x0)
      .attr("y", (d) => d.y0)
      .attr("height", (d) => d.y1 - d.y0)
      .attr("width", (d) => d.x1 - d.x0)
      .attr("fill", (d) => color(d.category));

    // Adds a title on the nodes.
    rect
      .append("title")
      .text((d) => `${d.name}\n${format(d.value)} transitions`);

    // Creates the paths that represent the links.
    const link = svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.5)
      .selectAll()
      .data(links)
      .join("g")
      .style("mix-blend-mode", "multiply");

    const gradient = link
      .append("linearGradient")
      .attr("id", (d) => `${uid}-link-${d.index}`)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", (d) => d.source.x1)
      .attr("x2", (d) => d.target.x0);
    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", (d) => color(d.source.category));
    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", (d) => color(d.target.category));

    link
      .append("path")
      .attr("d", d3Sankey.sankeyLinkHorizontal())
      // .attr("stroke", (d) => color(d.source.category))
      .attr("stroke", ({ index: i }) => `url(#${uid}-link-${i})`)
      .attr("stroke-width", (d) => Math.max(1, d.width));

    link
      .append("title")
      .text(
        (d) => `${d.source.name} → ${d.target.name}\n${format(d.value)} TWh`
      );

    // Adds labels on the nodes.
    svg
      .append("g")
      .selectAll()
      .data(nodes)
      .join("text")
      .attr("x", (d) => (d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6))
      .attr("y", (d) => (d.y1 + d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", (d) => (d.x0 < width / 2 ? "start" : "end"))
      .text((d) => d.name);
  }, [data]);

  useEffect(() => {
    fetch(`/api/gender/transition?game=${game}`, {
      // fetch(`/api/gender/transitions`, {
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
