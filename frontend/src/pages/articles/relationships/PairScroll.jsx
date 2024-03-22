import React, { useState } from "react";
import { Scrollama } from "react-scrollama";

import { pairingImages } from "../../../utils/pairings";

import "./relationships.css";

import legend from "../../../assets/relationships/legend-full.png";
import temp from "../../../assets/relationships/fe7-eliwood-supports.png";
import PairingPopups from "./PairingPopups";

function PairScroll(props) {
  const [currentImage, setCurrentImage] = useState("");
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    setCurrentImage(pairingImages[data] || temp);
    // setCurrentImage(data.img);
  };
  //   console.log(currentStepIndex);

  const onStepExit = (event) => {
    setCurrentStepIndex(-1);
    props.onStepExit(event);
  };

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
      <PairingPopups id={currentStepIndex} />
      <div className="rel-scroller">
        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={onStepExit}
          //   onStepExit={props.onStepExit ? props.onStepExit : () => {}}
          progress
          offset="400px"
          debug
        >
          {props.children}
        </Scrollama>
      </div>
    </div>
  );
}

export default PairScroll;
