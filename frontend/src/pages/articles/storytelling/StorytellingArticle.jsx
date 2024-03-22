import React from "react";

import Footer from "../../../components/navigation/Footer";
import Description from "../../../components/articles/Description";

import "./storytelling.css";
import EmotionLabels from "./EmotionLabels";

function StorytellingArticle() {
  return (
    <>
      <div className="story-article">
        <div className="story-intro">
          <h1>Narrative Style and Storytelling in the Fire Emblem Series</h1>
          <section className="story-intro-paragraphs">
            <p>
              Narrative and storytelling are an essential aspect of the Fire
              Emblem games, as they were initially conceived as a blend of
              strategic gameplay and traditional storytelling elements of
              role-playing games. Throughout the series’ history, the core
              storytelling modus operandi revolves around a medieval fantasy
              setting combined with war drama. Each game features a core cast of
              characters and an expanding roster, chronicling a war story
              spanning an entire continent.
            </p>
            <p>
              In this article, we will examine the narrative structure and style
              of the scriptwriting in the series. This analysis primarily takes
              into account the textual content of the games, treating it as a
              script exempt from any video game mechanics or gameplay. What can
              we learn about the writing style and storytelling methods of the
              games using only visible text content?
            </p>
          </section>
        </div>

        <div className="story-article-section-intro">
          <h2>Part 1: Writing Style</h2>
          <p>
            Various different teams of writers have conceived and written the
            storylines for the games throughout the series, and with this has
            come an evolution in writing style. Most of the series has been
            localized by the same company, Treehouse, with the exception of the{" "}
            <Description tag="FE11">eleventh</Description>,{" "}
            <Description tag="FE13">thirteenth</Description>, and{" "}
            <Description tag="FE15">fifteenth</Description> games, which were
            localized by 8-4. Here we will examine various writing style and
            word content metrics to see if the series’ writing style has evolved
            over time.
          </p>
        </div>

        <div className="story-article-section-intro">
          <h2>Part 2: In Context With Other Media</h2>
          <p>
            Fire Emblem has carved out a very consistent niche for itself: most
            of the writing and localization style has stayed very consistent
            across the series, but it also is very similar to many other games
            in the role-playing video game genre!
          </p>
        </div>

        <div className="story-article-section-intro">
          <h2>Part 3: Shifting Focus to Storytelling</h2>
          <p>
            Across different forms of media, certain common storytelling
            structures have persisted. The key moments or beats in a narrative
            can often be identified by looking at what the emotionally
            heightened moments in a story are, and this is amplified in Fire
            Emblem due to the script nature of its written textual content. In
            this section, we will look at two methods to determine what some of
            the most important moments are in each game’s narrative.
          </p>
        </div>

        <EmotionLabels />

        <div className="story-article-section-intro">
          <h2>Part 4: Storytelling Structure</h2>
          <p>
            With our data on what the most significant emotional beats within
            each story are, we can map out the storytelling structures of the
            games!
          </p>
        </div>

        <div className="story-article-section-intro">
          <h2>Part 5: Complexity of Narrative and Target Demographic</h2>
          <p>
            We can see that every narrative shares the common characteristic of
            a medieval historical setting, but there are different storytelling
            methods employed throughout the series to cater to different needs!
            Let’s see exactly why this is, based on the developers’ intentions.
          </p>
        </div>

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

export default StorytellingArticle;
