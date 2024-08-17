import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import CharacterBar from "../../../visualizations/characters/CharacterBar";

import getColor from "../../../utils/colors";

import "./characters.css";

function CharacterBarPage() {
  return (
    <VizWrapper
      color={getColor("characters")}
      navColor={"#240607"}
      icon={"CHARACTER"}
    >
      <div className="article character-page characterbar">
        <h1>Character Bar Chart</h1>
        <p>See the full list of Fire Emblem characters.</p>
        <CharacterBar />
        <p>
          Who exactly are the characters that make up the casts of each game?
          <span className="viz__highlight">
            Scroll horizontally to see the full roster of playable characters
            across each game, and click on a particular character’s icon to
            learn more about them!
          </span>
        </p>
      </div>
    </VizWrapper>
  );
}

export default CharacterBarPage;
