import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import "./gender.css";

import { femaleMainCharacters } from "../../../utils/images";

function FemaleMainChars() {
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

  const createPCBackground = () => {
    return (
      <>
        {femaleMainCharacters.map((item, index) => {
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
        })}
      </>
    );
  };

  return (
    <>
      <div className="gender-step-single-col gcc-short-col">
        <div className="gender-character-tapewrapper">
          <span>
            How about significant female characters that don’t assume the roles
            of lords within their own games?
          </span>
        </div>
      </div>
      <section className="gender-female-mainchars">
        <div
          className="gender-femalemain-bg-container"
          style={{ top: !show ? "-100vh" : "" }}
        >
          {createPCBackground()}
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
                  Excluding lords and without double-counting characters across
                  games, thirteen female characters have reached the top five of
                  highest spoken line counts within their games.
                </span>
              </div>
            </div>
          </Step>
          <Step data={2}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  Out of these women, five of them are considered as family
                  members to a main lord in their own games.
                </span>
              </div>
            </div>
          </Step>
          <Step data={3}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  Out of these women, three of them are considered primary love
                  interests to the main lord.
                </span>
              </div>
            </div>
          </Step>
          <Step data={4}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>Out of these women, eight of them are princesses.</span>
              </div>
            </div>
          </Step>
          <Step data={5}>
            <div className="gender-step-single-col">
              <div className="gender-character-tapewrapper">
                <span>
                  And every single one of these thirteen women falls into at
                  least one of these three categories: family member, love
                  interest, and princess.
                </span>
              </div>
            </div>
          </Step>
        </Scrollama>
      </section>
    </>
  );
}

export default FemaleMainChars;
