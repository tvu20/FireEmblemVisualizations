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
      <div className="article sentiment-page emotion-game">
        <h1>Emotions in a Game</h1>
        <p>See the distribution of emotion in a single chapter.</p>
        <div className="emotion-chapter-selects">
          <span>
            Game:{" "}
            <select
              className="select-dropdown"
              id="emotion-select-game"
              value={game}
              onChange={(e) => {
                setGame(e.target.value);
                setRoute("");
              }}
            >
              <option value="" key="default">
                -
              </option>
              {createGameSelect()}
            </select>
          </span>
          <span>
            Route:{" "}
            <select
              className="select-dropdown"
              id="emotion-select-route"
              value={route}
              onChange={(e) => {
                setRoute(e.target.value);
                setChapter("");
              }}
            >
              <option value="" key="default">
                -
              </option>
              {createRouteSelect()}
            </select>
          </span>
          <span>
            Chapter:{" "}
            <select
              className="select-dropdown"
              id="emotion-select-chapter"
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
            >
              <option value="" key="default">
                -
              </option>
              {createChapSelect()}
            </select>
          </span>
        </div>
        <EmotionChapter chapter={chapter} />
        <p>
          Input a particular chapter from a game in the franchise to see its
          distribution of emotions across dialogue lines!{" "}
        </p>
      </div>
    </VizWrapper>
  );
}

export default EmotionChapterPage;
