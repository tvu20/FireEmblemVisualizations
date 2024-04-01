import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import Complexity from "../../../visualizations/script/Complexity";

import getColor from "../../../utils/colors";

import "./script.css";

function ComplexityPage() {
  return (
    <VizWrapper color={getColor("script")} navColor={"#3b2708"}>
      <div className="article script-page complexity-words">
        <h1>Language Complexity</h1>
        <p>
          Visualize the language complexity and readability metrics of the
          series’ writing.
        </p>
        <Complexity />
        <p>
          Readability and complexity of a written piece of text is primarily
          measured through two factors: the number of words in a sentence, and
          the number of letters or syllables per word, with higher scores in
          both categories corresponding to higher reading levels. This graph
          visualizes the language complexity metrics of the <i>Fire Emblem</i>{" "}
          game transcripts, compared with a variety of other compiled written
          texts.
          <br />
          <br />
          This graph displays data consisting of other game scripts, prose, and
          scripts. The x-axis represents the number of words per sentence, while
          the y-axis represents the number of letters per word. Each media
          category is represented by a particular family of colors, with warmer
          colors being further separated from <i>Fire Emblem</i> games and
          cooler colors being more similar in medium form. The closest type of
          media displayed in this graph is other strategy role-playing games,
          which inhabit the same video game genre that <i>Fire Emblem</i> does.
          <br />
          <br />
          Check each respective box to show or hide the datapoints corresponding
          to a category of media. Hover over a particular datapoint to learn
          more about the specific piece of text-based media being represented!
          We can see that all the <i>Fire Emblem</i> games have relatively
          similar language complexity metrics, and share similar values with
          other types of video games and scripts.
        </p>
      </div>
    </VizWrapper>
  );
}

export default ComplexityPage;
