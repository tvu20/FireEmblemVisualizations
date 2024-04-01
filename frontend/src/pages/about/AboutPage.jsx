import React from "react";

import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";

import "./about.css";

import getColor from "../../utils/colors";

function AboutPage() {
  return (
    <>
      <NavBar color={getColor("menu")} />
      <div className="about-page">
        <div className="about-page__left">
          <div className="about-page__content">
            <h2>About this Project</h2>
            <h3>Why this project?</h3>
            <p>
              I began my thesis project with a central idea: storytelling
              through data visualization. I was heavily inspired by publications
              such as The Pudding and the New York Times that have created
              interactive web experiences in order to share interesting concepts
              and facts about the world. Our world is filled with data - it’s in
              the people you meet, the media you consume, and even the clothes
              you wear. But data is often presented as a boring concept, and the
              average person would find it difficult to be able to immediately
              pick out the most important conclusions given a huge set of data.
              What does the comparison between two numbers mean, and what is the
              point of showing this?
            </p>
            <p>
              Data analysis and visualization is a fairly well-researched and
              popular field: charts, infographics, and illustrations are
              commonly used to conceptualize data and make it understandable.
              However, I wanted to experiment with interaction in my data
              visualizations: an active user component where people could play
              with visualizations to discover new things. In particular, I was
              interested in the use of animation (how can it be used to tell a
              story?) and user interactivity (how can it highlight important
              information?). For this site, I wanted to present two forms of
              visualizations: one where users could experiment with them on
              their own to make their own discoveries, and one where the user is
              provided a guided experience to see the most important trends and
              ideas.
            </p>
            <h3>Why video games?</h3>
            <p>
              I tossed around the idea of a lot of different potential topics. I
              knew that I was particularly interested in examining some sort of
              intersection between technology and society, but the form in which
              this would take was more difficult for me to settle on. At various
              points of the ideation process I was thinking about looking at
              different programming languages, different aspects of the
              development process, topics in machine learning, the evolution of
              coding repositories and practices, and cyber security. But there
              was one idea that I kept coming back to: video games.
            </p>
            <p>
              Video games are often seen as not a particularly academic or
              rigorous area of study since they are largely created for
              recreational purposes, but I believe that there is huge merit in
              studying them! They are widely accessible and consumed by people
              all over the globe of many different ages, making them an
              incredibly significant aspect of our culture and entertainment.
              Video games are artifacts of technological progress. The industry
              has not only reflected the rapid advancement of personal computers
              in the last 50 years, but has actually driven the development of
              important technology such as sound cards, graphics cards, CPUs,
              and co-processors. We can learn so much about how digital
              technology has evolved through studying gaming hardware alongside
              the actual software of video games.
            </p>
            <p>
              Additionally, video games, like all other forms of entertainment
              media, are a reflection of society during the time in which they
              were created. Even when excluding those that actively seek to
              comment on a particular aspect of human life, games will always be
              influenced by the state of our current world. Longstanding topics
              that have been researched by video game scholars include the
              representation of female and queer characters in games, as these
              groups have often been excluded from traditionally male-domninated
              spaces.
            </p>
            <p>
              For an industry that is so universal and well-known, I have not
              yet found another data visualization project on the topic of video
              games to the scale that I envisioned for my thesis. And therefore
              I decided to set out on this course of study.
            </p>
            <h3>
              Why <i>Fire Emblem</i>?
            </h3>
            <p>
              Since I wanted to look at different aspects of the intersection
              between gaming technology and society over time, I decided to
              focus on a single series in order to more effectively draw
              conclusions and make comparisons. While I considered various other
              franchises like Zelda and Final Fantasy, I ultimately settled on
              the Fire Emblem series for a few key reasons:
            </p>
            <ol>
              <li>
                The series has a very strong core identity and is standardized
                in all its mainline entries. Fire Emblem has a gameplay loop
                that is not only central to its identity as a franchise, but
                actively influences the way that other aspects of game
                development such as story writing and mechanics are
                conceptualized. Other franchises like Zelda are more
                comprehensive in nature, but the individual games are simply too
                different to make effective comparisons.{" "}
              </li>
              <li>
                The series is very interesting from a technological standpoint.
                It has been present on every generation of Nintendo consoles,
                making it a good marker for examining technological progress
                over time. Additionally, Fire Emblem games have been released on
                both portable and home consoles, allowing us to draw comparisons
                and see how the restrictions of each type of console may have
                influenced development. As mentioned before, Fire Emblem heavily
                incorporates the technical aspects of development into both
                narrative and gameplay aspects, so we can track the history of
                technological advancements through examining the games in the
                series.
              </li>
              <li>
                The series cares deeply about gameplay, narrative, characters,
                and relationships. All four of these aspects are heavily
                prioritized in the development cycles of games in the series:
                gameplay and writing are often direct influences on each other.
                One significant example of this is in how Fire Emblem handles
                characters: compared to most other video games, Fire Emblem
                boasts a huge cast per game due to the permadeath mechanic. To
                supplement this, most games in the series have given characters
                unique characterizations and backstories, and players can also
                choose to form relationships between different characters. Due
                to this, we can examine some interesting metrics related to
                character writing: how the representation of women has changed
                over time both in the leads and overall casts, and how the
                social networks and relationships between characters has changed
                over time.
              </li>
              <li>
                Fire Emblem is a relatively well-known franchise, still has room
                for growth, and has made an impact on other games. The series is
                known as the archetypal or defining game series in the strategy
                RPG genre, being the first to pioneer the intersection between
                narrative/character writing and strategy wargame mechanics. It
                would be very difficult to find any other strategy RPG that
                doesn’t directly draw from Fire Emblem in any way - well known
                examples of games that drew from Fire Emblem include Final
                Fantasy Tactics, Tactics Ogre, and Triangle Strategy.
                Additionally, Fire Emblem has also been previously studied by
                scholars before:{" "}
                <a
                  href="https://arxiv.org/abs/1909.07816"
                  className="highlight"
                >
                  here is an article on the computational complexity of Fire
                  Emblem and other strategy RPGs!
                </a>
              </li>
              <li>
                The format of the games lends itself well to textual and
                quantitative analysis. The biggest challenge in studying video
                games as opposed to other forms of media is the inherently
                interactive nature: many aspects of games are player dependent.
                Fire Emblem separates gameplay and script elements quite well:
                although gameplay often reflects the story narrative, the
                writing within the games can exist independently of gameplay
                mechanics.
              </li>
              <li>
                As a franchise that has lasted over 30 years with a core group
                of devoted fans, information for all aspects of Fire Emblem
                games is very readily available for public use. Sites like
                FireEmblemWiki and SerenesForest have been kept up-to-date with
                very useful information for data collection, and all the scripts
                for each game have been made available for free online (with the
                exception of the newest game). Even though a not insignificant
                amount of games in the series have never been officially
                localized, it was quite easy to find fan-translations of each
                game in order to perform textual analysis on them. Over 100 data
                files were collected for this project - and there’s so much more
                that I want to do!
              </li>
            </ol>
            <h3>What are the goals of this project?</h3>
            <ol>
              <li>
                Develop the skills and tools needed to create a data
                visualization experience.
              </li>
              <li>
                Learn about storytelling and how we can effectively do it
                through data, technology, and art
              </li>
              <li>
                Learn about the intersection between software development, data
                science and machine learning, data visualization, and
                storytelling
              </li>
              <li>
                Investigate how the evolution of technology and society has been
                reflected in games over time - how has the state of our world
                influenced the media we consume?
              </li>
            </ol>
          </div>
        </div>
        <div className="about-page__right">
          <Footer vertical />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
