import React, { useState } from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import TransitionsGame from "../../../visualizations/gender/TransitionsGame";

import {
  getGameShortenedTitles,
  getGameTitles,
  getYearFromCode,
} from "../../../utils/games";
import getColor from "../../../utils/colors";

import "./gender.css";

function TransitionsGamePage() {
  const [game, setGame] = useState("FE6");

  const createSelect = () => {
    const codes = getGameTitles();
    const short = getGameShortenedTitles();

    return codes.map((c, i) => {
      return (
        <option value={c} key={c}>
          {short[i]} ({getYearFromCode(c)})
        </option>
      );
    });
  };
  return (
    <VizWrapper color={getColor("gender")} navColor={"#123622"}>
      <div className="article gender-page gendertransitions">
        <h1>Transitions in a Game</h1>
        <p>
          Visualize how much characters of different genders talk to each other
          using flow diagrams.
        </p>
        <select
          className="select-dropdown"
          value={game}
          onChange={(e) => setGame(e.target.value)}
          style={{ marginBottom: "30px" }}
        >
          {createSelect()}
        </select>
        <TransitionsGame game={game} />
        <p style={{ marginTop: "50px" }}>
          How much do characters of different genders talk to each other? We can
          visualize these dialogue transitions (the genders of the first- and
          second- speaking characters in a dialogue pair) using these flow
          diagrams!
          <br />
          <br />
          The left side of the flow diagram represent the number of dialogue
          pairs starting either with male, female, neutral, or avatar speakers,
          while the right side represents the number of dialogue pairs ending
          with one of these categories. Select a game from the dropdown menu to
          visualize its transitions and see how these patterns have changed over
          time. Hover over one of the bars on the left to visualize the flow
          between the left and right sides of the graph, or hover over one of
          the gray flows in the center of the graph to see the numerical
          quantity of transitions per category.
        </p>
      </div>
    </VizWrapper>
  );
}

export default TransitionsGamePage;
