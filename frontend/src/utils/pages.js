import glc from "../assets/viz/glc.png";
import gcc from "../assets/viz/gcc.png";
import supports from "../assets/viz/supports.png";
import pairings from "../assets/viz/pairings.png";
import sentibar from "../assets/viz/sentibar.png";
import senticurve from "../assets/viz/senticurve.png";
import mcw from "../assets/viz/mcw.png";
import wordcounts from "../assets/viz/wordcounts.png";
import trans from "../assets/viz/trans.png";
import prev from "../assets/viz/prev.png";
import steam from "../assets/viz/steam.png";
import comp from "../assets/viz/comp.png";
import similarity from "../assets/viz/similarity.png";
import pie from "../assets/viz/pie.png";
import bar from "../assets/viz/bar.png";
import story from "../assets/viz/story.png";
import cl from "../assets/viz/classes.png";

import gender from "../assets/viz/gender-thumbnail.PNG";
import rel from "../assets/viz/rel-thumbnail.PNG";
import storytell from "../assets/viz/story-thumbnail.PNG";
import dev from "../assets/viz/dev-thumbnail.png";

const visualizations = [
  {
    name: "Gender and Line Counts",
    url: "/viz/gender-line-counts",
    thumbnail: glc,
  },
  {
    name: "Gender and Character Counts",
    url: "/viz/gender-char-counts",
    thumbnail: gcc,
  },
  {
    name: "Support Networks",
    url: "/viz/support-networks",
    thumbnail: supports,
  },
  {
    name: "Pairing Networks",
    url: "/viz/pairings-networks",
    thumbnail: pairings,
  },
  {
    name: "Sentiment in a Game",
    url: "/viz/sentiment-game",
    thumbnail: sentibar,
  },
  {
    name: "Sentiment Across Games",
    url: "/viz/sentiment-across-games",
    thumbnail: senticurve,
  },
  {
    name: "Most Common Words",
    url: "/viz/most-common-words",
    thumbnail: mcw,
  },
  {
    name: "Word Counts",
    url: "/viz/word-counts",
    thumbnail: wordcounts,
  },
  {
    name: "Transitions In Each Game",
    url: "/viz/gender-transitions-game",
    thumbnail: trans,
  },
  {
    name: "Word Prevalence",
    url: "/viz/word-prevalence",
    thumbnail: prev,
  },
  {
    name: "Emotion In a Game",
    url: "/viz/emotion-game",
    thumbnail: steam,
  },
  {
    name: "Complexity of Language",
    url: "/viz/word-complexity",
    thumbnail: comp,
  },
  {
    name: "Similarity Across Media",
    url: "/viz/similarity-across-media",
    thumbnail: similarity,
  },
  {
    name: "Emotion In A Chapter",
    url: "/viz/emotion-chapter",
    thumbnail: pie,
  },
  {
    name: "Character Bar Chart",
    url: "/viz/character-bar",
    thumbnail: bar,
  },
  {
    name: "Story Progression",
    url: "/viz/story-progression",
    thumbnail: story,
  },
  {
    name: "Timeline of Classes",
    url: "/viz/classes-timeline",
    thumbnail: cl,
  },
  // {
  //   name: "Transitions Across the Series",
  //   url: "/viz/transitions",
  //   thumbnail: trans,
  // },
];

export const getArticles = () => {
  return [
    {
      name: "Gender",
      longname: "Evolution of Gender Representation Throughout the Series",
      url: "/article/gender",
      desc: "How has the representation of female characters and gender changed throughout the series? ",
      longdesc:
        "This article examines the evolution of multi gender representation and the portrayal of female and non-binary characters throughout the series’ history through four key metrics: quantity, quality, gameplay integration, and relationships.",
      thumbnail: gender,
    },
    {
      name: "Relationships",
      longname: "Evolution of Character Relationships and Queer Representation",
      url: "/article/relationships",
      desc: "How have the relationship networks between characters changed over time, and how has this been impacted by the inclusion of queer characters?",
      longdesc:
        "An essential gameplay feature of the Fire Emblem series is the Support mechanic, allowing players to dictate close relationships between pairs of characters in their party. This article explores how relationships between characters have changed over time and the evolution of same-sex pairing representation through the lens of social network analysis. ",
      thumbnail: rel,
    },
    {
      name: "Storytelling",
      longname: "Narrative Style and Storytelling in the Fire Emblem Series",
      url: "/article/storytelling",
      desc: "How has the writing in the series evolved from a style and storytelling perspective? How do we tell a story and how has it changed over time?",
      longdesc:
        "Known for its blend of strategic gameplay and traditional role-playing game storytelling elements, the Fire Emblem franchise centers a sprawling war-torn continent and a core cast of characters in each of its installments’ narratives. What can we learn about the writing style and storytelling methods of the games using only textual analysis?",
      thumbnail: storytell,
    },
    {
      name: "Development",
      longname: "Development of the Fire Emblem Series",
      url: "/article/development",
      desc: "How have technological advancements, player accessibility, and target demographics changed the way developers approach creating games for the series from a mechanical perspective?",
      longdesc:
        "Known as the archetypal series for the tactical role-playing game genre, Fire Emblem has explored and established many core gameplay elements featured in many other TRPGs today. This article explores how technological advancements, player accessibility, and target demographics have changed the way developers approach creating Fire Emblem games from a gameplay perspective.",
      thumbnail: dev,
    },
  ];
};

export const getVisualizations = () => {
  return visualizations;
};
