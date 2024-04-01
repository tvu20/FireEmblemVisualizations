import React from "react";

import Footer from "../../../components/navigation/Footer";
import Description from "../../../components/articles/Description";

import "./relationships.css";
import SocialNetworks from "./SocialNetworks";
import PairingNetworks from "./PairingNetworks";

function RelationshipsArticle() {
  return (
    <>
      <div className="rel-article">
        <div className="rel-intro banner">
          <h1>
            The Evolution of Character Relationships and Queer Representation
          </h1>
          <section className="rel-intro-paragraphs">
            <p>
              How do people form connections? The social structures and networks
              created by a series of individual relationships between people
              play an essential part of how we navigate the world today, but can
              often be difficult to visualize and understand. Imagining the
              fictional relationships between our favorite characters allows us
              to both immerse ourselves in the world of the story and to explore
              relationship and human dynamics that we may not fully understand
              in real life.
            </p>
            <p>
              This is the philosophy behind the{" "}
              <Description tag="support">Support</Description> mechanics in the{" "}
              <i>Fire Emblem</i> franchise: since each game has a large cast of
              playable characters, the franchise uses the Support system to show
              private conversations between pairs of characters in an effort to
              keep players engaged with characters of their choosing while being
              an important strategic element of the gameplay. If characters
              spend enough time on the battlefield together, they will unlock a
              “Support”, which will initiate a conversation between them and
              provide gameplay bonuses.
            </p>
            <p>
              The specifics of the Support system have changed over the
              franchise’s history: from the number of possible supports
              available for a single character, to whether characters will end
              up together at the conclusion of the game’s story. Not all
              unlocked Supports will lead to characters having a “paired ending”
              where they will ride off into the sunset as dictated by the game’s
              ending credits. Additionally, not all pairings are romantically
              inclined: some are between siblings, or close friends, or… perhaps
              worded ambiguously so the audience can imagine it themselves. In
              this article, I will explore the various types of social networks
              present in the series: examining how relationships between
              characters have changed over time and the evolution of same-sex
              pairing representation.
            </p>
          </section>
        </div>

        <SocialNetworks />

        <PairingNetworks />
        <div className="gender-article-section-methods">
          <h2>METHODS & NOTES</h2>
          <p>
            Character support data was scraped from{" "}
            <a
              href="https://fireemblemwiki.org/"
              className="highlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fire Emblem Wiki
            </a>{" "}
            for all the games with the support system present. The support lists
            were initially notated as adjacency matrices and then re-formatted
            into nodes and links for the network graphs.
          </p>
          <p>
            Character paired ending data and support conversations were sampled
            from <i>Fire Emblem Wiki</i> and{" "}
            <a
              href="https://serenesforest.net/"
              className="highlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              Serenes Forest
            </a>
            . Each pairing, represented as a link in the social network, was
            manually classified as either "romantic", "platonic", "familial", or
            "ambiguous" based on verbage used in either the pair's highest
            support conversation or their paired ending.{" "}
          </p>
          <p>
            Any paired endings mentioning marriage or children were classified
            as romantic, and any couples that confessed their love to each other
            or made a similar declaration of romantic intent were categorized as
            such. Paired endings that explicitly described the relationship
            between two characters as “friendship” were classified as platonic.
            Additionally, paired endings between two characters of a significant
            age gap were also classified as platonic if the two characters were
            not already related. The “ambiguous” label was reserved for pairings
            that could plausibly be taken as romantic or platonic. This applied
            to paired endings that did not describe the relationship between two
            characters as a “friendship” but rather used terms such as
            “partnership”, “close bond”, or described the two characters
            choosing to spend the rest of their lives together with no mention
            of other romantic relationships.{" "}
          </p>
          <p>
            d3 was used in order to build the network graph simulations for this
            article. In order to visualize the relative distance between each
            node in the network,{" "}
            <a
              href="https://github.com/d3/d3-force"
              className="highlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              d3-force
            </a>{" "}
            was used to apply a force-based clustering algorithm to the graph.
            This library uses Dwyer’s implementation to calculate the
            force-directed graph layout, and uses Verlet integration for
            particle positioning. The relative position of each node is
            calculated using the sum of the forces acting on each node by all
            other nodes, the force pulling or pushing between two linked nodes,
            and the force pulling each node to a focal point. Variations of
            these networks were created by normalizing the link lengths and
            centering nodes of different gender categories to particular focal
            points on the graph.
          </p>
          <p></p>
        </div>
      </div>
      <Footer vertical={false} />
    </>
  );
}

export default RelationshipsArticle;
