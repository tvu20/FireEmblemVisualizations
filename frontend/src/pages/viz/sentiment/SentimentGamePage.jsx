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
    <VizWrapper
      color={getColor("sentiment")}
      navColor={"#123622"}
      icon={"SENTIMENT"}
    >
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
          Sentiment Analysis is a popular topic in the field of{" "}
          <a
            href="https://www.ibm.com/topics/natural-language-processing"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight"
          >
            Natural Language Processing
          </a>
          , but most models have been trained on general data taken from social
          media posts or daily conversations rather than media- and genre-
          specific dialogue. After{" "}
          <a
            href="https://www.tensorflow.org/text/tutorials/classify_text_with_bert"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight"
          >
            training a BERT model
          </a>{" "}
          to categorize dialogue lines across the corpus of <i>Fire Emblem</i>{" "}
          dialogue as conveying positive, negative, or neutral emotion with 81%
          accuracy, I used the model to predict the sentiment of each line of
          every chapter of each game.
          <br />
          <br />
          The following bar graphs represent the polarity (positive/negative
          emotion) of dialogue lines across each chapter of each game.{" "}
          <span className="viz__highlight">
            Select a game in the dropdown to visualize how the amount of
            positive and negative lines change over the course of the game.
          </span>{" "}
          Bars above the horizontal line represent the quantity of lines with
          positive emotions and bars below the line represent lines with
          negative emotions. Additionally, the curved line represents the
          overall sentiment journey taken throughout a game - a lower value at a
          certain position on the graph means that the overall sentiment at that
          point in time was more negative. You might notice that for almost all
          games, the sentiment curve skews heavily negative - this is to be
          expected for a series of games about wars!
        </p>
      </div>
    </VizWrapper>
  );
}

export default SentimentGamePage;
