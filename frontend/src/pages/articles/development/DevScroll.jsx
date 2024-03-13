import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import "./dev.css";

const CONTENT = [
  {
    year: 1990,
    html: "<p>Fire Emblem: Shadow Dragon and the Blade of Light (FE1) is released as a Japan-exclusive title on the Famicom, developed by gaming company Intelligent Systems (IS) and led by creator Shouzou Kaga. Kaga conceived the game as a blend of strategic elements from previous wargames and the story, characters, and world of a traditional role-playing game. Like most other games at the time, the core game mechanics and story background were described in an instruction manual provided for the player. </p>",
    img: "https://images.nintendolife.com/43b03aacdb3dd/fire-emblem-shadow-dragon-and-the-blade-of-light-cover.cover_large.jpg",
  },
  {
    year: 1990,
    html: "<p>The scale of the game, with 52 playable characters and over 25 chapters, each consisting of dialogue and a battle map, forced the development team to find ways around memory storage issues and compromise on the graphics and storyline, as they were working with the 8-bit Famicom console.</p><p>Even with compromises made, the text content in Shadow Dragon and the Blade of Light still exceeded the limits of the Famicom game cartridges, so IS created a new chip for the cartridge with Nintendo’s help that could processes and display Japanese text, using the portion of memory originally dedicated to saving games on the cartridge.</p> ",
    img: "https://images.nintendolife.com/43b03aacdb3dd/fire-emblem-shadow-dragon-and-the-blade-of-light-cover.cover_large.jpg",
  },
  {
    year: 1990,
    html: "<p>Therefore, the game progressed in a linear fashion, with maps and dialogue being unlocked as dictated by the storyline. Kaga wanted to alleviate the linear feel of the campaign but was unable to do due to storage limitations. Additionally, the development team had originally intended to create “setpiece” graphics for key moments of the story, but were forced to streamline the graphics of the game due to lack of memory. The end result was a game that was not visually impressive, something the developers regretted later. </p>",
    img: "https://images.nintendolife.com/43b03aacdb3dd/fire-emblem-shadow-dragon-and-the-blade-of-light-cover.cover_large.jpg",
  },
  {
    year: 1992,
    html: "<p>Fire Emblem Gaiden is released as a sequel to FE1. This was the first game in the series to feature gameplay between battles in the form of a navigable map. Kaga deliberately designed Gaiden to address issues with the first game, removing some of the more strategic elements of gameplay while adding the navigable map and more role-playing elements. </p><p>Partially in response to the memory problems faced with the first game, Intelligent Systems developed the MMC4 chip, was used exclusively for some Fire Emblem titles. This allowed the company to have a little more leeway with storage in this game’s development. </p>",
    img: "https://images.nintendolife.com/43b03aacdb3dd/fire-emblem-shadow-dragon-and-the-blade-of-light-cover.cover_large.jpg",
  },
];

function DevScroll(props) {
  const steps = [10, 20, 30];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data.id);
  };
  return (
    <div className="dev-scroll-container">
      <div className="dev-scroller">
        <Scrollama
          onStepEnter={onStepEnter}
          //   onStepExit={onStepExit}
          progress
          //   onStepProgress={onStepProgress}
          offset="400px"
          debug
        >
          {CONTENT.map((value, index) => {
            return (
              <Step data={{ ...value, id: index }} key={value}>
                <div
                  className="dev-scroller-step"
                  dangerouslySetInnerHTML={{ __html: value.html }}
                ></div>
              </Step>
            );
          })}
        </Scrollama>
      </div>
      <div className="dev-scroll-graphic">
        <p>{currentStepIndex}</p>
      </div>
    </div>
  );
}

export default DevScroll;
