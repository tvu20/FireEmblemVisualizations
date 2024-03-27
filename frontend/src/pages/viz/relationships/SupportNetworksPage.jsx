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
      <div className="article relationship-page support-networks">
        <h1>Support Networks</h1>
        <p>Visualize the support relationships social networks in each game.</p>
        <select
          className="select-dropdown"
          value={game}
          onChange={(e) => setGame(e.target.value)}
          style={{ marginBottom: "10px" }}
        >
          <option value="FE6">The Binding Blade (2002)</option>
          <option value="FE7">The Blazing Blade (2003)</option>
          <option value="FE8">The Sacred Stones (2004)</option>
          <option value="FE9">Path of Radiance (2005)</option>
          <option value="FE13">Awakening (2012)</option>
          <option value="FE14">Fates (2015)</option>
          <option value="FE15">Echoes (2017)</option>
          <option value="FE16">Three Houses (2019)</option>
        </select>
        <span className="checkbox-label networks-checkbox">
          <input
            type="checkbox"
            checked={linkConstrain}
            onChange={(e) => setLinkConstrain((prevState) => !prevState)}
          />{" "}
          Link constraints
        </span>
        <Supports
          game={game}
          constrain={game === "FE15" || game === "FE6" ? true : false}
          linkConstrain={linkConstrain}
        />
        <p>
          One of the most iconic game mechanics in the Fire Emblem series is the
          Support system: the ability to level up the relationship between two
          characters in order to unlock in-game bonuses and conversations. The
          support conversation feature was initially introduced in Fire Emblem
          6, The Blazing Blade, and has since become a staple of the franchise.
          <br />
          <br />
          This series of network graphs illustrates the available support
          relationships between characters in each game where the support system
          is available. Select a game in the dropdown menu to visualize its
          relationships. These graphs are modeled off of social network graphs,
          with each node (dot) of the graph representing a character and links
          between nodes representing the presence of a support between two
          characters. Color of the node represents the gender of the character -
          pink and blue for female and male, and yellow for Avatar
          (customizable) characters.
          <br />
          <br />
          Hover over any node to better visualize supports for a certain
          character, or drag nodes around to view different angles of the graph.
          And for a different viewing experience, check the box to see what the
          graph looks like with normalized links (each link between characters
          must remain the same length!).
        </p>
      </div>
    </VizWrapper>
  );
}

export default SupportNetworksPage;
