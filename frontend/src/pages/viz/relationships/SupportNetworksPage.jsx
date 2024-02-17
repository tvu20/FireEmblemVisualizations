import React, { useState } from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import Supports from "../../../visualizations/relationships/Supports";

import getColor from "../../../utils/colors";

import "./relationships.css";

function SupportNetworksPage() {
  const [game, setGame] = useState("FE6");
  const [linkConstrain, setLinkConstrain] = useState(false);
  return (
    <VizWrapper color={getColor("relationships")} navColor={"white"}>
      <div className="relationship-page support-networks">
        <h1>Support Networks</h1>
        <p>Some description here.</p>
        <input
          type="checkbox"
          checked={linkConstrain}
          onChange={(e) => setLinkConstrain((prevState) => !prevState)}
        />
        <select
          value={game}
          onChange={(e) => setGame(e.target.value)}
          style={{ marginBottom: "30px" }}
        >
          <option value="FE6">The Binding Blade</option>
          <option value="FE7">The Blazing Blade</option>
          <option value="FE8">The Sacred Stones</option>
          <option value="FE9">Path of Radiance</option>
          <option value="FE13">Awakening</option>
          <option value="FE14">Fates</option>
          <option value="FE15">Echoes</option>
          <option value="FE16">Three Houses</option>
        </select>
        <Supports
          game={game}
          constrain={game === "FE15" || game === "FE6" ? true : false}
          linkConstrain={linkConstrain}
        />
      </div>
    </VizWrapper>
  );
}

export default SupportNetworksPage;
