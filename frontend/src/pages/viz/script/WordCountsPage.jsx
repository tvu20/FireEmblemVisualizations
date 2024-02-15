import React, { useState } from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import WordCountsZoom from "../../../visualizations/script/WordCountsZoom";
import WordCounts from "../../../visualizations/script/WordCounts";

import getColor from "../../../utils/colors";

import "./script.css";

function WordCountsPage() {
  const [interactive, setInteractive] = useState(true);

  const width = 1000;
  const height = 950;
  const fade = 750;
  return (
    <VizWrapper color={getColor("script")} navColor={"#3b2708"}>
      <div className="wordcounts">
        <h1>Word Counts</h1>
        <p>Some description here.</p>
        Interactive{" "}
        <input
          type="checkbox"
          checked={interactive}
          onChange={(e) => setInteractive((prevState) => !prevState)}
        />
        {interactive && (
          <WordCountsZoom width={width} height={height} fade={fade} />
        )}
        {!interactive && (
          <WordCounts width={width} height={height} fade={fade} />
        )}
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default WordCountsPage;
