import React from "react";

import Footer from "../../../components/navigation/Footer";
import Description from "../../../components/articles/Description";

import "./gender.css";
import CharacterCounts from "./CharacterCounts";
import LordsOverview from "./LordsOverview";
import FemaleLords from "./FemaleLords";
import FemaleMainChars from "./FemaleMainChars";
import GenderPartThree from "./GenderPartThree";
import GenderPartFour from "./GenderPartFour";

import LineTabs from "./LineTabs";

function GenderArticle() {
  return (
    <>
      <div className="gender-article">
        <div className="gender-intro banner">
          <h1>The Evolution of Gender Representation Throughout the Series</h1>
          <section className="gender-intro-paragraphs">
            <p>
              Gender representation in video games is a widely studied topic in
              the field of entertainment media, as video games have{" "}
              <a
                href="https://magazine.swe.org/gaming-sidebar/"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight"
              >
                historically been heavily male-dominated.
              </a>{" "}
              Previous research on game content has also shown that female
              characters are often{" "}
              <a
                href="https://www.edhec.edu/en/research-and-faculty/edhec-vox/gender-stereotypes-in-video-game-narratives"
                className="highlight"
                target="_blank"
                rel="noopener noreferrer"
              >
                portrayed differently from male characters, both in story and in
                gameplay mechanics
              </a>
              . In this article, I will examine the evolution of how women have
              been portrayed in the <i>Fire Emblem</i> series’ 20+ year history,
              and whether there has been a significant change in gender
              representation.
            </p>
          </section>
          <details>
            <summary>
              Before we start, here are a few important disclaimers.
            </summary>
            Fire Emblem <Description tag="FE17">Engage</Description> is not
            included in this article due to the game's script not being
            available online at the time data for this article was collected.{" "}
            <br />
            <br />
            This article primarily discusses the role of the gender binary
            within the series. There have been a few characters in the series’
            history whose gender identity has not been within the margins of the
            gender binary:
            <ul>
              <li>
                Kyza was originally introduced with he/him pronouns in their
                original appearance in{" "}
                <Description tag="FE10">Radiant Dawn.</Description> There were
                hints in the script that the character could be read as a
                transgender female character, although a lot of these
                characteristics were shared with offensive gay male stereotypes
                in Japanese entertainment culture at the time. In recent years,
                they were localized using gender-neutral pronouns in{" "}
                <Description tag="FEH">Fire Emblem Heroes</Description>. In this
                article, which analyzes data from the scripts of each mainline
                game, Kyza is included in the male statistic due to being
                originally localized as male and categorized as such within the
                game’s code, but they are now known as a gender-neutral
                character.
              </li>
              <li>
                Brammimond is a character in{" "}
                <Description tag="FE7">The Blazing Blade</Description> that does
                not identify with any specific gender or personality, instead
                mirroring the personality and voice of the person speaking with
                them. They are not included in the statistics of this article
                due to not being a playable or enemy unit.
              </li>
              <li>
                Limstella is a character in{" "}
                <Description tag="FE7">The Blazing Blade</Description> that is
                meant to be the manifestation of perfect power and beauty. Since
                they are essentially an essence/construct rather than an actual
                character, they are also not included in the statistics of this
                article.{" "}
              </li>
            </ul>
            Apart from these characters, there are no other explicitly
            transgender, non-binary, or gender non-conforming characters within
            the series at this point in time. Hopefully in the future the series
            will improve further in their representation of diverse gender
            identities!
          </details>
        </div>

        <div className="gender-intro">
          <section className="gender-intro-paragraphs">
            <p>
              In this article, we will examine the representation of gender
              throughout the series using four metrics:
              <ol style={{ lineHeight: 2 }}>
                <li>
                  <span className="gender-scroller-category cat-one">
                    <b>Quantity of Appearances:</b> Has the representation of
                    female characters increased across the series?
                  </span>
                </li>
                <li>
                  <span className="gender-scroller-category cat-two">
                    <b>Quality of Appearances:</b> Have female characters become
                    more important throughout the series?
                  </span>
                </li>
                <li>
                  <span className="gender-scroller-category cat-three">
                    <b>Gameplay Integration:</b> How have female characters been
                    represented in gameplay?
                  </span>
                </li>
                <li>
                  <span className="gender-scroller-category cat-three">
                    <b>Relationships:</b> How have interactions between female
                    characters evolved over the series, and can they exist
                    outside of their relationships with men?
                  </span>
                </li>
              </ol>
            </p>
          </section>
        </div>

        <div className="gender-article-section-intro">
          <h2>Part 1: Quantity of appearances</h2>
          <p>
            Has the actual quantity of female characters changed across games?
          </p>
        </div>
        <CharacterCounts />

        <div className="gender-article-section-intro left-aligned">
          <p>
            Do we see the same general upwards trend when analyzing line counts?
            Upon first glance, it seems that there is not a significant upwards
            trend in female line counts; however, there are several factors to
            consider:
          </p>
        </div>

        <LineTabs />

        <div
          className="gender-article-section-intro left-aligned"
          style={{ paddingTop: "20px" }}
        >
          <p>
            <ul>
              <li>
                <Description tag="FE12">
                  <i>New Mystery of the Emblem</i>
                </Description>{" "}
                introduces the <Description tag="avatar">Avatar</Description>,
                which can present as either male or female. If we examine the
                total percentages of spoken lines throughout each game including
                those attributed to the avatar, the percentage of female lines
                does not significantly increase. However, if we remove the
                avatar data, there is a trend of equalization between the
                percentage of male and female lines, and this trend is quite
                consistent among original titles in the series.{" "}
              </li>
              <li>
                When removing the games that are remakes of earlier titles, the
                amount of lines spoken by male and female characters displays a
                trend of equalizing over time.
              </li>
            </ul>
          </p>
          {/* <p>
            So we 
            So when just evaluating the quantity of female appearances, there is
            a visible improvement overall.{" "}
          </p> */}
        </div>
        <div className="gender-article-section-intro">
          <h2>Part 2: Quality of appearances</h2>
          <p>
            Next, we will examine the in-game story portrayals of female
            characters across the series: how many of them have been relevant to
            the game’s narrative, and in what capacity?{" "}
          </p>
        </div>
        <LordsOverview />

        <FemaleLords />

        <FemaleMainChars />

        <GenderPartThree />

        <GenderPartFour />
        <p>
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
        </p>
      </div>
      <Footer vertical={false} />
    </>
  );
}

export default GenderArticle;
