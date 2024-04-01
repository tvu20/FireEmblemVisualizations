import React from "react";

import Description from "../../../components/articles/Description";

import "./gender.css";
import ClassesTimeline from "../../../visualizations/gender/ClassesTimeline";

function GenderPartThree() {
  return (
    <section className="gender-part-three">
      <div className="gender-article-section-intro">
        <h2>Part 3: Representation in Gameplay</h2>
        <p>
          One of the most notable gameplay mechanics in the battle portions of{" "}
          <i>Fire Emblem</i> games is the{" "}
          <Description tag="class">class</Description> system: each character is
          able to obtain a “class” that determines their abilities in battle,
          fighting style, and role in combat. While some classes are accessible
          to all, some classes can only be obtained by units of specific genders
          or even by only a certain character. While new weapons and abilities
          have been introduced over time, there are a set of core classes and
          archetypes that have been maintained over the course of the series. We
          can see the most prominently featured classes across the series in
          this graph and how they have evolved or stayed the same.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ClassesTimeline />
      </div>
      <div
        className="gender-article-section-intro left-aligned"
        style={{ paddingTop: "30px" }}
      >
        <p>
          Here are some interesting takeaways from this graph:
          <ul>
            <li>
              There is actually a pretty noticeable trend in the rise of
              gender-neutral classes over time (especially when excluding
              remakes), and the number of male neutral classes has decreased!
              The number of female neutral classes has stayed generally
              consistent.
            </li>
            <li>
              When comparing remakes to their originals, remakes generally
              feature more gender neutral classes.{" "}
            </li>
            <li>
              Certain weapon types have more commonly been wielded by certain
              genders. For example, Dancer has been an exclusively female class
              for a long time, while many axe classes have historically been
              male-only.{" "}
            </li>
            <li>
              Pegasi have historically been linked to female-only classes, with
              the first male pegasus riders only appearing in{" "}
              <Description tag="FE14">
                <i>Fates</i>
              </Description>{" "}
              (known as Sky Knights instead).
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
}

export default GenderPartThree;
