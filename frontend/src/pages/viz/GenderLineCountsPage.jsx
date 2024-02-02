import React from "react";

import VizWrapper from "../../components/visualizations/VizWrapper";
import GenderLineCounts from "../../visualizations/gender-line-counts/GenderLineCounts";

import getColor from "../../utils/colors";

import "./genderlinecounts.css";

function GenderLineCountsPage() {
  return (
    <VizWrapper color={getColor("gender")} navColor={"#3b2708"}>
      <div className="genderlinecounts">
        <h1>Gender Line Counts</h1>
        <GenderLineCounts />
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default GenderLineCountsPage;
