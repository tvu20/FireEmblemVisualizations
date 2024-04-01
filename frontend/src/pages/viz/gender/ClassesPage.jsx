import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";

import getColor from "../../../utils/colors";

import "./gender.css";
import ClassesTimeline from "../../../visualizations/gender/ClassesTimeline";
import Description from "../../../components/articles/Description";

function ClassesPage() {
  return (
    <VizWrapper color={getColor("gender")} navColor={"#123622"}>
      <div className="article gender-page gendertransitions">
        <h1>Timeline of Classes</h1>
        <p>
          Visualize how the gender restrictions on character classes have
          changed throughout the series’ history.
        </p>

        <ClassesTimeline />
        <p style={{ marginTop: "50px" }}>
          One of the most notable gameplay mechanics in the battle portions of{" "}
          <i>Fire Emblem</i> games is the{" "}
          <Description tag="class">class system</Description>: each character is
          able to obtain a “class” that determines their abilities in battle,
          fighting style, and role in combat. While some classes are accessible
          to all, some classes can only be obtained by units of specific genders
          or even by only a certain character. While new weapons and abilities
          have been introduced over time, there are a set of core classes and
          archetypes that have been maintained over the course of the series. We
          can see the most prominently featured classes across the series in
          this graph.
          <br />
          <br />
          Each line of the graph represents the history of a single recurring
          class. For each game in which the class is available, it is marked by
          a colored rectangle representing the gender restriction: blue for
          male-only, pink for female-only, and yellow for available to all
          units. Hover over each rectangle to learn more about a class during a
          specific period of time. We can see a general trend of more classes
          becoming gender-neutral throughout the course of the series: the
          number of male-only classes decreases over time, while the number of
          gender-neutral classes increases over time. Surprisingly, the number
          of female-exclusive classes does not significantly change over time.
        </p>
      </div>
    </VizWrapper>
  );
}

export default ClassesPage;
