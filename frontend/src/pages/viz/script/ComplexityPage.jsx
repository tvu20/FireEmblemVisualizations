import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import Complexity from "../../../visualizations/script/Complexity";

import getColor from "../../../utils/colors";

import "./script.css";

function ComplexityPage() {
  return (
    <VizWrapper color={getColor("script")} navColor={"#3b2708"}>
      <div className="script-page complexity-words">
        <h1>Complexity of Words</h1>
        <p>Some description here.</p>
        <Complexity />
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default ComplexityPage;
