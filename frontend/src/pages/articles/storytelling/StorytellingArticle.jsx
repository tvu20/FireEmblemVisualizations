import React from "react";

import Footer from "../../../components/navigation/Footer";
import Description from "../../../components/articles/Description";
import WritingTabs from "./WritingTabs";
import NarrativeCards from "./NarrativeCards";

import "./storytelling.css";
import EmotionLabels from "./EmotionLabels";
import StoryCategories from "./StoryCategories";
import Complexity from "../../../visualizations/script/Complexity";
import Similarity from "../../../visualizations/script/Similarity";

function StorytellingArticle() {
  return (
    <>
      <div className="story-article">
        <div className="story-intro banner">
          <h1>Narrative Style and Storytelling in the Fire Emblem Series</h1>
          <section className="story-intro-paragraphs">
            <p>
              Narrative and storytelling are an essential aspect of the{" "}
              <i>Fire Emblem</i> games, as they were initially conceived as a
              blend of strategic gameplay and traditional storytelling elements
              of role-playing games. Throughout the series’ history, the core
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
              games using only textual content?
            </p>
          </section>
        </div>

        <div className="story-article-section-intro">
          <h2>Part 1: Writing Style</h2>
          <p>
            Different teams of writers have conceived and written storylines for
            the games throughout the series, and this has brought an variety in
            writing style. Most of the series has been localized by the same
            company, Treehouse, with the exception of the{" "}
            <Description tag="FE11">eleventh</Description>,{" "}
            <Description tag="FE13">thirteenth</Description>, and{" "}
            <Description tag="FE15">fifteenth</Description> games, which were
            localized by 8-4. Here we will examine various writing style and
            word content metrics to see if the series’ writing style has evolved
            over time.
          </p>
        </div>

        <WritingTabs />

        <div
          className="story-article-section-intro"
          style={{ paddingTop: "10px" }}
        >
          <p>
            These metrics suggest to us that while the overall complexity of the
            writing structure has increased over the series, the actual reading
            level and writing style has not significantly changed. In this way,
            the series has maintained a degree of consistency in its writing to
            be able to continuously appeal to its core fans.
          </p>
        </div>

        <div className="story-article-section-intro left-aligned">
          <h2>Part 2: In Context With Other Media</h2>
          <p>
            <i>Fire Emblem</i> has carved out a very consistent niche for
            itself: most of the writing and localization style has stayed very
            consistent across the series, but it also is very similar to many
            other games in the role-playing video game genre!
          </p>
          <p>
            Here is the readibility graph revisited, but this time you can
            display the readibility scores of some other pieces of media. They
            fall into three categories: other games, other scripts, and other
            pieces of prose writing. Feel free to use the toggles to display the
            different categories!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Complexity />
        </div>

        <div
          className="story-article-section-intro left-aligned"
          style={{ paddingTop: "20px" }}
        >
          <p>
            The readibility scores of all the <i>Fire Emblem</i> games fall
            within a single cluster, which is shared with some other well-known
            roleplaying games such as <i>Assassin’s Creed</i> and{" "}
            <i>Final Fantasy VII</i>. Additionally, we see strong similarities
            with other script-based texts such as movie scripts, while prose
            writing falls on drastically different areas of the readibility
            axes. From this graph we can see that the style of media, rather
            than the time released or story genre, has the largest influence in
            readibility metrics.{" "}
          </p>
          <p>
            We continue to see the consistency across games when examining
            similarity to other pieces of media. I used two common metrics for
            measuring the similarity of two pieces of writing:{" "}
            <a
              href="https://www.capitalone.com/tech/machine-learning/understanding-tf-idf/"
              className="highlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              TD-IDF
            </a>
            , which determines the similarity of important terms in a document,
            and{" "}
            <a
              href="https://en.wikipedia.org/wiki/Jaccard_index"
              className="highlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jaccard
            </a>
            , which measures the direct overlap of unique words between two
            bodies of text.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Similarity />
        </div>
        <div
          className="story-article-section-intro left-aligned"
          style={{ paddingTop: "10px" }}
        >
          <p>
            The TF-IDF results highlight the similarity between games: each game
            in the series is over 85% similar in TD-IDF metrics compared to the
            newest game, <i>Three Houses</i>. This is significantly higher than
            all other non-<i>Fire Emblem</i> entries. These results show that
            while there may have been changes in specific word choices or
            language usage throughout the series, the overall
            writing/localization style has stayed very consistent, likely to
            cater to the franchise’s audience. Consistency in story/narration
            may be one of the main reasons why the series has maintained a core
            group of fans over time. We can also notice that localization teams
            have been very intentionally consistent across the franchise: even
            though two different companies have been involved in localization,
            there is no significant difference in the writing styles used.
          </p>
        </div>

        <div
          className="story-article-section-intro"
          style={{ marginBottom: "100px" }}
        >
          <h2>Part 3: Shifting Focus to Storytelling</h2>
          <p>
            Across different forms of media, certain common storytelling
            structures have persisted. The key moments or beats in a narrative
            can often be identified by looking at what the emotionally
            heightened moments in a story are, and this is amplified in{" "}
            <i>Fire Emblem</i> due to the script nature of its textual content.
            In this section, we will look at two forms of emotion analysis to
            determine what some of the most important moments are in each game’s
            narrative.
          </p>
          <p>
            In a line of spoken dialogue, emotion plays an important role in
            helping us understand the meaning and intensity behind what the
            speaker is saying. We can map the most important emotional moments
            in a story by determining the amount of emotionally charged lines in
            each chapter and to what extent this amount changes over time. To do
            so,{" "}
            <a
              href="https://www.tensorflow.org/text/tutorials/classify_text_with_bert"
              className="highlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              I trained a machine learning model to predict an emotion label
            </a>{" "}
            based on a piece of text.
          </p>
          <p>
            This model is familiar with six distinct emotion labels: joy,
            sadness, anger, fear, surprise, and the “neutral” emotion, where the
            speaker is conveying information without any emotional intent. We
            can see how the model predicts each of these categories through the
            following examples.
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

        <StoryCategories />

        {/* <CategoryTabs /> */}

        <div className="story-article-section-intro">
          <h2>Part 5: Complexity of Narrative and Target Demographic</h2>
          <p>
            We can see that every narrative shares the common characteristic of
            a medieval historical setting, but there are different storytelling
            methods employed throughout the series to cater to different needs!
            Let’s see exactly why this is, based on the developers’ intentions.
          </p>
        </div>
        <NarrativeCards />
      </div>
      <Footer vertical={false} />
    </>
  );
}

export default StorytellingArticle;
