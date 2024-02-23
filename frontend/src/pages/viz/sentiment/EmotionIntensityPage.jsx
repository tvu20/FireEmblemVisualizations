import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import EmotionIntensity from "../../../visualizations/sentiment/EmotionIntensity";

import getColor from "../../../utils/colors";

import "./sentiment.css";

function EmotionIntensityPage() {
  return (
    <VizWrapper color={getColor("sentiment")} navColor={"#123622"}>
      <div className="sentiment-page sentimentacrossgames">
        <h1>Emotion Intensity</h1>
        <p>Some description here.</p>
        <EmotionIntensity />
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default EmotionIntensityPage;
