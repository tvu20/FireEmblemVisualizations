import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import transitionsGray from "../../../assets/gender/transitions-bg.PNG";
import Description from "../../../components/articles/Description";

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
            {createBackground()}
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
                  In{" "}
                  <Description tag="FE1">
                    <i>Shadow Dragon and the Blade of Light</i>
                  </Description>
                  , there were no F-F transitions, meaning that that there was
                  not a single pair of subsequent dialogue lines between two
                  female characters in the entire game. M-F and F-M transitions
                  occupied over 75% of the total transitions, with M-M taking
                  the remainder.
                </span>
              </div>
            </div>
          </Step>
          <Step data={2}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  <Description tag="FE2">
                    <i>Gaiden</i>
                  </Description>{" "}
                  is the first game to feature two female characters talking to
                  each other. However, the amount of F-F transitions is still
                  abysmally low compared to all of the other major categories:
                  it is a third the amount of M-M transitions and occupies only
                  10% of all the transitions in the game.
                </span>
              </div>
            </div>
          </Step>
          <Step data={3}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  For the next series of games, spanning from{" "}
                  <Description tag="FE3">
                    <i>Mystery of the Emblem</i>
                  </Description>{" "}
                  to{" "}
                  <Description tag="FE11">
                    <i>Shadow Dragon</i>
                  </Description>
                  , the transitions are generally split 50:50 between
                  single-gender (M-M, F-F) transitions and multiple gender (M-F,
                  F-M) transitions.
                </span>
              </div>
            </div>
          </Step>
          <Step data={4}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  Within the multi-gender transitions, the split is fairly equal
                  between M-F and F-M transitions throughout these games.
                </span>
              </div>
            </div>
          </Step>
          <Step data={5}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  However, when looking at single-gender transitions, the amount
                  of M-M transitions dwarfs the amount of F-F.{" "}
                  <Description tag="FE10">
                    <i>Radiant Dawn</i>
                  </Description>
                  , the game with the closest ratio, still has three times the
                  amount of M-M transitions as F-F.
                </span>
              </div>
            </div>
          </Step>
          <Step data={6}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  <Description tag="FE12">
                    <i>New Mystery</i>
                  </Description>{" "}
                  introduced the <Description tag="avatar">Avatar</Description>,
                  a character that could present in male or female forms
                  depending on the player. The amount of M-F and F-M transitions
                  shrunk to accommodate this, but M-M transitions continued to
                  dominate the game. Since <i>New Mystery</i> was a remake of an
                  early title in the series, the majority of the game's dialogue
                  was still taken from the heavily male-dominant transitions of{" "}
                  <Description tag="FE1">
                    <i>Shadow Dragon and the Blade of Light</i>
                  </Description>
                  .
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
                  in <i>New Mystery</i> and{" "}
                  <Description tag="FE13">
                    <i>Awakening</i>
                  </Description>
                  , avatar transitions had increased to over 50% of all
                  transitions in{" "}
                  <Description tag="FE14">
                    <i>Fates</i>
                  </Description>
                  .
                </span>
              </div>
            </div>
          </Step>
          <Step data={8}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  We also start to see the effects of the avatar on other
                  transition categories: <i>Awakening</i> was the first game in
                  the series where the amount of F-F transitions was over half
                  the amount of M-M, as all the transition percentages shrunk to
                  accommodate for avatar dialogue. We see further equalization
                  of the M-M, M-F, F-M, and F-F transitions in <i>Fates</i>,
                  where the amount of each was within 10% of the others.
                </span>
              </div>
            </div>
          </Step>

          <Step data={9}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  In <i>New Mystery</i>, the first game featuring the avatar,
                  M-M transitions still dominate the dialogue.However, by{" "}
                  <i>Fates</i>, all eight transition categories are within 10%
                  of each other, with avatar transitions comprising over 50% of
                  all transitions in the game. If we count the avatar as
                  (optionally) female, <i>Fates</i> is the first game in the
                  series where there are more transitions featuring female
                  characters than without.
                </span>
              </div>
            </div>
          </Step>
          <Step data={10}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  We see a return to the previous pattern in{" "}
                  <Description tag="FE15">
                    <i>Echoes</i>
                  </Description>
                  , since it is an adaptation of <i>Gaiden</i>, a very early
                  game in the series. Male-led transitions once again dominate
                  the dialogue in the game; F-F transitions only make up 5% of
                  the entire script!
                </span>
              </div>
            </div>
          </Step>
          <Step data={11}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  The return of the avatar in{" "}
                  <Description tag="FE16">
                    <i>Three Houses</i>
                  </Description>{" "}
                  brings the equalization of transition categories again: the
                  percentages of all eight transition variants within the game's
                  script are within 5% of each other.
                </span>
              </div>
            </div>
          </Step>
          <Step data={12}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  As the series continues to favor the model of centralizing the
                  avatar in the story while highlighting more female characters
                  in the script, we will hopefully continue to see the amount of
                  female-led transitions grow in future games.
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
