import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import Description from "../../../components/articles/Description";
import RelScroll from "./RelScroll";

import "./relationships.css";

function SocialNetworks() {
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
          Excluding some remakes, every game in the Fire Emblem franchise since{" "}
          <Description tag="FE6">The Binding Blade</Description> has featured
          the Support system in some capacity. With the exception of some
          special cases, every character in these games has at least one
          support.
        </p>
        <p>
          We can visualize the relationships between these characters through a
          series of Social Network Graphs: every person is represented as a
          single “node” in the graph, while a link between two nodes represents
          the presence of a support between the pair of characters. By applying
          traditional graph-clustering algorithms, we can start to understand
          which sets of characters are most closely linked and analyze the
          overall structures of the social networks.
        </p>
        <RelScroll onStepExit={onStepExit}>
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
          {/* <Step
            data={{
              id: "start",
              year: 1990,
              img: "https://images.nintendolife.com/43b03aacdb3dd/fire-emblem-shadow-dragon-and-the-blade-of-light-cover.cover_large.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Shadow Dragon and the Blade of Light{" "}
                <Description tag="FE1">(FE1)</Description> is released as a
                Japan-exclusive title on the Famicom, developed by gaming
                company <Description tag="IS">Intelligent Systems</Description>{" "}
                (IS) and led by creator{" "}
                <Description tag="Kaga">Shouzou Kaga.</Description> Kaga
                conceived the game as a blend of strategic elements from
                previous wargames and the story, characters, and world of a
                traditional role-playing game. Like most other games at the
                time, the core game mechanics and story background were
                described in an instruction manual provided for the player.{" "}
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 1,
              year: 1990,
              img: "https://images.nintendolife.com/43b03aacdb3dd/fire-emblem-shadow-dragon-and-the-blade-of-light-cover.cover_large.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                The scale of the game, with 52 playable characters and over 25
                chapters, each consisting of dialogue and a battle map, forced
                the development team to find ways around memory storage issues
                and{" "}
                <span className="dev-scroller-category cat-one">
                  compromise on the graphics and storyline,
                </span>{" "}
                as they were working with the 8-bit Famicom console.
              </p>
              <p>
                Even with compromises made, the text content in FE1 still
                exceeded the limits of the Famicom game cartridges, so{" "}
                <Description tag="IS">IS</Description> created a new chip for
                the cartridge with Nintendo’s help that could processes and
                display Japanese text, using the portion of memory originally
                dedicated to saving games on the cartridge.
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 2,
              year: 1990,
              img: "https://assets1.ignimgs.com/2020/10/22/fireemblem-br-1603375958406_160w.png?width=1280",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Therefore, the game{" "}
                <span className="dev-scroller-category cat-one">
                  progressed in a linear fashion, with maps and dialogue being
                  unlocked as dictated by the storyline.
                </span>{" "}
                <Description tag="Kaga">Kaga </Description> wanted to alleviate
                the linear feel of the campaign but was unable to do due to
                storage limitations. Additionally, the development team had
                originally intended to create “setpiece” graphics for key
                moments of the story, but were forced to streamline the graphics
                of the game due to lack of memory. The end result was a game
                that was{" "}
                <span className="dev-scroller-category cat-one">
                  not visually impressive,
                </span>{" "}
                something the developers regretted later.{" "}
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 3,
              year: 1992,
              img: "https://www.nintendo.com/jp/fe/history/img/products_1992.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Fire Emblem <Description tag="FE2">Gaiden</Description> is
                released as a sequel to FE1. This was the first game in the
                series to feature gameplay between battles in the form of a
                navigable map. <Description tag="Kaga">Kaga </Description>{" "}
                deliberately designed Gaiden to address issues with the first
                game, removing some of the more strategic elements of gameplay
                while adding the navigable map and more role-playing elements.{" "}
              </p>
              <p>
                Partially in response to the memory problems faced with the
                first game, <Description tag="IS">IS</Description>{" "}
                <span className="dev-scroller-category cat-one">
                  developed the MMC4 chip,
                </span>{" "}
                which was used exclusively for some Fire Emblem titles. This
                allowed the company to have a little more leeway with storage in
                this game’s development.{" "}
              </p>
            </div>
          </Step> */}
        </RelScroll>
      </section>
    </div>
  );
}

export default SocialNetworks;
