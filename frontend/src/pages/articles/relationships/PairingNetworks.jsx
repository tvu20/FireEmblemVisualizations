import React, { useState } from "react";
import { Step } from "react-scrollama";

import Description from "../../../components/articles/Description";
import PairScroll from "./PairScroll";

import "./relationships.css";

function PairingNetworks() {
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
        <h2>Part 2: Pairing Networks</h2>
        <p>
          We will now turn to the representation of paired endings throughout
          the series, and with it, the growing inclusion of queer romantic
          content over the years. Paired endings represent the culmination of
          the player’s efforts to build supports between characters. Character
          pairs can obtain up to three support levels with increasing closeness,
          known as C, B, and A supports respectively, and certain character
          pairs can receive a special ending description during the game’s
          credits sequence describing how their endings match up with each
          other.
        </p>
        <p>
          This section examines the network graphs between the possible paired
          endings of each game in the series with this mechanic. Notably, not
          all paired endings are romantic: many of them represent other types of
          relationships, such as platonic or familial. While most pairings
          explicitly state the category in which they belong either in support
          conversations or ending descriptions, there are a few that lend
          themselves to different interpretations. In particular, there are
          various same-sex relationships throughout the series that don’t
          explicitly discuss romance within the supports or endings, but are
          implied to not be platonic to varying degrees.
        </p>
        <p>
          The ambiguity of same-sex relationships and the presence of queer
          coding within subtext{" "}
          <a
            href="https://journals.sagepub.com/doi/full/10.1177/1329878X221077851"
            className="highlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            has been an important topic studied by scholars of queer history in
            media representation
          </a>
          ; many pieces of media released during the timespan of{" "}
          <i>Fire Emblem</i>{" "}
          <a
            href="https://soar.suny.edu/bitstream/handle/20.500.12648/11725/6334_Lily_Urbank.pdf?sequence=1"
            className="highlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            hinted at queer relationships without explicitly confirming
          </a>{" "}
          them in order to bypass censorship issues while still providing queer
          fans relationships to latch on to,{" "}
          <a
            href="https://intersectionsmagazine.org/post/the-art-of-queer-coding-in-mainland-china-part-one-the-untamed-chiu-yi-rachel-ngai"
            className="highlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            a practice common in East Asian media
          </a>
          . In examining the text of<i> Fire Emblem</i>, we can identify if -
          and when - the writers of various games may have attempted to do the
          same.
        </p>
      </section>
      <section>
        <PairScroll onStepExit={onStepExit}>
          <Step data={1}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  <Description tag="FE4">
                    <i>Genealogy of the Holy War</i>
                  </Description>{" "}
                  is the first game in the series to introduce inter-character
                  romances through the Love system: while character pairs did
                  not receive distinct ending descriptions, they could either
                  have children or share a special conversation at the end of
                  the game. Due to the children mechanic, every character was
                  able to romance every other character in the game (with few
                  exceptions pertaining to familial relations, age, and
                  plot-specific reasons).
                </span>
              </div>
            </div>
          </Step>
          <Step data={2}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  This is an example of a special ending conversation between
                  two characters who have formed a romance in <i>Genealogy</i>.
                  In this conversation, the two characters do not explicitly
                  declare their love for each other, but express that their
                  greatest desire is to stay by each other’s side. This is a
                  recurring trend that we will see in many supports going
                  forwards - <i>Fire Emblem</i> commonly highlights two
                  characters' desire to stay together in romantic endings.
                </span>
              </div>
            </div>
          </Step>
          <Step data={3}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  We can see in this network graph how closely linked all the
                  nodes in the central cluster of the graph are due to most
                  characters being able to romance everyone else. The two
                  distinct pairs on either side of the large cluster represent
                  two pairings that are necessary for the advancement of the
                  plot. Every relationship is romantic (represented by red
                  lines), and always between a male and female character.
                </span>
              </div>
            </div>
          </Step>
          <Step data={4}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  <Description tag="FE6">
                    <i>The Binding Blade</i>
                  </Description>{" "}
                  is the first entry in the series with a fully realized support
                  system with unlockable conversation tiers and paired endings.
                  While every character in the game has a support with at least
                  two others, only Roy, the main protagonist, is able to achieve
                  paired endings with one of six female characters within the
                  cast. We see this in the network graph: Roy is in the center
                  and linked to the six women in the only multi-node cluster,
                  while each other character ends up alone.
                </span>
              </div>
            </div>
          </Step>
          <Step data={5}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  To denote a paired ending, the female character’s ending
                  description card in <i>Binding Blade</i> changes to include
                  her relationship with Roy; notably, this always includes a
                  mention of marriage. Here is an example: Lilina, a prominent
                  character in <i>Binding Blade</i>, has a different ending
                  depending on if she is married to Roy.
                </span>
              </div>
            </div>
          </Step>
          <Step data={6}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  <i>The Binding Blade</i> was the first game to feature
                  conversations that could be unlocked by reaching higher levels
                  of supports between characters. We can see the development in
                  the relationship between two characters through these
                  conversations: for example, here is Roy and Lilina's
                  conversation preceding their married ending.
                </span>
              </div>
              <div className="rel-tapewrapper addendum">
                <span>
                  Similar to the ending conversation in{" "}
                  <Description tag="FE4">
                    <i>Genealogy</i>
                  </Description>
                  , Roy and Lilina do not explicitly declare their love for each
                  other, but they express the desire to stay together for the
                  rest of their lives.{" "}
                </span>
              </div>
            </div>
          </Step>
          <Step data={7}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  While characters can also achieve A-rank supports for platonic
                  pairings, there is a notable difference in how they interact
                  in their A-support conversations. Here is an example of Roy's
                  A-support with a person he cannot romance.
                </span>
              </div>
            </div>
          </Step>
          <Step data={8}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  <Description tag="FE7">
                    <i>The Blazing Blade</i>{" "}
                  </Description>{" "}
                  introduced non-romantic paired endings to the series: for the
                  first time, players could unlock paired endings for different
                  types of relationships. Looking at the social network graph,
                  we can see that more clear clusters between groups of people
                  have started to form. However, romantic relationships still
                  make up the vast majority of endings, and every female
                  character that has a platonic option also has at least one
                  romantic option to pursue.
                </span>
              </div>
            </div>
          </Step>
          <Step data={9}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  For example, Lyn, the primary female protagonist of the game,
                  is able to have a paired ending with Florina, another
                  prominent female character in the game. However, the ending
                  states that the two shared a lifelong friendship, while every
                  other paired ending featuring one of the two mentioned
                  romantic love or marriage in some form.
                </span>
              </div>
            </div>
          </Step>
          <Step data={10}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  In contrast to the previous title, where only one character's
                  ending card was changed, ending cards in <i>Blazing Blade</i>{" "}
                  for both characters in a pairing were replaced with a specific
                  "paired" ending card, describing their lives together.
                </span>
              </div>
              <div className="rel-tapewrapper addendum">
                <span>
                  Here we also see the first example of a romantic paired ending
                  where the characters do not end up together at the end of the
                  story - Harken and Vaida, despite loving each other, part ways
                  due to their different lives.
                </span>
              </div>
            </div>
          </Step>

          <Step data={11}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Here we see two examples of paired endings that are not
                  romantic in nature: the first emphasizes the friendship and
                  business partnership between the two characters, while the
                  second describes siblings returning to their former lives.
                </span>
              </div>
            </div>
          </Step>
          <Step data={12}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  The nature of these pairings is also reflected in the game’s
                  support conversations. Supports for explicitly romantic
                  endings in the game don’t always feature clear declarations of
                  love.
                </span>
              </div>
              <div className="rel-tapewrapper addendum">
                <span>
                  For example, these two characters do not explicitly state
                  their romantic interest in their A-rank support conversation.
                  However, they do receive a paired ending in which they get
                  married.
                </span>
              </div>
            </div>
          </Step>
          <Step data={13}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  On the other hand, some supports depict a clear confession of
                  love.
                </span>
              </div>
            </div>
          </Step>
          <Step data={14}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  <i>The Blazing Blade</i> is also the first game to introduce
                  paired endings between two characters of the same gender in
                  the series. Both of these pairings are between two men, and
                  both explicitly mention friendship in their paired ending
                  cards. However, one of these pairings exhibits some patterns
                  seen in other romantic pairs.
                </span>
              </div>
            </div>
          </Step>

          <Step data={15}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  In their A-support conversation, Raven explicitly states that
                  he will never marry and will be content with just having
                  Lucius by his side. This mirrors the dynamic that we have
                  already seen between established romantic pairings. In their
                  paired ending, while not explicitly stating that the two
                  entered a relationship, there is a notable lack of any mention
                  of wives or other partners for the two; additionally, they are
                  the only possible paired options for each other.
                </span>
              </div>
            </div>
          </Step>
          <Step data={16}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Finally, <i>Blazing Blade</i> is the first title in the series
                  to feature an explicitly platonic ending between a male and a
                  female character.
                </span>
              </div>
            </div>
          </Step>
          <Step data={17}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  In{" "}
                  <Description tag="FE8">
                    <i>Sacred Stones</i>
                  </Description>
                  , platonic endings are much more heavily featured than in
                  previous games, both in same-gender and multiple-gender
                  pairings. We also see that character relationships have become
                  more interconnected: most characters are part of the same
                  large branching cluster, with only a few individuals on the
                  outside.
                </span>
              </div>
            </div>
          </Step>
          <Step data={18}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Here are three paired endings belonging to Eirika, one of the
                  main protagonists, showcasing different dynamics: in one she
                  is married to a male character, in a second she receives a
                  platonic paired ending with another male character, and in the
                  last she receives a platonic paired ending with a female
                  character. Unlike the previous paired ending with Raven and
                  Lucius, here we see mention of both Eirika and Tana's
                  marriages and children.
                </span>
              </div>
            </div>
          </Step>
          <Step data={19}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  The Tellius duology, comprised of{" "}
                  <Description tag="FE9">
                    <i>Path of Radiance</i>
                  </Description>{" "}
                  and{" "}
                  <Description tag="FE10">
                    <i>Radiant Dawn</i>
                  </Description>
                  , became the{" "}
                  <a
                    href="https://www.koopatv.org/2023/06/ike-from-fire-emblem-is-not-gay.html#:~:text=A%20portion%20of%20the%20Fire,Ike%20is%20his%20whole%20world."
                    className="highlight"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    subject of intense controversy and speculation among its
                    players
                  </a>{" "}
                  soon after its release: there was heavy debate over whether
                  the writers had intended on providing queer subtext for
                  various characters in the duology, including the main
                  protagonist. Let’s break it down!
                </span>
              </div>
            </div>
          </Step>
          <Step data={20}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Firstly, although not reflected in a paired ending,{" "}
                  <Description tag="FE10">Radiant Dawn</Description> features
                  who is often{" "}
                  <a
                    href="https://cohost.org/AlexisSara/post/3425637-diving-into-heather"
                    className="highlight"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    considered to be the series’ first explicitly lesbian
                    character , Heather
                  </a>
                  .
                </span>
              </div>
            </div>
          </Step>
          <Step data={21}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Secondly, when looking at the available paired endings, there
                  are very few compared to previous entries. Each character has
                  either zero, one, or two paired endings, and each paired
                  ending in the game is between a male and a female character
                  barring one important exception. <i>Radiant Dawn</i> applies{" "}
                  <Description tag="FE6">
                    <i>Binding Blade</i>
                  </Description>
                  ’s approach of changing one character's ending to mention the
                  other, although this time the gender of the changed
                  character’s ending varies.
                </span>
              </div>
            </div>
          </Step>
          <Step data={22}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  The only exception to these rules is the set of paired endings
                  associated with Ike, the main protagonist. Ike is the only
                  character in the game with two paired endings, both with men.
                  In both of these pairings, his partner joins him on a journey
                  post-war where they are never seen again.
                </span>
              </div>
            </div>
          </Step>
          <Step data={23}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Ike’s pairing with Soren has various aspects that hint at a
                  romantic pairing, particularly similar to other favored
                  romantic pairings with main protagonists such as Roy/Lilina
                  and Eliwood/Ninian:
                </span>
                <ul>
                  <li>
                    <span>
                      Their A-support conversation in{" "}
                      <Description tag="FE9">
                        <i>Path of Radiance</i>
                      </Description>{" "}
                      is confirmed to have occurred, since Ike knows information
                      in{" "}
                      <Description tag="FE10">
                        <i>Radiant Dawn</i>
                      </Description>{" "}
                      that he only learned in that conversation.
                    </span>
                  </li>
                  <li>
                    <span>
                      If you transfer their A-support to <i>Radiant Dawn</i> and
                      keep their A-support, you can unlock a secret scene before
                      the final battle revealing their first meeting.
                    </span>
                  </li>
                  <li>
                    <span>
                      Soren's A-support dialogue with Ike in{" "}
                      <i>Path of Radiance</i> follows the trend across multiple
                      titles in the series of romantic ending dialogues
                      emphasizing the desire to stay by each other’s sides.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Step>
          <Step data={24}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  <Description tag="FE13">
                    <i>Awakening</i>
                  </Description>{" "}
                  marked the return of the children system from{" "}
                  <Description tag="FE4">
                    <i>Genealogy</i>
                  </Description>
                  , and thus the return of every character being able to marry
                  every character barring narrative exceptions. <i>Awakening</i>{" "}
                  is one of the games in the series with the least explicitly
                  queer content: characters can only marry those of the opposite
                  gender, and even Robin (the{" "}
                  <Description tag="avatar">Avatar</Description>) is only able
                  to romance characters of the opposite gender.
                </span>
              </div>
            </div>
          </Step>
          <Step data={25}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  <i>Awakening</i> was the first game in the series to feature a
                  new rank of supports: S-rank, specially reserved for
                  characters to get married. Notably,{" "}
                  <Description tag="avatar">Robin</Description>'s dialogue with
                  each character in their highest support rank is different
                  depending on Robin's gender. For example, here is Male Robin's
                  A-support conversation with Chrom.
                </span>
              </div>
            </div>
          </Step>
          <Step data={26}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  In contrast, here is Female Robin's S-support conversation
                  with Chrom. Note that every conversation features some
                  differences between the Male and Female Robin versions, but
                  Chrom and Robin explicitly confess their love to each other in
                  the female version's highest support.
                </span>
              </div>
            </div>
          </Step>
          <Step data={27}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  The pairing network graph for <i>Awakening</i> looks
                  remarkably similar to the supports network, with one
                  exception: the <Description tag="avatar">Avatar</Description>{" "}
                  is now divided into two different nodes representing the two
                  character genders, creating a dual cluster structure tied
                  together by two Avatar central nodes and various other one-off
                  relationships. With few exceptions, every character can marry
                  every other character of a different gender, resulting in this
                  highly interconnected graph.
                </span>
              </div>
            </div>
          </Step>
          <Step data={28}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  In 2015,{" "}
                  <Description tag="FE14">
                    <i>Fates</i>
                  </Description>{" "}
                  became the first game in the series to feature the inclusion
                  of explicitly queer paired endings between characters. While
                  the general structure of the pairing networks was similar to
                  its predecessor, with most characters being able to romance
                  all peers of a different gender, the{" "}
                  <Description tag="FE14">Avatar</Description> (Corrin)
                  character was given the ability to romance two characters
                  regardless of gender presentation.
                </span>
              </div>
            </div>
          </Step>
          <Step data={29}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Unlike in <i>Awakening</i>,{" "}
                  <Description tag="FE14">Corrin</Description>'s highest ranking
                  support conversations with characters Niles and Rhajat
                  remained the same despite Corrin's gender. Here is Niles'
                  S-support conversation with both Male and Female Corrin.
                </span>
              </div>
            </div>
          </Step>
          <Step data={30}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  And here is Rhajat's S-support conversation with both versions
                  of <Description tag="FE14">Corrin</Description>.
                </span>
              </div>
            </div>
          </Step>
          <Step data={31}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Unfortunately, the presence of queer representation within a
                  game doesn’t always make it good representation. Niles has one
                  of the most controversial personalities in the game, being a
                  highly sadistic character, and Rhajat stalks Corrin throughout
                  their supports. But this game showed that the developers were
                  open to including more same-sex content in games in the
                  future.
                </span>
              </div>
            </div>
          </Step>
          <Step data={32}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  <Description tag="FE15">
                    <i>Echoes: Shadows of Valentia</i>
                  </Description>{" "}
                  heavily updated the character relationships in its predecessor{" "}
                  <Description tag="FE2">
                    <i>Gaiden</i>
                  </Description>
                  , adding supports and paired endings lacking from the original
                  version. This was the first game in the series to feature a
                  queer romantic interest between two non-main characters: one
                  of the characters from the original game was rewritten to be
                  queer in his support conversations.
                </span>
              </div>
            </div>
          </Step>
          <Step data={33}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Leon is introduced as a character who loyally follows the man
                  he is in love with, Valbar. While Valbar does not return his
                  romantic interest, he still considers Leon a close companion
                  and they travel together throughout the game.
                </span>
              </div>
            </div>
          </Step>
          <Step data={34}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Leon’s love for Valbar explicitly stated and understood by
                  characters throughout the game and in his support
                  conversations. He also spends the rest of his life by Valbar’s
                  side in his solo ending.
                </span>
              </div>
            </div>
          </Step>
          <Step data={35}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Finally,{" "}
                  <Description tag="FE16">
                    <i>Three Houses</i>
                  </Description>{" "}
                  provides an earnest, if still somewhat flawed and lacking,
                  attempt at representation. This game has the highest
                  proportion of platonic paired endings to romantic paired
                  endings, as well as many endings that are worded ambiguously
                  enough to fall into either category. Unlike other entries in
                  the series, the platonic and ambiguous relationships are
                  distributed well across different gender pairs.
                </span>
              </div>
            </div>
          </Step>
          <Step data={36}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  The majority of same-sex romantic relationships in the game
                  feature the <Description tag="avatar">avatar</Description>{" "}
                  Byleth and another character in the game. While Female Byleth
                  is able to marry five female characters, Male Byleth only has
                  one male marriage option in the base game and two more in the
                  form of <Description tag="DLC">DLC</Description>.
                </span>
              </div>
            </div>
          </Step>
          <Step data={37}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Here is an example of a romantic ending conversation between
                  Female <Description tag="avatar">Byleth</Description> and
                  another female character, Edelgard.
                </span>
              </div>
            </div>
          </Step>
          <Step data={38}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  As Byleth can achieve a paired ending with any character in
                  the game, Byleth will have exclusively romantic endings with
                  the exception of a few characters that are already married, in
                  which case they will receive a platonic ending instead.
                </span>
              </div>
            </div>
          </Step>
          <Step data={39}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  Like{" "}
                  <Description tag="FE15">
                    <i>Echoes</i>
                  </Description>
                  , <i>Three Houses</i> also features a few queer romantic
                  pairings between characters not involving any of the main{" "}
                  <Description tag="lord">lords</Description>. All of these
                  pairings are exclusively between two female characters.
                </span>
              </div>
            </div>
          </Step>
          <Step data={40}>
            <div className="rel-scroller-step">
              <div className="rel-tapewrapper">
                <span>
                  <i>Three Houses</i> also features endings that are ambiguously
                  worded: while not explicitly mentioning romance or marriage,
                  they draw from the series' themes of romantically inclined
                  characters choosing to stay and travel together after the war.
                </span>
              </div>
              <div className="rel-tapewrapper addendum">
                <span>
                  In particular, the second example shown here between Linhardt
                  and Caspar mirrors Ike and Soren's paired ending from{" "}
                  <Description tag="FE10">
                    <i>Radiant Dawn</i>
                  </Description>
                  .
                </span>
              </div>
            </div>
          </Step>
          <Step data={41}>
            <div
              className="rel-scroller-step"
              style={{ paddingBottom: "100px" }}
            >
              <div className="rel-tapewrapper">
                <span>
                  Structurally, <i>Three Houses</i>' network graph is an
                  amalgamation of trends seen from all the prior games in the
                  series: it brings back the various types of paired endings and
                  limited links per character seen in the earlier games, while
                  featuring <Description tag="avatar">Byleth</Description> as a
                  focal point like other Avatar-centric games. This results in a
                  tightly interconnected network: each character is linked to
                  every other person through a few degrees of separation!
                </span>
              </div>
            </div>
          </Step>
        </PairScroll>
      </section>
    </div>
  );
}

export default PairingNetworks;
