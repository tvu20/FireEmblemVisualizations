import React, { useState } from "react";
import { Step } from "react-scrollama";

import Description from "../../../components/articles/Description";
import EmotionLabelScroll from "./EmotionLabelScroll";
import EmotionTrajectory from "./EmotionTrajectory";

import graph from "../../../assets/storytelling/sentiment-graph-full.png";

import "./storytelling.css";

function EmotionLabels() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const onStepExit = ({ data, direction }) => {
    if (data.id === "end" && direction === "down") {
      setFinished(true);
    } else if (data.id === "start" && direction === "up") {
      setStarted(false);
    } else {
      if (finished === true) {
        setFinished(false);
      }
      if (started === false) {
        setStarted(true);
      }
    }
  };

  return (
    <div className="story-timeline">
      <section style={{ marginBottom: "200px" }}>
        <EmotionLabelScroll onStepExit={onStepExit} type="emotion">
          <Step data={1}>
            <div className="story-scroller-step">
              <div className="story-tapewrapper">
                <span>
                  The model picks up on direct statements of emotion, such as in
                  this example. While the majority of this dialogue line is
                  neutral, the speaker expresses their happiness at the end of
                  the statement, which the model uses to predict the emotion{" "}
                  <i>joy</i>.
                </span>
              </div>
            </div>
          </Step>
          <Step data={2}>
            <div className="story-scroller-step">
              <div className="story-tapewrapper">
                <span>
                  The model also associates various words with their most common
                  emotion labels. In this example, the model uses the
                  combination of the words "so", "really", and "going" to
                  predict that the speaker is expressing <i>surprise</i>. Even
                  though the speaker does not explicitly declare their surprise,
                  the pattern of these common words used indicates their
                  emotion.
                </span>
              </div>
            </div>
          </Step>
          <Step data={3}>
            <div className="story-scroller-step">
              <div className="story-tapewrapper">
                <span>
                  In this example, the model is able to associate the sequence
                  of words with emotional expression: even though "please",
                  "don't", "whatever", and "want" are common words, the
                  particular sequence of words used in this statement express
                  the speaker's fear: "please don't kill me" and "whatever you
                  want".
                </span>
              </div>
            </div>
          </Step>
          <Step data={4}>
            <div className="story-scroller-step">
              <div className="story-tapewrapper">
                <span>
                  The model is also able to detect words within a statement that
                  don't line up with the predicted emotion label: for example,
                  here the model highlights the "prepared" as a term detracting
                  from the <i>anger</i> label, as anger is commonly associated
                  with impulsiveness or lack of control. However, the use of the
                  phrase "kill them all" outweighs the use of the word
                  "prepared", so the model still correctly predicts <i>anger</i>
                  .
                </span>
              </div>
            </div>
          </Step>
          <Step data={5}>
            <div className="story-scroller-step">
              <div className="story-tapewrapper">
                <span>
                  Sometimes, there is no clear usage of terms or phrases in a
                  statement to indicate the speaker's emotion. In this case, the
                  model will sum up the scores of both the words in favor of and
                  detracting from a certain label. In this example, we can tell
                  that the speaker is sad based on their tone and topic of
                  conversation despite there not being an explicit declaration
                  of sadness. The model is advanced enough to arrive at the same
                  conclusion through examining the frequency and usage of words.
                </span>
              </div>
            </div>
          </Step>
          <Step data={6}>
            <div className="story-scroller-step">
              <div className="story-tapewrapper">
                <span>
                  Finally, the model is able to detect when a statement has no
                  underlying emotion within it and classifies it as{" "}
                  <i>neutral</i>.
                </span>
              </div>
            </div>
          </Step>
        </EmotionLabelScroll>
      </section>

      <section>
        <div className="story-timeline-intro">
          <p>
            Using these emotion labels, we can look at the overall emotional
            trajectory within a game and determine what the most significant
            emotional beats are.
          </p>
        </div>
      </section>
      <section>
        <EmotionTrajectory onStepExit={onStepExit} offset={"300px"}>
          <Step data={1}>
            <div className="story-scroller-step">
              <div
                className="story-tapewrapper"
                style={{ textAlign: "center" }}
              >
                <span>
                  This is the emotion graph for{" "}
                  <Description tag="FE9">Path of Radiance</Description>,
                  excluding the neutral tag category. The most significant peaks
                  in the graph correspond to the story's most important
                  emotional beats.
                </span>
              </div>
            </div>
          </Step>
          <Step data={2}>
            <div className="story-scroller-step-spacer"></div>
          </Step>
          <Step data={3}>
            <div className="story-scroller-step-spacer"></div>
          </Step>
          <Step data={4}>
            <div className="story-scroller-step-spacer"></div>
          </Step>
          <Step data={5}>
            <div className="story-scroller-step-spacer"></div>
          </Step>
          <Step data={6}>
            <div className="story-scroller-step-spacer"></div>
          </Step>
          <Step data={"end"}>
            <div className="story-scroller-step-spacer"></div>
          </Step>
        </EmotionTrajectory>
      </section>

      <section style={{ margin: "100px 0" }}>
        <div className="story-timeline-intro">
          <p>
            However, specific emotions may be too narrow of a view to fully
            understand the scope and flow of a story. We can also look at the
            overall trend in positive or negative emotion within a chapter to
            understand what the overall morale or feeling is among the speaking
            characters.
          </p>
          <p>
            I trained a second machine learning model to predict a line’s
            sentiment using similar methods to the first. Each line is assigned
            a label: positive sentiment, negative sentiment, and neutral
            sentiment. Positively charged emotions like joy correspond to
            positive sentiment while negatively charged emotions like anger,
            sadness, and fear correspond to negative sentiment. Neutral
            statements convey no emotional meaning, while surprise can fall into
            any of the three categories based on context.
          </p>
        </div>
      </section>
      <section style={{ marginBottom: "100px" }}>
        <EmotionLabelScroll onStepExit={onStepExit} type="sentiment">
          <Step data={1}>
            <div className="story-scroller-step">
              <div className="story-tapewrapper">
                <span>
                  Like the previous model, the sentiment predictor can detect
                  when the speaker explicitly expresses their emotion and
                  provides the appropriate sentiment label. In this example, the
                  speaker says that they feel happy, an emotion associated with
                  positive valence.
                </span>
              </div>
            </div>
          </Step>
          <Step data={2}>
            <div className="story-scroller-step">
              <div className="story-tapewrapper">
                <span>
                  Similarly, in this line, the speaker expresses how sad they
                  feel, indicating a negative valence.
                </span>
              </div>
            </div>
          </Step>
          <Step data={3}>
            <div className="story-scroller-step">
              <div className="story-tapewrapper">
                <span>
                  The model is also able to associate common words and phrases
                  with particular valences: in this example, the word "proud" is
                  strongly associated with positive emotion.
                </span>
              </div>
            </div>
          </Step>
          <Step data={4}>
            <div className="story-scroller-step">
              <div className="story-tapewrapper">
                <span>
                  For more complicated cases, the model sums the scores of
                  various words and word sequences across the text to determine
                  the most likely label.
                </span>
              </div>
            </div>
          </Step>
          <Step data={5}>
            <div className="story-scroller-step">
              <div className="story-tapewrapper">
                <span>
                  Finally, the model classifies statements with unclear or no
                  particular emotional valence as <i>neutral</i>.
                </span>
              </div>
            </div>
          </Step>
        </EmotionLabelScroll>
      </section>

      <section>
        <div className="story-timeline-intro">
          <p>
            Similarly to the emotion data, we can combine the sentiment labels
            in each chapter to create a map of how the overall sentiment in
            dialogue changes across each chapter.
          </p>
        </div>
        <div className="story-sentiment-graph-full">
          <img src={graph} alt="sentiment graph" />
        </div>
        <div className="story-timeline-intro left-aligned">
          <p>
            This is an example of a sentiment curve, taken from{" "}
            <Description tag="FE9">Path of Radiance</Description>. This game's
            sentiment curve is heavily skewed negative, as are the curves for
            the rest of the games. This makes sense for a series about wars -
            there are very few points in time where there are more positive than
            negative dialogue lines.
          </p>
          <p>
            There are a few points where many games will display a peak in
            emotional statements, both when looking at positive and negative
            quantities. The most common story points are the end of the first
            third of the narrative, the midpoint of the story, and the
            final/final few chapters.
          </p>
          <p>
            Using the data from the emotion and sentiment curves, we can
            identify what the key moments are in each story. It is particularly
            easy to pinpoint which parts of the game are the most significant
            because each game is broken down into many story chapters!
          </p>
          <details>
            <summary>A short note before we continue</summary>
            For the rest of this analysis, we have excluded data from{" "}
            <Description tag="FE2">Gaiden</Description> and{" "}
            <Description tag="FE15">Echoes</Description> due to both games
            having a unique narrative structure of only 5 acts. However, if we
            look at the storylines of these games without sentiment data, we can
            still see patterns from the rest of the series reflected within the
            Gaiden storyline.
          </details>
        </div>
      </section>
    </div>
  );
}

export default EmotionLabels;
