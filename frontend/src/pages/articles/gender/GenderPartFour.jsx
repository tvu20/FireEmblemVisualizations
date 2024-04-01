import React from "react";

import "./gender.css";
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
        <p>
          In this section, we will examine the frequency and distribution of
          transitions across three character categories: male, female, and
          avatar. The transitions will be denoted with letters to represent the
          character category and in order of speaker: for example, M-F
          represents a male-female transition.
        </p>
      </div>

      <TransitionsScroll />
    </section>
  );
}

export default GenderPartFour;
