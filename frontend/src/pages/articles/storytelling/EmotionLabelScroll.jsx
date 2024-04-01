import React, { useState } from "react";
import { Scrollama } from "react-scrollama";

import "./storytelling.css";

import EmotionLabelPopups from "./EmotionLabelPopups";
import SentimentLabelPopups from "./SentimentLabelPopups";

function EmotionLabelScroll(props) {
  const { type } = props;
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    // setCurrentImage(data.img);
  };
  //   console.log(currentStepIndex);

  const onStepExit = (event) => {
    setCurrentStepIndex(-1);
    props.onStepExit(event);
  };

  return (
    <div className="story-scroll-container">
      {type === "emotion" && <EmotionLabelPopups id={currentStepIndex} />}
      {type === "sentiment" && <SentimentLabelPopups id={currentStepIndex} />}
      <div className="story-scroller">
        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={onStepExit}
          progress
          offset="400px"
        >
          {props.children}
        </Scrollama>
      </div>
    </div>
  );
}

export default EmotionLabelScroll;
