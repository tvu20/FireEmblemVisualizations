const color = {
  home: { r: 253, g: 137, b: 91 },
  gender: { r: 241, g: 223, b: 120 },
  relationships: { r: 4, g: 46, b: 68 },
  sentiment: { r: 83, g: 172, b: 153 },
  script: { r: 225, g: 232, b: 241 },
};

const getColor = (page) => {
  return color[page];
};

export default getColor;
