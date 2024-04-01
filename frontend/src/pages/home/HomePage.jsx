import React from "react";

import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";

import Visualizations from "./Visualizations";
import Articles from "./Articles.jsx";

import bannerLogo from "../../assets/banner-logo.png";
import bannerImg from "../../assets/sprites-v1.png";

import getColor from "../../utils/colors.js";

import "./styles/home.css";

function HomePage() {
  return (
    <>
      <NavBar color={getColor("home")} />
      <div className="home">
        {/* <div className="home-banner">
        <img src={bannerLogo} alt="logo" className="home-banner_logo" />
        <h1 className="home-title">Evolution of a Video Game Series</h1>
        <h2 className="home-subtitle">A Data-Driven Story</h2>
        <img src={bannerImg} alt="sprites" className="home-banner_sprites" />
      </div> */}

        <div className="home-banner-v2">
          <img src={bannerLogo} alt="logo" className="home-banner-v2_logo" />
          <h1 className="home-v2-title">Evolution of a Video Game Series</h1>
          <h2 className="home-v2-subtitle">A Data-Driven Story</h2>
          <img
            src={bannerImg}
            alt="sprites"
            className="home-banner-v2_sprites"
          />
        </div>

        {/* <section
          className="rel-timeline-intro left-aligned"
          style={{ color: "white", fontWeight: 700 }}
        >
          <p>
            A collection of visual essays and interactive data visualizations
            examining the intersection between technology, culture,
            storytelling, and video games through the lens of the Fire Emblem
            series.
          </p>
        </section> */}

        <Articles />

        <Visualizations />

        {/* <p>
          LOREM IPSUM FONT GENERATOR IMAGES PLUGINS GENERATORS ENGLISH Lorem
          Ipsum Generator Generate Lorem Ipsum placeholder text. Select the
          number of characters, words, sentences or paragraphs, and hit
          generate! GENERATED LOREM IPSUM 3 PARAGRAPHS COPY Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Eget nunc scelerisque
          viverra mauris in aliquam. Aliquam vestibulum morbi blandit cursus
          risus at ultrices. Id semper risus in hendrerit. Vitae tortor
          condimentum lacinia quis vel. Duis convallis convallis tellus id
          interdum. Ullamcorper sit amet risus nullam. In hendrerit gravida
          rutrum quisque non tellus orci. Placerat vestibulum lectus mauris
          ultrices eros in cursus. Vestibulum sed arcu non odio euismod. Tellus
          in hac habitasse platea dictumst vestibulum rhoncus. Scelerisque purus
          semper eget duis at tellus at urna. Nisi est sit amet facilisis magna.
          Elit ullamcorper dignissim cras tincidunt lobortis. Porta non pulvinar
          neque laoreet suspendisse interdum consectetur. Accumsan sit amet
          nulla facilisi morbi tempus iaculis urna id. Faucibus pulvinar
          elementum integer enim neque volutpat ac. Eget gravida cum sociis
          natoque penatibus et. Ullamcorper eget nulla facilisi etiam dignissim
          diam. Nulla malesuada pellentesque elit eget. Justo eget magna
          fermentum iaculis eu non diam phasellus vestibulum. Dolor sit amet
          consectetur adipiscing elit duis tristique. Purus faucibus ornare
          suspendisse sed nisi lacus sed viverra tellus. Feugiat in ante metus
          dictum at tempor commodo ullamcorper a. Mauris ultrices eros in cursus
          turpis massa tincidunt. Felis bibendum ut tristique et egestas quis
          ipsum. A cras semper auctor neque. At varius vel pharetra vel turpis
          nunc. Vel facilisis volutpat est velit egestas dui id ornare arcu. Eu
          tincidunt tortor aliquam nulla facilisi. Vestibulum mattis ullamcorper
          velit sed ullamcorper. Etiam dignissim diam quis enim lobortis. Dis
          parturient montes nascetur ridiculus mus. At in tellus integer feugiat
          scelerisque varius morbi enim nunc. Habitant morbi tristique senectus
          et netus et malesuada fames ac. Amet mattis vulputate enim nulla
          aliquet porttitor lacus. Justo nec ultrices dui sapien eget. Quam
          lacus suspendisse faucibus interdum. Potenti nullam ac tortor vitae. ©
          2015 — 2023 PRIVACY POLICY SITEMAP FONT GENERATOR IMAGES PLUGINS
          GENERATORS SHARE THE LOREM WA SAI
        </p> */}
      </div>
      <Footer vertical={false} />
      {/* <Footer vertical={true} /> */}
    </>
  );
}

export default HomePage;
