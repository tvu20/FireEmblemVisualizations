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
  const [includeNeutral, setIncludeNeutral] = useState(false);

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
    <VizWrapper
      color={getColor("sentiment")}
      navColor={"#123622"}
      icon={"SENTIMENT"}
    >
      <div className="article sentiment-page emotion-game">
        <h1>Emotions in a Game</h1>
        <p>
          See how the distribution of emotions in dialogue changes throughout a
          game’s narrative.
        </p>
        <span className="checkbox-label" style={{ marginBottom: "20px" }}>
          <input
            type="checkbox"
            checked={includeNeutral}
            onChange={(e) => setIncludeNeutral((prevState) => !prevState)}
          />
          Include neutral tag
        </span>
        <select
          className="select-dropdown"
          value={game}
          onChange={(e) => setGame(e.target.value)}
          style={{ marginBottom: "30px" }}
        >
          {createSelect()}
        </select>

        <EmotionGame game={game} includeNeutral={includeNeutral} />
        <p>
          In addition to traditional polarity sentiment analysis, I wanted to
          study how an emotion classification model could be trained to label
          data from a particular medium or genre. I trained a BERT model to
          label dialogue lines with one of{" "}
          <a
            href="https://www.paulekman.com/universal-emotions/"
            className="highlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            five Ekman emotions (joy, sadness, anger, surprise, and fear)
          </a>{" "}
          or with the neutral label, achieving 75% accuracy. The resulting
          predictor was used to label each dialogue line across the series.
          <br />
          <br />
          This steamgraph represents the distribution of emotions across
          dialogue lines throughout the main story of a game, with story
          progression being represented by the horizontal axis of the graph.
          Select a game from the dropdown to view its emotional journey. Each of
          the five emotion labels is color-coded, with the neutral tag being
          represented as gray.
          <br />
          <br />
          <span className="viz__highlight">
            Check the box to remove the neutral dialogue lines, providing a
            better understanding of the distribution of non-neutral emotions
            across the storyline.
          </span>{" "}
          Particularly intense emotional chapters within each game have been
          labeled with brief descriptions of what occurs;{" "}
          <span className="viz__highlight">
            click on the written labels to see the particular chapter title and
            a longer description of the events that occur.
          </span>
        </p>
      </div>
    </VizWrapper>
  );
}

export default EmotionGamePage;
