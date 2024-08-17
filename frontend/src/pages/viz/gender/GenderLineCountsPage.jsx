import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import GenderLineCounts from "../../../visualizations/gender/GenderLineCounts";

import getColor from "../../../utils/colors";

import "./gender.css";
import Description from "../../../components/articles/Description";

function GenderLineCountsPage() {
  return (
    <VizWrapper color={getColor("gender")} navColor={"#3b2708"} icon={"GENDER"}>
      <div className="article gender-page genderlinecounts">
        <h1>Gender Line Counts</h1>
        <p>
          See how the distribution of lines across characters of different
          genders has changed over time.
        </p>
        <GenderLineCounts />
        {/* </VizWrapper> */}
        <p>
          How has the distribution of lines among genders changed across the
          series’ history? In this area chart, you can see the line percentages
          of each gender displayed for each game, with games on the right being
          more recent. From{" "}
          <Description tag="FE12">
            <i>New Mystery</i>
          </Description>{" "}
          onwards brings the introduction of the{" "}
          <Description tag="avatar">Avatar character</Description> - a
          customizable player stand-in unit that can appear either in their male
          or female incarnation.{" "}
          <span className="viz__highlight">
            Hover over each bar to see the line distribution percentage for a
            particular game.
          </span>
        </p>
      </div>
    </VizWrapper>
  );
}

export default GenderLineCountsPage;
