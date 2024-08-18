import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
// import { getGameTitles } from "../../utils/games";

function Pairings(props) {
  const { game, constrain, linkConstrain, moreStrength, sortGender } = props;
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll("g > *").remove();

    const radius = 7;

    // The force simulation mutates links and nodes, so create a copy
    // so that re-evaluating this cell produces the same result.
    const links = data.links.map((d) => ({ ...d }));
    const nodes = data.nodes.map((d) => ({ ...d }));

    // ticked function
    function ticked() {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      // node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      node
        .attr("cx", function (d) {
          return (d.x = Math.max(
            radius + 1,
            Math.min(width - (radius + 1), d.x)
          ));
        })
        .attr("cy", function (d) {
          return (d.y = Math.max(
            radius + 1,
            Math.min(height - (radius + 1), d.y)
          ));
        });
      textElems
        .attr("x", (d) => d.x + 10)
        .attr("y", (d) => d.y)
        .attr("visibility", "hidden");
    }

    const linkedByIndex = {};
    links.forEach((d) => {
      // console.log("d", d.source);
      linkedByIndex[`${d.source},${d.target}`] = 1;
    });

    function isConnected(a, b) {
      // console.log(a.srcElement.__data__);
      // console.log(b);
      return (
        linkedByIndex[`${a.srcElement.__data__.id},${b.id}`] ||
        linkedByIndex[`${b.id},${a.srcElement.__data__.id}`] ||
        a.srcElement.__data__.id === b.id
      );
    }

    function fade(opacity) {
      return (d) => {
        node.style("opacity", function (o) {
          return isConnected(d, o) ? 1 : opacity;
        });
        node.attr("stroke", function (o) {
          return o.index === d.srcElement.__data__.index ? "#fff" : "";
        });
        node.attr("stroke-width", function (o) {
          return o.index === d.srcElement.__data__.index ? 1.2 : 0;
        });

        textElems.style("visibility", function (o) {
          return isConnected(d, o) || o.index === d.srcElement.__data__.index
            ? "visible"
            : "hidden";
        });
        textElems.style("font-weight", function (o) {
          return o.index === d.srcElement.__data__.index ? "600" : "300";
          // return isConnected(d, o) ? 1 : opacity;
        });
        link.style("stroke-opacity", (o) => {
          return o.source.index === d.srcElement.__data__.index ||
            o.target.index === d.srcElement.__data__.index
            ? 0.8
            : opacity;
        });
        if (opacity === 1) {
          node.style("opacity", 1);
          node.attr("stroke", function (d) {
            return d.main ? "#ffc72e" : "";
          });
          node.attr("stroke-width", function (d) {
            return d.main ? 2 : 0;
          });
          textElems.style("visibility", "hidden");
          link.style("stroke-opacity", 0.4);
        }
      };
    }

    // Reheat the simulation when drag starts, and fix the subject position.
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    // Update the subject (dragged node) position during drag.
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    // Restore the target alpha so the simulation cools after dragging ends.
    // Unfix the subject position now that it’s no longer being dragged.
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // set the dimensions and margins of the graph
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    //   width = 928,
    //   // width = 928 - margin.left - margin.right,
    //   height = 600 - margin.top - margin.bottom;

    // Specify the dimensions of the chart.
    const width = 928;
    const height = 600;

    // Specify the color scale.
    const color = (gender) => {
      if (gender === "M") return "#377dab";
      else if (gender === "F") return "#ad617c";
      else return "#c19a57";
    };

    const linkColor = (category) => {
      if (category === "Romantic") return "#eb2d43";
      else if (category === "Related") return "#edd642";
      else if (category === "Ambiguous") return "#776ff0";
      else return "#5cc6a3";
    };

    // Create a simulation with several forces.
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(links).id((d) => d.id)
      )
      // .force("charge", d3.forceManyBody().strength(-300))
      .force(
        "charge",
        d3
          .forceManyBody()
          .strength(moreStrength ? -350 : constrain ? -200 : -300)
      )
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", constrain ? d3.forceX(width / 2).strength(0.075) : null)
      .force("y", constrain ? d3.forceY(height / 2).strength(0.075) : null)
      .on("tick", ticked);

    const xCenter = {
      M: width / 2 - 150,
      F: width / 2 + 150,
    };

    if (linkConstrain)
      simulation.force(
        "link",
        d3
          .forceLink()
          // .links(links)
          .id(function (d) {
            return d.id;
          })
      );

    if (sortGender) {
      simulation.force(
        "x",
        d3.forceX().x(function (d) {
          return xCenter[d.gender];
        })
        // .strength(0.075)
      );
    }

    // append SVG to page
    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      // .attr("width", width)
      // .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    // Add a line for each link, and a circle for each node.
    const link = svg
      .append("g")
      // .attr("stroke", "#999")
      .attr("stroke-opacity", 0.4)
      .selectAll()
      .data(links)
      .join("line")
      .attr("stroke", (d) => {
        // console.log(d);
        // return "#999";
        return linkColor(d.category);
      })
      .attr("stroke-width", 1.5);
    // .attr("stroke-width", (d) => Math.sqrt(d.value));

    const node = svg
      .append("g")
      // .attr("stroke", "#fff")
      // .attr("stroke-width", 1.5)
      .selectAll()
      .data(nodes)
      .join("circle")
      .attr("r", radius)
      .attr("fill", (d) => color(d.gender))
      .attr("stroke", function (d) {
        return d.main ? "#ffc72e" : "";
      })
      .attr("stroke-width", function (d) {
        return d.main ? 2 : 0;
      })
      .on("mouseover.fade", fade(0.1))
      .on("mouseout.fade", fade(1));

    const textElems = svg
      .append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text((d) => d.id)
      .attr("font-size", 16)
      .style("fill", "white")
      .on("mouseover.fade", fade(0.1))
      .on("mouseout.fade", fade(1));

    // node.append("title").text((d) => d.id);

    // Add a drag behavior.
    node.call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

    // Add a drag behavior.
    textElems.call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );
  }, [data, windowWidth, constrain, linkConstrain, moreStrength, sortGender]);

  useEffect(() => {
    fetch(`/api/relationships/pairings?game=${game}`, {
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

  return <svg ref={ref} style={{ border: "1px solid red" }} />;
}

export default Pairings;
