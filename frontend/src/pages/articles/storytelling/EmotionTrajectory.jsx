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
          <div
            className="story-scroll-emotion-card"
            style={{ left: "8vw", top: "-100px" }}
          >
            <h4>Chapter 2: Rescue</h4>
            <p>
              In this chapter, the main protagonist, Ike, must rescue his sister
              who has been kidnapped by bandits. This first peak of emotion in
              the story is dominated by anger and surprise.
            </p>
          </div>
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
          <div
            className="story-scroll-emotion-card"
            style={{ left: "24.5vw", top: "-200px" }}
          >
            <h4>Chapter 7: Shades of Evil</h4>
            <p>
              In this chapter, Ike witnesses the death of his father at the
              hands of an old enemy. This tragic moment in the story is marked
              by the heavy presence of every emotion except for joy.
            </p>
          </div>
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
          <div
            className="story-scroll-emotion-card"
            style={{ left: "38vw", top: "-350px" }}
          >
            <h4>Chapter 11: Escape</h4>
            <p>
              The turning point at the end of the story's first act, where the
              characters successfully flee their home country. Anger and
              surprise remain driving emotions but are now accompanied by the
              fear and joy of pulling off a successful escape.
            </p>
          </div>
          =
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
          <div
            className="story-scroll-emotion-card"
            style={{ left: "58vw", top: "-350px" }}
          >
            <h4>Chapter 17: Day Breaks</h4>
            <p>
              The dramatic midpoint of the story, where Ike successfully rescues
              an ally from being kidnapped and discovers that someone previously
              thought to be dead is alive. All the emotions are at play in this
              chapter, particularly dominated by anger, surprise, and joy.
            </p>
          </div>
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
          <div
            className="story-scroll-emotion-card"
            style={{ left: "60vw", top: "-200px" }}
          >
            <h4>Chapter 27: Moment of Fate</h4>
            <p>
              The emotional climax of the story, where Ike confronts the man who
              killed his father. This chapter is marked by deep sadness and
              surprise, as Ike learns about his friends' pasts and reminisces on
              the war.
            </p>
          </div>
        </div>
      </div>
      <div className="story-scroller fullscreen">
        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={props.onStepExit ? props.onStepExit : () => {}}
          progress
          offset={props.offset ? props.offset : "400px"}
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
