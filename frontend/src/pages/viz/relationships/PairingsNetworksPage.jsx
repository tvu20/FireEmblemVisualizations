import React, { useState } from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import Pairings from "../../../visualizations/relationships/Pairings";

import getColor from "../../../utils/colors";

import "./relationships.css";

function PairingsNetworksPage() {
  const [game, setGame] = useState("FE4-1");
  const [linkConstrain, setLinkConstrain] = useState(true);
  const [sortGender, setSortGender] = useState(true);
  return (
    <VizWrapper color={getColor("relationships")} navColor={"white"}>
      <div className="relationship-page support-networks">
        <h1>Pairing Networks</h1>
        <p>Some description here.</p>
        <p>Link Constraints</p>
        <input
          type="checkbox"
          checked={linkConstrain}
          onChange={(e) => setLinkConstrain((prevState) => !prevState)}
        />
        <p>Organize by Gender</p>
        <input
          type="checkbox"
          checked={sortGender}
          onChange={(e) => setSortGender((prevState) => !prevState)}
        />
        <select
          value={game}
          onChange={(e) => setGame(e.target.value)}
          style={{ marginBottom: "30px" }}
        >
          <option value="FE4-1">Genealogy, First Generation</option>
          <option value="FE4-2">Genealogy, Second Generation</option>
          <option value="FE6">The Binding Blade</option>
          <option value="FE7">The Blazing Blade</option>
          <option value="FE8">The Sacred Stones</option>
          <option value="FE10">Radiant Dawn</option>
          <option value="FE13">Awakening</option>
          <option value="FE14">Fates</option>
          <option value="FE15">Echoes</option>
          <option value="FE16">Three Houses</option>
        </select>
        <Pairings
          game={game}
          // constrain
          constrain={game === "FE16" && !linkConstrain ? false : true}
          moreStrength={game === "FE4-1" || game === "FE4-2" ? true : false}
          linkConstrain={linkConstrain}
          sortGender={sortGender}
        />
      </div>
    </VizWrapper>
  );
}

export default PairingsNetworksPage;
