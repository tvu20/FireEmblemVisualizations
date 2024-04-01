import React, { useState } from "react";
import { Step } from "react-scrollama";

import Description from "../../../components/articles/Description";
import RelScroll from "./RelScroll";

import "./relationships.css";

function SocialNetworks() {
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
    <div className="rel-timeline">
      <section className="rel-timeline-intro left-aligned">
        <h2>Part 1: Support Networks</h2>
        <p>
          Excluding some remakes, every game in the <i>Fire Emblem</i> franchise
          since{" "}
          <Description tag="FE6">
            <i>The Binding Blade</i>
          </Description>{" "}
          has featured the Support system in some capacity. Excluding special
          circumstances, every character in these games has at least one
          support.
        </p>
        <p>
          We can visualize the relationships between these characters through a
          series of{" "}
          <a
            href="https://shs.hal.science/halshs-03351755/document"
            className="highlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            Social Network Graphs
          </a>
          : every person is represented as a single “node” in the graph, while a
          link between two nodes represents the presence of a support between
          the pair of characters. By{" "}
          <a
            href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0159161#:~:text=In%20network%20clustering%2C%20the%20literature,(inter%2Dcluster%20sparsity)."
            className="highlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            applying traditional graph-clustering algorithms
          </a>
          , we can start to understand which sets of characters are most closely
          linked and analyze the overall structures of the social networks.
        </p>
      </section>
      <section>
        <RelScroll onStepExit={onStepExit}>
          <Step data={1}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  The modern support system first appears in{" "}
                  <Description tag="FE6">
                    <i>The Binding Blade</i>
                  </Description>
                  , allowing each character to form close relationships with
                  various other party members. Everyone in the social network is
                  linked to (can support) at least two other characters, and
                  there are no separate clusters within the network: every
                  character is connected to every other character through a
                  series of links, meaning that every character is at most a few
                  degrees separated. In-game, each character is restricted to
                  being able to unlock at most five other supports, limiting the
                  total amount of actualized connections in the social network.{" "}
                </span>
              </div>
            </div>
          </Step>
          <Step data={2}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Here we can see the links belonging to Roy, the main character
                  of{" "}
                  <Description tag="FE6">
                    <i>The Binding Blade.</i>
                  </Description>{" "}
                  Notably, Roy is <i>not</i> at the center of his game's social
                  network: he is actually close to the edge of the graph,
                  suggesting that he does not receive special privileges in
                  forming close bonds with others just because he's the main
                  protagonist.
                </span>
              </div>
            </div>
          </Step>
          <Step data={3}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  The next game in the series,{" "}
                  <Description tag="FE7">
                    <i>The Blazing Blade</i>
                  </Description>
                  , shares strong similarities with <i>Binding Blade</i> in
                  their network structures. Like before, the network has some
                  sections that are visibly separated/stick out compared to
                  others, but the links between nodes still form a single
                  interconnected graph. Every character is again linked to at
                  least two others, making each character a few degrees of
                  separation apart.
                </span>
              </div>
            </div>
          </Step>
          <Step data={4}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  The main character in{" "}
                  <Description tag="FE7">
                    <i>The Blazing Blade</i>
                  </Description>
                  , Eliwood, also falls on the edge of the game's graph. The
                  selectivity of which characters could support whom reflects
                  how relationships form in our own society: not everyone is
                  compatible with each other, and two people may never progress
                  further than being acquaintances despite many interactions.
                </span>
              </div>
            </div>
          </Step>
          <Step data={5}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  We start seeing some variations in the social network graphs
                  beginning with{" "}
                  <Description tag="FE8">
                    <i>The Sacred Stones</i>
                  </Description>
                  . While the number of supports allowed per character has not
                  increased, the overall shape of the social network is more
                  tightly connected. This suggests that the degrees of
                  separation between characters has decreased compared to the
                  previous games, meaning that the cast is a lot more
                  tight-knit.
                </span>
              </div>
            </div>
          </Step>
          <Step data={6}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  <Description tag="FE9">
                    <i>Path of Radiance</i>
                  </Description>{" "}
                  takes the opposite approach to character relationships - on
                  average, characters have notably fewer supports than in
                  previous games, suggesting that they are more picky about who
                  they can form close relationships with. The clusters within
                  the network graph are a lot more visibly separated compared to
                  earlier networks. Additionally, <i>Path of Radiance</i> marks
                  the appearance of the first character in a social network
                  graph graph with a single available support link.
                </span>
              </div>
            </div>
          </Step>
          <Step data={7}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  In{" "}
                  <Description tag="FE13">
                    <i>Awakening</i>
                  </Description>
                  , the structure of the support network is completely changed
                  due to the presence of the{" "}
                  <Description tag="avatar">Avatar</Description> in the story.
                  Unlike previous main characters, who could only support
                  certain other characters, the Avatar was the first character
                  in any game that could form a support with anyone,
                  representing the player’s ability to pick whoever in the game
                  they wanted to grow close to. Additionally, this was the first
                  game in the series that removed the limits on supports: any
                  character could have any number of supports with others.
                </span>
              </div>
            </div>
          </Step>
          <Step data={8}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  <i>Awakening</i> and the following title in the series,{" "}
                  <Description tag="FE14">
                    <i>Fates</i>
                  </Description>{" "}
                  (pictured here), featured two generations of characters, the
                  second being the children of the first generation. There is a
                  clear distinction between the two clusters of characters: all
                  of the characters in each generation are tightly connected
                  with each other, and some links between the first and second
                  generation are presented in the form of parent relationships,
                  shown by the long lines between the two clusters. However, all
                  nodes in the graph are connected through their link to the{" "}
                  <Description tag="avatar">Avatar</Description>, which resides
                  in the center of the graph and provides a focal point for the
                  network. A second player-dependent character, the Avatar’s
                  child, is a central character in the second generation
                  cluster: they are the only second-gen character to be able to
                  support with all other second-gen units.
                </span>
              </div>
            </div>
          </Step>
          <Step data={9}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  <Description tag="FE15">
                    <i>Fire Emblem Echoes</i>
                  </Description>{" "}
                  provides another unique approach to the support system: it is
                  the first and currently only game in the series to have very
                  clearly defined clusters within its social network. In every
                  other network, each character is connected with every other
                  character through a series of links; however, in <i>Echoes</i>
                  , characters form very distinct support clusters in the most
                  fragmented social network across the games. This is reflected
                  in the narrative of the game, as it is the only title featured
                  in this article to have two sets of armies and therefore many
                  characters in the social network that will never have the
                  option to meet in game.
                </span>
              </div>
            </div>
          </Step>
          <Step data={10}>
            <div
              className="rel-scroller-step"
              style={{ marginBottom: "100px" }}
            >
              <div className="rel-tapewrapper">
                <span>
                  Finally,{" "}
                  <Description tag="FE16">
                    <i>Three Houses</i>
                  </Description>
                  , the latest game discussed in this article, combines a lot of
                  the features of previous networks we have seen before. We see
                  a departure from the endlessly sprawling networks of{" "}
                  <Description tag="FE13">
                    <i>Awakening</i>
                  </Description>{" "}
                  and{" "}
                  <Description tag="FE14">
                    <i>Fates</i>
                  </Description>
                  : characters can only support a specific set of other
                  characters, similar to the early generations of supports, and
                  thus the graph is less compact than these two titles. However,
                  the Avatar has been incorporated into the supports system
                  again, providing a central focal point for the social network
                  that the early games did not have. The <i>Three Houses</i>{" "}
                  network graph ends up being a blend of the distinct character
                  groups seen in the early support networks and the centralized
                  design of the Avatar-reliant networks.
                </span>
              </div>
            </div>
          </Step>
        </RelScroll>
      </section>
    </div>
  );
}

export default SocialNetworks;
