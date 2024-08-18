import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import * as d3Sankey from "d3-sankey";

// import useWindowDimensions from "../../hooks/useWindowDimensions";

function TransitionsGame(props) {
  const { game } = props;
  const [data, setData] = useState();
  const ref = useRef();
  // const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll("g > *").remove();
    d3.selectAll("rect > *").remove();
    d3.selectAll("linearGradient").remove();

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

    const colors = {
      male: d3.rgb(60, 138, 186),
      female: d3.rgb(201, 93, 136),
      avatar: d3.rgb(230, 173, 76),
      none: d3.rgb(102, 102, 102),
      neutral: d3.rgb(44, 130, 46),
    };

    const width = 928;
    const height = 600;
    const format = d3.format(",.0f");

    // const margin = 10;

    // A unique identifier for clip paths (to avoid conflicts).
    const uid = "b0";

    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

    const defs = svg.append("defs");

    // Constructs and configures a Sankey generator.
    const sankey = d3Sankey
      .sankey()
      .nodeId((d) => d.name)
      // .nodeAlign(d3.sankeyJustify) // d3.sankeyLeft, etc.
      .nodeWidth(20)
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

    // const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Add definitions for all of the linear gradients.
    const gradients = defs
      .selectAll("linearGradient")
      .data(links)
      .join("linearGradient")
      .attr("id", (d) => `${uid}-gradient-${d.index}`)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", (d) => d.source.x1)
      .attr("x2", (d) => d.target.x0);
    gradients
      .append("stop")
      .attr("offset", 0.0)
      .attr("stop-color", (d) => colors[d.source.category]);
    // .attr("stop-color", (d) => color(d.source.category));
    gradients
      .append("stop")
      .attr("offset", 1.0)
      .attr("stop-color", (d) => colors[d.target.category]);
    // .attr("stop-color", (d) => color(d.target.category));

    // Add a g.view for holding the sankey diagram.
    const view = svg.append("g").classed("view", true);
    // .attr("transform", `translate(${margin}, ${margin})`);

    // Define the nodes.
    const nodeRects = view
      .selectAll("rect.node")
      .data(nodes)
      .join("rect")
      .classed("node", true)
      .attr("id", (d) => `node-${d.index}`)
      .attr("x", (d) => d.x0)
      .attr("y", (d) => d.y0)
      .attr("height", (d) => d.y1 - d.y0)
      .attr("width", (d) => d.x1 - d.x0)
      .attr("fill", (d) => colors[d.category])
      // .attr("fill", (d) => color(d.category))
      .attr("opacity", 0.9);

    // Add titles for node hover effects.
    nodeRects.append("title").text((d) => `${d.name}\n${format(d.value)}`);

    // Add text labels.
    view
      .selectAll("text.node")
      .data(nodes)
      .join("text")
      .classed("node", true)
      .attr("x", (d) => d.x1)
      .attr("dx", 6)
      .attr("y", (d) => (d.y1 + d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("fill", "black")
      .attr("text-anchor", "start")
      .attr("font-size", 10)
      .attr("font-family", "Arial, sans-serif")
      .text((d) => d.name)
      .filter((d) => d.x1 > width / 2)
      .attr("x", (d) => d.x0)
      .attr("dx", -6)
      .attr("text-anchor", "end");

    // Define the gray links.
    const linkPaths = view
      .selectAll("path.link")
      .data(links)
      .join("path")
      .classed("link", true)
      .attr("d", d3Sankey.sankeyLinkHorizontal())
      .attr("stroke", "black")
      .attr("stroke-opacity", 0.1)
      .attr("stroke-width", (d) => Math.max(1, d.width))
      .attr("fill", "none");

    // Add <title> hover effect on links.
    linkPaths
      .append("title")
      .text(
        (d) => `${d.source.name} \u2192 ${d.target.name}\n${format(d.value)}`
      );

    const gradientLinks = view
      .selectAll("path.gradient-link")
      .data(links)
      .join("path")
      .classed("gradient-link", true)
      .attr("id", (d) => `${uid}-path-${d.index}`)
      .attr("d", d3Sankey.sankeyLinkHorizontal())
      .attr("stroke", ({ index: i }) => `url(#${uid}-gradient-${i})`)
      .attr("stroke-opacity", 0)
      .attr("stroke-width", (d) => Math.max(1, d.width))
      .attr("fill", "none")
      .each(setDash);

    // Define the default dash behavior for colored gradients.
    function setDash(link) {
      let el = d3.select(`#${uid}-path-${link.index}`);
      let length = el.node().getTotalLength();
      el.attr("stroke-dasharray", `${length} ${length}`).attr(
        "stroke-dashoffset",
        length
      );
    }

    function branchAnimate(node) {
      let linksNew = view.selectAll("path.gradient-link").filter((link) => {
        return node.srcElement.__data__.sourceLinks.indexOf(link) !== -1;
      });
      linksNew
        .attr("stroke-opacity", 0.5)
        .transition()
        .duration(250)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
      // .on("end", () => {
      //   nextNodes.forEach((node) => {
      //     branchAnimate(node);
      //   });
      // });
    }

    function branchClear() {
      gradientLinks.transition();
      gradientLinks.attr("stroke-opacity", 0).each(setDash);
    }

    nodeRects.on("mouseover", branchAnimate).on("mouseout", branchClear);

    // removes tooltip when leaving a page
    return () => {
      d3.selectAll(".tooltip").remove();
    };
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
        // console.log(data);
        setData(data);
      });
  }, [game]);

  return <svg ref={ref} />;
}

export default TransitionsGame;
