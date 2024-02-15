import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getGameTitleFromCode } from "../../utils/games";
import { getGameColor } from "../../utils/colors";

import "./script.css";

function WordCountsZoom(props) {
  const [data, setData] = useState();
  const ref = useRef();
  const { width, height, fade } = props;

  useEffect(() => {
    if (!data) return;

    d3.selectAll("g > *").remove();

    // set the dimensions and margins of the graph
    // var margin = { top: 30, right: 30, bottom: 70, left: 30 },
    //   width = 800 - margin.left - margin.right,
    //   height = 700 - margin.top - margin.bottom;

    // const svg = d3
    //   .select(ref.current)
    //   .attr("width", width + margin.left + margin.right)
    //   .attr("height", height + margin.top + margin.bottom)
    //   .append("g")
    //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // const width = 928;
    // const height = 924;

    // This custom tiling function adapts the built-in binary tiling function
    // for the appropriate aspect ratio when the treemap is zoomed-in.
    function tile(node, x0, y0, x1, y1) {
      d3.treemapBinary(node, 0, 0, width, height);
      for (const child of node.children) {
        child.x0 = x0 + (child.x0 / width) * (x1 - x0);
        child.x1 = x0 + (child.x1 / width) * (x1 - x0);
        child.y0 = y0 + (child.y0 / height) * (y1 - y0);
        child.y1 = y0 + (child.y1 / height) * (y1 - y0);
      }
    }

    // Compute the layout.
    const hierarchy = d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value);
    console.log(hierarchy);
    const root = d3.treemap().tile(tile)(hierarchy);

    // const root = d3.treemap().tile(tile)(hierarchy);

    // Create the scales.
    const x = d3.scaleLinear().rangeRound([0, width]);
    const y = d3.scaleLinear().rangeRound([0, height]);

    // Formatting utilities.
    const format = d3.format(",d");
    const name = (d) =>
      d
        .ancestors()
        .reverse()
        .map((d) => d.data.name)
        .join("/");

    const svg = d3
      .select(ref.current)
      .attr("viewBox", [0.5, -38.5, width, height + 30])
      .attr("width", width)
      .attr("height", height + 30)
      .attr("style", "max-width: 100%; height: auto;")
      .style("font", "10px sans-serif");

    // Display the root.
    let group = svg.append("g").call(render, root).style("opacity", 0);

    group.transition().duration(fade).ease(d3.easeLinear).style("opacity", 1);

    function render(group, root) {
      const node = group
        .selectAll("g")
        .data(root)
        .data(root.children.concat(root))
        .join("g");

      node
        .filter((d) => (d === root ? d.parent : d.children))
        .attr("cursor", "pointer")
        .on("click", (event, d) => (d === root ? zoomout(root) : zoomin(d)));

      node.append("title").text((d) => `${name(d)}\n${format(d.value)}`);

      node
        .append("rect")
        // .attr("id", d => (d.leafUid = DOM.uid("leaf")).id)
        .attr("fill", (d) => {
          // return d === root ? "#fff" : d.children ? "#ccc" : "#ddd";
          return d === root
            ? "#fff"
            : d.children
            ? getGameColor(d.data.name)
            : getGameColor(d.parent.data.name);
        })
        .attr("stroke", "#fff");

      node
        .append("clipPath")
        // .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
        .append("use");
      // .attr("xlink:href", (d) => d.leafUid.href);

      node
        .append("text")
        .attr("clip-path", (d) => d.clipUid)
        .attr("font-weight", (d) => (d === root ? "bold" : null))
        .selectAll("tspan")
        .data(
          (d) => [
            d === root ? name(d) : getGameTitleFromCode(d.data.name),
            format(d.value) + " words",
          ]
          // (d === root ? name(d) : d.data.name)
          //   .split(/(?=[A-Z][^A-Z])/g)
          //   .concat(format(d.value))
        )
        .join("tspan")
        .attr("x", 3)
        .attr(
          "y",
          (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`
        )
        .attr("fill-opacity", (d, i, nodes) =>
          i === nodes.length - 1 ? 0.7 : null
        )
        .attr("font-weight", (d, i, nodes) =>
          i === nodes.length - 1 ? "normal" : null
        )
        .attr("font-size", 14)
        .text((d) => d);

      group.call(position, root);
    }

    function position(group, root) {
      group
        .selectAll("g")
        .attr("transform", (d) =>
          d === root ? `translate(0,-38)` : `translate(${x(d.x0)},${y(d.y0)})`
        )
        .select("rect")
        .attr("width", (d) => (d === root ? width : x(d.x1) - x(d.x0)))
        .attr("height", (d) => (d === root ? 38 : y(d.y1) - y(d.y0)));
    }

    // When zooming in, draw the new nodes on top, and fade them in.
    function zoomin(d) {
      const group0 = group.attr("pointer-events", "none");
      const group1 = (group = svg.append("g").call(render, d));

      x.domain([d.x0, d.x1]);
      y.domain([d.y0, d.y1]);

      svg
        .transition()
        .duration(750)
        .call((t) => group0.transition(t).remove().call(position, d.parent))
        .call((t) =>
          group1
            .transition(t)
            .attrTween("opacity", () => d3.interpolate(0, 1))
            .call(position, d)
        );
    }

    // When zooming out, draw the old nodes on top, and fade them out.
    function zoomout(d) {
      const group0 = group.attr("pointer-events", "none");
      const group1 = (group = svg.insert("g", "*").call(render, d.parent));

      x.domain([d.parent.x0, d.parent.x1]);
      y.domain([d.parent.y0, d.parent.y1]);

      svg
        .transition()
        .duration(750)
        .call((t) =>
          group0
            .transition(t)
            .remove()
            .attrTween("opacity", () => d3.interpolate(1, 0))
            .call(position, d)
        )
        .call((t) => group1.transition(t).call(position, d.parent));
    }

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

export default WordCountsZoom;
