import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import Description from "../../../components/articles/Description";
import EmotionLabelScroll from "./EmotionLabelScroll";

import "./storytelling.css";
import EmotionTrajectory from "./EmotionTrajectory";

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
      <section>
        <p className="story-timeline-intro">
          Across different forms of media, certain common storytelling
          structures have persisted. The key moments or beats in a narrative can
          often be identified by looking at what the emotionally heightened
          moments in a story are, and this is amplified in Fire Emblem due to
          the script nature of its written textual content. In this section, we
          will look at two methods to determine what some of the most important
          moments are in each game’s narrative.
        </p>
        <p>
          When analyzing a line of spoken text, emotion plays an important role
          in helping us understand the meaning and intensity behind what the
          speaker is saying. We can map the most heightened and important
          emotional moments in a story by determining the amount of emotionally
          charged lines in each chapter and to what extent this amount changes
          over time. In order to map the emotions within each line of dialogue
          spanning every game in the series, I developed a machine learning
          model to predict an emotion label based on a piece of text.
        </p>
        <p>
          This model is familiar with six distinct emotion labels: joy, sadness,
          anger, fear, surprise, and the “neutral” emotion, where the speaker is
          conveying information without any emotional intent. We can see how the
          model predicts each of these categories through the following
          examples.
        </p>
        <EmotionLabelScroll onStepExit={onStepExit} type="emotion">
          <Step data={1}>
            <div className="story-scroller-step">
              <p>
                The model picks up on direct statements of emotion, such as in
                this example. While the majority of this dialogue line is
                neutral, the speaker expresses their happiness at the end of the
                statement, which the model uses to predict the emotion{" "}
                <i>joy</i>.
              </p>
            </div>
          </Step>
          <Step data={2}>
            <div className="story-scroller-step">
              <p>
                The model also associates various words with their most common
                emotion labels. In this example, the model uses the combination
                of the words "so", "really", and "going" to predict that the
                speaker is expressing <i>surprise</i>. Even though the speaker
                does not explicitly declare their surprise, the pattern of these
                common words used indicates their emotion.
              </p>
            </div>
          </Step>
          <Step data={3}>
            <div className="story-scroller-step">
              <p>
                In this example, the model is able to associate the sequence of
                words with emotional expression: even though "please", "don't",
                "whatever", and "want" are common words, the particular sequence
                of words used in this statement express the speaker's fear:
                "please don't kill me" and "whatever you want".
              </p>
            </div>
          </Step>
          <Step data={4}>
            <div className="story-scroller-step">
              <p>
                The model is also able to detect words within a statement that
                don't line up with the predicted emotion label: for example,
                here the model highlights the "prepared" as a term detracting
                from the <i>anger</i> label, as anger is commonly associated
                with impulsiveness or lack of control. However, the use of the
                phrase "kill them all" outweighs the use of the word "prepared",
                so the model still correctly predicts <i>anger</i>.
              </p>
            </div>
          </Step>
          <Step data={5}>
            <div className="story-scroller-step">
              <p>
                Sometimes, there is no clear usage of terms or phrases in a
                statement to indicate the speaker's emotion. In this case, the
                model will sum up the scores of both the words in favor of and
                detracting from a certain label. In this example, we can tell
                that the speaker is sad based on their tone and topic of
                conversation despite there not being an explicit declaration of
                sadness. The model is advanced enough to arrive at the same
                conclusion through examining the frequency and usage of words.
              </p>
            </div>
          </Step>
          <Step data={6}>
            <div className="story-scroller-step">
              <p>
                Finally, the model is able to detect when a statement has no
                underlying emotion within it and classifies it as <i>neutral</i>
                .
              </p>
            </div>
          </Step>
        </EmotionLabelScroll>
      </section>

      <section>
        <p className="story-timeline-intro">
          Using these emotion labels, we can look at the overall emotional
          trajectory within a game and determine what the most significant
          emotional beats are.
        </p>
        <EmotionTrajectory onStepExit={onStepExit} offset={"300px"}>
          <Step data={1}>
            <div className="story-scroller-step">
              <p>
                This is the emotion graph for{" "}
                <Description tag="FE9">Path of Radiance</Description>, excluding
                the neutral tag category. The most significant peaks in the
                graph correspond to the story's most important emotional beats.
              </p>
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

      <section>
        <p className="story-timeline-intro">
          However, specific emotions may be too narrow of a view to fully
          understand the scope and flow of a story. We can also look at the
          overall trend in positive or negative emotion within a chapter to
          understand what the overall morale or feeling is among the speaking
          characters.
        </p>
        <p>
          I trained a second machine learning model to predict a line’s
          sentiment using similar methods to the first. Each line is assigned a
          label: positive sentiment, negative sentiment, and neutral sentiment.
          Positively charged emotions like joy correspond to positive sentiment
          while negatively charged emotions like anger, sadness, and fear
          correspond to negative sentiment. Neutral statements convey no
          emotional meaning, while surprise can fall into any of the three
          categories based on context.
        </p>
        <EmotionLabelScroll onStepExit={onStepExit} type="sentiment">
          <Step data={1}>
            <div className="story-scroller-step">
              <p>
                Like the previous model, the sentiment predictor can detect when
                the speaker explicitly expresses their emotion and provides the
                appropriate sentiment label. In this example, the speaker says
                that they feel happy, an emotion associated with positive
                valence.
              </p>
            </div>
          </Step>
          <Step data={2}>
            <div className="story-scroller-step">
              <p>
                Similarly, in this line, the speaker expresses how sad they
                feel, indicating a negative valence.
              </p>
            </div>
          </Step>
          <Step data={3}>
            <div className="story-scroller-step">
              <p>
                The model is also able to associate common words and phrases
                with particular valences: in this example, the word "proud" is
                strongly associated with positive emotion.
              </p>
            </div>
          </Step>
          <Step data={4}>
            <div className="story-scroller-step">
              <p>
                For more complicated cases, the model sums the scores of various
                words and word sequences across the text to determine the most
                likely label.
              </p>
            </div>
          </Step>
          <Step data={5}>
            <div className="story-scroller-step">
              <p>
                Finally, the model classifies statements with unclear or no
                particular emotional valence as <i>neutral</i>.
              </p>
            </div>
          </Step>
        </EmotionLabelScroll>
      </section>

      <section>
        <p className="story-timeline-intro">
          Similarly to the emotion data, we can combine the sentiment labels in
          each chapter to create a map of how the overall sentiment in dialogue
          changes across each chapter.
        </p>
        {/* GRAPH HERE!!! */}
      </section>
    </div>
  );
}

export default EmotionLabels;
