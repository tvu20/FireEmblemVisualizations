import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import GenderCharCounts from "../../../visualizations/gender/GenderCharCounts";

import getColor from "../../../utils/colors";

import "./gender.css";

function GenderCharCountsPage() {
  return (
    <VizWrapper color={getColor("gender")} navColor={"#3b2708"}>
      <div className="article gender-page gendercharcounts">
        <h1>Character Counts and Gender</h1>
        <p>
          See how the amount of characters across different genders has changed
          over the series’ history.
        </p>
        <GenderCharCounts />
        {/* </VizWrapper> */}
        <p>
          The first graph is an area graph representing the percentage of total
          female characters per game, depending on category. The default
          category, “Playable Characters,” only includes female characters that
          can explicitly be controlled by the player in battle. You can also
          select either “Non-Playable Characters,” which includes all named
          characters in the world that can’t be recruiter, or “All Characters,”
          which combines the total of both previous categories. The highest
          percentage of female characters in any one game is recorded.
          <br /> <br />
          The second visualization is a series of graphs, where each individual
          graph in this series represents the character gender distribution in a
          single game, with each dot corresponding to a single character. Pink
          and blue dots correspond to female and male characters respectively,
          while purple dots representing avatar characters appear in
          FE12-onwards. We can see that there doesn’t seem to be a significant
          trend upwards in female character percentage, with most games hovering
          between 30-40% female and the highest recorded percentage of female
          characters being 50% in Awakening and Fates, before decreasing again.
        </p>
      </div>
    </VizWrapper>
  );
}

export default GenderCharCountsPage;
