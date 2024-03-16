export const gameFullTitles = [
  "Shadow Dragon and the Blade of Light (1990)",
  "Gaiden (1992)",
  "Mystery of the Emblem (1994)",
  "Genealogy of the Holy War (1996)",
  "Thracia 776 (1999)",
  "The Binding Blade (2002)",
  "The Blazing Blade (2003)",
  "The Sacred Stones (2004)",
  "Path of Radiance (2005)",
  "Radiant Dawn (2007)",
  "Shadow Dragon (2008)",
  "New Mystery of the Emblem (2010)",
  "Awakening (2012)",
  "Fates (2015)",
  "Echoes: Shadows of Valentia (2017)",
  "Three Houses (2019)",
];

export const getGameTitles = () => {
  return [
    "FE1",
    "FE2",
    "FE3",
    "FE4",
    "FE5",
    "FE6",
    "FE7",
    "FE8",
    "FE9",
    "FE10",
    "FE11",
    "FE12",
    "FE13",
    "FE14",
    "FE15",
    "FE16",
  ];
};

export const getGameShortenedTitles = () => {
  return [
    "Blade of Light",
    "Gaiden",
    "Mystery",
    "Genealogy",
    "Thracia 776",
    "Binding Blade",
    "Blazing Blade",
    "Sacred Stones",
    "Path of Radiance",
    "Radiant Dawn",
    "Shadow Dragon",
    "New Mystery",
    "Awakening",
    "Fates",
    "Echoes",
    "Three Houses",
  ];
};

export const getGameTitleFromCode = (tag) => {
  const arr = {
    FE1: "Shadow Dragon and Blade of Light",
    FE2: "Gaiden",
    FE3: "Mystery of the Emblem",
    FE4: "Genealogy of the Holy War",
    FE5: "Thracia 776",
    FE6: "The Binding Blade",
    FE7: "The Blazing Blade",
    FE8: "The Sacred Stones",
    FE9: "Path of Radiance",
    FE10: "Radiant Dawn",
    FE11: "Shadow Dragon",
    FE12: "New Mystery of the Emblem",
    FE13: "Awakening",
    FE14: "Fates",
    FE15: "Echoes",
    FE16: "Three Houses",
  };

  if (tag in arr) {
    return tag + ": " + arr[tag];
  }

  return tag;
};

export const getGameFromCode = (tag) => {
  const arr = {
    FE1: "Shadow Dragon and Blade of Light",
    FE2: "Gaiden",
    FE3: "Mystery of the Emblem",
    FE4: "Genealogy of the Holy War",
    FE5: "Thracia 776",
    FE6: "The Binding Blade",
    FE7: "The Blazing Blade",
    FE8: "The Sacred Stones",
    FE9: "Path of Radiance",
    FE10: "Radiant Dawn",
    FE11: "Shadow Dragon",
    FE12: "New Mystery of the Emblem",
    FE13: "Awakening",
    FE14: "Fates",
    FE15: "Echoes",
    FE16: "Three Houses",
  };

  return arr[tag];
};

export const getGameShortenedTitleFromCode = (tag) => {
  const arr = {
    FE1: "Blade of Light",
    FE2: "Gaiden",
    FE3: "Mystery of the Emblem",
    FE4: "Genealogy",
    FE5: "Thracia 776",
    FE6: "Binding Blade",
    FE7: "Blazing Blade",
    FE8: "Sacred Stones",
    FE9: "Path of Radiance",
    FE10: "Radiant Dawn",
    FE11: "Shadow Dragon",
    FE12: "New Mystery",
    FE13: "Awakening",
    FE14: "Fates",
    FE15: "Echoes",
    FE16: "Three Houses",
  };

  if (tag in arr) {
    return arr[tag];
  }

  return tag;
};

export const getEmotionCodes = () => {
  return [
    "FE1",
    "FE2",
    "FE3",
    "FE4",
    "FE5",
    "FE6",
    "FE7",
    "FE8",
    "FE9",
    "FE10",
    "FE11",
    "FE12",
    "FE13",
    "FE14",
    "FE15",
    "FE16AM",
    "FE16CF",
    "FE16VW",
  ];
};

export const getYearFromCode = (tag) => {
  const arr = {
    FE1: "1990",
    FE2: "1992",
    FE3: "1994",
    FE4: "1996",
    FE5: "1999",
    FE6: "2002",
    FE7: "2003",
    FE8: "2004",
    FE9: "2005",
    FE10: "2007",
    FE11: "2008",
    FE12: "2010",
    FE13: "2012",
    FE14: "2015",
    FE15: "2017",
    FE16: "2019",
  };

  return arr[tag];
};

export const getEmotionTitles = () => {
  return [
    "Blade of Light",
    "Gaiden",
    "Mystery",
    "Genealogy",
    "Thracia 776",
    "Binding Blade",
    "Blazing Blade",
    "Sacred Stones",
    "Path of Radiance",
    "Radiant Dawn",
    "Shadow Dragon",
    "New Mystery",
    "Awakening",
    "Fates",
    "Echoes",
    "Three Houses: Azure Moon",
    "Three Houses: Crimson Flower",
    "Three Houses: Verdant Wind",
  ];
};
