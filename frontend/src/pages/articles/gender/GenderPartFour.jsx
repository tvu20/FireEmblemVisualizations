import React, { useState } from "react";

import Description from "../../../components/articles/Description";

import "./gender.css";
import ClassesTimeline from "../../../visualizations/gender/ClassesTimeline";
import TransitionsScroll from "./TransitionsScroll";

function GenderPartFour() {
  return (
    <section className="gender-part-three">
      <div className="gender-article-section-intro">
        <h2>Part 4: Interactions Between Genders</h2>
        <p>
          For the purposes of this article, a transition is defined as a pair of
          dialogue lines between two different speakers. By looking at the
          quantity of transitions between each type of character gender, we can
          examine the evolution of female-led transitions throughout the series.
        </p>
      </div>

      <TransitionsScroll />
    </section>
  );
}

export default GenderPartFour;
