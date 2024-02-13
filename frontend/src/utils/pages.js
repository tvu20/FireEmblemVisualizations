const visualizations = [
  {
    name: "Gender and Line Counts",
    url: "/viz/gender-line-counts",
    thumbnail: require("../assets/github.png"),
  },
  {
    name: "Gender and Character Counts",
    url: "/viz/gender-char-counts",
    thumbnail: require("../assets/github.png"),
  },
  {
    name: "Support Networks",
    url: "/viz/support-networks",
    thumbnail: require("../assets/github.png"),
  },
  {
    name: "Pairing Networks",
    url: "/viz/pairings-networks",
    thumbnail: require("../assets/github.png"),
  },
  {
    name: "Sentiment in a Game",
    url: "/viz/sentiment-game",
    thumbnail: require("../assets/github.png"),
  },
  // {
  //   name: "Gender and Line Counts",
  //   url: "/viz/gender-and-line-counts",
  //   thumbnail: "https://www.mathsisfun.com/data/images/bar-graph-fruit.svg",
  // },
  // {
  //   name: "Gender and Line Counts",
  //   url: "/viz/gender-and-line-counts",
  //   thumbnail: "https://www.mathsisfun.com/data/images/bar-graph-fruit.svg",
  // },
  // {
  //   name: "Gender and Line Counts",
  //   url: "/viz/gender-and-line-counts",
  //   thumbnail: "https://www.mathsisfun.com/data/images/bar-graph-fruit.svg",
  // },
  // {
  //   name: "Gender and Line Counts",
  //   url: "/viz/gender-and-line-counts",
  //   thumbnail: "https://www.mathsisfun.com/data/images/bar-graph-fruit.svg",
  // },
  // {
  //   name: "Gender and Line Counts",
  //   url: "/viz/gender-and-line-counts",
  //   thumbnail: require("../assets/github.png"),
  // },
  // {
  //   name: "Gender and Line Counts",
  //   url: "/viz/gender-and-line-counts",
  //   thumbnail: "https://www.mathsisfun.com/data/images/bar-graph-fruit.svg",
  // },
  // {
  //   name: "Gender and Line Counts",
  //   url: "/viz/gender-and-line-counts",
  //   thumbnail: "https://www.mathsisfun.com/data/images/bar-graph-fruit.svg",
  // },
  // {
  //   name: "Gender and Line Counts",
  //   url: "/viz/gender-and-line-counts",
  //   thumbnail: "https://www.mathsisfun.com/data/images/bar-graph-fruit.svg",
  // },
  // {
  //   name: "Gender and Line Counts",
  //   url: "/viz/gender-and-line-counts",
  //   thumbnail: "https://www.mathsisfun.com/data/images/bar-graph-fruit.svg",
  // },
];

export const getArticles = () => {
  return [
    { name: "Gender", url: "/article/gender" },
    { name: "Relationships", url: "/article/relationships" },
    { name: "Script", url: "/article/script" },
    { name: "Sentiment", url: "/article/sentiment" },
    { name: "Series", url: "/article/series" },
  ];
};

export const getVisualizations = () => {
  return visualizations;
};
