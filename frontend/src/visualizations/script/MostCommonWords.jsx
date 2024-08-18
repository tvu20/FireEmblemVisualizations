import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import * as cloud from "d3-cloud";

import useWindowDimensions from "../../hooks/useWindowDimensions";
// import { getGameTitles } from "../../utils/games";

import "./script.css";

function MostCommonWords(props) {
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll("g > *").remove();
    d3.selectAll(".tooltip").remove();

    const s = d3
      .scaleSqrt()
      .domain([1, d3.max(data.map((d) => d.value))])
      .range([6, 82]);

    const textColor = (tag) => {
      const colors = {
        NOUN: "#67001f",
        VERB: "#878787",
        ADJ: "#d6604d",
        ADV: "#1a1a1a",
        CHAR: "#3a3b69",
        PLACE: "#4d2e05",
      };
      return colors[tag];
    };

    const pos = (tag) => {
      const tags = {
        NOUN: "Noun",
        VERB: "Verb",
        ADJ: "Adjective",
        ADV: "Adverb",
        CHAR: "Character",
        PLACE: "Place",
      };
      return tags[tag];
    };

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

    var tooltip = d3
      .select("body")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip mostcommonwords-tooltip");

    // This function takes the output of 'layout' above and draw the words
    // Wordcloud features that are THE SAME from one word to the other can be here
    function draw(words) {
      svg
        .append("g")
        .attr(
          "transform",
          "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")"
        )
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", function (d) {
          return d.size;
        })
        .style("fill", function (d) {
          return textColor(d.pos);
        })
        // .style("fill", "#69b3a2")
        .attr("text-anchor", "middle")
        .style("font-family", "Source Serif Pro")
        .attr("transform", function (d) {
          return "translate(" + [d.x, d.y] + ")";
        })
        // .attr("transform", function (d) {
        //   return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        // })
        .text(function (d) {
          return d.text;
        })
        .classed("click-only-text", true)
        .classed("word-default", true)
        .on("mouseover", handleMouseOver)
        .on("mousemove", handleMouseMove)
        .on("mouseout", handleMouseOut);

      function handleMouseOver(d, i) {
        d3.select(d.srcElement)
          .classed("word-hovered", true)
          .attr("font-size", d.size + 2)
          .attr("font-weight", "bold");

        let tooltipContent =
          `<span style="font-family: 'Ibarra Real Nova', serif; font-weight: 700; font-size: 18px; color: ${textColor(
            d.srcElement.__data__.pos
          )}">` +
          pos(d.srcElement.__data__.pos).toUpperCase() +
          "</span> <br /><br/>" +
          d.srcElement.__data__.samples.join("<br /> <br/>");

        const re = new RegExp(d.srcElement.__data__.text, "gi");

        tooltipContent = tooltipContent.replace(
          re,
          `<mark style="background: ${textColor(
            d.srcElement.__data__.pos
          )}; color: white">$&</mark>`
        );

        tooltip.html(tooltipContent).style("opacity", 1);
      }

      function handleMouseMove(d, i) {
        tooltip.style("left", d.pageX + 20 + "px").style("top", d.pageY + "px");
      }

      function handleMouseOut(d, i) {
        d3.select(this)
          .classed("word-hovered", false)
          .attr("font-size", d.size);

        tooltip.style("opacity", 0);
      }
    }

    // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
    // Wordcloud features that are different from one word to the other must be here
    var layout = cloud()
      .size([width, height])
      .words(
        data
        // data.map(function (d) {
        // //   return { text: d.text, size: Math.sqrt(d.value) + 10 };
        // })
      )
      .padding(2) //space between words
      .rotate(() => 0)
      //   .rotate(function () {
      //     return ~~(Math.random() * 2) * 90;
      //   })
      .text(function (d) {
        return d.text;
      })
      .fontSize((d) => s(d.value))
      .font("Source Serif Pro") // needed for spacing issues
      //   .on("word", drawtest);
      .on("end", draw);
    layout.start();

    // removes tooltip when leaving a page
    return () => {
      d3.selectAll(".tooltip").remove();
    };
  }, [data, windowWidth]);

  useEffect(() => {
    fetch(`/api/scripts/common-words`, {
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
  }, []);

  return <svg ref={ref} />;
}

export default MostCommonWords;
