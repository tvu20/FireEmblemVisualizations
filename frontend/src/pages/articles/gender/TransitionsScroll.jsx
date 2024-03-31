import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import transitionsGray from "../../../assets/gender/transitions-bg.PNG";

import "./gender.css";
import "./transitions.css";

import { transitionImages } from "../../../utils/images";

function TransitionsScroll() {
  const [step, setStep] = useState("0");
  const [show, setShow] = useState(true);

  const onStepEnter = ({ data }) => {
    setStep(data);
    if (!show) {
      setShow(true);
    }
  };

  const onStepExit = ({ direction }) => {
    if (step === 12 && direction === "down") {
      setShow(false);
    }
    if (step === 1 && direction === "up") {
      setStep("0");
    }
  };

  const createBackground = () => {
    return (
      <>
        {transitionImages.map((item, index) => {
          return (
            <img
              id={`gt-${index}`}
              className={`gender-transitions-image gt-step-${step} gt-curve`}
              src={item}
              alt={item}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      <section className="gender-transitions">
        <div
          className="gender-transitions-bg-container"
          style={{ top: !show ? "-100vh" : "" }}
        >
          <div
            className="flex-legend transition-scroll-legend"
            style={{ marginBottom: "10px" }}
          >
            <div
              id="transition-mm"
              className={`flex-legend-item transition-legend-item tlegend-step-${step}`}
              key="M"
            >
              <div className="flex-legend-item-square"></div>
              <p style={{ margin: "0px", fontSize: "14px" }}>M-M</p>
            </div>

            <div
              id="transition-mf"
              className={`flex-legend-item transition-legend-item tlegend-step-${step}`}
            >
              <div className="flex-legend-item-square"></div>
              <p style={{ margin: "0px", fontSize: "14px" }}>M-F</p>
            </div>

            <div
              id="transition-fm"
              className={`flex-legend-item transition-legend-item tlegend-step-${step}`}
            >
              <div className="flex-legend-item-square"></div>
              <p style={{ margin: "0px", fontSize: "14px" }}>F-M</p>
            </div>

            <div
              id="transition-ff"
              className={`flex-legend-item transition-legend-item tlegend-step-${step}`}
            >
              <div className="flex-legend-item-square"></div>
              <p style={{ margin: "0px", fontSize: "14px" }}>F-F</p>
            </div>

            <div
              id="transition-ma"
              className={`flex-legend-item transition-legend-item tlegend-step-${step}`}
            >
              <div className="flex-legend-item-square"></div>
              <p
                style={{
                  margin: "0px",
                  fontSize: "14px",
                }}
              >
                M-A
              </p>
            </div>

            <div
              id="transition-am"
              className={`flex-legend-item transition-legend-item tlegend-step-${step}`}
            >
              <div className="flex-legend-item-square"></div>
              <p style={{ margin: "0px", fontSize: "14px" }}>A-M</p>
            </div>

            <div
              id="transition-fa"
              className={`flex-legend-item transition-legend-item tlegend-step-${step}`}
            >
              <div className="flex-legend-item-square"></div>
              <p style={{ margin: "0px", fontSize: "14px" }}>F-A</p>
            </div>

            <div
              id="transition-af"
              className={`flex-legend-item transition-legend-item tlegend-step-${step}`}
            >
              <div className="flex-legend-item-square"></div>
              <p style={{ margin: "0px", fontSize: "14px" }}>A-F</p>
            </div>
          </div>
          <div className={`gender-transitions-img-container gt-step-${step}`}>
            <img
              className={`gender-transitions-image gt-gray gt-step-${step}`}
              src={transitionsGray}
              alt={"tester"}
            />
            {/* <img
              className={`gender-transitions-image gt-gray gt-step-${step}`}
              src={transitionsGray}
              alt={"tester"}
            /> */}
            {createBackground()}
            {/* <img
              className={`gender-transitions-image gt-bars gt-step-${step}`}
              src={transitionsBars}
              alt={"tester"}
            />{" "}
            */}{" "}
          </div>
        </div>
        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={onStepExit}
          offset="400px"
        >
          <Step data={1}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  In Shadow Dragon and the Blade of Light, there were no
                  female-female transitions, meaning that that there was not a
                  single pair of subsequent dialogue lines between two female
                  characters in the entire game. Male-female and female-male
                  transitions occupied over 75% of the total transitions, with
                  male-male taking the remainder.
                </span>
              </div>
            </div>
          </Step>
          <Step data={2}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  Gaiden is the first game to feature two female characters
                  talking to each other. However, the amount of female-female
                  transitions is still abysmally low compared to all of the
                  other major categories: it is a third the amount of male-male
                  transitions and occupies only 10% of all the transitions in
                  the game.
                </span>
              </div>
            </div>
          </Step>
          <Step data={3}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  For the next series of games, spanning from Mystery of the
                  Emblem to Shadow Dragon, the transitions are generally split
                  50:50 between single-gender (male-male, female-female)
                  transitions and multiple gender (male-female, female-male)
                  transitions.
                </span>
              </div>
            </div>
          </Step>
          <Step data={4}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  Within the multiple gender transitions, the split is fairly
                  equal between male-female and female-male transitions
                  throughout these games.
                </span>
              </div>
            </div>
          </Step>
          <Step data={5}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  However, when looking at the single-gender transitions, the
                  amount of male-male transitions completely dwarfs the amount
                  of female-female. Radiant Dawn, the game with the closest
                  ratio, still has three times the amount of male-male
                  transitions as female-female.
                </span>
              </div>
            </div>
          </Step>
          <Step data={6}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  New Mystery introduced the presence of the Avatar, a character
                  that could present in male or female forms depending on the
                  player. The amount of male-female and female-male transitions
                  shrunk to accommodate this, but male-male transitions
                  continued to dominate the game. Since New Mystery was a remake
                  of an early title in the series, the majority of the game's
                  dialogue was still taken from the heavily male-dominant
                  transitions of FE1.
                </span>
              </div>
            </div>
          </Step>
          <Step data={7}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  The importance of the avatar character has increased as they
                  have been featured in subsequent games. While avatar
                  transitions only made up less than a third of all transitions
                  in New Mystery and Awakening, by fates, avatar transitions had
                  increased to over 50% of all transitions.
                </span>
              </div>
            </div>
          </Step>
          <Step data={8}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  We also start to see the effects of the avatar on other
                  transition categories: Awakening was the first game in the
                  series where the amount of female-female transitions was over
                  half the amount of male-male, as all the transition
                  percentages shrunk to accommodate for avatar dialogue. We see
                  further equalization of the male-male, male-female,
                  female-male, and female-female transitions in Fates, where the
                  amount of each was within 10% of the others.
                </span>
              </div>
            </div>
          </Step>

          <Step data={9}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  Over time, the presence of the avatar has caused the
                  percentages of each transition category to equalize. In New
                  Mystery, the first game featuring the avatar, male-male
                  transitions still dominated the dialogue; however, by Fates,
                  all eight transition categories are within 10% of each other,
                  with avatar transitions comprising over 50% of all transitions
                  in the game. If we count the avatar as (optionally) female,
                  Fates is the first game in the series where there are more
                  transitions featuring female characters than without.
                </span>
              </div>
            </div>
          </Step>
          <Step data={10}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  We see a return to previous form in Echoes - since it is a
                  fairly faithful adaptation of Gaiden, a very early game in the
                  series, male-led transitions once again dominate the dialogue
                  in the game - female-female transitions only make up 5% of the
                  entire script!
                </span>
              </div>
            </div>
          </Step>
          <Step data={11}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  However, the return of the avatar in Three Houses brings the
                  equalization of transition categories again: the percentages
                  of all eight transition variants within the game's script are
                  within 5% of each other.
                </span>
              </div>
            </div>
          </Step>
          <Step data={12}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  While the vast majority of dialogue transitions in games
                  throughout the series have been male-dominated, the
                  introduction of the avatar in recent games has led to a
                  greater equalization of transition types. As the series
                  continues to move towards the model of centralizing the avatar
                  in the story while highlighting more female characters in the
                  script, we will hopefully continue to see the amount of
                  female-led transitions improve in future games.
                </span>
              </div>
            </div>
          </Step>
        </Scrollama>
      </section>
    </>
  );
}

export default TransitionsScroll;
