import React from "react";

import "./storytelling.css";

function SentimentLabelPopups(props) {
  const { id } = props;

  return (
    <>
      <div className="story-scroll-popup-container">
        <div className={`story-scroll-popup ${id === 1 ? "visible" : ""}`}>
          <p>
            <b>Label:</b> Positive
          </p>
          <p>
            <b>Probability:</b> 0.966
          </p>
          <p className="label-text">
            The area around Castle Gaspard, where I was living, is under the
            control of House Rowe, who have submitted to the Empire. If I hadn't
            come to Garreg Mach, I might have ended up as your enemy at Ailell.
            That thought <span className="label-pos">makes</span>{" "}
            <span className="label-pos">me</span>{" "}
            <span className="label-pos">really</span>{" "}
            <span className="label-pos-high">happy</span> to be here now. I
            don't think I would have been able to handle facing all of you in
            battle.
          </p>
        </div>
      </div>
      <div className="story-scroll-popup-container">
        <div className={`story-scroll-popup ${id === 2 ? "visible" : ""}`}>
          <p>
            <b>Label:</b> Negative
          </p>
          <p>
            <b>Probability:</b> 0.968
          </p>
          <p className="label-text">
            Being here brings back all manner of memories. The days I spent
            studying here with you and everyone else--those days were so special
            to me. They truly were some of the warmest days of my life. I hold
            them dear in my heart. And now, to be{" "}
            <span className="label-pos">forced</span> to{" "}
            <span className="label-pos">fight</span> with those I was once so
            close to, my friends... It is most{" "}
            <span className="label-pos-high">saddening</span>.
          </p>
        </div>
      </div>
      <div className="story-scroll-popup-container">
        <div className={`story-scroll-popup ${id === 3 ? "visible" : ""}`}>
          <p>
            <b>Label:</b> Positive
          </p>
          <p>
            <b>Probability:</b> 0.963
          </p>
          <p className="label-text">
            <span className="label-pos">Yeah,</span> he'll{" "}
            <span className="label-pos">do</span>{" "}
            <span className="label-pos">us</span>{" "}
            <span className="label-pos-high">proud!</span> That's just my gut{" "}
            <span className="label-pos">feeling</span>, but still.
          </p>
        </div>
      </div>
      <div className="story-scroll-popup-container">
        <div className={`story-scroll-popup ${id === 4 ? "visible" : ""}`}>
          <p>
            <b>Label:</b> Negative
          </p>
          <p>
            <b>Probability:</b> 0.984
          </p>
          <p className="label-text">
            Since this <span className="label-pos">war</span> began, we've{" "}
            <span className="label-neg">seen</span>{" "}
            <span className="label-pos">countless</span> generals, soldiers, and
            citizens <span className="label-pos-high">die</span>. It{" "}
            <span className="label-pos">never</span>{" "}
            <span className="label-neg">gets</span>{" "}
            <span className="label-neg">easier</span>.
          </p>
        </div>
      </div>
      <div className="story-scroll-popup-container">
        <div className={`story-scroll-popup ${id === 5 ? "visible" : ""}`}>
          <p>
            <b>Label:</b> Neutral
          </p>
          <p>
            <b>Probability:</b> 0.994
          </p>
          <p className="label-text">
            Oh, <span className="label-pos">hello</span> there, Professor. Did
            you need something from me? It{" "}
            <span className="label-neg">doesn't</span> look like you're{" "}
            <span className="label-neg">wounded</span> or anything. You’re just{" "}
            <span className="label-pos">looking</span> for...
            <span className="label-pos">someone</span> to{" "}
            <span className="label-neg">talk</span> to?
          </p>
        </div>
      </div>
    </>
  );
}

export default SentimentLabelPopups;
