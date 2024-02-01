import React from "react";

import VizWrapper from "../../components/visualizations/VizWrapper";
import GenderLineCounts from "../../visualizations/gender-line-counts/GenderLineCounts";

import getColor from "../../utils/colors";

import "./genderlinecounts.css";

function GenderLineCountsPage() {
  return (
    <div className="genderlinecounts">
      <VizWrapper color={getColor("gender")} navColor={"#3b2708"}>
        <GenderLineCounts />
      </VizWrapper>
    </div>
  );
}

export default GenderLineCountsPage;
