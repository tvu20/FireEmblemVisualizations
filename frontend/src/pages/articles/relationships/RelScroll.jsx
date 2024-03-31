import React, { useState } from "react";
import { Scrollama } from "react-scrollama";

import { supportImages } from "../../../utils/images";

import "./relationships.css";

import legend from "../../../assets/relationships/legend-colors.png";

function RelScroll(props) {
  const [currentImage, setCurrentImage] = useState(supportImages[0]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    setCurrentImage(supportImages[data - 1]);
    // setCurrentImage(data.img);
  };
  //   console.log(currentStepIndex);

  return (
    <div className="rel-scroll-container">
      <div
        className="rel-scroll-graphic"
        // style={{ top: !show ? "-100vh" : "" }}
        // style={{ opacity: !show ? "0" : "1" }}
      >
        <img src={legend} alt="test" className="rel-scroll-legend-color"></img>
        <img src={currentImage} alt="test"></img>
      </div>
      <div className="rel-scroller">
        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={props.onStepExit ? props.onStepExit : () => {}}
          progress
          offset="400px"
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

export default RelScroll;
