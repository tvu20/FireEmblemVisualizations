import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/navigation/NavBar.jsx";
import Footer from "../../components/navigation/Footer.jsx";

import VizGrid from "../../components/visualizations/VizGrid.jsx";

import bannerLogo from "../../assets/banner-logo.png";
import bannerImg from "../../assets/sprites-v1.png";

import getColor from "../../utils/colors.js";

import "./viz.css";

function VizPage() {
  return (
    <>
      <NavBar color={getColor("home")} />
      <div className="viz">
        <h2>Visualizations</h2>
        <h3>Choose one of these interactive visualizations to explore!</h3>
        <VizGrid />
      </div>
      <Footer vertical={false} />
    </>
  );
}

export default VizPage;
