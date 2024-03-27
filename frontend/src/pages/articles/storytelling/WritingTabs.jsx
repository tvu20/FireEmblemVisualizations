import React, { useState } from "react";

import linefull from "../../../assets/gender/line-full.png";
import linenoa from "../../../assets/gender/line-no-avatar.png";
import linenor from "../../../assets/gender/line-no-remakes.png";

import "./storytelling.css";

const data = [
  {
    id: "1",
    tabTitle: "Word Counts (General)",
    tabContent: linefull,
    description:
      "Word counts across the series have generally increased. As games with multiple routes have become more common, these feature exceptionally high word counts.",
  },
  {
    id: "2",
    tabTitle: "Word Counts (Remakes)",
    tabContent: linenoa,
    description:
      "The word counts from base games to remakes have increased significantly, due to both lessened storage constraints and stronger narrative writing.",
  },
  {
    id: "3",
    tabTitle: "Word Prevalence",
    tabContent: linenor,
    description:
      "Word prevalence measures how common a word's usage is in everyday language. There is a strong trend throughout the series of the word prevalence distribution becoming narrower and more concentrated towards the lower end over time, suggesting that word choice is becoming more unique over time as the writing/localization teams have been able to feature more complexity in their word choice.",
  },
  {
    id: "4",
    tabTitle: "Reading Level",
    tabContent: linenor,
    description:
      "Metrics related to the reading level of the games has actually stayed quite similar. In measuring readability, there are two metrics that are commonly examined: the average length of sentences in a text and the average number of syllables or characters in each word. We can see that neither of these metrics have significantly evolved over the series: in fact, they have all stayed very consistent, suggesting that the readability of the games’ scripts has not changed significantly!",
  },
];

function WritingTabs(props) {
  const [visibleTab, setVisibleTab] = useState(data[0].id);

  const listTitles = data.map((item) => (
    <li
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id
          ? "writing-style-tab-title writing-style-tab-title--active"
          : "writing-style-tab-title"
      }
    >
      {item.tabTitle}
    </li>
  ));

  const listContent = data.map((item) => (
    <>
      <img
        style={visibleTab === item.id ? {} : { display: "none" }}
        src={item.tabContent}
        alt={item.tabTitle}
      ></img>
      <p style={visibleTab === item.id ? {} : { display: "none" }}>
        {item.description}
      </p>
    </>
  ));

  return (
    <div className="writing-style-tabs">
      <ul className="writing-style-tabs-titles">{listTitles}</ul>
      <div className="writing-style-tab-content">{listContent}</div>
    </div>
  );
}

export default WritingTabs;
