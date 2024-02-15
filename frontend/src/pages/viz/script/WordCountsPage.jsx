import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import WordCounts from "../../../visualizations/script/WordCounts";

import getColor from "../../../utils/colors";

import "./script.css";

function WordCountsPage() {
  return (
    <VizWrapper color={getColor("script")} navColor={"#3b2708"}>
      <div className="wordcounts">
        <h1>Word Counts</h1>
        <p>Some description here.</p>
        <WordCounts />
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default WordCountsPage;
