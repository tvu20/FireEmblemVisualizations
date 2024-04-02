import React from "react";
import { Link } from "react-router-dom";

import { getArticles } from "../../utils/pages";

import "./styles/visualizations.css";

function Articles() {
  const articles = getArticles();

  const createGrid = () => {
    return articles.map((v) => (
      <div key={v.name} className="article-grid__item">
        <Link
          to={v.url}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          <img src={v.thumbnail} alt={v.name}></img>
          <h6>{v.name}</h6>
          <p>{v.desc}</p>
        </Link>
      </div>
    ));
  };
  return (
    <div className="home-viz" style={{ marginBottom: "150px" }}>
      <h2>Articles</h2>
      <h3>
        Explore the data and gain insights into a particular topic by reading
        one of the visual essay articles.
      </h3>
      <div className="viz-grid__container">{createGrid()}</div>
    </div>
  );
}

export default Articles;
