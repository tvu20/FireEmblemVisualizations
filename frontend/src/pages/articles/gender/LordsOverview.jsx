import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import Description from "../../../components/articles/Description";

import "./gender.css";
import "./lordsoverview.css";

import { genderCharCounts, lordsOverview } from "../../../utils/images";
import { gameFullTitles } from "../../../utils/games";

function LordsOverview() {
  const [step, setStep] = useState("1");
  const [show, setShow] = useState(true);

  const onStepEnter = ({ data }) => {
    setStep(data);
    if (!show) {
      setShow(true);
    }
  };

  const onStepExit = ({ direction }) => {
    if (step === 3 && direction === "down") {
      setShow(false);
    }
  };

  const createLordBackground = () => {
    return (
      <>
        {lordsOverview.map((data, index) => {
          return (
            <div
              id={`gender-lord-${data.name}`}
              className={`gender-lordoverview-img-container glo-step-${step} glo-gender-${data.gender}`}
            >
              <img src={data.img} alt={data.name} />
              {/* {data.name} */}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <section className="gender-lord-overview">
      <div
        className="gender-lordoverview-bg-container"
        style={{ top: !show ? "-100vh" : "" }}
        // style={{ opacity: !show ? "0" : "1" }}
      >
        {createLordBackground()}
      </div>
      <Scrollama
        onStepEnter={onStepEnter}
        onStepExit={onStepExit}
        offset="400px"
        debug
      >
        <Step data={1}>
          <div className="gender-step-single-col half-width">
            <div className="gender-character-tapewrapper">
              <span>
                In the Fire Emblem series, the most important protagonists of
                each game are known as the{" "}
                <Description tag="lord">Lords</Description>: characters that
                force a game over when they die and have the strongest active
                contributions to the game’s story.
              </span>
            </div>
            <div className="gender-character-tapewrapper addendum">
              <span>
                Even this choice in verbage demonstrates the historical lack of
                female main protagonist representation.{" "}
              </span>
            </div>
          </div>
        </Step>
        <Step data={2}>
          <div className="gender-step-single-col half-width">
            <div className="gender-character-tapewrapper">
              <span>
                Across the first sixteen games, there have been 18 male lords, 7
                female lords and 4{" "}
                <Description tag="avatar">avatars</Description>. Excluding
                duplicates across multiple games, there have been 13 unique male
                lords compared to 6 unique female lords and 4 avatars.
              </span>
            </div>
            <div className="gender-character-tapewrapper addendum">
              <span>
                This means that every single game in the series has the option
                of a male protagonist, while only 9 (slightly over half) of the
                games has the option of a female protagonist!
              </span>
            </div>
          </div>
        </Step>
        <Step data={3}>
          <div className="gender-step-single-col half-width">
            <div className="gender-character-tapewrapper">
              <span>
                Among the female lords, how important are each of them to their
                games in comparison to the male lords? We will analyze the
                importance of each character through two metrics: the amount
                that they are featured within the game’s script, and their
                importance on the game’s cover.
              </span>
            </div>
          </div>
        </Step>
      </Scrollama>
    </section>
  );
}

export default LordsOverview;
