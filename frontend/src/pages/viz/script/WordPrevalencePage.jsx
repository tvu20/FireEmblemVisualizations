import React, { useState } from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import WordPrevalence from "../../../visualizations/script/WordPrevalence";

import { getGameShortenedTitles, getGameTitles } from "../../../utils/games";
import getColor from "../../../utils/colors";

import "./script.css";

function WordPrevalencePage() {
  const [game, setGame] = useState("FE6");

  const createSelect = () => {
    const codes = getGameTitles();
    const short = getGameShortenedTitles();

    return codes.map((c, i) => {
      return <option value={c}>{short[i]}</option>;
    });
  };
  return (
    <VizWrapper color={getColor("script")} navColor={"#3b2708"}>
      <div className="script-page wordprevalence">
        <h1>Word Prevalence</h1>
        <p>Some description here.</p>
        <select
          value={game}
          onChange={(e) => setGame(e.target.value)}
          style={{ marginBottom: "30px" }}
        >
          {createSelect()}
        </select>
        <WordPrevalence game={game} />
      </div>
    </VizWrapper>
  );
}

export default WordPrevalencePage;
