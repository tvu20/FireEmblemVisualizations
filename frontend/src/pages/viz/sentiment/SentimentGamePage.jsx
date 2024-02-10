import React, { useState } from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import SentimentGame from "../../../visualizations/sentiment/SentimentGame";

import getColor from "../../../utils/colors";

import "./sentiment.css";

function SentimentGamePage() {
  const [game, setGame] = useState("FE6");
  return (
    <VizWrapper color={getColor("sentiment")} navColor={"#123622"}>
      <div className="sentiment-game">
        <h1>Sentiment in a Game</h1>
        <p>Some description here.</p>
        <select
          value={game}
          onChange={(e) => setGame(e.target.value)}
          style={{ marginBottom: "30px" }}
        >
          <option value="FE6">The Binding Blade</option>
          <option value="FE7">The Blazing Blade</option>
          <option value="FE8">The Sacred Stones</option>
          <option value="FE9">Path of Radiance</option>
          <option value="FE13">Awakening</option>
          <option value="FE14">Fates</option>
          <option value="FE15">Echoes</option>
          <option value="FE16">Three Houses</option>
        </select>
        <SentimentGame game={game} />
      </div>
    </VizWrapper>
  );
}

export default SentimentGamePage;
