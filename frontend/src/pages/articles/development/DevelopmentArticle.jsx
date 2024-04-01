import React from "react";

import Footer from "../../../components/navigation/Footer";
import Description from "../../../components/articles/Description";
import DevTimeline from "./DevTimeline";

import "./dev.css";

function DevelopmentArticle() {
  return (
    <>
      <div className="dev-article">
        <div className="dev-intro banner">
          <h1>The Development of the Fire Emblem Series</h1>
          <section className="dev-intro-paragraphs">
            <p>
              Though Fire Emblem was not the first game in the tactical{" "}
              <Description tag="RPG">RPG</Description> genre, it is considered
              by many historians to be the franchise that set the archetype for
              the whole genre,{" "}
              <a
                className="highlight"
                href="https://en.wikipedia.org/wiki/Tactical_role-playing_game#:~:text=Developed%20by%20Intelligent%20Systems%20and,earlier%20RPGs%20and%20strategy%20games."
                target="_blank"
                rel="noopener noreferrer"
              >
                establishing core gameplay elements that are still used in many
                tactical RPGs today
              </a>
              .{" "}
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
        </div>

        <div className="dev-intro">
          <section className="dev-intro-paragraphs">
            <p>
              In this article, I will provide an overview of the most
              significant changes over time in the mechanics, features, and
              development cycles of the games in the series. Each of these
              significant changes can be attributed to one of the three
              categories:{" "}
            </p>
            <ol style={{ lineHeight: 2 }}>
              <li>
                <span className="dev-scroller-category cat-one">
                  Technological advancements
                </span>
              </li>
              <li>
                <span className="dev-scroller-category cat-two">
                  Gameplay-story integration
                </span>
              </li>
              <li>
                <span className="dev-scroller-category cat-three">
                  Player friendliness and ease
                </span>
              </li>
            </ol>
            <p>
              By tracking these different levels of progress, we can see how
              each of these categories contributes to the development philosophy
              throughout the series’ history!
            </p>
          </section>
        </div>

        <DevTimeline />

        <div className="gender-article-section-methods">
          <h2>METHODS & NOTES</h2>
          <p>
            The information presented in this article was collected from a
            variety of overview articles and developer interviews. All major
            “advancements” were categorized into one of three categories based
            on the primary motivation stated by the game developers.
          </p>
          <p>
            All photos of Nintendo consoles are attributed to the{" "}
            <a
              href="https://commons.wikimedia.org/wiki/User:Evan-Amos"
              className="highlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Vanamo Online Game Museum on Wikimedia Commons
            </a>
            , created by user Evan-Amos. Photos of gameplay or promotional
            material are taken from Wikipedia and in-game screenshots.
          </p>
        </div>
        {/* <p>
          LOREM IPSUM FONT GENERATOR IMAGES PLUGINS GENERATORS ENGLISH Lorem
          Ipsum Generator Generate Lorem Ipsum placeholder text. Select the
          number of characters, words, sentences or paragraphs, and hit
          generate! GENERATED LOREM IPSUM 3 PARAGRAPHS COPY Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Eget nunc scelerisque
          viverra mauris in aliquam. Aliquam vestibulum morbi blandit cursus
          risus at ultrices. Id semper risus in hendrerit. Vitae tortor
          condimentum lacinia quis vel. Duis convallis convallis tellus id
          interdum. Ullamcorper sit amet risus nullam. In hendrerit gravida
          rutrum quisque non tellus orci. Placerat vestibulum lectus mauris
          ultrices eros in cursus. Vestibulum sed arcu non odio euismod. Tellus
          in hac habitasse platea dictumst vestibulum rhoncus. Scelerisque purus
          semper eget duis at tellus at urna. Nisi est sit amet facilisis magna.
          Elit ullamcorper dignissim cras tincidunt lobortis. Porta non pulvinar
          neque laoreet suspendisse interdum consectetur. Accumsan sit amet
          nulla facilisi morbi tempus iaculis urna id. Faucibus pulvinar
          elementum integer enim neque volutpat ac. Eget gravida cum sociis
          natoque penatibus et. Ullamcorper eget nulla facilisi etiam dignissim
          diam. Nulla malesuada pellentesque elit eget. Justo eget magna
          fermentum iaculis eu non diam phasellus vestibulum. Dolor sit amet
          consectetur adipiscing elit duis tristique. Purus faucibus ornare
          suspendisse sed nisi lacus sed viverra tellus. Feugiat in ante metus
          dictum at tempor commodo ullamcorper a. Mauris ultrices eros in cursus
          turpis massa tincidunt. Felis bibendum ut tristique et egestas quis
          ipsum. A cras semper auctor neque. At varius vel pharetra vel turpis
          nunc. Vel facilisis volutpat est velit egestas dui id ornare arcu. Eu
          tincidunt tortor aliquam nulla facilisi. Vestibulum mattis ullamcorper
          velit sed ullamcorper. Etiam dignissim diam quis enim lobortis. Dis
          parturient montes nascetur ridiculus mus. At in tellus integer feugiat
          scelerisque varius morbi enim nunc. Habitant morbi tristique senectus
          et netus et malesuada fames ac. Amet mattis vulputate enim nulla
          aliquet porttitor lacus. Justo nec ultrices dui sapien eget. Quam
          lacus suspendisse faucibus interdum. Potenti nullam ac tortor vitae. ©
          2015 — 2023 PRIVACY POLICY SITEMAP FONT GENERATOR IMAGES PLUGINS
          GENERATORS SHARE THE LOREM WA SAI
        </p> */}
      </div>
      <Footer vertical={false} />
    </>
  );
}

export default DevelopmentArticle;
