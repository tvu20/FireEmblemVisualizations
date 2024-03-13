import React from "react";

import Footer from "../../../components/navigation/Footer";
import Description from "../../../components/articles/Description";
import DevScroll from "./DevScroll";

import "./dev.css";

function DevelopmentArticle() {
  return (
    <>
      <div className="dev-article">
        <div className="dev-intro">
          <h1>The Development of the Fire Emblem Series</h1>
          <section>
            <p>
              Though Fire Emblem was not the first game in the tactical{" "}
              <Description tag="RPG">RPG</Description> genre, it is considered
              by many historians to be the franchise that set the archetype for
              the whole genre, establishing core gameplay elements that are
              still used in many tactical RPGs today.{" "}
            </p>
            <p>
              The main gameplay loop of each game revolves around individual
              battles between the player’s team of characters and enemy{" "}
              <Description tag="NPC">non-playable characters</Description> on
              grid-based maps. Similar to a game of chess, you control
              specialized units that can move across grid squares and defeat the
              other team’s units; however, all the pieces have individualized
              appearances, stats, and backstories. Each game also features a
              storyline and cast of characters similar to most role-playing
              games, with an emphasis on medieval fantasy settings and wars.
            </p>

            <p>
              One of the most notably unique aspects of gameplay in Fire Emblem
              is the <Description tag="permadeath">permadeath</Description>{" "}
              system: characters who die in battle are unusable for the rest of
              the game, and story-wise they are either killed off or left as
              non-playable characters if they are too important to die.
            </p>
          </section>
          <section>
            <p>
              In this article, I will provide an overview of the most
              significant changes over time in the mechanics, features, and
              development cycles of the games in the series. Each of these
              significant changes can be attributed to one of the three
              categories:{" "}
            </p>
            <ol>
              <li>Technological advancements</li>
              <li>Gameplay-story integration</li>
              <li>Player friendliness and ease</li>
            </ol>
            <p>
              By tracking these different levels of progress, we can see how
              each of these categories contributes to the development philosophy
              throughout the series’ history!
            </p>
          </section>
        </div>
        <section>
          <p>
            In 1983, the Famicom (known as the Nintendo Entertainment System or
            the NES in the West) was released by Nintendo as their first home
            video game console. The NES played a large role in revitalizing the
            video game industry in the United States following the video game
            crash of 1983, and is considered one of the greatest video game
            consoles of all time.{" "}
          </p>
          <DevScroll />
        </section>

        <section>
          <p>
            In 1983, the Famicom (known as the Nintendo Entertainment System or
            the NES in the West) was released by Nintendo as their first home
            video game console. The NES played a large role in revitalizing the
            video game industry in the United States following the video game
            crash of 1983, and is considered one of the greatest video game
            consoles of all time.{" "}
          </p>
          <DevScroll />
        </section>
      </div>
      <Footer vertical={false} />
    </>
  );
}

export default DevelopmentArticle;
