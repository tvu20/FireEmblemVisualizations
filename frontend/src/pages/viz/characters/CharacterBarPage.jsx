import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import CharacterBar from "../../../visualizations/characters/CharacterBar";

import getColor from "../../../utils/colors";

import "./characters.css";

function CharacterBarPage() {
  return (
    <VizWrapper color="white" navColor={"#240607"}>
    {/* <VizWrapper color={getColor("characters")} navColor={"#240607"}> */}
      <div className="character-page characterbar">
        <h1>Gender Line Counts</h1>
        <p>Some description here.</p>
        <CharacterBar />
        {/* </VizWrapper> */}
      </div>
    </VizWrapper>
  );
}

export default CharacterBarPage;
