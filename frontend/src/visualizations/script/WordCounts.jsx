// import React, { useState, useEffect, useRef } from "react";
// import * as d3 from "d3";

// // import useWindowDimensions from "../../hooks/useWindowDimensions";
// import { getGameColor } from "../../utils/colors";
// // import { getGameTitles } from "../../utils/games";

// import "./script.css";

// function WordCounts(props) {
//   const [data, setData] = useState();
//   const ref = useRef();
//   //   const { width: windowWidth } = useWindowDimensions();
//   const { width, height, fade } = props;

//   //   const width = 928;
//   //     const height = 924;

//   useEffect(() => {
//     if (!data) return;

//     d3.selectAll("g > *").remove();

//     // Specify the chart’s dimensions.
//     // const width = 928;
//     // const height = 1060;
//     // const color = d3.scaleSequential([8, 0], d3.interpolateMagma);

//     // function tile(node, x0, y0, x1, y1) {
//     //   d3.treemapBinary(node, 0, 0, width, height);
//     //   for (const child of node.children) {
//     //     child.x0 = x0 + (child.x0 / width) * (x1 - x0);
//     //     child.x1 = x0 + (child.x1 / width) * (x1 - x0);
//     //     child.y0 = y0 + (child.y0 / height) * (y1 - y0);
//     //     child.y1 = y0 + (child.y1 / height) * (y1 - y0);
//     //   }
//     // }

//     // function tile(parent, x0, y0, x1, y1) {
//     //   var nodes = parent.children,
//     //     node,
//     //     i = -1,
//     //     n = nodes.length,
//     //     k = parent.value && (y1 - y0) / parent.value;

//     //   while (++i < n) {
//     //     node = nodes[i];
//     //     node.x0 = x0;
//     //     node.x1 = x1;
//     //     node.y0 = y0;
//     //     // node.y1 = y0 += node.value * k + 20;
//     //     // node.y1 = y0 += Math.max(node.value * k, 20);
//     //   }
//     // }

//     // Create the treemap layout.
//     const treemap = (data) =>
//       d3
//         .treemap()
//         .tile(d3.treemapSlice)
//         // .tile(tile)
//         .size([width, height])
//         .paddingOuter(3)
//         .paddingTop(20)
//         .paddingInner(3)
//         .round(true)(
//         d3.hierarchy(data).sum((d) => d.value)
//         // .sort((a, b) => b.value - a.value)
//       );
//     const root = treemap(data);

//     console.log("root", root);

//     // Compute the layout.
//     // const hierarchy = d3
//     //   .hierarchy(data)
//     //   .sum((d) => d.value)
//     //   .sort((a, b) => b.value - a.value);
//     // console.log(hierarchy);
//     // const root = d3.treemap().tile(tile)(hierarchy);

//     const svg = d3
//       .select(ref.current)
//       //   .attr("viewBox", [0.5, -30.5, width, height + 30])
//       .attr("viewBox", [0.5, -0.5, width, height + 30])
//       .attr("width", width)
//       .attr("height", height + 30)
//       .attr("style", "max-width: 100%; height: auto;")
//       .style("font", "10px sans-serif");

//     const node = svg
//       .selectAll("g")
//       .data(d3.group(root, (d) => d.height))
//       .join("g")
//       //   .attr("filter", shadow)
//       .selectAll("g")
//       .data((d) => d[1])
//       .join("g")
//       .attr("transform", (d) => `translate(${d.x0},${d.y0})`)
//       .style("opacity", 0);

//     node.transition().duration(fade).ease(d3.easeLinear).style("opacity", 1);

//     const format = d3.format(",d");
//     node.append("title").text(
//       (d) =>
//         `${d
//           .ancestors()
//           .reverse()
//           .map((d) => d.data.name)
//           .join("/")}\n${format(d.value)}`
//     );

//     const calculateColor = (d) => {
//       // highest node
//       if (d === root) {
//         return "white";
//       }

//       // lowest node
//       if (!d.children) {
//         // return "#f5d2d0";
//         return getGameColor(d.parent.data.name);
//       }

//       return "#fadede";
//     };

//     node
//       .append("rect")
//       //   .attr("id", d => (d.nodeUid = DOM.uid("node")).id)
//       .attr("fill", (d) => calculateColor(d))
//       .attr("width", (d) => d.x1 - d.x0)
//       .attr("height", (d) => d.y1 - d.y0);

//     node
//       .append("clipPath")
//       //   .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
//       .append("use");
//     //   .attr("xlink:href", (d) => d.nodeUid.href);

//     node
//       .append("text")
//       .attr("clip-path", (d) => d.clipUid)
//       .selectAll("tspan")
//       .data(
//         (d) => {
//           return [d.data.name, format(d.value)];
//         }
//         // (d) => d.data.name
//         // (d) => d.data.name.split(/(?=[A-Z][^A-Z])/g).concat(format(d.value))
//       )
//       .join("tspan")
//       .attr("fill-opacity", (d, i, nodes) => {
//         if (d === "8,409" || d === "3,739") {
//           return 0;
//         }
//         return i === nodes.length - 1 ? 0.7 : null;
//       })
//       .attr("font-size", 14)
//       .text((d) => d);

//     node
//       .filter((d) => d.children)
//       .selectAll("tspan")
//       .attr("dx", 3)
//       .attr("y", 15);

//     node
//       .filter((d) => !d.children)
//       .selectAll("tspan")
//       .attr("x", 3)
//       .attr(
//         "y",
//         (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`
//       );

//     // return svg.node();
//   }, [data, width, height, fade]);

//   useEffect(() => {
//     fetch(`/api/scripts/word-counts`, {
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

//   return <svg width={width} height={height} ref={ref} />;
// }

// export default WordCounts;

import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import { getGameColor } from "../../utils/colors";
// import { getGameTitles } from "../../utils/games";

import "./script.css";

function WordCounts(props) {
  const [data, setData] = useState();
  const [ordered, setOrdered] = useState(false);
  const [sortedData, setSortedData] = useState();
  const ref = useRef();

  useEffect(() => {
    if (!data) return;

    d3.selectAll("g > *").remove();

    console.log(data);
    console.log(sortedData);

    // set the dimensions and margins of the graph
    var margin = { top: 30, right: 30, bottom: 70, left: 60 },
      width = 700 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    // Initialize the X axis
    var x = d3
      .scaleBand()
      // .domain(data.map((d) => d.game))
      .range([0, width])
      .padding(1);
    var xAxis = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")");
    // .call(d3.axisBottom(x).tickSizeOuter(0));

    // Initialize the Y axis
    var y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height, 0]);
    // var y = d3.scaleLinear().range([height, 0]);
    var yAxis = svg
      .append("g")
      .attr("class", "myYaxis")
      .call(d3.axisLeft(y))
      .call((g) => g.select(".domain").remove());

    // svg
    //   .append("g")
    //   .append("text")
    //   .attr("x", width - margin.right)
    //   .attr("y", height + 50)
    //   .attr("fill", "currentColor")
    //   .attr("text-anchor", "end")
    //   .text("Game →");

    // A function that create / update the plot for a given variable:
    function update(sorted, init) {
      const currData = sorted ? sortedData : data;
      // // X axis
      x.domain(
        currData.map(function (d) {
          return d.game;
        })
      );
      xAxis.transition().duration(1000).call(d3.axisBottom(x));

      // // Add Y axis
      // y.domain([0, d3.max(data, function(d) { return +d[selectedVar] }) ]);
      // yAxis.transition().duration(1000).call(d3.axisLeft(y));

      if (init) {
        // variable u: map data to existing circle
        var j = svg.selectAll(".myLine").data(currData);
        // update lines
        j.enter()
          .append("line")
          .attr("class", "myLine")
          // .merge(j)
          // .transition()
          // .duration(1000)
          .attr("x1", function (d) {
            console.log(x(d.game));
            return x(d.game);
          })
          .attr("x2", function (d) {
            return x(d.game);
          })
          .attr("y1", y(0))
          .attr("y2", function (d) {
            return y(0);
          })
          .attr("stroke", "grey");

        svg
          .selectAll("line")
          .transition()
          .duration(1000)
          .attr("y2", function (d) {
            return y(d.value);
          });

        // variable u: map data to existing circle
        var u = svg.selectAll("circle").data(currData);
        // update bars
        u.enter()
          .append("circle")
          // .merge(u)
          // .transition()
          // .duration(1000)
          .attr("cx", function (d) {
            return x(d.game);
          })
          .attr("cy", function (d) {
            return y(0);
          })
          .attr("r", 8)
          .attr("fill", "#69b3a2");

        svg
          .selectAll("circle")
          .transition()
          .duration(1000)
          .attr("cy", function (d) {
            return y(d.value);
          });
      } else {
        // variable u: map data to existing circle
        var j = svg.selectAll(".myLine").data(currData);
        // update lines
        j.enter()
          .append("line")
          .attr("class", "myLine")
          .merge(j)
          .transition()
          .duration(1000)
          .attr("x1", function (d) {
            console.log(x(d.game));
            return x(d.game);
          })
          .attr("x2", function (d) {
            return x(d.game);
          })
          .attr("y1", y(0))
          .attr("y2", function (d) {
            return y(d.value);
          })
          .attr("stroke", "grey");

        // variable u: map data to existing circle
        var u = svg.selectAll("circle").data(currData);
        // update bars
        u.enter()
          .append("circle")
          .merge(u)
          .transition()
          .duration(1000)
          .attr("cx", function (d) {
            return x(d.game);
          })
          .attr("cy", function (d) {
            return y(d.value);
          })
          .attr("r", 8)
          .attr("fill", "#69b3a2");
      }
    }

    // console.log(d3.select("#word-count-checkbox"));

    // When the button is changed, run the updateChart function
    d3.select("#word-count-checkbox").on("change", function (d) {
      console.log("checkedChange");
      // console.log(d.target.checked);
      // // recover the option that has been chosen
      // var selectedOption = d3.select(this).property("value");
      // run the updateChart function with this selected option
      update(d.target.checked, false);
    });

    update(false, true);

    // // THIS IS FOR THE BAR GRAPH!!!!
    // svg.append("g").attr("class", "bars");
    // const bars = svg
    //   .select("g.bars")
    //   .selectAll("rect")
    //   .data(data, (d) => d.name);

    // console.log(x.bandwidth());
    // bars
    //   .enter()
    //   .append("rect")
    //   .attr("fill", "steelblue")
    //   .attr("x", (d) => x(d.game))
    //   .attr("y", (d) => y(d.value))
    //   .attr("height", (d) => y(0) - y(d.value))
    //   .attr("width", 10);

    // const t = d3.transition().duration(750);
    // const delay = (d, i) => i * 30;

    // bars
    //   .transition(t)
    //   .attr("x", (d) => x(d.name))
    //   .delay(delay);

    // return svg.node();
  }, [data, sortedData]);

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
        // console.log(data);
        setData(data);
        setSortedData([...data].sort((a, b) => b.value - a.value));
      });
  }, []);

  return (
    <>
      <input
        id="word-count-checkbox"
        type="checkbox"
        checked={ordered}
        onChange={(e) => setOrdered((prevState) => !prevState)}
      />
      <svg ref={ref} style={{ border: "1px solid red" }} />
    </>
  );
}

export default WordCounts;
