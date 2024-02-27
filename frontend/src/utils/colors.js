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
  gender: { r: 241, g: 223, b: 120 },
  relationships: { r: 4, g: 46, b: 68 },
  sentiment: { r: 83, g: 172, b: 153 },
  script: { r: 225, g: 232, b: 241 },
  characters: { r: 254, g: 166, b: 179 },
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
    // Switch: "#ffa4a2",
    // SNES: "#f4bfbe",
    // "3DS": "#ffbcb1",
    // GBA: "#ffaa9b",
    // Wii: "#dc817f",
    // GameCube: "#e89a97",
    // DS: "#f4c0b2",
    // NES: "#f5c9c6",

    Switch: "#dc817f",
    "3DS": "#e89a97",
    DS: "#ffaa9b",
    Wii: "#ffaa9b",
    GameCube: "#ffbcb1",
    GBA: "#f4c0b2",
    SNES: "#f4bfbe",
    NES: "#f5c9c6",
  };
  return gameColors[game];
};

export const emotionColor = {
  // joy: "#e8c33f",
  joy: "#d19b1d",
  sadness: "#286ab5",
  anger: "#c92a3d",
  fear: "#992ec7",
  // neutral: "#4bad4e",
  // fear: "#4bad4e",
  // surprise: "#e38640",
  surprise: "#419678",
  neutral: "#adadad",
};
