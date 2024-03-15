import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import Description from "../../../components/articles/Description";
import DevScroll from "./DevScroll";

import "./dev.css";

const SECTIONS = {
  NES: {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/NES-Console-Set.png",
    title: "Famicom: The Creation of the Series",
  },
  SNES: {
    img: "https://upload.wikimedia.org/wikipedia/commons/3/36/SNES-Mod1-Console-Set.png",
    title: "Super Famicom: The Expansion of Narrative Importance",
  },
  GBA: {
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e483edbf-4b49-42e8-a684-cdf17c4f227f/dd3c8ms-f7504566-4677-48ec-9cbf-1a736f433592.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U0ODNlZGJmLTRiNDktNDJlOC1hNjg0LWNkZjE3YzRmMjI3ZlwvZGQzYzhtcy1mNzUwNDU2Ni00Njc3LTQ4ZWMtOWNiZi0xYTczNmY0MzM1OTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.POuFaxNiHdCx684Tb0K9F9Ayfzv8TyoHBnEdbTuz7KI",
    title: "GBA: Increasing the Reach and Accessibility of the Series",
  },
  Wii: {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Wii_Wiimotea.png/459px-Wii_Wiimotea.png",
    title: "GameCube and Wii: Major Graphics and Presentation Improvements",
  },
  DS: {
    img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Nintendo-DS-Lite-Black-Open.png",
    title: "Nintendo DS: The Introduction of Remakes",
  },
  TDS: {
    img: "https://upload.wikimedia.org/wikipedia/commons/4/43/New-3DS-XL-Black-Transparent-Fixed.png",
    title: "Nintendo 3DS: The Revival of the Franchise",
  },
  Switch: {
    img: "https://nyko.com/cdn/shop/products/ThinCaseClearWeb1_1024x1024.png?v=1672862719",
    title: "Nintendo Switch: Breakthrough Into the Mainstream Industry",
  },
};

function DevTimeline() {
  const [year, setYear] = useState(1990);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const convertYear = (value) => {
    const newValue = ((value - 1990) * 100) / 33;

    return newValue;
  };

  const updateYear = (value) => {
    if (value !== year) {
      setYear(value);
    }
    if (finished === true) {
      setFinished(false);
    }
    if (started === false) {
      setStarted(true);
    }
    if (showTitle === false) {
      setShowTitle(true);
    }
  };

  const findConsole = (year) => {
    if (year < 1994) {
      return "NES";
    } else if (year < 2001) {
      return "SNES";
    } else if (year < 2005) {
      return "GBA";
    } else if (year < 2008) {
      return "Wii";
    } else if (year < 2012) {
      return "DS";
    } else if (year < 2019) {
      return "TDS";
    } else {
      return "Switch";
    }
  };

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
    <div className="dev-timeline">
      <div
        className="dev-timeline-bar-container"
        style={{ opacity: started ? 1 : 0 }}
      >
        <progress
          value={convertYear(year)}
          max="100"
          className={`${findConsole(year)} ${
            finished ? "dev-timeline-progress-update" : ""
          }`}

          // className={finished ? "dev-timeline-progress-update" : ""}
        ></progress>
        <div
          className={`dev-timeline-point${
            finished ? " dev-timeline-progress-update" : ""
          }`}
          style={{ left: "9vw" }}
        >
          <p style={{ opacity: year === 1990 ? 1 : 0 }}>1990</p>
          <span className={`dev-timeline-dot ${findConsole(year)}`}></span>
        </div>
        <div
          className="dev-timeline-point"
          style={{ left: "14vw", opacity: year === 1992 ? 1 : 0 }}
        >
          <p>1992</p>
        </div>
        <div
          className={`dev-timeline-point ${
            finished ? "dev-timeline-progress-update" : ""
          }`}
          style={{ left: "18.5vw" }}
        >
          <p style={{ opacity: year === 1994 ? 1 : 0 }}>1994</p>
          <span
            className={`dev-timeline-dot ${
              year >= 1994 ? findConsole(year) : ""
            }`}
          ></span>
        </div>
        <div
          className="dev-timeline-point"
          style={{ left: "23.5vw", opacity: year === 1996 ? 1 : 0 }}
        >
          <p>1996</p>
        </div>
        <div
          className="dev-timeline-point"
          style={{ left: "30.5vw", opacity: year === 1999 ? 1 : 0 }}
        >
          <p>1999</p>
        </div>
        <div
          className={`dev-timeline-point ${
            finished ? "dev-timeline-progress-update" : ""
          }`}
          style={{ left: "35.5vw" }}
        >
          <p style={{ opacity: year === 2001 ? 1 : 0 }}>2001</p>
          <span
            className={`dev-timeline-dot ${
              year >= 2001 ? findConsole(year) : ""
            }`}
          ></span>
        </div>
        <div
          className="dev-timeline-point"
          style={{ left: "38vw", opacity: year === 2002 ? 1 : 0 }}
        >
          <p>2002</p>
        </div>
        <div
          className="dev-timeline-point"
          style={{ left: "40vw", opacity: year === 2003 ? 1 : 0 }}
        >
          <p>2003</p>
        </div>
        <div
          className="dev-timeline-point"
          style={{ left: "42.5vw", opacity: year === 2004 ? 1 : 0 }}
        >
          <p>2004</p>
        </div>
        <div
          className={`dev-timeline-point ${
            finished ? "dev-timeline-progress-update" : ""
          }`}
          style={{ left: "45.5vw" }}
        >
          <p style={{ opacity: year === 2005 ? 1 : 0 }}>2005</p>
          <span
            className={`dev-timeline-dot ${
              year >= 2005 ? findConsole(year) : ""
            }`}
          ></span>
        </div>
        <div
          className="dev-timeline-point"
          style={{ left: "50vw", opacity: year === 2007 ? 1 : 0 }}
        >
          <p>2007</p>
        </div>
        <div
          className={`dev-timeline-point ${
            finished ? "dev-timeline-progress-update" : ""
          }`}
          style={{ left: "53vw" }}
        >
          <p style={{ opacity: year === 2008 ? 1 : 0 }}>2008</p>
          <span
            className={`dev-timeline-dot ${
              year >= 2008 ? findConsole(year) : ""
            }`}
          ></span>
        </div>
        <div
          className="dev-timeline-point"
          style={{ left: "57vw", opacity: year === 2010 ? 1 : 0 }}
        >
          <p>2010</p>
        </div>
        <div
          className={`dev-timeline-point ${
            finished ? "dev-timeline-progress-update" : ""
          }`}
          style={{ left: "62.5vw" }}
        >
          <p style={{ opacity: year === 2012 ? 1 : 0 }}>2012</p>
          <span
            className={`dev-timeline-dot ${
              year >= 2012 ? findConsole(year) : ""
            }`}
          ></span>
        </div>
        <div
          className="dev-timeline-point"
          style={{ left: "69vw", opacity: year === 2015 ? 1 : 0 }}
        >
          <p>2015</p>
        </div>
        <div
          className="dev-timeline-point"
          style={{ left: "74vw", opacity: year === 2017 ? 1 : 0 }}
        >
          <p>2017</p>
        </div>
        <div
          className={`dev-timeline-point ${
            finished ? "dev-timeline-progress-update" : ""
          }`}
          style={{ left: "79.5vw" }}
        >
          <p style={{ opacity: year === 2019 ? 1 : 0 }}>2019</p>
          <span
            className={`dev-timeline-dot ${
              year >= 2019 ? findConsole(year) : ""
            }`}
          ></span>
        </div>
        <div
          className={`dev-timeline-point ${
            finished ? "dev-timeline-progress-update" : ""
          }`}
          // className="dev-timeline-point"
          style={{ left: "88.5vw", opacity: year === 2023 ? 1 : 0 }}
        >
          <p>2023</p>
        </div>
        <div
          className={`dev-timeline-background ${
            finished ? "dev-timeline-progress-update" : ""
          }`}
        ></div>
      </div>
      <section>
        <Scrollama
          onStepEnter={() => {
            setShowTitle(true);
            setYear(1990);
          }}
          onStepExit={({ direction }) => {
            if (direction === "up") {
              setShowTitle(false);
            }
          }}
          offset="400px"
        >
          <Step>
            <p className="dev-timeline-intro">
              In 1983, the Famicom (known as the Nintendo Entertainment System
              or the NES in the West) was released by Nintendo as their first
              home video game console. The NES played a large role in
              revitalizing the video game industry in the United States
              following the video game crash of 1983, and is considered one of
              the greatest video game consoles of all time.{" "}
            </p>
          </Step>
        </Scrollama>
        <DevScroll updateYear={updateYear} onStepExit={onStepExit}>
          <Step
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
          </Step>
        </DevScroll>
      </section>

      <section>
        <Scrollama
          onStepEnter={() => {
            setShowTitle(true);
            setYear(1994);
          }}
          offset="400px"
        >
          <Step>
            <p className="dev-timeline-intro">
              In 1990, Nintendo released the Super Famicom, or Super Nintendo
              Entertainment System, as its second programmable home console.
              Among other technological advancements, the console introduced
              advanced graphics and sound capabilities and accommodated a
              variety of enhancement chips integrated into game cartridges.
            </p>
          </Step>
        </Scrollama>
        <DevScroll updateYear={updateYear}>
          <Step
            data={{
              id: 0,
              year: 1994,
              img: "https://i.ebayimg.com/images/g/m~4AAOSwMJVkBOQS/s-l1600.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Fire Emblem:{" "}
                <Description tag="FE3">Mystery of the Emblem</Description> is
                released as the third installment in the series. Due to
                increased hardware capabilities, the team was able to improve
                the content and graphical quality,{" "}
                <span className="dev-scroller-category cat-one">
                  featuring significantly more depth and texture in the in-game
                  art.
                </span>{" "}
                The developers were able to include an upgraded version of{" "}
                <Description tag="FE1">FE1</Description> as well as an original
                storyline in the game; however, due to some space limitations,{" "}
                <span className="dev-scroller-category cat-one">
                  characters in the original version of FE1 were cut.
                </span>
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 1,
              year: 1996,
              img: "https://animehuntermage.files.wordpress.com/2020/06/image-1.jpeg?w=547&h=383",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                <Description tag="FE4">Genealogy of the Holy War</Description>{" "}
                is released. This was the first game in the series to depart the
                continent of Archanea, where the three previous games were set,
                as <Description tag="Kaga">Kaga</Description> felt that he had
                completed that story and wanted to create a large-scale
                historical drama without being confined to Archanea. The
                development of this game placed{" "}
                <span className="dev-scroller-category cat-two">
                  a much greater emphasis on the story of the game
                </span>{" "}
                compared to previous entries.
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 2,
              year: 1996,
              img: "https://www.rpgfan.com/wp-content/uploads/2021/04/Fire-Emblem-Seisen-no-Keifu-Screenshot-Fan-Translation-005-803x720.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Genealogy was the first game to feature character relationships
                as a <Description tag="support">core part</Description> of
                gameplay, which has carried on as a recurring theme in the
                series. This was also the first game to include optional
                conversations between characters and story driven romances, in
                order to further develop character relationships. Additionally,{" "}
                <span className="dev-scroller-category cat-two">
                  the scale of battle maps throughout the game was vastly
                  increased
                </span>{" "}
                due to Kaga wanting to create a story that felt epic in scope.
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 3,
              year: 1999,
              img: "https://images.nintendolife.com/1c298049e20d3/thracia776.large.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                <Description tag="FE5">Thracia 776</Description> was released in
                1999. Kaga took the opposite approach to this game: Since the
                strategic elements of Genealogy had suffered due to the goal of
                creating a complex, epic story,{" "}
                <Description tag="Kaga">Kaga</Description> switched his focus to
                the gameplay, deliberately giving characters little buildup or
                backstory. Additional elements such as different types of
                movement, fog of war mechanics, and increased difficulty systems
                were included with{" "}
                <span className="dev-scroller-category cat-two">
                  the goal to challenge players further,
                </span>{" "}
                while the story centered around a group of scrappy rebels
                attempting to start a revolution.
              </p>
            </div>
          </Step>
        </DevScroll>
      </section>

      <section>
        <Scrollama
          onStepEnter={() => {
            setShowTitle(true);
            setYear(2001);
          }}
          offset="400px"
        >
          <Step>
            <p className="dev-timeline-intro">
              Nintendo made a big name for themselves in the handheld consoles
              market with the release of the GameBoy, which was the first
              portable gaming system to sell in large quantities. The Game Boy
              Advance (GBA), released in 2001, was the first major technological
              upgrade to the Game Boy, providing improved hardware and graphics
              capabilities.
            </p>
          </Step>
        </Scrollama>
        <DevScroll updateYear={updateYear}>
          <Step
            data={{
              id: 0,
              year: 2001,
              img: "https://miro.medium.com/v2/resize:fit:1064/1*BKahMxk2y4Low_VSjj21aQ.jpeg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                <i>Super Smash Bros. Melee</i> was released featuring two
                playable characters from the Fire Emblem series: Marth, the
                protagonist from the <Description tag="FE1">first</Description>{" "}
                and <Description tag="FE3">third</Description> games; and Roy,
                the protagonist of the unreleased{" "}
                <Description tag="FE6">sixth game</Description> in the series.
                Roy’s game was already late into development, but due to
                scheduling issues, Roy’s first appearance was in Smash rather
                than his own game. Smash provided the first exposure of FE to
                audiences outside of Japan, and the popularity of these two
                characters caused Nintendo to decide to localize the next entry
                in the series.
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 1,
              year: 2002,
              img: "https://miro.medium.com/v2/resize:fit:1200/1*hr01NO4NYKHoT0e9a4thXw.jpeg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                The sixth entry in the series was initially conceived for the
                Nintendo 64, but following the commercial failure of the 64DD
                system, which would have provided better hardware capabilities
                and data storage, FE6 was changed to be a game for the Game Boy
                Advance (GBA) and was released in 2002 as{" "}
                <Description tag="FE6">The Binding Blade.</Description>
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 2,
              year: 2002,
              img: "https://i.etsystatic.com/11831219/r/il/5dba27/4446355810/il_fullxfull.4446355810_rlok.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                This was the first Fire Emblem entry released on a handheld
                console, but unlike other series like{" "}
                <i>The Legend of Zelda,</i> there was not a significant
                distinction in gameplay between this handheld game and the
                previous console games. The developers had previously considered
                releasing Fire Emblem on handheld consoles:
              </p>
              <p className="dev-scroller-step-quote">
                “In order to play stress-free, you need a certain level of
                screen display ability and a minimum amount of data that can be
                handled. The performance of previous portable devices didn’t
                match that, but the GBA has specs that are equal to or better
                than the Super Famicom, so instead of having our next game be on
                the TV, we put it on a portable device.” - Narihiro Toru,
                Intelligent Systems producer
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 3,
              year: 2002,
              img: "https://www.rpgfan.com/wp-content/uploads/2020/12/Fire-Emblem-Fuuin-no-Tsurugi-Screenshot-Fan-Translation-001-936x720.png",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Since they were creating a game for a new type of gaming
                platform, the developers focused on making the game friendlier
                to newcomers,{" "}
                <span className="dev-scroller-category cat-three">
                  lowering the difficulty and including an in-game tutorial mode
                </span>{" "}
                for the first time. One of the main issues faced was the limited
                screen size and resolution of a portable console: for this
                reason, the developers had to{" "}
                <span className="dev-scroller-category cat-one">
                  develop a new art style for drawing character portraits.
                </span>
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 4,
              year: 2003,
              img: "https://fantasticmemes.files.wordpress.com/2023/06/fe1.webp",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                The seventh entry in the series was{" "}
                <span className="dev-scroller-category cat-three">
                  the first game to be localized in English,
                </span>{" "}
                released as <i>Fire Emblem</i> in the West. It has since been
                rebranded with its original Japanese subtitle:{" "}
                <Description tag="FE7">The Blazing Blade.</Description> Since
                this release, all Fire Emblem games with the exception of New
                Mystery of the Emblem{" "}
                <Description tag="FE12">(FE12)</Description> have been localized
                as well. Localization was performed by the company Treehouse,
                which has localized the majority of other Fire Emblem titles to
                date.
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 5,
              year: 2003,
              img: "https://feuniverse.us/uploads/default/original/3X/4/f/4f3d84a67c9513163ceb594d35b2323e19922057.png",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Since the difficulty of previous games had been off-putting to
                new players, Nintendo attempted to improve the new player
                experience in order to propel Fire Emblem into becoming a major
                series. <i>The Blazing Blade</i> was the first in the series to
                feature a <Description tag="NGPlus">“New Game+”</Description>{" "}
                mode, or{" "}
                <span className="dev-scroller-category cat-two">
                  additional content unlocked following completion of the game’s
                  story:
                </span>{" "}
                on their second playthrough, players could opt for “Hector
                Mode,” an alternate story route focusing on a different
                protagonist. The main story of the game was preceded by “Lyn
                Mode,” which{" "}
                <span className="dev-scroller-category cat-three">
                  served as a tutorial mode for new players due to FE7 being the
                  first localized game.
                </span>
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 6,
              year: 2004,
              img: "https://assets-prd.ignimgs.com/2022/01/08/fireemblem-sacred-customsquare-1641672201514.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                <Description tag="FE8">Sacred Stones</Description> was released
                as the eighth mainline title in the series. It shared very
                similar graphics, animations, and gameplay features to the rest
                of the GBA games, while bringing back the navigable map system
                from <Description tag="FE2">Gaiden.</Description> This was also
                the first game in the series to feature optional dungeons and
                skirmishes, allowing players to gain additional points. This was
                another feature designed to decrease the difficulty of the
                games, as{" "}
                <span className="dev-scroller-category cat-three">
                  players could overlevel units to make battles easier.
                </span>
              </p>
            </div>
          </Step>
        </DevScroll>
      </section>

      <section>
        <Scrollama
          onStepEnter={() => {
            setShowTitle(true);
            setYear(2005);
          }}
          offset="400px"
        >
          <Step>
            <p className="dev-timeline-intro">
              The Fire Emblem series returned to home consoles with the Tellius
              duology: a pair of games featuring a continuous storyline and many
              of the same characters. The first game in the duology was released
              on the GameCube, a home console released in 2001; the second was
              released as a direct sequel on the Wii, released in 2006 as
              Nintendo’s seventh generation console.
            </p>
          </Step>
        </Scrollama>

        <DevScroll updateYear={updateYear}>
          <Step
            data={{
              id: 0,
              year: 2005,
              img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/fire-emblem-path-of-radiance-radiant-dawn-remakes-rumor.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                The release of Path of Radiance{" "}
                <Description tag="FE9">(FE9)</Description> for the GameCube
                marked the return of the Fire Emblem to home consoles. This game
                brought many significant technological advances and features
                that were maintained in all subsequent non-remakes in the series
                going forwards. Notably, FE9 was the first game in the series
                with{" "}
                <span className="dev-scroller-category cat-one">
                  3D graphics and animation, full motion cutscenes, and voice
                  acting.
                </span>
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 1,
              year: 2005,
              img: "https://i.ytimg.com/vi/bmx8IuZ-SW8/sddefault.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Following the success of Fire Emblem overseas, the team decided
                to return to development for home consoles. The new graphics
                processor of the GameCube allowed the team to{" "}
                <span className="dev-scroller-category cat-one">
                  transition from 2D to 3D graphics,
                </span>{" "}
                which became one of the biggest challenges in development. Due
                to the difficulties imposed by the new graphics coupled with
                budget and time constraints, the developers opted to exclude
                gameplay in-between chapters in favor of optional conversations
                between battles. One of the developers said in an interview that
                he considered the game to only be 70% complete.{" "}
              </p>
              <p>
                Ike, the protagonist, was the first in the series to not be born
                of noble rank. This was also an addition due to the new 3D
                features of the game: the developers{" "}
                <span className="dev-scroller-category cat-three">
                  wanted their protagonist to be more relatable to people.
                </span>{" "}
                Additionally, due to having to design 3D models for all the
                characters, the character artwork produced was{" "}
                <span className="dev-scroller-category cat-one">
                  a lot higher quality than in the past.
                </span>
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 2,
              year: 2007,
              img: "https://miro.medium.com/v2/resize:fit:720/1*w9JbpcxtSpaSoATVhZbKMw.jpeg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                <Description tag="FE10">Radiant Dawn</Description> was released
                for the Wii in 2007, continuing the trend of home console
                releases. The devs took advantage of the Wii’s ability to read
                GameCube memory cards: Radiant Dawn was designed as a direct
                sequel to <Description tag="FE9">Path of Radiance,</Description>{" "}
                and players could{" "}
                <span className="dev-scroller-category cat-one">
                  transfer data from a completed <i>Path of Radiance</i> copy to
                  obtain in-game benefits.
                </span>{" "}
                Apart from this, the devs did not take advantage of many of the
                Wii’s capabilities, notably the motion controls, as they felt it
                was unnecessary to the game’s design.
              </p>
            </div>
          </Step>
        </DevScroll>
      </section>

      <section>
        <Scrollama
          onStepEnter={() => {
            setShowTitle(true);
            setYear(2008);
          }}
          offset="400px"
        >
          <Step>
            <p className="dev-timeline-intro">
              The Nintendo DS was released as a foldable handheld game console
              produced by Nintendo in 2004, introducing distinctive new features
              to handheld games: two LCD screens working in tandem, the bottom
              one being a touchscreen, and support for wireless connectivity.
              Its backward compabitibility with Game Boy Advance games, as well
              as its strong sales, established it as the successor to the Game
              Boy series.
            </p>
          </Step>
        </Scrollama>

        <DevScroll updateYear={updateYear}>
          <Step
            data={{
              id: 0,
              year: 2008,
              img: "https://assets-prd.ignimgs.com/2022/01/08/fe-shadowdragon-dontstealfromignyo-1641675783008.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Shadow Dragon is released as the first official remake in the
                franchise. It is based off of the{" "}
                <Description tag="FE11">first title </Description> in the
                series, <i>Shadow Dragon and the Blade of Light,</i> and marks
                the return of the franchise to portable systems.{" "}
                <Description tag="IS">Intelligent Systems</Description> chose to
                develop a remake instead of a new entry so{" "}
                <span className="dev-scroller-category cat-three">
                  players could experience gameplay and software from the early
                  days of <i>Fire Emblem,</i>
                </span>{" "}
                as well as to make FE1 accessible to international players. In
                comparing the remake to the original FE1, we can see the
                significant progress that the franchise has made since its first
                game: higher graphics quality, lots of quality of life
                improvements, and the inclusion of an in-game tutorial system.
              </p>
              <p>
                The developers took advantage of various features of the DS in
                the creation of the game: for example, the dual-screen allowed
                players to view character stat blocks without leaving the battle
                map screens. Most notably, the devs took advantage of the DS’s
                WiFi capabilities to{" "}
                <span className="dev-scroller-category cat-one">
                  implement online multiplayer mode, a first in the franchise.
                </span>{" "}
                Players could engage in chats with others and play multiplayer
                matches.
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 1,
              year: 2010,
              img: "https://pm1.aminoapps.com/7114/15a0e1a583f0a8a2b2e687ff194c40c2c2dbaf83r1-1024-768v2_uhq.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                New Mystery of the Emblem was released as the{" "}
                <Description tag="FE12">twelfth entry</Description> in the
                series and the second remake. The major development featured in
                this game was the inclusion of a customizable{" "}
                <Description tag="avatar">Avatar</Description> character:{" "}
                <span className="dev-scroller-category cat-two">
                  players could give the avatar a custom name, gender, skillset,
                  and different outfits and haircuts.
                </span>{" "}
                The developers added this feature to give players an easier
                introduction to the story: since they did not want to assume
                that players would be familiar with the main protagonist Marth,
                they added the Avatar as{" "}
                <span className="dev-scroller-category cat-three">
                  an easier way to connect with the world.
                </span>
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 2,
              year: 2010,
              img: "https://www.fireemblemwod.com/fe12/guia/p04.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                The second major development introduced by New Mystery was{" "}
                <Description tag="casual">“Casual Mode”:</Description> a new
                gameplay feature to turn off permadeath, or to{" "}
                <span className="dev-scroller-category cat-three">
                  let players keep fallen characters in battle.
                </span>{" "}
                This was another significant step in making the franchise easier
                and more accessible for new players! The decision to create
                Casual Mode was very contentious, as permadeath was the defining
                mechanic of the series’ gameplay; however, positive feedback
                from the player base convinced Nintendo and{" "}
                <Description tag="IS">IS</Description> to keep its inclusion.
              </p>
            </div>
          </Step>
        </DevScroll>
      </section>

      <section>
        <Scrollama
          onStepEnter={() => {
            setShowTitle(true);
            setYear(2012);
          }}
          offset="400px"
        >
          <Step>
            <p className="dev-timeline-intro">
              The Nintendo 3DS was released in 2011 as a successor to the
              Nintendo DS, featuring backward compabitility with DS games and
              sharing many similar features. Some of the most prominent new
              features included the StreetPass and SpotPass modes, delivering
              content from the internet to the consoles, and the ability to
              display stereoscopic 3D images.
            </p>
          </Step>
        </Scrollama>

        <DevScroll updateYear={updateYear}>
          <Step
            data={{
              id: 0,
              year: 2012,
              img: "https://media.gamestop.com/i/gamestop/10106383/Fire-Emblem-Awakening",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Following declining sales for years, Nintendo issued{" "}
                <Description tag="IS">IS</Description> an ultimatum: if their
                next title failed to sell 250,000 units, it would be the end of
                the franchise. Therefore, the thirteenth entry in the series,{" "}
                <Description tag="FE13">Awakening,</Description> was designed as
                a possible final entry for the series,{" "}
                <span className="dev-scroller-category cat-two">
                  incorporating many design, story, and gameplay elements from
                  previous games.
                </span>
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 1,
              year: 2012,
              img: "https://pbs.twimg.com/media/DdGnolfU0AA8njK.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Development started while the 3DS was still being fine-tuned;
                therefore, the developers had to make decisions based on what
                they thought would be feasible technically. In particular, there
                was a lot of difficulty with making the 3D models work with the
                environments: notably, none of the 3D models in the game have
                feet! Since the developers didn’t know the CPU strength, they{" "}
                <span className="dev-scroller-category cat-one">
                  designed the models knowing that the number of character bones
                  might be limited, and therefore eliminated the bones operating
                  the ankles and feet.
                </span>{" "}
                Later, they discovered that the CPU did allow for ankles and
                feet, but they were too deep in the development process to
                backtrack.
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 2,
              year: 2012,
              img: "https://i.ytimg.com/vi/TmTFOS9TFVQ/maxresdefault.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                The creators also wanted to flesh out all the characters in the
                game significantly more than previous titles, providing all
                units, playable or otherwise, with their own backstories and
                unique designs. Additionally, this was the first game to feature
                voice acting throughout instead of only during major cutscenes;
                <span className="dev-scroller-category cat-two">
                  most lines were accompanied by grunts or other small
                  exclamations to evoke certain feelings.
                </span>{" "}
                The graphical capabilities of the 3DS also allowed the
                developers to{" "}
                <span className="dev-scroller-category cat-one">
                  add more unique character expressions than previous games,
                </span>{" "}
                enabling emotional range in scenes.
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 3,
              year: 2012,
              img: "https://deathmetalflorist.files.wordpress.com/2016/03/fire-emblem-awakening-01.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                There was a huge emphasis on accessibility to newcomers: the
                developers retained the{" "}
                <Description tag="casual">Casual Mode</Description> from{" "}
                <Description tag="FE12">New Emblem</Description> despite
                pushback to make the game easier to play and user-friendly. They
                also spent a lot of time on{" "}
                <span className="dev-scroller-category cat-three">
                  making the UI and graphics easier for players to understand.
                </span>
              </p>
              <p>
                Additionally, the developers were able to include more battle
                gameplay content through various means: a new feature introduced
                in Awakening was <i>paralogues,</i> a form of optional battles{" "}
                <span className="dev-scroller-category cat-two">
                  that would allow players to learn more about the world while
                  not detracting from or lengthening the main storyline.
                </span>{" "}
                Awakening also introduced downloadable content (DLC) to the
                series, where{" "}
                <span className="dev-scroller-category cat-two">
                  players could pay for extra battle maps and new gameplay
                  features.
                </span>{" "}
                This marks a departure from the pricing model of older games,
                which bundled everything into a single release.
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 4,
              year: 2015,
              img: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_3ds_25/SI_3DS_FireEmblemFates_enGB.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                <Description tag="FE14">Fates</Description> was released in 2015
                as the fourteenth entry and the second on the 3DS console. This
                was the first (and only to date) game in the series to be
                bundled into different versions following different storylines:
                Birthright and Conquest were released as two unique physical
                versions, while Revelation was released as a third DLC route.{" "}
              </p>
              <p>
                The developers wanted to{" "}
                <span className="dev-scroller-category cat-two">
                  distinguish the routes of Fates through gameplay as well as
                  story:
                </span>{" "}
                Birthright was designed as a beginner-friendly route borrowing
                many mechanics from{" "}
                <Description tag="FE13">Awakening,</Description> while Conquest
                provided more varied objectives and complex strategic elements.
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 5,
              year: 2015,
              img: "https://images.gamebanana.com/img/ss/mods/6210557733eb8.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                The most prominent new gameplay feature of Fates was the
                inclusion of My Castle: a “home base” where players could{" "}
                <span className="dev-scroller-category cat-two">
                  interact with members of their roster and obtain power-ups
                  through minigames.
                </span>{" "}
                My Castle was created as an alternative activity for players,
                allowing them to learn more about the main characters outside of
                battle. Players could also visit other My Castles through the
                SpotPass functionality of the 3DS. Additionally, Fates was the
                first game in the series to feature Amiibo support.
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 6,
              year: 2017,
              img: "https://m.media-amazon.com/images/I/81qG8LeErML.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Fire Emblem Echoes: Shadows of Valentia was released as the
                third remake of the series and the{" "}
                <Description tag="FE15">fifteenth mainline entry,</Description>{" "}
                focusing on the storyline and gameplay from Fire Emblem:{" "}
                <Description tag="FE2">Gaiden.</Description>
                The developers retained many of the unique mechanics of Gaiden
                while also bringing back modern series stables such as{" "}
                <Description tag="casual">Casual mode.</Description>{" "}
                Additionally, the game introduced a first-person dungeon
                crawling mode similar to traditional action-adventure RPGs.
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: 7,
              year: 2017,
              img: "https://i.ytimg.com/vi/eJssNWovzL0/maxresdefault.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Echoes introduced the <i>turnwheel</i> mechanic to the series:
                players had{" "}
                <span className="dev-scroller-category cat-three">
                  the ability to rewind actions during battles, making the
                  gameplay significantly more forgiving.
                </span>{" "}
                This mechanic has been featured in every game since,
                incorporated into the story as a plot point. Additionally,
                Echoes was the first entry in the series to feature full
                voice-acting in order to{" "}
                <span className="dev-scroller-category cat-two">
                  enhance the presentation of the story.
                </span>
              </p>
            </div>
          </Step>
        </DevScroll>
      </section>

      <section>
        <Scrollama
          onStepEnter={() => {
            setShowTitle(true);
            setYear(2019);
          }}
          offset="400px"
        >
          <Step>
            <p className="dev-timeline-intro">
              The Nintendo Switch, released in 2017, was the first Nintendo
              console to be classified as a hybrid console: it could either be
              docked for home console use or used as a portable device. The
              Switch supports online gaming through internet connectivity and
              video game software through both physical cartridges and digital
              distribution via the electronic shop. It is Nintendo’s
              best-selling home console to date and the third best-selling game
              console of all time.
            </p>
          </Step>
        </Scrollama>

        <DevScroll updateYear={updateYear} onStepExit={onStepExit}>
          <Step
            data={{
              id: 0,
              year: 2019,
              img: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_FireEmblemThreeHouses_image1600w.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Fire Emblem: <Description tag="FE16">Three Houses</Description>{" "}
                was released on the Switch as the sixteenth mainline entry in
                the series, marking the series’ return to home consoles. The
                staff wanted to create a game that felt fresh to mark the
                series’ development, so they{" "}
                <span className="dev-scroller-category cat-two">
                  heavily expanded role-playing game mechanics beyond the
                  tactical battles:
                </span>{" "}
                in particular, the My Castle system from Fates was expanded into
                a full navigable base called the monastery, featuring minigames,
                character interactions, and increased social aspects.
                Additionally, the story was split into four distinct routes,{" "}
                <span className="dev-scroller-category cat-two">
                  providing further complexity to the world and gameplay-story
                  integration.
                </span>
              </p>
            </div>
          </Step>
          <Step
            data={{
              id: "end",
              year: 2023,
              img: "https://i.ytimg.com/vi/DMtDNA_kiZ4/maxresdefault.jpg",
            }}
          >
            <div className="dev-scroller-step">
              <p>
                Fire Emblem <Description tag="FE17">Engage,</Description> the
                latest title in the series, was designed as an anniversary game
                celebrating main characters from previous titles. One of the
                main goals of Engage was to create a very different experience
                from <Description tag="FE16">Three Houses,</Description> with{" "}
                <span className="dev-scroller-category cat-three">
                  a much more simple story that could appeal to a broad audience
                  and many age-ranges
                </span>{" "}
                as opposed to a heavy war story. Engage also{" "}
                <span className="dev-scroller-category cat-three">
                  returned to a linear narrative structure instead of branching
                  paths
                </span>{" "}
                as the developers were worried that a complicated story would be
                too overwhelming from players. Finally,{" "}
                <span className="dev-scroller-category cat-one">
                  3D models were heavily centered in the game’s art style
                </span>{" "}
                due to the significantly higher graphic capabilities provided on
                the Switch: the developers almost entirely refrained from using
                2D artwork in games, a departure from previous games in the
                franchise.
              </p>
            </div>
          </Step>
        </DevScroll>
      </section>
      <div
        className="dev-section-name"
        style={{ opacity: showTitle && !finished ? 1 : 0 }}
      >
        <img
          src={SECTIONS[findConsole(year)].img}
          alt={SECTIONS[findConsole(year)].title}
        ></img>
        <h3>{SECTIONS[findConsole(year)].title}</h3>
      </div>
    </div>
  );
}

export default DevTimeline;
