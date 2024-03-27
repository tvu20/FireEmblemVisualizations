import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import GenderLineCounts from "../../../visualizations/gender/GenderLineCounts";

import getColor from "../../../utils/colors";

import "./gender.css";

function GenderLineCountsPage() {
  return (
    <VizWrapper color={getColor("gender")} navColor={"#3b2708"}>
      <div className="article gender-page genderlinecounts">
        <h1>Gender Line Counts</h1>
        <p>
          See how the distribution of lines across characters of different
          genders has changed over time.
        </p>
        <GenderLineCounts />
        {/* </VizWrapper> */}
        <p>
          How has the distribution of lines across genders changed across the
          franchise’s history? In this area bar chart, you can see the line
          percentages of each gender displayed for each game, with games on the
          right being more recent. From FE12 onwards brings the introduction of
          the Avatar character - a customizable player stand-in unit that can
          appear either in their male or female incarnation. Hover over each bar
          to see the line distribution percentage for a particular game.
        </p>
      </div>
    </VizWrapper>
  );
}

export default GenderLineCountsPage;
