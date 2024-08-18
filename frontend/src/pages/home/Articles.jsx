import React from "react";
import { Link } from "react-router-dom";

import { getArticles } from "../../utils/pages";

// import "./styles/visualizations.css";
import "./styles/articles.css";

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

  const createRows = () => {
    return articles.map((v) => (
      <Link
        to={v.url}
        onClick={() => {
          window.scroll(0, 0);
        }}
        className="article__item"
      >
        <img src={v.thumbnail} alt={v.name}></img>
        <div className="article__info">
          <h6>{v.longname}</h6>
          <p>{v.longdesc}</p>
        </div>
      </Link>
    ));
  };

  return (
    <div
      className="home-viz"
      style={{ marginBottom: "150px", color: "#0b0a12" }}
    >
      <h2>Articles</h2>
      <h3>
        Explore the data and gain insights into a particular topic by reading a
        visual essay article.
      </h3>
      {/* <div className="viz-grid__container">{createGrid()}</div> */}
      <div className="article__container">{createRows()}</div>
    </div>
  );
}

export default Articles;
