import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../hooks/useWindowDimensions";
// import { getGameTitles } from "../../utils/games";

function SentimentGame(props) {
  const { game } = props;
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll(".sentimentinagame").remove();

    // set the dimensions and margins of the graph
    var margin = { top: 0, right: 30, bottom: 30, left: 30 },
      width = Math.min(windowWidth * 0.85, 1000) - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom;

    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("class", "sentimentinagame")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let maxPos = 0,
      maxNeg = 0;
    for (const d of data.Main) {
      maxPos = Math.max(maxPos, d.positive);
      maxNeg = Math.max(maxNeg, d.negative);
    }

    // ----------------
    // Create a tooltip
    // ----------------
    var tooltip = d3
      .select("body")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip sentiment-tooltip");

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function (d) {
      const chapter = d.srcElement.getAttribute("chapter");
      const idx = d.srcElement.getAttribute("idx");

      tooltip
        .html(
          "<h5>" +
            chapter +
            "</h5>" +
            "<b>Positive:</b> " +
            data.Main[idx].positive +
            " lines<br/>" +
            "<b>Negative:</b> " +
            data.Main[idx].negative +
            " lines"
        )
        .style("opacity", 1);
    };
    const mousemove = function (d) {
      tooltip.style("left", d.pageX + 20 + "px").style("top", d.pageY + "px");
      //   console.log("move");
      //   console.log(d3.pointer(this));
      //   tooltip
      //     .style("left", d3.pointer(this)[0] + 90 + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
      //     .style("top", d3.pointer(this)[1] + "px");
    };
    const mouseleave = function (d) {
      tooltip.style("opacity", 0);
    };

    // X axis
    // const x = d3.scaleBand().domain(groups).range([0, width]).padding([0.25]);
    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(data.Main.map((d) => d.chapter))
      .padding(0.2);
    //   .selectAll("text")
    //   .attr("transform", "translate(-10,0)rotate(-45)")
    //   .style("text-anchor", "end");

    // Add Y axis
    var y1 = d3
      .scaleLinear()
      .domain([0, Math.max(maxPos, maxNeg)])
      .range([height / 2, 0]);
    // svg
    //   .append("g")
    //   .call(d3.axisLeft(y1).tickSize(0))
    //   .selectAll("text")
    //   .style("visibility", "hidden");

    // Bars
    svg
      .selectAll("mybar")
      .data(data.Main)
      .enter()
      .append("rect")
      .attr("class", "pos")
      .attr("x", function (d) {
        return x(d.chapter);
      })
      .attr("y", function (d) {
        return y1(0);
      })
      .attr("width", x.bandwidth())
      .attr("height", function (d) {
        return height / 2 - y1(0);
      })
      .attr("fill", "#eab767")
      .attr("chapter", function (d) {
        return d.chapter;
      })
      .attr("idx", function (d, i) {
        return i;
      })
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

    // Animation
    svg
      .selectAll(".pos")
      .transition()
      .duration(500)
      .attr("y", function (d) {
        return y1(d.positive);
      })
      .attr("height", function (d) {
        return height / 2 - y1(d.positive);
      })
      .delay(function (d, i) {
        // console.log(i);
        return i * 100;
      });

    // Bars
    svg
      .selectAll("mybar")
      .data(data.Main)
      .enter()
      .append("rect")
      .attr("class", "neg")
      .attr("x", function (d) {
        return x(d.chapter);
      })
      .attr("y", function (d) {
        return y1(0);
      })
      .attr("width", x.bandwidth())
      .attr("height", function (d) {
        return height / 2 - y1(0);
      })
      .attr("fill", "#69b3a2")
      .attr("chapter", function (d) {
        return d.chapter;
      })
      .attr("idx", function (d, i) {
        return i;
      })
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

    // Animation
    svg
      .selectAll(".neg")
      .transition()
      .duration(500)
      .attr("y", function (d) {
        return height / 2 + 1;
      })
      .attr("height", function (d) {
        return height / 2 - y1(d.negative);
      })
      .delay(function (d, i) {
        // console.log(i);
        return i * 100;
      });

    svg
      .append("g")
      .attr("transform", "translate(0," + height / 2 + ")")
      .call(d3.axisBottom(x).tickSize(0))

      .selectAll("text")
      .style("visibility", "hidden");

    const line = d3
      .line()
      .x(function (d) {
        return x(d.chapter) + x.bandwidth() / 2;
      })
      .y(function (d) {
        return y1(d.sentiment);
      })
      .curve(d3.curveBasis);

    // Draw the line
    const path = svg
      .append("path")
      .datum(data.Main)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 3)
      .attr("d", line);
    // .attr("fill", "none")
    // .attr("stroke", "black")
    // .attr("stroke-width", 3)
    // .attr(
    //   "d",

    // );

    const pathLength = path.node().getTotalLength();
    const transitionPath = d3
      .transition()
      .ease(d3.easeSin)
      .duration(150 * data.Main.length);

    path
      .attr("stroke-dashoffset", pathLength)
      .attr("stroke-dasharray", pathLength)
      .transition(transitionPath)
      .attr("stroke-dashoffset", 0);

    // removes tooltip when leaving a page
    return () => {
      d3.selectAll(".tooltip").remove();
    };
  }, [data, windowWidth]);

  useEffect(() => {
    fetch(`/api/sentiment/sentiments?game=${game}`, {
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

  return <svg ref={ref} />;
}

export default SentimentGame;
