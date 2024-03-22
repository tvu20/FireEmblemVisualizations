import React, { useState } from "react";
import { Scrollama } from "react-scrollama";

import { emotionGraph } from "../../../utils/storytelling";
import fullGraph from "../../../assets/storytelling/emotion-graph-full.png";

import "./storytelling.css";

function EmotionTrajectory(props) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    // setCurrentImage(data.img);
  };
  //   console.log(currentStepIndex);

  return (
    <div className="story-scroll-container">
      <div className="story-scroll-graphic">
        <img src={fullGraph} alt="test"></img>
      </div>
      <div className="story-scroll-emotion-container">
        <div
          className={`story-scroll-emotion-popup ${
            currentStepIndex === 2 ? "visible" : ""
          }`}
        >
          <img src={emotionGraph[0]} alt="img1" />
          {/* <p>blah blah blah 1</p> */}
        </div>
      </div>
      <div className="story-scroll-emotion-container">
        <div
          className={`story-scroll-emotion-popup ${
            currentStepIndex === 3 ? "visible" : ""
          }`}
        >
          {/* <p>blah blah blah 2</p> */}
          <img src={emotionGraph[1]} alt="img1" />
        </div>
      </div>
      <div className="story-scroll-emotion-container">
        <div
          className={`story-scroll-emotion-popup ${
            currentStepIndex === 4 ? "visible" : ""
          }`}
        >
          {/* <p>blah blah blah 3</p> */}
          <img src={emotionGraph[2]} alt="img1" />
        </div>
      </div>
      <div className="story-scroll-emotion-container">
        <div
          className={`story-scroll-emotion-popup ${
            currentStepIndex === 5 ? "visible" : ""
          }`}
        >
          {/* <p>blah blah blah 3</p> */}
          <img src={emotionGraph[3]} alt="img1" />
        </div>
      </div>
      <div className="story-scroll-emotion-container">
        <div
          className={`story-scroll-emotion-popup ${
            currentStepIndex === 6 ? "visible" : ""
          }`}
        >
          {/* <p>blah blah blah 3</p> */}
          <img src={emotionGraph[4]} alt="img1" />
        </div>
      </div>
      <div className="story-scroller fullscreen">
        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={props.onStepExit ? props.onStepExit : () => {}}
          progress
          offset={props.offset ? props.offset : "400px"}
          debug
        >
          {props.children}
        </Scrollama>
      </div>
      {/* <div className="rel-scroll-graphic">
        <img src={temp} alt="test"></img>
      </div> */}
    </div>
  );
}

export default EmotionTrajectory;
