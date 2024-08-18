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

    // console.log(data);
    // console.log(sortedData);

    // set the dimensions and margins of the graph
    var margin = { top: 30, right: 30, bottom: 70, left: 60 },
      width = 700 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

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

    // Add a clipPath: everything out of this area won't be drawn.
    svg
      .append("defs")
      .append("svg:clipPath")
      .attr("id", "clip")
      .append("svg:rect")
      .attr("width", width)
      .attr("height", height)
      .attr("x", 0)
      .attr("y", 0);

    // Add brushing
    var brush = d3
      .brushY() // Add the brush feature using the d3.brush function
      .extent([
        [0, 0],
        [width, height],
      ]) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
      .on("end", updateBrush); // Each time the brush selection changes, trigger the 'updateChart' function

    // Create the scatter variable: where both the circles and the brush take place
    var graph = svg.append("g").attr("clip-path", "url(#clip)");

    // Add the brushing
    graph.append("g").attr("class", "brush").call(brush);

    // A function that set idleTimeOut to null
    var idleTimeout;
    function idled() {
      idleTimeout = null;
    }

    // A function that update the chart for given boundaries
    function updateBrush(e) {
      const extent = e.selection;
      // If no selection, back to initial coordinate. Otherwise, update X axis domain
      if (!extent) {
        if (!idleTimeout) return (idleTimeout = setTimeout(idled, 350)); // This allows to wait a little bit
        y.domain([0, 260000]);
      } else {
        y.domain([y.invert(extent[1]), y.invert(extent[0])]);
        graph.select(".brush").call(brush.move, null); // This remove the grey brush area as soon as the selection has been done
      }

      // Update axis and circle position
      yAxis.transition().duration(1000).call(d3.axisLeft(y));

      graph
        .selectAll(".myLine")
        .transition()
        .duration(1000)
        .attr("x1", function (d) {
          return x(d.game);
        })
        .attr("x2", function (d) {
          return x(d.game);
        })
        .attr("y1", y(0))
        .attr("y2", function (d) {
          return y(d.value);
        });

      graph
        .selectAll("circle")
        .transition()
        .duration(1000)
        .attr("cx", function (d) {
          return x(d.game);
        })
        .attr("cy", function (d) {
          return y(d.value);
        });
    }
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

      if (init) {
        // variable u: map data to existing circle
        var j = graph.selectAll(".myLine").data(currData);
        // update lines
        j.enter()
          .append("line")
          .attr("class", "myLine")
          // .merge(j)
          // .transition()
          // .duration(1000)
          .attr("x1", function (d) {
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

        graph
          .selectAll("line")
          .transition()
          .duration(1000)
          .attr("y2", function (d) {
            return y(d.value);
          });

        // variable u: map data to existing circle
        var u = graph.selectAll("circle").data(currData);
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
          .attr("fill", (d) => getGameColor(d.console));
        // .attr("fill", "#69b3a2");

        graph
          .selectAll("circle")
          .transition()
          .duration(1000)
          .attr("cy", function (d) {
            return y(d.value);
          });
      } else {
        // variable u: map data to existing circle
        var k = graph.selectAll(".myLine").data(currData);
        // update lines
        k.enter()
          .append("line")
          .attr("class", "myLine")
          .merge(k)
          .transition()
          .duration(1000)
          .attr("x1", function (d) {
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
        var l = graph.selectAll("circle").data(currData);
        // update bars
        l.enter()
          .append("circle")
          .merge(l)
          .transition()
          .duration(1000)
          .attr("cx", function (d) {
            return x(d.game);
          })
          .attr("cy", function (d) {
            return y(d.value);
          })
          .attr("r", 8)
          .attr("fill", (d) => getGameColor(d.console));
        // .attr("fill", "#69b3a2");
      }
    }

    // When the button is changed, run the updateChart function
    d3.select("#word-count-checkbox").on("change", function (d) {
      // console.log(d.target.checked);
      // // recover the option that has been chosen
      // var selectedOption = d3.select(this).property("value");
      // run the updateChart function with this selected option
      update(d.target.checked, false);
    });

    update(false, true);
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
        setData(data);
        setSortedData([...data].sort((a, b) => b.value - a.value));
      });
  }, []);

  return (
    <>
      <span className="checkbox-label" style={{ marginBottom: "0px" }}>
        <input
          id="word-count-checkbox"
          type="checkbox"
          checked={ordered}
          onChange={(e) => setOrdered((prevState) => !prevState)}
        />
        Ordered
      </span>

      <svg ref={ref} />
    </>
  );
}

export default WordCounts;
