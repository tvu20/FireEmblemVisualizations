import React, { useState } from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import SentimentGame from "../../../visualizations/sentiment/SentimentGame";

import {
  getGameShortenedTitles,
  getGameTitles,
  getYearFromCode,
} from "../../../utils/games";
import getColor from "../../../utils/colors";

import "./sentiment.css";

function SentimentGamePage() {
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
    <VizWrapper color={getColor("sentiment")} navColor={"#123622"}>
      <div className="article sentiment-page sentiment-game">
        <h1>Sentiment in a Game</h1>
        <p>
          Visualize how the scale of positive and negative emotion fluctuates
          throughout a game.
        </p>
        <select
          className="select-dropdown"
          value={game}
          onChange={(e) => setGame(e.target.value)}
          style={{ marginBottom: "30px" }}
        >
          {createSelect()}
        </select>
        <SentimentGame game={game} />
        <p>
          Sentiment Analysis is a popular topic in the field of Natural Language
          Processing, but most models have been trained on general data taken
          from social media posts or daily conversations rather than media- and
          genre- specific dialogue. After training a BERT model to categorize
          dialogue lines across the corpus of Fire Emblem dialogue as conveying
          positive, negative, or neutral emotion with 81% accuracy, I used the
          model to predict the sentiment of each line of every chapter of each
          game.
          <br />
          <br />
          The following bar graphs represent the polarity (positive/negative
          emotion) of dialogue lines across each chapter of each game. Select a
          game in the dropdown to visualize how the amount of positive and
          negative lines change over the course of the game. Bars above the
          horizontal line represent the quantity of lines with positive emotions
          and bars below the line represent lines with negative emotions.
          Additionally, the curved line represents the overall sentiment journey
          taken throughout a game - a lower value at a certain position of the
          graph means that the overall sentiment at that point in time was more
          negative than at another point. You may notice that for almost all
          chapters, the emotions present skew heavily negative - this is to be
          expected for a series of games about wars!
        </p>
      </div>
    </VizWrapper>
  );
}

export default SentimentGamePage;
