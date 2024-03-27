import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import Description from "../../../components/articles/Description";

import "./storytelling.css";
import "./sentiment.css";

import { sentiCategories, sentiCurves } from "../../../utils/storytelling";

import fullgraph from "../../../assets/storytelling/sentifullgraph.png";
import act3 from "../../../assets/storytelling/3act.png";
import act4 from "../../../assets/storytelling/4act.png";
import act3ex from "../../../assets/storytelling/3actex.png";
import act4ex from "../../../assets/storytelling/4actex.png";

function StoryCategories() {
  const [step, setStep] = useState("");
  const [show, setShow] = useState(true);

  const onStepEnter = ({ data }) => {
    setStep(data);
    if (!show) {
      setShow(true);
    }
  };

  const onStepExit = ({ direction }) => {
    if (step === 15 && direction === "down") {
      setShow(false);
    }
  };

  const createBackground = () => {
    return (
      <>
        {sentiCategories.map((data, index) => {
          return (
            <div
              id={`senti-${data.id}`}
              className={`sentiment-curve-img-container senti-step-${step} `}
            >
              <img src={data.img} alt={data.name} />
              {/* {data.name} */}
            </div>
          );
        })}
        <div
          id="senti-fullgraph"
          className={`sentiment-curve-big-container senti-step-${step}`}
        >
          <img src={fullgraph} alt="fullgraph" />
        </div>
        {sentiCurves.map((data, index) => {
          return (
            <div
              id={`senti-cat${data.id}`}
              className={`sentiment-curve-big-container senti-step-${step} `}
            >
              <img src={data.img} alt={data.id} />
              {/* {data.name} */}
            </div>
          );
        })}
        {sentiCurves.map((data, index) => {
          return (
            <div
              id={`senti-category-${data.id}`}
              className={`sentiment-curve-mid-container senti-step-${step} `}
            >
              <img src={data.img} alt={data.id} />
            </div>
          );
        })}
        <div
          id="senti-3act"
          className={`sentiment-curve-big-container senti-step-${step}`}
        >
          <img src={act3} alt="three act structure" />
        </div>
        <div
          id="senti-3actex"
          className={`sentiment-curve-big-container senti-step-${step}`}
        >
          <img src={act3ex} alt="three act structure" />
        </div>
        <div
          id="senti-4act"
          className={`sentiment-curve-big-container senti-step-${step}`}
        >
          <img src={act4} alt="three act structure" />
        </div>
        <div
          id="senti-4actex"
          className={`sentiment-curve-big-container senti-step-${step}`}
        >
          <img src={act4ex} alt="three act structure" />
        </div>
        <div id="dotted-1" className={`sentiment-curve-dottedline senti-step-${step}`}></div>
        <div id="dotted-2" className={`sentiment-curve-dottedline senti-step-${step}`}></div>
        <div id="dotted-3" className={`sentiment-curve-dottedline senti-step-${step}`}></div>
        <div id="dotted-4" className={`sentiment-curve-dottedline senti-step-${step}`}></div>
      </>
    );
  };

  return (
    <>
      <div className="story-step-single-col sc-short-col">
        <div className="story-tapewrapper">
          <span>
            How about significant female characters that don’t assume the roles
            of lords within their own games?
          </span>
        </div>
      </div>
      <section className="story-categories">
        <div
          className="sentiment-curves-bg-container"
          style={{ top: !show ? "-100vh" : "" }}
        >
          {createBackground()}
        </div>
        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={onStepExit}
          offset="450px"
        >
          <Step data={1}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <span>
                  Let’s return to our sentiment curves, representing the overall
                  emotional trajectory of each game.
                </span>
              </div>
            </div>
          </Step>
          <Step data={2}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <span>
                  Upon first glance their seems to be no rhyme or reason to the
                  curves: if you average all of them, there is no pattern other
                  than that they are all negative.
                </span>
              </div>
            </div>
          </Step>
          <Step data={3}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <span>
                  However, if we start splitting up the graphs based on key
                  features…
                </span>
              </div>
            </div>
          </Step>
          <Step data={4}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <span>We start to see some patterns emerging.</span>
              </div>
            </div>
          </Step>
          <Step data={5}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <h5>
                  <span>Category 1</span>
                </h5>
              </div>
              <div className="story-tapewrapper addendum">
                <span>
                  Games: Mystery of the Emblem, Awakening, Binding Blade
                </span>
              </div>
              <div className="story-tapewrapper addendum">
                <span>
                  The most distinctive traits are a low point followed by a
                  large victory around the midpoint of the story, a second
                  highpoint near the end of the story, and then a somewhat
                  bittersweet ending.
                </span>
              </div>
            </div>
          </Step>
          <Step data={6}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <h5>
                  <span>Category 2</span>
                </h5>
              </div>
              <div className="story-tapewrapper addendum">
                <span>
                  Games: Fates Birthright, Fates Conquest, Thracia 776, Path of
                  Radiance
                </span>
              </div>
              <div className="story-tapewrapper addendum">
                <span>
                  Characterized by a general downward slope in sentiment up
                  until the midpoint, where the characters experience a major
                  turning point (dramatic shift from high to low sentiment). The
                  last third of the game also begins with a major turning point
                  before the story rushes towards its end.
                </span>
              </div>
            </div>
          </Step>
          <Step data={7}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <h5>
                  <span>Category 3</span>
                </h5>
              </div>
              <div className="story-tapewrapper addendum">
                <span>Games: Blazing Blade, Sacred Stones, Shadow Dragon</span>
              </div>
              <div className="story-tapewrapper addendum">
                <span>
                  This category is fairly similar in structure to category 2,
                  but with differences in the general sentiment. Rather than a
                  general downwards slope towards the midpoint of the game, the
                  characters experience some sort of victory or significant
                  positive event before the midpoint. The last third of the game
                  also starts with a significant low point.
                </span>
              </div>
            </div>
          </Step>
          <Step data={8}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <h5>
                  <span>Category 4</span>
                </h5>
              </div>
              <div className="story-tapewrapper addendum">
                <span>
                  Games: Genealogy of the Holy War, Radiant Dawn, Three Houses
                </span>
              </div>
              <div className="story-tapewrapper addendum">
                <span>
                  This category is marked by one major event: a significant
                  point of devastation or loss at the very midpoint of the game.
                  The rest of the game follows a general slope upwards towards
                  each of the graph edges.
                </span>
              </div>
            </div>
          </Step>
          <Step data={9}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <span>
                  Here we can see all the sentiment curve categories together.{" "}
                </span>
              </div>
            </div>
          </Step>
          <Step data={10}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <span>
                  They can be further grouped into two general categories based
                  on overall narrative structure!
                </span>
              </div>
            </div>
          </Step>
          <Step data={11}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <h5>
                  <span>3-Act Structure</span>
                </h5>
              </div>
              <div className="story-tapewrapper addendum">
                <span>
                  A 3-Act story begins with setup of the world and characters,
                  followed by an inciting incident - a life-changing event or
                  catalyst that rocks the protagonist’s world. This is followed
                  by a period in which the hero realizes their initial
                  motivation, and potentially a significant high point such as
                  an important meeting or a devastating loss. The first act ends
                  with a key turning point where the protagonist establishes
                  their objective.
                </span>
              </div>
              <div className="story-tapewrapper addendum">
                <span>
                  The second act begins with a period of journeying and
                  discovery for the protagonist, but a key turning point at the
                  midpoint of the story forces the protagonist to re-evaluate
                  and face new obstacles. The second act ends with another key
                  turning point, and then the story rushes towards its
                  conclusion in the third act. Before the final battle is always
                  a last heart-wrenching scene, and the story ends with a
                  closing image for us to get a last glimpse of the hero and how
                  they’ve changed.
                </span>
              </div>
            </div>
          </Step>
          <Step data={12}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <span>
                  Here's how the 3-act structure is represented across the
                  series.
                </span>
              </div>
            </div>
          </Step>
          <Step data={13}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <h5>
                  <span>4-Act Structure</span>
                </h5>
              </div>
              <div className="story-tapewrapper addendum">
                <span>
                  A 4-Act story shares many of the same key milestones as a
                  3-Act. The first act consists of the setup, the inciting
                  incident, and the establishing of objectives. The first
                  portion of the second act consists of the hero’s first
                  journey, but then evil starts closing in after a turning point
                  and the act ends with a breaking point - this is the point of
                  no return, and the characters will never be the same.
                </span>
              </div>
              <div className="story-tapewrapper addendum">
                <span>
                  The third act allows the characters to pick up the pieces and
                  rebuild - usually there is another inciting incident that
                  points them towards a new goal. The finale functions similarly
                  to the three-act - it is preceded by a key turning point in
                  the story and makes sure to tug at the player’s heartstrings
                  with a final emotional scene before the end.
                </span>
              </div>
            </div>
          </Step>
          <Step data={14}>
            <div className="story-step-single-col">
              <div className="story-tapewrapper">
                <span>
                  Here's how the 4-act structure is represented across the
                  series.
                </span>
              </div>
            </div>
          </Step>
          <Step data={15}>
            <div
              className="story-scroller-step-spacer"
              style={{ height: "70vh" }}
            ></div>
          </Step>
        </Scrollama>
      </section>
    </>
  );
}

export default StoryCategories;
