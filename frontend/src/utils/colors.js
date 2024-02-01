const color = {
  home: { r: 253, g: 137, b: 91 },
  gender: { r: 241, g: 223, b: 120 },
};

const getColor = (page) => {
  return color[page];
};

export default getColor;
