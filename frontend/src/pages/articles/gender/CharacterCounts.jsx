import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import Description from "../../../components/articles/Description";

import "./gender.css";

import { genderCharCounts, genderNPCCounts } from "../../../utils/images";
import { gameFullTitles } from "../../../utils/games";

function CharacterCounts() {
  const [step, setStep] = useState("");

  const onStepEnter = ({ data }) => {
    setStep(data);
  };

  const createPCBackground = () => {
    return (
      <>
        {genderCharCounts.map((src, index) => {
          return (
            <div
              id={`gcc-game-${index}`}
              className={`gender-character-image-container gcc-step-${step}`}
            >
              <img src={src} alt={index} />
              <p>{gameFullTitles[index]}</p>
            </div>
          );
        })}
      </>
    );
  };

  const createNPCBackground = () => {
    return (
      <>
        {genderNPCCounts.map((src, index) => {
          return (
            <div
              id={`gcc-game-${index}`}
              className={`gender-character-image-container gcc-npc-step-${step}`}
            >
              <img src={src} alt={index} />
              <p>{gameFullTitles[index]}</p>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <section className="gender-character-counts">
        <div className="gender-character-bg-container">
          {createPCBackground()}
        </div>
        <Scrollama onStepEnter={onStepEnter} offset="400px">
          <Step data={1}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  Out of the first sixteen mainline games in the series…
                </span>
              </div>
            </div>
          </Step>
          <Step data={2}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  Only three games had a percentage of female characters
                  exceeding 40% of all playable characters.
                </span>
              </div>
            </div>
          </Step>
          <Step data={3}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  Each original entry in the series following{" "}
                  <Description tag="FE12">
                    <i>New Mystery of the Emblem</i>
                  </Description>{" "}
                  featured an <Description tag="avatar">Avatar</Description>{" "}
                  character who could potentially also count as female
                  representation depending on the player's choice.
                </span>
              </div>
            </div>
          </Step>
          <Step data={4}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  This means that if a female avatar is selected, players can
                  actually achieve a roster of over 50% female characters in{" "}
                  <Description tag="FE14">
                    <i>Fates</i>
                  </Description>{" "}
                  and{" "}
                  <Description tag="FE13">
                    <i>Awakening.</i>
                  </Description>
                </span>
              </div>
            </div>
          </Step>
        </Scrollama>
      </section>

      <div className="gender-step-single-col gcc-short-col">
        <div className="gender-character-tapewrapper">
          <span>
            However, these percentages are significantly worse when looking at{" "}
            <Description tag="NPC">non-playable characters</Description>.
          </span>
        </div>
      </div>

      <section
        className="gender-character-counts"
        style={{ marginBottom: "100px" }}
      >
        <div className="gender-character-bg-container">
          {createNPCBackground()}
        </div>
        <Scrollama onStepEnter={onStepEnter} offset="400px">
          <Step data={5}>
            <div className="gender-step-single-col gcc-short-col">
              <div className="gender-character-tapewrapper">
                <span>
                  The maximum percentage of female NPCs within any single game
                  is 19.5% in <Description tag="FE15">Echoes</Description>. The
                  next highest percentage (18.75%) belongs to{" "}
                  <Description tag="FE2">Gaiden,</Description> the original
                  version of <i>Echoes.</i> Both games feature a significant
                  subplot with a female enemy faction.
                </span>
              </div>
            </div>
          </Step>
          <Step data={6}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  Over half of the remaining games have female NPC percentages
                  of below 10%, and this has remained consistent over time. This
                  number is so low because the majority of NPCs
                  are <Description tag="boss">bosses</Description> or other
                  enemy characters, and most bosses across the series are male.
                </span>
              </div>
            </div>
          </Step>
        </Scrollama>
      </section>
    </>
  );
}

export default CharacterCounts;
