import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import GenderCharCounts from "../../../visualizations/gender/GenderCharCounts";

import getColor from "../../../utils/colors";

import "./gender.css";

function GenderCharCountsPage() {
  return (
    <VizWrapper color={getColor("gender")} navColor={"#3b2708"}>
      <div className="gendercharcounts">
        <h1>Character Counts and Gender</h1>
        <p>Some description here.</p>
        <GenderCharCounts />
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default GenderCharCountsPage;
