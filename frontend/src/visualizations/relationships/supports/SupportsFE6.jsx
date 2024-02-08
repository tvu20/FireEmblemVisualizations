import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import useWindowDimensions from "../../../hooks/useWindowDimensions";
// import { getGameTitles } from "../../utils/games";

function SupportsFE6() {
  const [data, setData] = useState();
  const ref = useRef();
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (!data) return;

    d3.selectAll("g > *").remove();

    // console.log(windowWidth);

    // // set the dimensions and margins of the graph
    // const margin = { top: 10, right: 30, bottom: 50, left: 50 },
    //   width = Math.min(windowWidth * 0.85, 1200) - margin.left - margin.right,
    //   height = 550 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    // const svg = d3
    //   .select(ref.current)
    //   .attr("width", width + margin.left + margin.right)
    //   .attr("height", height + margin.top + margin.bottom)
    //   .append("g")
    //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    //   .style("padding-bottom", 20);
  }, [data, windowWidth]);

  useEffect(() => {
    fetch("/api/relationships/supports?game=FE6", {
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

  return <svg ref={ref} />;
}

export default SupportsFE6;
