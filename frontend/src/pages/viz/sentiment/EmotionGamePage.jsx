import React, { useState } from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import EmotionGame from "../../../visualizations/sentiment/EmotionGame";

import {
  getEmotionTitles,
  getEmotionCodes,
  getYearFromCode,
} from "../../../utils/games";
import getColor from "../../../utils/colors";

import "./sentiment.css";

function EmotionGamePage() {
  const [game, setGame] = useState("FE6");
  const [includeNeutral, setIncludeNeutral] = useState(true);

  const createSelect = () => {
    const codes = getEmotionCodes();
    const short = getEmotionTitles();

    return codes.map((c, i) => {
      return (
        <option value={c} key={c}>
          {short[i]} ({getYearFromCode(c)})
        </option>
      );
    });
  };
  return (
    <VizWrapper color={getColor("sentiment")} navColor={"#123622"}>
      <div className="sentiment-page emotion-game">
        <h1>Emotions in a Game</h1>
        <p>Some description here.</p>
        <select
          value={game}
          onChange={(e) => setGame(e.target.value)}
          style={{ marginBottom: "30px" }}
        >
          {createSelect()}
        </select>
        <input
          type="checkbox"
          checked={includeNeutral}
          onChange={(e) => setIncludeNeutral((prevState) => !prevState)}
        />
        <EmotionGame game={game} includeNeutral={includeNeutral} />
      </div>
    </VizWrapper>
  );
}

export default EmotionGamePage;
