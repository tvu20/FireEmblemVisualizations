import React, { useState } from "react";
import { Scrollama } from "react-scrollama";

import "./dev.css";

function DevScroll(props) {
  const { updateYear } = props;
  const [currentImage, setCurrentImage] = useState("")
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data.id);
    setCurrentImage(data.img)
    updateYear(data.year);
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
          {props.children}
        </Scrollama>
      </div>
      <div className="dev-scroll-graphic">
        <img src={currentImage} alt="FE" />
        {/* <p>{currentStepIndex}</p> */}
      </div>
    </div>
  );
}

export default DevScroll;
