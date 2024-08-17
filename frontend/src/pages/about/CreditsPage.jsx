import React from "react";

import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";

import "./about.css";

import getColor from "../../utils/colors";

function CreditsPage() {
  return (
    <>
      <NavBar color={getColor("menu")} />
      <div className="about-page">
        <div className="about-page__left">
          <div className="about-page__content">
            <h2>Credits</h2>
            <h3>Acknowledgements</h3>
            <p>
              This thesis project would not be possible without the countless
              people who have helped and supported me throughout the process.
            </p>
            <p>
              Thank you to Tim Szetela, my primary thesis advisor, for your
              guidance, inspiration, and continued encouragement. Thank you to
              Adam Finkelstein, my secondary thesis advisor, for your time and
              support of my work. 
            </p>
            <p>
              Thank you to Mikki Hornstein, Dean Peter Bogucki, Traci Miller,
              and the Princeton Computer Science Department for your instruction
              and sponsorship. Finally, thank you to my family, friends, and
              mentors who have shaped my time at Princeton. 
            </p>
            <h3>Game Credits</h3>
            <p>
              The in-game images and data for this project were pulled from the
              Fire Emblem game franchise developed by Intelligent Systems and
              published by Nintendo from 1990-present. The series was created by
              Japanese video game designer Shouzou Kaga. 
            </p>
            <ol>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem:_Shadow_Dragon_and_the_Blade_of_Light"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem: Shadow Dragon and the Blade of Light (1990)
                </a>
                : Directed by Keisuke Terasaki
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem_Gaiden"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem Gaiden (1992)
                </a>
                : Directed by Shouzou Kaga
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem:_Mystery_of_the_Emblem"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem: Mystery of the Emblem (1994)
                </a>
                : Directed by Shouzou Kaga and Satoshi Machida
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem:_Genealogy_of_the_Holy_War"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem: Genealogy of the Holy War (1996)
                </a>
                : Directed by Shouzou Kaga
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem:_Thracia_776"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem: Thracia 776 (1999):
                </a>{" "}
                Directed by Shouzou Kaga
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem:_The_Binding_Blade"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem: The Binding Blade (2002)
                </a>
                : Directed by Tohru Narihiro
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem:_The_Blazing_Blade"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem: The Blazing Blade (2003)
                </a>
                : Directed by Taeko Kaneda and Kentarou Nishimura
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem:_The_Sacred_Stones"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem: The Sacred Stones (2004):
                </a>{" "}
                Directed by Kentarou Nishimura, Taiki Ubukata, Sachiko Wada
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem:_Path_of_Radiance"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem: Path of Radiance (2005)
                </a>
                : Directed by Masayuki Horikawa
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem:_Radiant_Dawn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem: Radiant Dawn (2007)
                </a>
                : Directed by Taeko Kaneda
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem:_Shadow_Dragon"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem: Shadow Dragon (2008)
                </a>
                : Directed by Masaki Tawara
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem:_New_Mystery_of_the_Emblem"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem: New Mystery of the Emblem (2010)
                </a>
                : Directed by Hideaki Araki
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem_Awakening"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem Awakening (2012)
                </a>
                : Directed by Kouhei Maeda and Genki Yokota
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem_Fates"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem Fates (2015)
                </a>
                : Directed by Kouhei Maeda and Genki Yokota
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem_Echoes:_Shadows_of_Valentia"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem Echoes: Shadows of Valentia (2017)
                </a>
                : Directed by Toshiyuki Kusakihara and Kenta Nakanishi
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem:_Three_Houses"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem: Three Houses (2019)
                </a>
                : Directed by Toshiyuki Kusakihara and Genki Yokota
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fire_Emblem_Engage"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem Engage (2023)
                </a>
                : Directed by Tsutomu Tei and Kenta Nakanishi
              </li>
            </ol>

            <h3>Data Collection</h3>
            <p>
              I collected the transcripts for my data analysis from the
              following fansites and fan translations:
            </p>
            <ul>
              <li>
                <a
                  href="https://fireemblemwiki.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem Wiki
                </a>
              </li>
              <li>
                <a
                  href="https://fireemblem.fandom.com/wiki/Fire_Emblem_Wiki"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fire Emblem Fandom Wiki
                </a>
              </li>
              <li>
                <a
                  href="https://serenesforest.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Serenes Forest
                </a>
              </li>
              <li>
                <a
                  href="https://wiki.serenesforest.net/index.php/Main_Page"
                  target="_blank"
                  rel="noreferrer"
                >
                  Serenes Forest Wiki
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1yqlml9m1Lzwq-Y_rjQ1BZ4oLJGKfCi_7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fan translation of FE4 compiled by Reddit user Skelezomperman
                </a>
              </li>
              <li>
                <a
                  href="https://gamefaqs.gamespot.com/snes/577344-fire-emblem-thracia-776/faqs/43230"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fan translation of FE5
                </a>
              </li>
              <li>
                <a
                  href="https://gamefaqs.gamespot.com/wii/932999-fire-emblem-radiant-dawn/faqs/53574"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fan translation of FE10
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-page__right">
          <Footer vertical />
        </div>
      </div>
    </>
  );
}

export default CreditsPage;
