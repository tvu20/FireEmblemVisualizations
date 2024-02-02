import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getGameShortenedTitles } from "../../utils/games";

import "./gender.css";

function GenderLineCounts() {
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  const gameTitles = getGameShortenedTitles();

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
      .select(ref.current)
      .attr("width", width)
      .attr("height", height);

    // const group = svg
    //   .append("g")
    //   .attr("transform", "translate(" + 100 + "," + 0 + ")");

    const group = svg
      .append("g")
      .attr("transform", "translate(" + 0 + "," + -350 + ")");

    const per_row = 4;

    Object.entries(data).forEach(([key, value], i) => {
      console.log(`${i}: ${key} = ${value}`);

      const row = Math.ceil((i + 1) / per_row);
      const col = i % per_row;

      //   const row = Math.ceil(i / per_row);

      // balls is number of balls total
      // filas is number of rows total
      // enteros is number of full rows
      // resto is number left over on last row
      // brack is number of balls per row

      // math!

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

      //   const full_rows = Math.ceil((balls.M + balls_F + 1) / balls_per_row) - 1;

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
          console.log("balls", balls);
          const total = Object.values(balls).reduce((a, b) => a + b, 0);
          console.log(Object.values(balls).reduce((a, b) => a + b, 0));

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

  return <svg ref={ref} style={{ border: "1px solid red" }} />;
}

export default GenderLineCounts;
