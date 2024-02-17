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
