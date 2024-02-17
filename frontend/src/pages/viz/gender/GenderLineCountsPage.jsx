import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import GenderLineCounts from "../../../visualizations/gender/GenderLineCounts";

import getColor from "../../../utils/colors";

import "./gender.css";

function GenderLineCountsPage() {
  return (
    <VizWrapper color={getColor("gender")} navColor={"#3b2708"}>
      <div className="gender-page genderlinecounts">
        <h1>Gender Line Counts</h1>
        <p>Some description here.</p>
        <GenderLineCounts />
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default GenderLineCountsPage;
