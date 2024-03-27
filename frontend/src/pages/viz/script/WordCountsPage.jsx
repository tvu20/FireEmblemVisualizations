import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
// import WordCountsZoom from "../../../visualizations/script/WordCountsZoom";
import WordCounts from "../../../visualizations/script/WordCounts";

import getColor from "../../../utils/colors";

import "./script.css";

function WordCountsPage() {
  return (
    <VizWrapper color={getColor("script")} navColor={"#3b2708"}>
      <div className="article script-page wordcounts">
        <h1>Word Counts</h1>
        <p>See how the word count of each game has changed over time.</p>
        <WordCounts />
        {/* {interactive && (
          <WordCountsZoom width={width} height={height} fade={fade} />
        )}
        {!interactive && (
          <WordCounts width={width} height={height} fade={fade} />
        )} */}
        {/* </VizWrapper> */}
        <p>
          The Fire Emblem franchise has spanned over 20 years and various
          generations of Nintendo consoles. As hardware restrictions have
          changed and the video gaming industry has developed, how have the word
          counts across games in the series evolved? This graph displays the
          number of words present in the main dialogue script of each game, with
          each game being color-coded by its console.
          <br />
          <br />
          Check the box to order the graph either chronologically or by word
          count to better see the relationships over time! Drag your mouse over
          a portion of the graph to zoom in on a particular section; double
          click anywhere on the graph to return to the initial graph size.
        </p>
      </div>
    </VizWrapper>
  );
}

export default WordCountsPage;
