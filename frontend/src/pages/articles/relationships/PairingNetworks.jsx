import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import Description from "../../../components/articles/Description";
import PairScroll from "./PairScroll";

import "./relationships.css";

function PairingNetworks() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

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
      <section>
        <p className="rel-timeline-intro">
          We will now turn to the representation of paired endings throughout
          the series, and with it, the growing inclusion of LGBTQ+ romantic
          content over the years. Paired endings represented the culmination of
          the player’s efforts to build supports between characters: character
          pairs could obtain up to three supports with increasing closeness,
          known as C-, B-, and A- supports respectively. Certain character pairs
          would receive a special ending description during the game’s credits
          sequence describing how their endings matched up with each other.ering
          algorithms, we can start to understand which sets of characters are
          most closely linked and analyze the overall structures of the social
          networks.
        </p>
        <p>
          In this section, I will examine the network graphs between the
          possible paired endings of each game in the series with this mechanic.
          Notably, not all paired endings are romantic: many of them represent
          other types of relationships, such as platonic or familial. While many
          explicitly state the category in which they belong either through the
          preceding support conversations or in the ending descriptions, there
          are a few that lend themselves to varying interpretations. In
          particular, there are various same-sex relationships throughout the
          series that don’t explicitly discuss romance within the supports or
          endings, but are implied to not be platonic to varying degrees.
        </p>
        <p>
          The ambiguity of same-sex relationships and the presence of queer
          coding within subtext has been an important topic studied by scholars
          of queer history in media representation; many pieces of media
          released during the timespan of Fire Emblem hinted at queer
          relationships without explicitly confirming them in order to bypass
          censorship issues while still providing queer fans relationships to
          latch on to. In examining the text of Fire Emblem, we can identify if
          - and when - the writers of various games may have attempted to do the
          same.
        </p>
        <PairScroll onStepExit={onStepExit}>
          <Step data={1}>
            <div className="rel-scroller-step">
              <p>
                The modern support system first appears in{" "}
                <Description tag="FE6">The Binding Blade</Description>, allowing
                each character to form close relationships with various other
                party members. Every character in the social network is linked
                to (can directly support) at least two other characters, and
                there are no unique clusters within the network: every character
                is connected to every other character through a series of links.
                This means that every character is at most a few degrees
                separated. However, in-game, each character is restricted to
                being able to unlock supports with at most five other
                characters, limiting the total amount of possible connections in
                the social network.{" "}
              </p>
            </div>
          </Step>
          <Step data={2}>
            <div className="rel-scroller-step">
              <p>
                Here we can see the links belonging to Roy, the main character
                of <Description tag="FE6">The Binding Blade.</Description>{" "}
                Significantly, Roy is <i>not</i> at the center of his game's
                social network: he is actually close to the edge of the graph,
                suggesting that he does not receive special privileges in
                forming supports just because he's the main protagonist.
              </p>
            </div>
          </Step>
          <Step data={3}>
            <div className="rel-scroller-step">
              <p>
                The next game in the series,{" "}
                <Description tag="FE7">The Blazing Blade</Description>, shares
                strong similarities with <i>Binding Blade</i> in their network
                structures. Like before, the network has some sections that are
                visibly separated/stick out compared to others, but the links
                between nodes still form a single interconnected graph. Again,
                every character is linked to at least two others, making each
                character a few degrees of separation apart.
              </p>
            </div>
          </Step>
          <Step data={4}>
            <div className="rel-scroller-step">
              <p>
                The main character in{" "}
                <Description tag="FE7">The Blazing Blade</Description>, Eliwood,
                also falls on the edge of the game's graph. The selectivity of
                which characters could support which characters reflects how
                many relationships form in our own society: not all people are
                compatible with each other and despite many interactions may
                remain only acquaintances.
              </p>
            </div>
          </Step>
          <Step data={5}>
            <div className="rel-scroller-step">
              <p>
                We start seeing some variations in the next two social network
                graphs. In{" "}
                <Description tag="FE8">The Sacred Stones</Description>, while
                the number of supports allowed per character has not increased,
                the overall shape of the social network is more tightly
                connected. This suggests that the degrees of separation between
                characters has decreased compared to the previous games, meaning
                that the cast is a lot more tight-knit.
              </p>
            </div>
          </Step>
          <Step data={6}>
            <div className="rel-scroller-step">
              <p>
                <Description tag="FE9">Path of Radiance</Description> takes the
                opposite approach to character relationships - on average,
                characters have notably fewer supports than in previous games,
                suggesting that characters are more picky about who they can
                form close relationships with. The clusters within the graph are
                a lot more visibly separated compared to earlier networks.
                Additionally, <i>Path of Radiance</i> marks the appearance of
                the first character in a social network graph graph with a
                single available support link.
              </p>
            </div>
          </Step>
          <Step data={7}>
            <div className="rel-scroller-step">
              <p>
                In Fire Emblem Awakening, the structure of the support network
                is completely changed due to the presence of the{" "}
                <Description tag="avatar">Avatar</Description> in the story.
                Unlike previous main characters, who could only support certain
                other characters, the Avatar was the first character in any game
                that could form a support with anyone, representing the player’s
                ability to pick whoever in the game they wanted to grow close
                to. Additionally, this was the first game in the series that
                removed the limits on supports: any character could have any
                number of supports with others.
              </p>
            </div>
          </Step>
          <Step data={8}>
            <div className="rel-scroller-step">
              <p>
                <i>Awakening</i> and the following title in the series,{" "}
                <Description tag="FE14">Fates</Description> (pictured here),
                featured two generations of characters, the second being the
                children of the first generation. Therefore, there was a clear
                distinction in the social networks between the two groups of
                characters: all of the first generation characters were tightly
                connected with each other, and the second generation characters
                were also closely connected, with several special characters
                hovering in-between. Some links between the first and second
                generation are presented in the form of parent relationships,
                representing the long lines between the two clusters seen here.
                However, all nodes in the graph are connected through their link
                to the <Description tag="avatar">Avatar</Description> node,
                which resides in the center of the graph and provides a focal
                point for the network. A second player-dependent character, the
                Avatar’s child, is a central character in the second generation
                cluster: they are the only second-gen character to be able to
                support with all other second-gen units.
              </p>
            </div>
          </Step>
          <Step data={9}>
            <div className="rel-scroller-step">
              <p>
                <Description tag="FE15">Fire Emblem Echoes</Description>{" "}
                provides another unique approach to the support system: it is
                the first and currently only game in the series to have very
                clearly defined clusters within its social network. In every
                other network, each character is connected with every other
                character through a series of links; however, in Echoes,
                characters form very distinct support clusters in the most
                fragmented social network across the games. This is reflected in
                the narrative of the game, as it is the only title featured in
                this article to have two sets of armies and therefore many
                characters in the social network that will never have the option
                to meet in game.
              </p>
            </div>
          </Step>
          <Step data={10}>
            <div className="rel-scroller-step">
              <p>
                Finally, <Description tag="FE16">Three Houses</Description>, the
                latest game discussed in this article, combines a lot of the
                features of previous networks we have seen before. We see a
                departure from the endlessly sprawling networks of{" "}
                <Description tag="FE13">Awakening</Description> and{" "}
                <Description tag="FE14">Fates</Description>: characters can only
                support a specific set of other characters, similar to the early
                generations of supports, and thus the graph is less compact than
                these two titles. However, the Avatar has been incorporated into
                the supports system again, providing a central focal point for
                the social network that the sixth through ninth games did not
                have. The <i>Three Houses</i> network graph ends up being a
                blend of the distinct groups of characters seen in the early
                support games and the centralized design of the Avatar-reliant
                networks.
              </p>
            </div>
          </Step>
        </PairScroll>
      </section>
    </div>
  );
}

export default PairingNetworks;
