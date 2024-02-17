import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import SentimentAcrossGames from "../../../visualizations/sentiment/SentimentAcrossGames";
import SentimentAcrossGamesCombined from "../../../visualizations/sentiment/SentimentAcrossGamesCombined";

import getColor from "../../../utils/colors";

import "./sentiment.css";

function SentimentAcrossGamesPage() {
  return (
    <VizWrapper color={getColor("sentiment")} navColor={"#123622"}>
      <div className="sentiment-page sentimentacrossgames">
        <h1>Sentiment Across Games</h1>
        <p>Some description here.</p>
        <SentimentAcrossGamesCombined />
        <SentimentAcrossGames />
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default SentimentAcrossGamesPage;
