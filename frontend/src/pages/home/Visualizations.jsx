import React from "react";
import { Link } from "react-router-dom";

import VizGrid from "../../components/visualizations/VizGrid";

import "./styles/visualizations.css";

function Visualizations() {
  return (
    <div className="home-viz">
      <h2>Visualizations</h2>
      <h3>Choose one of these interactive visualizations to explore!</h3>
      <VizGrid limit />
      <Link className="home-viz__button" to="/viz">
        See more
      </Link>
    </div>
  );
}

export default Visualizations;
