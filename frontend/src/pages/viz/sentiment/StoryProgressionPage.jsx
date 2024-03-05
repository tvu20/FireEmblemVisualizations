import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import StoryProgression from "../../../visualizations/sentiment/StoryProgression";

import getColor from "../../../utils/colors";

import "./sentiment.css";

function StoryProgressionPage() {
  return (
    <VizWrapper color={getColor("sentiment")} navColor={"#123622"}>
      <div className="sentiment-page storyprogression">
        <h1>Story Progression</h1>
        <p>Some description here.</p>
        <StoryProgression />
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default StoryProgressionPage;
