import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

// import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getGameColor } from "../../utils/colors";
// import { getGameTitles } from "../../utils/games";

import "./script.css";

function WordCounts(props) {
  const [data, setData] = useState();
  const ref = useRef();
  //   const { width: windowWidth } = useWindowDimensions();
  const { width, height, fade } = props;

  //   const width = 928;
  //     const height = 924;

  useEffect(() => {
    if (!data) return;

    d3.selectAll("g > *").remove();

    // Specify the chart’s dimensions.
    // const width = 928;
    // const height = 1060;
    // const color = d3.scaleSequential([8, 0], d3.interpolateMagma);

    function tile(node, x0, y0, x1, y1) {
      d3.treemapBinary(node, 0, 0, width, height);
      for (const child of node.children) {
        child.x0 = x0 + (child.x0 / width) * (x1 - x0);
        child.x1 = x0 + (child.x1 / width) * (x1 - x0);
        child.y0 = y0 + (child.y0 / height) * (y1 - y0);
        child.y1 = y0 + (child.y1 / height) * (y1 - y0);
      }
    }

    // Create the treemap layout.
    const treemap = (data) =>
      d3
        .treemap()
        .tile(tile)
        .size([width, height])
        .paddingOuter(3)
        .paddingTop(20)
        .paddingInner(3)
        .round(true)(
        d3
          .hierarchy(data)
          .sum((d) => d.value)
          .sort((a, b) => b.value - a.value)
      );
    const root = treemap(data);

    // Compute the layout.
    // const hierarchy = d3
    //   .hierarchy(data)
    //   .sum((d) => d.value)
    //   .sort((a, b) => b.value - a.value);
    // console.log(hierarchy);
    // const root = d3.treemap().tile(tile)(hierarchy);

    const svg = d3
      .select(ref.current)
      //   .attr("viewBox", [0.5, -30.5, width, height + 30])
      .attr("viewBox", [0.5, -0.5, width, height + 30])
      .attr("width", width)
      .attr("height", height + 30)
      .attr("style", "max-width: 100%; height: auto;")
      .style("font", "10px sans-serif");

    const node = svg
      .selectAll("g")
      .data(d3.group(root, (d) => d.height))
      .join("g")
      //   .attr("filter", shadow)
      .selectAll("g")
      .data((d) => d[1])
      .join("g")
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`)
      .style("opacity", 0);

    node.transition().duration(fade).ease(d3.easeLinear).style("opacity", 1);

    const format = d3.format(",d");
    node.append("title").text(
      (d) =>
        `${d
          .ancestors()
          .reverse()
          .map((d) => d.data.name)
          .join("/")}\n${format(d.value)}`
    );

    const calculateColor = (d) => {
      // highest node
      if (d === root) {
        return "white";
      }

      // lowest node
      if (!d.children) {
        // return "#f5d2d0";
        return getGameColor(d.parent.data.name);
      }

      return "#fadede";
    };

    node
      .append("rect")
      //   .attr("id", d => (d.nodeUid = DOM.uid("node")).id)
      .attr("fill", (d) => calculateColor(d))
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0);

    node
      .append("clipPath")
      //   .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
      .append("use");
    //   .attr("xlink:href", (d) => d.nodeUid.href);

    node
      .append("text")
      .attr("clip-path", (d) => d.clipUid)
      .selectAll("tspan")
      .data(
        (d) => {
          return [d.data.name, format(d.value)];
        }
        // (d) => d.data.name
        // (d) => d.data.name.split(/(?=[A-Z][^A-Z])/g).concat(format(d.value))
      )
      .join("tspan")
      .attr("fill-opacity", (d, i, nodes) => {
        if (d === "8,409" || d === "3,739") {
          return 0;
        }
        return i === nodes.length - 1 ? 0.7 : null;
      })
      .attr("font-size", 14)
      .text((d) => d);

    node
      .filter((d) => d.children)
      .selectAll("tspan")
      .attr("dx", 3)
      .attr("y", 15);

    node
      .filter((d) => !d.children)
      .selectAll("tspan")
      .attr("x", 3)
      .attr(
        "y",
        (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`
      );

    // return svg.node();
  }, [data, width, height, fade]);

  useEffect(() => {
    fetch(`/api/scripts/word-counts`, {
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

  return <svg width={width} height={height} ref={ref} />;
}

export default WordCounts;
