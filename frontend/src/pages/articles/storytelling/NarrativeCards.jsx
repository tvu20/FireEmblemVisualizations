import React from "react";

import Description from "../../../components/articles/Description";

import celica from "../../../assets/gender/celica-full.png";
import lyn from "../../../assets/gender/lyn-full.png";
import eirika from "../../../assets/gender/eirika-full.png";
import micaiah from "../../../assets/gender/micaiah-full.png";
import lucina from "../../../assets/gender/lucina-full.png";
import edelgard from "../../../assets/gender/edelgard-full.png";

import "./storytelling.css";

function NarrativeCards() {
  return (
    <>
      <div className="female-lords-explanation">
        <p>
          Scroll horizontally to view the different cards in this section, or
          down to move on.
        </p>
      </div>
      <div class="female-lords-horizontal-scroll">
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>Shadow Dragon and the Blade of Light</h3>
              <h4>Original story featuring Marth.</h4>
              <h5>Released in 1990 for the Famicom.</h5>
              <p>
                A very simple and linear story, largely due to hardware
                constraints. The narrative focuses on the growth of a single
                prince trying to take back his kingdom while meeting many people
                along the way. Kaga, the creator, wanted to make players care
                about the characters similar to a traditional role-playing game:
                according to him, RPGs had strong stories but limited
                protagonists, while wargames had many characters but a weak
                story. Fire Emblem was his attempt to bridge this gap.
              </p>

              <h5>Complexity: Low</h5>
              <h5>Focus: Simplicity and clarity</h5>
            </div>
            <div className="female-lords-images">
              <img src={celica} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>Gaiden</h3>
              <h4>Original story featuring Celica and Alm.</h4>
              <h5>Released in 1992 for the Famicom.</h5>
              <p>
                The first game to feature a split narrative between two
                characters. This story was envisioned to be quite small in
                scope, as it was a secondary adventure set in the world of the
                first game. Therefore, Kaga primarily focused on deepening the
                relationship between players and their units, allowing for
                character development during battles. The inclusion of two
                protagonists also allowed for a stronger and broader central
                narrative.
              </p>
              <h5>Complexity: Low</h5>
              <h5>Focus: Character relationships</h5>
            </div>
            <div className="female-lords-images">
              <img src={lyn} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>Mystery of the Emblem</h3>
              <h4>
                Remake and sequel of{" "}
                <Description tag="FE1">
                  Shadow Dragon and the Blade of Light
                </Description>
                .
              </h4>
              <h5>Released in 1994 for the Super Famicom.</h5>
              <p>
                The developers wanted to continue Marth’s story, but included
                Book One as a retelling of FE1 in order to aid new players’
                comprehension. This was also intended as the last title set on
                the continent of Archanea, so the writers wanted to wrap up
                previous plot threads by the end of the story.
              </p>
              <h5>Complexity: Medium</h5>
              <h5>Focus: Wrapping up storylines</h5>
            </div>
            <div className="female-lords-images">
              <img src={eirika} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>Genealogy of the Holy War</h3>
              <h4>Original story featuring Sigurd and Seliph.</h4>
              <h5>Released in 1996 for the Super Famicom.</h5>
              <p>
                Genealogy was the first big departure narrative-wise in the
                franchise, as Kaga wanted to move from the confines of Archanea
                and imagined a large-scale historical drama. Similar to FE3, the
                first half of the story acted as an introduction for the second
                half’s story. Kaga cited the main theme of the story as how “the
                stupidity of humanity could forget history,” focusing less on
                characters and more on the overall world of Jugdral to show the
                scale of the conflict and to evoke the feeling of making
                history. Kaga also intended for a more blurred line between good
                and evil compared to the preceding games and wanted to create a
                more realistic scenario; this led to the story featuring common
                historical occurrences that were often censored in video games
                such as patricide and incest.
              </p>
              <h5>Complexity: High</h5>
              <h5>Focus: Large-scale historical drama</h5>
            </div>
            <div className="female-lords-images">
              <img src={micaiah} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>Thracia 776</h3>
              <h4>
                Midquel set during the story of{" "}
                <Description tag="FE4">Genealogy of the Holy War</Description>.
              </h4>
              <h5>Released in 1999 for the Super Famicom.</h5>
              <p>
                Since the heavy focus on narrative over gameplay caused
                Genealogy’s strategic gameplay elements to suffer, Thracia 776
                pulled back from the large-scale epic feel. In contrast, Thracia
                gave characters very little backstory or buildup, leaving their
                individual personalities for players to imagine. The game’s
                story featured a band of scrappy rebels attempting to fight
                against a terrifying empire, which was translated into many
                punishingly unfair gameplay mechanics.
              </p>
              <h5>Complexity: Low</h5>
              <h5>Focus: Emphasis on gameplay</h5>
            </div>
            <div className="female-lords-images">
              <img src={lucina} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>The Binding Blade</h3>
              <h4>Original story featuring Roy.</h4>
              <h5>Released in 2002 for the GBA.</h5>
              <p>
                The Binding Blade’s story was greatly simplified compared to
                previous entries and featured very clear heroes and villains
                again in order to attract new players. This was also the first
                game in the series to include a branching narrative mechanic.
                The main character Roy was made to appeal to younger players and
                given defining characteristics such as being free-spirited and
                empathetic to appeal to a wider audience.
              </p>
              <h5>Complexity: Low</h5>
              <h5>Focus: Appealing to a younger audience</h5>
            </div>
            <div className="female-lords-images">
              <img src={edelgard} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>The Blazing Blade</h3>
              <h4>
                Sequel to <Description tag="FE6">The Binding Blade</Description>
                .
              </h4>
              <h5>Released in 2003 for the GBA.</h5>
              <p>
                In The Blazing Blade, the storyline was directly influenced by
                each of the main protagonists’ strengths in battle: Eliwood, the
                main character, was designed as a weak unit to fit with an
                “easy” storyline and game mode, while Hector’s mode, only
                unlocked upon a second playthrough, featured extra narrative
                beats and steeper gameplay challenges. This was the first story
                to feature the player as a distinct character in the story:
                their role as the “unseen strategist” was a direct precursor to
                later games’ iterations of the avatar.
              </p>
              <h5>Complexity: Medium</h5>
              <h5>Focus: Player engagement/accessibility</h5>
            </div>
            <div className="female-lords-images">
              <img src={edelgard} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>The Sacred Stones</h3>
              <h4>Original story featuring Eirika and Ephraim.</h4>
              <h5>Released in 2004 for the GBA.</h5>
              <p>
                The Sacred Stones is the only game in the series that is
                featured on a separate continent from any other entry. It was
                meant to be a tribute to Gaiden, featuring the similar plot
                elements of split routes and dual lords again.
              </p>
              <h5>Complexity: Medium</h5>
              <h5>Focus: Character relationships</h5>
            </div>
            <div className="female-lords-images">
              <img src={edelgard} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>Path of Radiance</h3>
              <h4>Original story featuring Ike.</h4>{" "}
              <h5>Released in 2005 for the GameCube.</h5>
              <p>
                Path of Radiance returns to the linear narrative about a person
                saving their game, but its uniqueness lies in being the first
                game to feature a non-noble protagonist, Ike! He was meant to be
                a protagonist people could identify with and therefore written
                to be of lower social rank and disgusted by social politics
                rather than acquiescing to it. Ike has become one of the most
                popular and recognizable lords in the franchise, and he follows
                a very traditional hero’s journey narrative with some
                exceptions: 1) Ike is aiding the royal rather than being the
                royal himself, and 2) Ike is very resistant to gaining political
                power and only fights for his employer. Additionally, the
                writers were aware of the possibility of a sequel game and
                therefore deliberately left some loose threads while wrapping up
                the game’s storyline.
              </p>
              <h5>Complexity: High</h5>
              <h5>Focus: Relatable hero's journey</h5>
            </div>
            <div className="female-lords-images">
              <img src={edelgard} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>Radiant Dawn</h3>
              <h4>
                Sequel to <Description tag="FE9">Path of Radiance</Description>.
              </h4>
              <h5>Released in 2007 for the Wii.</h5>
              <p>
                Radiant Dawn is the first direct sequel in the series since
                Mystery, and the first direct sequel to not include content from
                the first game. Therefore, the story was split up into four
                sections divided across various factions so players wouldn’t
                feel like they were missing information by not playing Path of
                Radiance. Like Genealogy, the creators aimed to create a rich
                and intricate world for players to enjoy, which was aided by the
                characters traveling across multiple nations in their
                storylines. One interesting aspect of the story is that Act 1 of
                Radiant Dawn essentially plays out as a subversion of Path of
                Radiance, where many story beats are very similar!
              </p>
              <h5>Complexity: High</h5>
              <h5>Focus: Rich worldbuilding</h5>
            </div>
            <div className="female-lords-images">
              <img src={edelgard} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>Shadow Dragon</h3>
              <h4>
                Remake of{" "}
                <Description tag="FE1">
                  Shadow Dragon and the Blade of Light (1999)
                </Description>
                .
              </h4>
              <h5>Released in 2008 for the DS.</h5>
              <p>
                Shadow Dragon heavily retained the story and feel of FE1 while
                cutting many characters deemed unnecessary in order to not
                complicate the story too much or include “fluff.” In contrast to
                most other entries, the story content was cut down as much as
                possible.
              </p>
              <h5>Complexity: Low</h5>
              <h5>Focus: Player accessibility</h5>
            </div>
            <div className="female-lords-images">
              <img src={edelgard} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>New Mystery of the Emblem</h3>
              <h4>
                Remake of{" "}
                <Description tag="FE3">Mystery of the Emblem</Description>.
              </h4>
              <h5>Released in 2010 for the DS.</h5>
              <p>
                New Mystery went in the complete opposite direction of FE11,
                bringing back characters that had been removed from the Math
                games since FE1. The biggest change in narrative structure was
                the introduction of the Avatar, who was created so players would
                have an easier time feeling connected to the story.
              </p>
              <h5>Complexity: Medium</h5>
              <h5>Focus: Player accessiblity</h5>
            </div>
            <div className="female-lords-images">
              <img src={edelgard} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>Awakening</h3>
              <h4>Original story featuring Chrom, Lucina, and Robin.</h4>
              <h5>Released in 2012 for the 3DS.</h5>
              <p>
                The writers returned to the linear story spanning a
                continent-wide war that was the bread and butter of early games’
                writing, as they wanted to honor traditional Fire Emblem.
                Although they considered setting the game in different places
                like the modern day or Mars, the writers ultimately decided to
                retain the medieval setting of the franchise so as to not
                alienate fans. The developers wanted to emphasize the bonds
                between characters in the story, which manifested through both
                gameplay mechanics and in the storyline. There was also a return
                to character-focused writing, as the development team wanted
                every character a backstory and motivation.
              </p>
              <h5>Complexity: Medium</h5>
              <h5>
                Focus: Celebrating the series' history, character relationships
              </h5>
            </div>
            <div className="female-lords-images">
              <img src={edelgard} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>Fates</h3>
              <h4>Original story featuring Corrin.</h4>
              <h5>Released in 2015 for the 3DS.</h5>
              <p>
                Awakening was criticized for the simplicity of its story, so the
                developers of Fates decided to improve their story writing. To
                provide a complex experience showing the different sides of a
                war, the developers split the game into multiple versions with
                different routes, characters, and settings. The two primary
                kingdoms were based on different cultures: Nohr on Medieval
                Europe like most previous entries and Hoshido on traditional
                Japanese culture. In contrast to previous games, where choosing
                different protagonists would not change the outcome of the
                story, the developers wanted Fates to feature the same
                protagonists but different outcomes.
              </p>
              <h5>Complexity: Medium</h5>
              <h5>Focus: Branching narratives</h5>
            </div>
            <div className="female-lords-images">
              <img src={edelgard} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>Echoes: Shadows of Valentia</h3>
              <h4>
                Remake of <Description tag="FE2">Gaiden</Description>
              </h4>
              <h5>Released in 2017 for the 3DS.</h5>
              <p>
                The developers felt that the original story of Gaiden was
                underdeveloped compared to most other FE games, so they expanded
                the narrative in Echoes significantly through the inclusion of
                the core conflict between the two nations, which had previously
                been relegated to Gaiden’s manual. The writers also addressed
                the original game’s poor character writing by upgrading the
                roles of certain characters like Saber and introducing new
                characters such as Berkut and Faye. In general, the writers
                focused on incorporating a key theme into their rewrites: the
                impact of royalty on the characters.
              </p>
              <h5>Complexity: Low</h5>
              <h5>Focus: Character writing</h5>
            </div>
            <div className="female-lords-images">
              <img src={edelgard} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="narrative-cards-detail">
              <h3>Three Houses</h3>
              <h4>Original story featuring Edelgard, Dimitri, and Claude.</h4>
              <h5>Released in 2019 for the Switch</h5>
              <p>
                Three Houses was heavily inspired by{" "}
                <Description tag="FE4">Genealogy</Description> in its writing.
                The developers wanted to present a more adult story in the vein
                of dark fantasy, with the mature aspects incorporated into the
                conflict between the three factions. The game featured school
                segments and a timeskip that were directly inspired by
                Genealogy: a narrative of people who were friends in their youth
                coming into conflict during war in their older years. Another
                large inspiration for the game’s writing was the Chinese epic{" "}
                <i>Romance of the Three Kingdoms.</i>
              </p>
              <h5>Complexity: Low</h5>
              <h5>Focus: Large-scale historical drama</h5>
            </div>
            <div className="female-lords-images">
              <img src={edelgard} alt="echoes"></img>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="gender-article-section-intro left-aligned">
        <p>
          So there are two definitively top-billed female lords in the series,
          out of the seven available: Micaiah from{" "}
          <Description tag="FE10">Radiant Dawn</Description> and Eirika from{" "}
          <Description tag="FE8">Sacred Stones</Description>. When looking at
          in-game content, all other female lords are arguably less prominent or
          neglected in their game compared to other male lords. However, several
          more female lords have been favored in promotional and post-game
          content: Lyn from <Description tag="FE7">Blazing Blade</Description>{" "}
          and Lucina from <Description tag="FE13">Awakening</Description> have
          become the faces of their games in most featured content and have
          retroactively become the most popular lords in their games, while
          Edelgard from <Description tag="FE16">Three Houses</Description> is
          one of the most recognizable characters in the series and widely
          discussed when examining the game’s narrative content.
        </p>
        <p>
          Additionally, the inclusion of the{" "}
          <Description tag="avatar">avatar</Description> has significantly
          improved the series’ female representation: every mainline game in the
          series following the inclusion of the first avatar in{" "}
          <Description tag="FE12">New Mystery</Description> has had the option
          to follow a female lord. Additionally, if we don’t consider remakes,
          every single game in the franchise since{" "}
          <Description tag="FE7">Blazing Blade</Description> has featured a
          female or optionally female lord with the exception of{" "}
          <Description tag="FE9">Path of Radiance.</Description> However,{" "}
          <i>Path of Radiance’s</i> sequel,{" "}
          <Description tag="FE10">Radiant Dawn</Description>, prominently
          features Micaiah as the main lord, so every “narrative” of the
          franchise since has had a representative female lord.{" "}
        </p>
      </div> */}
    </>
  );
}

export default NarrativeCards;
