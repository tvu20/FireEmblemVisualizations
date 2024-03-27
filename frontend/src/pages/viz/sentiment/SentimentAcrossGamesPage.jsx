import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import SentimentAcrossGames from "../../../visualizations/sentiment/SentimentAcrossGames";
import SentimentAcrossGamesCombined from "../../../visualizations/sentiment/SentimentAcrossGamesCombined";

import getColor from "../../../utils/colors";

import "./sentiment.css";

function SentimentAcrossGamesPage() {
  return (
    <VizWrapper color={getColor("sentiment")} navColor={"#123622"}>
      <div className="article sentiment-page sentimentacrossgames">
        <h1>Sentiment Across Games</h1>
        <p>
          See how the sentiment curves of the games compare with each other.
        </p>
        <div
          className="sentimentacrossgames-container"
          style={{ marginBottom: "20px" }}
        >
          <SentimentAcrossGamesCombined />
          <SentimentAcrossGames />
        </div>
        <p>
          How does sentiment change over the course of a game? Are there
          similarities in the most positive or negative points in each game?
          Each small multiple represents the sentiment trajectory of a game as
          tracked by the number of positive lines compared with the number of
          negative lines. A negative value means a lower overall sentiment and
          vice versa. There is also a combined graph with the average curve of
          all the sentiments - we can see that there aren’t particularly
          significant overarching trends other than every game skews very
          negative, which makes sense in a series of games about wars!
        </p>
      </div>
    </VizWrapper>
  );
}

export default SentimentAcrossGamesPage;
