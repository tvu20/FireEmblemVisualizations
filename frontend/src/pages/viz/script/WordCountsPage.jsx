import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
// import WordCountsZoom from "../../../visualizations/script/WordCountsZoom";
import WordCounts from "../../../visualizations/script/WordCounts";

import getColor from "../../../utils/colors";

import "./script.css";

function WordCountsPage() {
  return (
    <VizWrapper color={getColor("script")} navColor={"#3b2708"}>
      <div className="script-page wordcounts">
        <h1>Word Counts</h1>
        <p>Some description here.</p>
        Ordered <WordCounts />
        {/* {interactive && (
          <WordCountsZoom width={width} height={height} fade={fade} />
        )}
        {!interactive && (
          <WordCounts width={width} height={height} fade={fade} />
        )} */}
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default WordCountsPage;
