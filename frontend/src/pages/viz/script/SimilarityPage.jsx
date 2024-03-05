import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import Similarity from "../../../visualizations/script/Similarity";

import getColor from "../../../utils/colors";

import "./script.css";

function SimilarityPage() {
  return (
    <VizWrapper color={getColor("script")} navColor={"#3b2708"}>
      <div className="script-page similarity-media">
        <h1>Similarity Across Media</h1>
        <p>Some description here.</p>
        <Similarity />
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default SimilarityPage;
