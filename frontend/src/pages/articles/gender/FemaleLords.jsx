import React from "react";

import Description from "../../../components/articles/Description";

import celica from "../../../assets/gender/celica-full.png";
import lyn from "../../../assets/gender/lyn-full.png";
import eirika from "../../../assets/gender/eirika-full.png";
import micaiah from "../../../assets/gender/micaiah-full.png";
import lucina from "../../../assets/gender/lucina-full.png";
import edelgard from "../../../assets/gender/edelgard-full.png";

import "./gender.css";

function FemaleLords() {
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
            <div className="female-lords-detail">
              <h3>Celica</h3>
              <h4>Featured in Gaiden and Echoes.</h4>
              <p>
                In{" "}
                <Description tag="FE2">
                  <i>Gaiden</i>
                </Description>
                , Celica receives three more lines than Alm, her co-protagonist,
                but both characters have less than 25 lines each in the whole
                game due to technological constraints so it’s difficult to
                conclusively determine her relative importance based on this
                statistic. In contrast, Alm receives over 150 more spoken lines
                than Celica in{" "}
                <Description tag="FE15">
                  <i>Echoes</i>
                </Description>
                , so Alm wins out as the top-billed lord in the modern version
                of the story's script.
              </p>
              <p>
                In both game covers, Alm is also displayed more prominently than
                Celica. In <i>Gaiden</i>, Alm is placed in the center of the
                artwork facing directly forwards, where Celica is partially
                hidden and to the side of Alm. Celica does receive a bigger
                feature in the <i>Echoes</i> artwork, as she is placed
                back-to-back with Alm, but she still takes up less over the
                cover space and is placed off-center.
              </p>
              <h5>Top Billed: Alm</h5>
            </div>
            <div className="female-lords-images">
              <img src={celica} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="female-lords-detail">
              <h3>Lyn</h3>
              <h4>Featured in The Blazing Blade.</h4>
              <p>
                Line-count wise, Lyn only has one more line than another lord,
                Hector, and both are over 40 lines behind their fellow lord
                Eliwood. While Lyn does lead the first section of the game,
                known as "Lyn Mode", her story is set before the rest of the
                main narrative and functions as a tutorial for the player, while
                she is sidelined in the main story and only appears to offer
                opinions to her fellow lords. Similarly to Celica in{" "}
                <i>Gaiden</i>, Lyn’s portrait in the game’s cover art is
                partially covered by Eliwood’s.
              </p>
              <h5>Top Billed: Eliwood</h5>
            </div>
            <div className="female-lords-images">
              <img src={lyn} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="female-lords-detail">
              <h3>Eirika</h3>
              <h4>Featured in Sacred Stones.</h4>
              <p>
                Eirika receives over 100 more lines in her own game than her
                twin brother, Ephraim, and is the inciting player in the first
                third of the story’s narrative. While she and Ephraim are
                featured equally on the game’s cover, Eirika’s prominence in the
                story and the accessibility of her route compared to Ephraim’s
                would categorize her as the top-billed lord using these metrics.
              </p>
              <h5>Top Billed: Eirika</h5>
            </div>
            <div className="female-lords-images">
              <img src={eirika} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="female-lords-detail">
              <h3>Micaiah</h3>
              <h4>Featured in Radiant Dawn.</h4>
              <p>
                Micaiah is introduced as the main lord of{" "}
                <Description tag="FE10">
                  <i>Radiant Dawn</i>
                </Description>
                , the second game in the Tellius duology. While she and Ike, the
                main lord of{" "}
                <Description tag="FE9">
                  <i>Path of Radiance</i>
                </Description>
                , are both prominently featured throughout the game’s story,
                Micaiah receives 90 more spoken lines, is the first character
                introduced to the player, and initiates the inciting incident of
                the whole story. Additionally, she is the most prominently
                featured character on the game’s cover, placed in the center
                without being obscured, while Ike is not featured at all.
              </p>
              <h5>Top Billed: Micaiah</h5>
            </div>
            <div className="female-lords-images">
              <img src={micaiah} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="female-lords-detail">
              <h3>Lucina</h3>
              <h4>Featured in Awakening.</h4>
              <p>
                Lucina is one of three featured lords in{" "}
                <Description tag="FE13">
                  <i>Awakening</i>
                </Description>
                , the other two being her father, Chrom, and the{" "}
                <Description tag="avatar">avatar</Description>, Robin. She
                receives significantly less lines than the other two, having
                only a fifth of the total number of lines belonging to Chrom.
                However, she does receive a spotlight in the promotational
                material of the game, being featured on the Awakening game
                poster at equal prominence with her father and being the cover
                of the soundtrack album. Subsequent iterations of{" "}
                <i>Awakening</i> feature her as the main lord as well (notably
                her inclusion in <i>Super Smash Bros</i> and Fire Emblem:{" "}
                <Description tag="FE17">
                  <i>Engage</i>
                </Description>
                ). That being said, in her own game, she is nowhere near being
                the top billed lord.
              </p>
              <h5>
                <b>Top Billed:</b> Lucina
              </h5>
            </div>
            <div className="female-lords-images">
              <img src={lucina} alt="echoes"></img>
            </div>
          </div>
        </section>
        <section className="female-lords-item">
          <div className="female-lords-card">
            <div className="female-lords-detail">
              <h3>Edelgard</h3>
              <h4>Featured in Three Houses.</h4>
              <p>
                <Description tag="FE16">
                  <i>Three Houses</i>
                </Description>{" "}
                has a unique narrative structure: the player follows the story
                of Byleth, the <Description tag="avatar">avatar</Description>{" "}
                character, who chooses one of three lords to follow. Edelgard is
                the only female option of the three lords, and while she plays a
                massive role in the game’s narrative, inciting the events in the
                second half of the game, she is actually still shafted by the
                writers. Edelgard has the least amount of lines of all four
                lords in <i>Three Houses</i>, and her personal route is three or
                four chapters shorter than every other route in the game while
                also not featuring a unique final battle theme. Additionally,
                she is the only lord who the players are given the option to
                abandon even after initially choosing her route. In promotional
                material, however, she is displayed with equal prominence to the
                rest of the lords.
              </p>
              <h5>
                <b>Top Billed:</b> The three lords are equal, but Edelgard gets
                the short end of the stick in actual gameplay.
              </h5>
            </div>
            <div className="female-lords-images">
              <img src={edelgard} alt="echoes"></img>
            </div>
          </div>
        </section>
      </div>
      <div className="gender-article-section-intro left-aligned">
        <p>
          So there are two definitively top-billed female lords in the series,
          out of the seven available: Micaiah from{" "}
          <Description tag="FE10">
            <i>Radiant Dawn</i>
          </Description>{" "}
          and Eirika from{" "}
          <Description tag="FE8">
            <i>Sacred Stones</i>
          </Description>
          . When looking at in-game content, all other female lords are arguably
          less prominent or neglected in their game compared to the male lords.
          However, several more female lords have been favored in promotional
          and post-game content: Lyn and Lucina have have retroactively become
          the most popular lords in their games, while Edelgard is one of the
          most recognizable characters in the series and widely discussed when
          examining the game’s narrative content.
        </p>
        <p>
          Additionally, the inclusion of the{" "}
          <Description tag="avatar">avatar</Description> has significantly
          improved the series’ female representation: every mainline game
          following the inclusion of the first avatar in{" "}
          <Description tag="FE12">
            <i>New Mystery</i>
          </Description>{" "}
          has had the option to follow a female lord. Additionally, if excluding
          remakes, every single game in the franchise since{" "}
          <Description tag="FE7">
            <i>Blazing Blade</i>
          </Description>{" "}
          has featured a female or optionally female lord with the exception of{" "}
          <Description tag="FE9">
            <i>Path of Radiance.</i>
          </Description>{" "}
          However, <i>Path of Radiance’s</i> direct sequel,{" "}
          <Description tag="FE10">
            <i>Radiant Dawn</i>
          </Description>
          , prominently features Micaiah as the main lord, so every “story” of
          the franchise since <i>Blazing Blade</i> has had a representative
          female lord.{" "}
        </p>
      </div>
    </>
  );
}

export default FemaleLords;
