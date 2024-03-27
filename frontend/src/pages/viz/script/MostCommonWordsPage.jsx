import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import MostCommonWords from "../../../visualizations/script/MostCommonWords";

import getColor from "../../../utils/colors";

import "./script.css";

function MostCommonWordsPage() {
  return (
    <VizWrapper color={getColor("script")} navColor={"#3b2708"}>
      <div className="article script-page mostcommonwords">
        <h1>Most Common Words</h1>
        <p>See the most commonly used words across the series’ history.</p>
        <MostCommonWords />
        <p>
          What are the most commonly used words across the series’ history?
          After removing stopwords (commonly used English words such as "the”,
          “a”, and “is”), I calculated the most commonly occurring words of each
          game and compiled the top 120 words in this word cloud. Each word is
          colored according to what part of speech it is, with character and
          place names from the franchise being distinguished as particular types
          of words as well. Hover over any word to learn more about its
          categorization and see a sample of sentences it’s used in throughout
          the series!
        </p>
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default MostCommonWordsPage;
