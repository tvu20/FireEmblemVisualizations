import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import MostCommonWords from "../../../visualizations/script/MostCommonWords";

import getColor from "../../../utils/colors";

import "./script.css";

function MostCommonWordsPage() {
  return (
    <VizWrapper color={getColor("script")} navColor={"#3b2708"}>
      <div className="mostcommonwords">
        <h1>Most Common Words</h1>
        <p>Some description here.</p>
        <MostCommonWords />
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default MostCommonWordsPage;
