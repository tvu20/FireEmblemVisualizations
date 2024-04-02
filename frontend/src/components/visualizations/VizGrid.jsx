import React from "react";
import { Link } from "react-router-dom";

import { getVisualizations } from "../../utils/pages";

import "./vizgrid.css";

function VizGrid(props) {
  const { limit } = props;
  const visualizations = getVisualizations();

  const createGrid = () => {
    // console.log(visualizations.slice(8));
    if (limit) {
      return visualizations.slice(0, 8).map((v) => (
        <div key={v.name} className="viz-grid__item">
          <Link
            to={v.url}
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <img src={v.thumbnail} alt={v.name}></img>
            <h6>{v.name}</h6>
          </Link>
        </div>
      ));
    }
    return visualizations.map((v) => (
      <div key={v.name} className="viz-grid__item">
        <Link
          to={v.url}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          <img src={v.thumbnail} alt={v.name}></img>
          <h6>{v.name}</h6>
        </Link>
      </div>
    ));
  };

  return <div className="viz-grid__container">{createGrid()}</div>;
}

export default VizGrid;
