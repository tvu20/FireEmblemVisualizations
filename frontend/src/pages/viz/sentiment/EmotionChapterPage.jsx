import React, { useState } from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import EmotionChapter from "../../../visualizations/sentiment/EmotionChapter";

import { getGameTitles, getGameShortenedTitles } from "../../../utils/games";
import { getRoutesFromGame, getChapters } from "../../../utils/chapters";
import getColor from "../../../utils/colors";

import "./sentiment.css";

function EmotionChapterPage() {
  const [game, setGame] = useState("");
  const [route, setRoute] = useState("");
  const [chapter, setChapter] = useState("");

  console.log(getRoutesFromGame("FE16"));

  const createGameSelect = () => {
    const codes = getGameTitles();
    const short = getGameShortenedTitles();

    return codes.map((c, i) => {
      return <option value={c}>{short[i]}</option>;
    });
  };

  const createRouteSelect = () => {
    if (game === "") return;
    const routes = getRoutesFromGame(game);

    return routes.map((c, i) => {
      const spl = c.split(/(?=[A-Z])/);
      return (
        <option value={c} key={c}>
          {spl.length === 1 ? c : spl.join(" ")}
        </option>
      );
    });
  };

  const createChapSelect = () => {
    if (game === "" || route === "") return;
    const routes = getChapters(game, route);

    return routes.map((c, i) => {
      const spl = c.split(/(?=[A-Z])/);
      return (
        <option value={c} key={c}>
          {spl.length === 1 ? c : spl.join(" ")}
        </option>
      );
    });
  };

  return (
    <VizWrapper color={getColor("sentiment")} navColor={"#123622"}>
      <div className="sentiment-page emotion-game">
        <h1>Emotions in a Game</h1>
        <p>Some description here.</p>
        <select
          id="emotion-select-game"
          value={game}
          onChange={(e) => {
            setGame(e.target.value);
            setRoute("");
          }}
          style={{ marginBottom: "30px" }}
        >
          <option value="" key="default">
            -
          </option>
          {createGameSelect()}
        </select>
        <select
          id="emotion-select-route"
          value={route}
          onChange={(e) => {
            setRoute(e.target.value);
            setChapter("");
          }}
          style={{ marginBottom: "30px" }}
        >
          <option value="" key="default">
            -
          </option>
          {createRouteSelect()}
        </select>
        <select
          id="emotion-select-chapter"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          style={{ marginBottom: "30px" }}
        >
          <option value="" key="default">
            -
          </option>
          {createChapSelect()}
        </select>
        <EmotionChapter chapter={chapter} />
      </div>
    </VizWrapper>
  );
}

export default EmotionChapterPage;
