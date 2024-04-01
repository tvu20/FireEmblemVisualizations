import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import GenderCharCounts from "../../../visualizations/gender/GenderCharCounts";

import getColor from "../../../utils/colors";

import "./gender.css";
import Description from "../../../components/articles/Description";

function GenderCharCountsPage() {
  return (
    <VizWrapper color={getColor("gender")} navColor={"#3b2708"}>
      <div className="article gender-page gendercharcounts">
        <h1>Character Counts and Gender</h1>
        <p>
          See how the amount of characters across different genders has changed
          over the series’ history.
        </p>
        <GenderCharCounts />
        {/* </VizWrapper> */}
        <p>
          The first graph displays the percentage of total female characters per
          game, depending on character category. The default category, “Playable
          Characters”, only includes female characters that can explicitly be
          controlled by the player. You can also select either{" "}
          <Description tag="NPC">“Non-Playable Characters”,</Description>{" "}
          encompassing all named characters in the game that can’t be controlled
          in battle gameplay, or “All Characters”, which combines the total of
          both previous categories. The highest percentage of female characters
          in any one game is notated.
          <br /> <br />
          The second visualization is a series of graphs where each represents
          the playable character gender distribution in a single game. Each dot
          corresponds to a single with each dot corresponding to a single
          playable character: pink and blue dots correspond to female and male
          characters respectively, while yellow dots representing{" "}
          <Description tag="avatar">avatar characters</Description> appear in{" "}
          <Description tag="FE12">
            <i>New Mystery</i>
          </Description>
          onwards. Most games in the series hover between 30-40% female playable
          characters, with the highest recorded percentage of female PC being
          50% in <Description tag="FE13">Awakening</Description> and{" "}
          <Description tag="FE14">Fates</Description>.
        </p>
      </div>
    </VizWrapper>
  );
}

export default GenderCharCountsPage;
