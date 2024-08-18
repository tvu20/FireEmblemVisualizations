import React from "react";
// import { Link } from "react-router-dom";

import NavBar from "../../components/navigation/NavBar.jsx";
import Footer from "../../components/navigation/Footer.jsx";

import VizGrid from "../../components/visualizations/VizGrid.jsx";

// import bannerLogo from "../../assets/banner-logo.png";
// import bannerImg from "../../assets/sprites-v1.png";

import getColor from "../../utils/colors.js";

import "./viz.css";

function VizPage() {
  return (
    <>
      <NavBar color={getColor("home")} navColor="#0b0a12" />
      <div className="viz" style={{ color: "#0b0a12" }}>
        <h2>Visualizations</h2>
        <h3>
          Choose one of these interactive visualizations to explore on your own.
        </h3>
        <VizGrid />
      </div>
      <Footer vertical={false} />
    </>
  );
}

export default VizPage;
