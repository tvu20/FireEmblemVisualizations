import React, { useState } from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import TransitionsGame from "../../../visualizations/gender/TransitionsGame";

import { getGameShortenedTitles, getGameTitles } from "../../../utils/games";
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
          {short[i]}
        </option>
      );
    });
  };
  return (
    <VizWrapper color={getColor("gender")} navColor={"#123622"}>
      <div className="gendertransitions">
        <h1>Transitions in a Game</h1>
        <p>Some description here.</p>
        <select
          value={game}
          onChange={(e) => setGame(e.target.value)}
          style={{ marginBottom: "30px" }}
        >
          {createSelect()}
        </select>
        <TransitionsGame game={game} />
      </div>
    </VizWrapper>
  );
}

export default TransitionsGamePage;
