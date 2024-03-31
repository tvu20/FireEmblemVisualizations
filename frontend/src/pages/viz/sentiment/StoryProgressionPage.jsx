import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import StoryProgression from "../../../visualizations/sentiment/StoryProgression";

import getColor from "../../../utils/colors";

import "./sentiment.css";
import Description from "../../../components/articles/Description";

function StoryProgressionPage() {
  return (
    <VizWrapper color={getColor("sentiment")} navColor={"#123622"}>
      <div className="article sentiment-page storyprogression">
        <h1>Story Progression</h1>
        <p>
          See how the storylines in Fire Emblem games align with 3-act and 4-act
          narrative structures.
        </p>
        <StoryProgression />
        <p>
          Ever wonder how a story is written? There are a few very common plot
          structures that are widely used across storytelling mediums, and{" "}
          <i>Fire Emblem</i> is no different! Every game in the series uses one
          of two overall narrative structures: a 3-act structure or a 4-act
          structure. All the games also feature a series of key plot moments,
          such as an inciting incident or mid-turning point.
          <br />
          <br />
          In this series of visualizations, I have mapped the key moments,
          stages, and acts of each game as compared with traditional 3 and 4 act
          structures. Note the only games not currently added are
          <Description tag="FE2">Gaiden</Description>/
          <Description tag="FE15">Echoes</Description> since those games were
          only split into 5 non-linear chapters, making the categorization very
          difficult, and <Description tag="FE17">Engage</Description> due to
          lack of available scripts. I have also provided a sample structure
          (with white backgrounds) to compare individual games with.
        </p>
      </div>
    </VizWrapper>
  );
}

export default StoryProgressionPage;
