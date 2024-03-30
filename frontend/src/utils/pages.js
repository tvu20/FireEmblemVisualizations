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
  {
    name: "Transitions Across the Series",
    url: "/viz/transitions",
    thumbnail: trans,
  },
];

export const getArticles = () => {
  return [
    { name: "Gender", url: "/article/gender" },
    { name: "Relationships", url: "/article/relationships" },
    { name: "Storytelling", url: "/article/storytelling" },
    { name: "Development", url: "/article/development" },
  ];
};

export const getVisualizations = () => {
  return visualizations;
};
