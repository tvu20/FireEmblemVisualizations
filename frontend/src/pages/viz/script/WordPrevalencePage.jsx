import React, { useState } from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import WordPrevalence from "../../../visualizations/script/WordPrevalence";

import {
  getGameShortenedTitles,
  getGameTitles,
  getYearFromCode,
} from "../../../utils/games";
import getColor from "../../../utils/colors";

import "./script.css";

function WordPrevalencePage() {
  const [game, setGame] = useState("FE6");

  const createSelect = () => {
    const codes = getGameTitles();
    const short = getGameShortenedTitles();

    return codes.map((c, i) => {
      return (
        <option value={c}>
          {short[i]} ({getYearFromCode(c)})
        </option>
      );
    });
  };
  return (
    <VizWrapper color={getColor("script")} navColor={"#3b2708"}>
      <div className="article script-page wordprevalence">
        <h1>Word Prevalence</h1>
        <p>
          See the distribution of word prevalence across each game in the
          series.
        </p>
        <select
          className="select-dropdown"
          value={game}
          onChange={(e) => setGame(e.target.value)}
          style={{ marginBottom: "30px" }}
        >
          {createSelect()}
        </select>
        <WordPrevalence game={game} />
        <p>
          How much of Fire Emblem dialogue is made up of incredibly normal
          words, those you would hear in daily life and easily define, compared
          to wildly obscure terms or game-specific language? These histograms
          shows the distribution of word prevalence for each game in the series.
          <br />
          <br />
          Word prevalence is measured by cross-referencing the words in the game
          scripts with the Google Books Ngram Corpus. Select a game from the
          dropdown to see its word prevalence data, and hover over any bucket in
          the histogram to see a list of sample words in the bucket!
        </p>
      </div>
    </VizWrapper>
  );
}

export default WordPrevalencePage;
