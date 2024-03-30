// const gameColors = {
//   Switch: "#e68187",
//   SNES: "#89e0a2",
//   "3DS": "#80c5d9",
//   GBA: "#8995e0",
//   Wii: "#ccc",
//   GameCube: "#af84db",
//   DS: "#ed91c8",
//   NES: "#e8bf89",
// };

// const gameColors = {
//   Switch: "#dc134c",
//   SNES: "#800020",
//   "3DS": "#960018",
//   GBA: "#c51e3a",
//   Wii: "#ce2029",
//   GameCube: "#b22222",
//   DS: "#e52b50",
//   NES: "#c80815",
// };

const color = {
  home: { r: 253, g: 137, b: 91 },
  gender: { r: 255, g: 201, b: 230 },
  relationships: { r: 0, g: 26, b: 48 },
  sentiment: { r: 112, g: 214, b: 188 },
  script: { r: 225, g: 232, b: 241 },
  characters: { r: 245, g: 197, b: 229 },
  menu: { r: 39, g: 31, b: 63 },
};

const getColor = (page) => {
  return color[page];
};

export default getColor;

export const getGameColor = (game) => {
  // const gameColors = {
  //   Switch: "#ffa2aa",
  //   SNES: "#fed8d5",
  //   "3DS": "#ffbcb1",
  //   GBA: "#ffbb9b",
  //   Wii: "#e5a1aa",
  //   GameCube: "#f4bfbe",
  //   DS: "#dc7f8e",
  //   NES: "#f4c4b2",
  // };

  const gameColors = {
    // Switch: "#dc817f",
    // "3DS": "#e89a97",
    // DS: "#ffaa9b",
    // Wii: "#ffaa9b",
    // GameCube: "#ffbcb1",
    // GBA: "#f4c0b2",
    // SNES: "#f4bfbe",
    // NES: "#f5c9c6",

    Switch: "#734b89",
    "3DS": "#4c4b94",
    DS: "#417d8f",
    Wii: "#77a04a",
    GameCube: "#77a04a",
    GBA: "#dcbb28",
    SNES: "#a1683b",
    NES: "#6f1f2f",
  };
  return gameColors[game];
};

export const emotionColor = {
  // joy: "#e8c33f",
  joy: "#f0d681",
  sadness: "#6690bb",
  anger: "#c16c6c",
  fear: "#8d62ae",
  // neutral: "#4bad4e",
  // fear: "#4bad4e",
  // surprise: "#e38640",
  surprise: "#7fb37d",
  neutral: "rgba(199, 199, 199, 0.8)",
};
