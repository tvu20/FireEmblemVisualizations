import React from "react";

import "./storytelling.css";
import Description from "../../../components/articles/Description";

function EmotionLabelPopups(props) {
  const { id } = props;

  return (
    <>
      <div className="story-scroll-popup-container">
        <div className={`story-scroll-popup ${id === 1 ? "visible" : ""}`}>
          <p>
            <b>Label:</b> Joy
          </p>
          <p>
            <b>Probability:</b> 0.871
          </p>
          <p className="label-text">
            The area around Castle Gaspard, where I was living, is under the
            control of House Rowe, who have submitted to the Empire. If I hadn't
            come to Garreg Mach, I might have ended up as your enemy at Ailell.
            That thought makes me really{" "}
            <span className="label-pos-high">happy</span> to be here now.
          </p>
        </div>
      </div>
      <div className="story-scroll-popup-container">
        <div className={`story-scroll-popup ${id === 2 ? "visible" : ""}`}>
          <p>
            <b>Label:</b> Surprise
          </p>
          <p>
            <b>Probability:</b> 0.998
          </p>
          <p className="label-text">
            El! <span className="label-pos">So</span> it's true... You're{" "}
            <span className="label-pos">really </span>going away?{" "}
            <span className="label-pos">Going</span> back home?
          </p>
        </div>
      </div>
      <div className="story-scroll-popup-container">
        <div className={`story-scroll-popup ${id === 3 ? "visible" : ""}`}>
          <p>
            <b>Label:</b> Fear
          </p>
          <p>
            <b>Probability:</b> 0.904
          </p>
          <p className="label-text">
            <span className="label-pos">H-h-heavens!</span>{" "}
            <span className="label-pos-high">Please</span>{" "}
            <span className="label-pos">don't</span> kill me! I'll give you{" "}
            <span className="label-pos">whatever</span> you{" "}
            <span className="label-pos">want</span>...Here, have some yarn!
            Uh... Dried fish?
          </p>
        </div>
      </div>
      <div className="story-scroll-popup-container">
        <div className={`story-scroll-popup ${id === 4 ? "visible" : ""}`}>
          <p>
            <b>Label:</b> Anger
          </p>
          <p>
            <b>Probability:</b> 0.993
          </p>
          <p className="label-text">
            I see. So the <span className="label-pos">enemy</span> has{" "}
            <span className="label-neg">prepared</span> for our arrival... It
            matters not. I will <span className="label-pos-high">kill</span>{" "}
            <span className="label-pos">them</span>{" "}
            <span className="label-pos">all</span>, whether they are one or one
            hundred.
          </p>
        </div>
      </div>
      <div className="story-scroll-popup-container">
        <div className={`story-scroll-popup ${id === 5 ? "visible" : ""}`}>
          <p>
            <b>Label:</b> Sadness
          </p>
          <p>
            <b>Probability:</b> 0.426
          </p>
          <p className="label-text">
            <span className="label-pos-high">Please</span>,{" "}
            <span className="label-pos-high">stop</span>. We{" "}
            <span className="label-pos">can't</span> have{" "}
            <span className="label-neg">you</span>{" "}
            <span className="label-neg">saying</span> that.{" "}
            <span className="label-neg">You</span> and I are the{" "}
            <span className="label-pos">same</span>{" "}
            <span className="label-pos">after</span> all. We both have to{" "}
            <span className="label-neg">fight</span> our{" "}
            <span className="label-pos-high">family</span> for the good of the
            world... And since <span className="label-neg">that's</span> the{" "}
            <span className="label-neg">way</span>{" "}
            <span className="label-neg">it</span>{" "}
            <span className="label-neg">is</span>, I{" "}
            <span className="label-pos">couldn't</span>{" "}
            <span className="label-pos">live</span> with{" "}
            <span className="label-pos">myself</span> if I was the{" "}
            <span className="label-pos">only</span> running{" "}
            <span className="label-pos">away</span> from this battle. I{" "}
            <span className="label-neg">will</span>{" "}
            <span className="label-neg">bring</span> Emile back to his{" "}
            <span className="label-neg">senses</span>. I must. I'm his big
            sister, after all.
          </p>
        </div>
      </div>
      <div className="story-scroll-popup-container">
        <div className={`story-scroll-popup ${id === 6 ? "visible" : ""}`}>
          <p>
            <b>Label:</b> Neutral
          </p>
          <p>
            <b>Probability:</b> 0.957
          </p>
          <p className="label-text">
            <span className="label-neg">Yeah</span>,{" "}
            <span className="label-neg">good</span>{" "}
            <span className="label-pos-high">point</span>. If they did, we'd
            have <span className="label-pos">heard</span>{" "}
            <span className="label-pos">about</span> it by now.
          </p>
        </div>
      </div>
    </>
  );
}

export default EmotionLabelPopups;
