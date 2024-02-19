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

    d3.selectAll("g > *").remove();

    // set the dimensions and margins of the graph
    var margin = { top: 30, right: 30, bottom: 70, left: 30 },
      width = 800 - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom;

    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
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
      .attr("class", "tooltip genderlinecounts-tooltip")
      .style("position", "absolute")
      .style("top", 0)
      .style("background-color", "white")
      .style("border-radius", "5px")
      .style("padding", "10px");

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function (d) {
      const chapter = d.srcElement.getAttribute("chapter");
      const idx = d.srcElement.getAttribute("idx");

      // const subgroup = d3.select(this.parentNode).datum().key;
      // const value = d.target.__data__.data[subgroup];

      //   var subgroupValue = d.data[subgroupName];
      //   console.log(subgroupValue);
      tooltip
        .html(
          "<h5>" +
            chapter +
            "</h5>" +
            "<p>Positive: " +
            data.Main[idx].positive +
            "</p>" +
            "<p>Negative: " +
            data.Main[idx].negative +
            "</p>"
          //   "</h5> Gender: <b>" +
          //   mapGender(subgroup) +
          //   "<br>" +
          //   Math.round(value * 10) / 10 +
          //   "%</b> of lines"
        )
        .style("opacity", 1);

      // // Reduce opacity of all rect to 0.2
      //   d3.selectAll(".myRect").style("opacity", 0.2);
      //   d3.selectAll(".myRect").style("opacity", 0.1);
      // // Highlight all rects of this subgroup with opacity 0.8. It is possible to select them since they have a specific class = their name.
      //   d3.selectAll("." + chapter).style("opacity", 1);
      // d3.selectAll("." + subgroup).attr("fill", function (d) {
      //   return highlightColor(d.key);
      // });
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
      // Back to normal opacity: 0.8
      //   d3.selectAll(".myRect").attr("fill", function (d) {
      //   return color(d.key);
      // });
      //   d3.selectAll(".myRect").style("opacity", 1);
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
      .attr("fill", "#e6ad57")
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

  return <svg ref={ref} style={{ border: "1px solid red" }} />;
}

export default SentimentGame;
