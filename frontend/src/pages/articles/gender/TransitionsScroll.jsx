import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import Description from "../../../components/articles/Description";

import transitionsGray from "../../../assets/gender/transitions-gray.png";
import transitionsBars from "../../../assets/gender/transitions-bars.png";

import "./gender.css";
import "./transitions.css";

import { femaleMainCharacters, transitionImages } from "../../../utils/images";
import { gameFullTitles } from "../../../utils/games";

function TransitionsScroll() {
  const [step, setStep] = useState("");
  const [show, setShow] = useState(true);

  const onStepEnter = ({ data }) => {
    setStep(data);
    if (!show) {
      setShow(true);
    }
  };

  const onStepExit = ({ direction }) => {
    if (step === 5 && direction === "down") {
      setShow(false);
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
            // <div
            //   className={`gender-transitions-image-container gt-step-${step} gt-${index}`}
            // >
            //   <img src={item} alt={item} />
            // </div>
          );
        })}
        {/* {femaleMainCharacters.map((item, index) => {
          return (
            <div
              className={`gender-femalemain-image-container gfm-step-${step} ${
                item.princess === "Y" ? "gfm-princess" : ""
              } ${item.cat ? "gfm-" + item.cat : ""}`}
            >
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          );
        })} */}
      </>
    );
  };

  return (
    <>
      {/* <div className="gender-step-single-col gcc-short-col">
        <div className="gender-character-tapewrapper">
          <span>
            How about significant female characters that don’t assume the roles
            of lords within their own games?
          </span>
        </div>
      </div> */}
      <section className="gender-transitions">
        <div
          className="gender-transitions-bg-container"
          style={{ top: !show ? "-100vh" : "" }}
        >
          <div className={`gender-transitions-img-container gt-step-${step}`}>
            <img
              className={`gender-transitions-image gt-gray gt-step-${step}`}
              src={transitionsGray}
              alt={"tester"}
            />
            {createBackground()}
            <img
              className={`gender-transitions-image gt-bars gt-step-${step}`}
              src={transitionsBars}
              alt={"tester"}
            />
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
                  female-female transitions. This means that there was not a
                  single pair of subsequent dialogue lines between two female
                  characters in the entire game.
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
                  other major categories (male-male, female-male, and
                  male-female).
                </span>
              </div>
            </div>
          </Step>
          <Step data={3}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  In this next span, approximately half of the transitions in
                  each game are male-female or female-male, with the rest being
                  divided into male-male or female-female.
                </span>
              </div>
            </div>
          </Step>
          <Step data={4}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  For all of these, the amount of male-male transitions
                  completely dwarfs the amount of female-female. The game with
                  the closest ratio still has four times the amount of male-male
                  transitions as female-female.
                </span>
              </div>
            </div>
          </Step>
          <Step data={5}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  New Mystery introduced the presence of the Avatar, a character
                  that could present in male or female forms depending on the
                  player. Despite this, the overall percentage of male-male
                  transitions as opposed to other transitions does not deviate
                  significantly: this may be due to the fact that this game is a
                  remake of an early title in the series.
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
