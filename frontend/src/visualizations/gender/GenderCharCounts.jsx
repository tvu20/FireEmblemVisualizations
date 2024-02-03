import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getGameShortenedTitles } from "../../utils/games";

import "./gender.css";

function GenderLineCounts() {
  const [data, setData] = useState();
  const ref = useRef();
  const ref2 = useRef();
  const { width: windowWidth } = useWindowDimensions();

  const gameTitles = getGameShortenedTitles();

  // area chart
  useEffect(() => {
    if (!data) return;

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 100, bottom: 30, left: 30 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // A function that update the chart
    function update(selectedGroup) {
      // // Create new data with the selection?
      // var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })

      line
        .datum(graphdata)
        .transition()
        .duration(1000)
        .attr(
          "d",
          d3
            .area()
            .x(function (d, index) {
              return x(+index);
            })
            .y0(y(0))
            .y1(function (d) {
              return y(+d[selectedGroup]);
            })
            .curve(d3.curveCardinal)
        )
        .attr("fill", function (d) {
          return myColor(selectedGroup);
        })
        .attr("stroke", function (d) {
          return myColor(selectedGroup);
        });
    }

    const svg = d3
      .select(ref.current)
      //   .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const group = svg.append("g").attr("transform", "translate(0,0)");

    const graphdata = [];

    Object.entries(data).forEach(([key, value], index) => {
      const pcs = Object.values(value.pcs).reduce((a, b) => a + b, 0);
      const npcs = Object.values(value.npcs).reduce((a, b) => a + b, 0);
      const fpc = value.pcs.F / pcs;
      const npc = value.npcs.F / npcs;
      const combined = (value.pcs.F + value.npcs.F) / (pcs + npcs);
      graphdata.push({
        game: gameTitles[index],
        fpc: fpc * 100,
        npc: npc * 100,
        combined: combined * 100,
      });
    });

    console.log(graphdata);

    var allGroup = [
      ["fpc", "Playable Characters"],
      ["npc", "Non-Playable Characters"],
      ["combined", "All Characters"],
    ];

    // A color scale: one color for each group
    var myColor = d3.scaleOrdinal().domain(allGroup).range(d3.schemeSet2);

    // Add X axis --> it is a date format
    var x = d3.scaleLinear().domain([0, 16]).range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Initialize line with group a
    var line = svg
      .append("g")
      .append("path")
      .datum(graphdata)
      .attr(
        "d",
        d3
          .area()
          .x(function (d, index) {
            console.log("d");
            console.log("index");
            return x(+index);
          })
          .y0(y(0))
          .y1(function (d) {
            return y(+d.fpc);
          })
          .curve(d3.curveCardinal)
      )
      .attr("stroke", function (d) {
        return myColor("fpc");
      })
      .attr("fill", function (d) {
        return myColor("fpc");
      })
      .style("stroke-width", 2);

    // When the button is changed, run the updateChart function
    d3.select("#selectButton").on("change", function (d) {
      // recover the option that has been chosen
      var selectedOption = d3.select(this).property("value");
      // run the updateChart function with this selected option
      update(selectedOption);
    });
  }, [data, windowWidth, gameTitles]);

  // mini graphs!
  useEffect(() => {
    if (!data) return;

    const width = 470;
    const height = 500;

    const colors = {
      m: d3.rgb(10, 195, 215),
      f: d3.rgb(227, 123, 168),
      a: d3.rgb(169, 103, 201),
    };

    const svg = d3
      .select(ref2.current)
      .attr("width", width)
      .attr("height", height);

    const group = svg
      .append("g")
      .attr("transform", "translate(" + 0 + "," + -350 + ")");

    const per_row = 4;

    Object.entries(data).forEach(([key, value], i) => {
      //   console.log(`${i}: ${key} = ${value}`);

      const row = Math.ceil((i + 1) / per_row);
      const col = i % per_row;

      //--------------------------- Distribution of each term in a 4x4 matrix
      const dots = group
        .append("g")
        .style("border", "1px solid red")
        .attr("transform", function () {
          return "translate(" + 120 * col + "," + 128 * row + ")rotate(0)";
        });

      //--------------------------- Calculate the distribution of dots: number, rows, columns, etc...
      // only using pcs right now
      const balls = value.pcs;
      console.log(balls);
      const balls_per_row = 10;
      let balls_F = balls.F;

      const full_rows = Math.ceil((balls.M + balls_F + 1) / balls_per_row) - 1;

      // male rows
      const male_rows = balls.M / balls_per_row;
      const male_full_rows = Math.ceil((balls.M + 1) / balls_per_row) - 1;
      //   console.log(male_full_rows);
      const male_rest = Math.round((male_rows - male_full_rows) * 10);

      const female_first = male_rest !== 0 ? balls_per_row - male_rest : 0;
      balls_F = balls_F - female_first;
      const female_full_rows = Math.ceil(balls_F / balls_per_row) - 1;
      const female_rest = balls_F - female_full_rows * balls_per_row;

      // male full rows
      for (let r = 0; r < male_full_rows; r++) {
        for (let k = 1; k <= balls_per_row; k++) {
          dots
            .append("circle")
            .attr("cx", k * 10)
            .attr("cy", 300 - r * 10)
            .attr("r", 4)
            .attr("opacity", 1)
            .attr("fill", colors.m);
        }
      }

      // male partial row
      for (let r = 1; r <= male_rest; r++) {
        dots
          .append("circle")
          .attr("cx", r * 10)
          .attr("cy", 300 - male_full_rows * 10)
          .attr("r", 4)
          .attr("opacity", 1)
          .attr("fill", colors.m);
      }

      // female first row
      for (let r = male_rest + 1; r <= male_rest + female_first; r++) {
        dots
          .append("circle")
          .attr("cx", r * 10)
          .attr("cy", 300 - male_full_rows * 10)
          .attr("r", 4)
          .attr("opacity", 1)
          .attr("fill", colors.f);
      }

      // female full rows
      for (let r = 0; r < female_full_rows; r++) {
        for (let k = 1; k <= balls_per_row; k++) {
          dots
            .append("circle")
            .attr("cx", k * 10)
            .attr(
              "cy",
              300 - (male_full_rows + r + (female_first !== 0 ? 1 : 0)) * 10
            )
            .attr("r", 4)
            .attr("opacity", 1)
            .attr("fill", colors.f);
        }
      }

      // female partial row
      for (let r = 1; r <= female_rest; r++) {
        dots
          .append("circle")
          .attr("cx", r * 10)
          .attr("cy", 300 - full_rows * 10)
          .attr("r", 4)
          .attr("opacity", 1)
          .attr("fill", colors.f);
      }

      // avatar row
      if (balls.A) {
        for (let r = female_rest + 1; r <= female_rest + balls.A; r++) {
          dots
            .append("circle")
            .attr("cx", r * 10)
            .attr("cy", 300 - full_rows * 10)
            .attr("r", 4)
            .attr("opacity", 1)
            .attr("fill", colors.a);
        }
      }

      //--------------------------- Labels associated with each term.

      dots
        .append("text")
        .attr("x", 5)
        .attr("y", 320)
        .text(function (d) {
          return gameTitles[key];
        })
        .attr("font-family", "Gill Sans, Century Gothic, sans-serif")
        .attr("font-size", 12)
        .attr("opacity", 1)
        .style("fill", "black");

      dots
        .append("text")
        .attr("x", 5)
        .attr("y", 335)
        .text(function (d) {
          const total = Object.values(balls).reduce((a, b) => a + b, 0);
          //   console.log(Object.values(balls).reduce((a, b) => a + b, 0));

          return Math.round((balls.F / total) * 10000) / 100 + "% female";
        })
        .attr("font-family", "Gill Sans, sans-serif")
        .attr("font-size", 12)
        .attr("text-anchor", "start")
        .style("fill", "black");
    });
  }, [data, windowWidth, gameTitles]);

  useEffect(() => {
    fetch("/api/gender/char-counts", {
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
        setData(
          Object.entries(data)
            // .slice(0, 5)
            .map((entry) => entry[1])
        );
      });
  }, []);

  return (
    <>
      <select id="selectButton">
        <option value="fpc">Playable Characters</option>
        <option value="npc">Non-Playable Characters</option>
        <option value="combined">All Characters</option>
      </select>
      <svg ref={ref} style={{ border: "1px solid red" }} />
      <svg ref={ref2} style={{ border: "1px solid red" }} />
    </>
  );
}

export default GenderLineCounts;
