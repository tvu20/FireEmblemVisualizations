import React, { useState } from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import Pairings from "../../../visualizations/relationships/Pairings";

import getColor from "../../../utils/colors";

import "./relationships.css";
import Description from "../../../components/articles/Description";

function PairingsNetworksPage() {
  const [game, setGame] = useState("FE4-1");
  const [linkConstrain, setLinkConstrain] = useState(true);
  const [sortGender, setSortGender] = useState(true);
  return (
    <VizWrapper
      color={getColor("relationships")}
      navColor={"white"}
      icon={"RELATIONSHIPS"}
    >
      <div className="article relationship-page support-networks">
        <h1>Pairing Networks</h1>
        <p>Visualize the support relationships social networks in each game.</p>
        <select
          className="select-dropdown"
          value={game}
          onChange={(e) => setGame(e.target.value)}
          style={{ marginBottom: "10px" }}
        >
          <option value="FE4-1">Genealogy, First Generation (1996)</option>
          <option value="FE4-2">Genealogy, Second Generation (1996)</option>
          <option value="FE6">The Binding Blade (2002)</option>
          <option value="FE7">The Blazing Blade (2003)</option>
          <option value="FE8">The Sacred Stones (2004)</option>
          <option value="FE10">Radiant Dawn (2007)</option>
          <option value="FE13">Awakening (2012)</option>
          <option value="FE14">Fates (2015)</option>
          <option value="FE15">Echoes (2017)</option>
          <option value="FE16">Three Houses (2019)</option>
        </select>
        <span
          className="checkbox-label networks-checkbox"
          style={{ marginBottom: "0px" }}
        >
          <input
            type="checkbox"
            checked={linkConstrain}
            onChange={(e) => setLinkConstrain((prevState) => !prevState)}
          />{" "}
          Link constraints
        </span>
        <span className="checkbox-label networks-checkbox">
          <input
            type="checkbox"
            checked={sortGender}
            onChange={(e) => setSortGender((prevState) => !prevState)}
          />{" "}
          Organize by Gender
        </span>
        <Pairings
          game={game}
          // constrain
          constrain={game === "FE16" && !linkConstrain ? false : true}
          moreStrength={game === "FE4-1" || game === "FE4-2" ? true : false}
          linkConstrain={linkConstrain}
          sortGender={sortGender}
        />
        <p>
          One of the staple mechanics of the <i>Fire Emblem</i> series is the
          ability to pair off characters, often resulting in “paired ending”
          screens where two characters will share a happily-ever-after (or not)
          following the conclusion of the main story. While the pairing mechanic
          initially was reserved for romantic couples, over the series’ history
          it has expanded to include familial relationships, platonic
          relationships, and even some that are less clear-cut. While often
          associated with the{" "}
          <Description tag="support">Support game mechanic</Description>, not
          all characters that share supports can necessarily end up together.
          <br />
          <br />
          This series of network graphs illustrates the available paired endings
          between characters in each game where the pairing mechanic is
          available.{" "}
          <span className="viz__highlight">
            Select a game in the dropdown menu to visualize its relationships.
          </span>{" "}
          These graphs are modeled off of social network graphs, with each node
          (dot) of the graph representing a character and links between nodes
          representing the presence of a support between two characters. The
          color of the node represents the gender of the character - pink and
          blue for female and male, and yellow for Avatar (customizable)
          characters. The link color corresponds to the type of relationship -
          early games only feature romantic (red/pink) relationships, while
          other categories of relationships are available from{" "}
          <Description tag="FE7">
            <i>The Blazing Blade</i>
          </Description>{" "}
          onwards: platonic (green), familial (yellow), and ambiguously
          platonic/romantic (purple).
          <br />
          <br />
          <span className="viz__highlight">
            Hover over any node to better visualize supports for a certain
            character, or drag nodes around to view different angles of the
            graph.
          </span>{" "}
          And for some different viewing experiences,{" "}
          <span className="viz__highlight">
            check the first box to see what the graph looks like with normalized
            links
          </span>{" "}
          (each link between characters must remain the same length!), and{" "}
          <span className="viz__highlight">
            the second box to group character nodes based on gender
          </span>{" "}
          (this makes it easier to see relationships between same-gender vs
          different-gender pairings!).
        </p>
      </div>
    </VizWrapper>
  );
}

export default PairingsNetworksPage;
