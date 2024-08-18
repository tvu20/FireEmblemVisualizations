import React from "react";
import { Link } from "react-router-dom";

import sprites from "../../assets/menu-sprites.png";

import "./menu.css";

function Menu(props) {
  const { display, closeWindow } = props;

  return (
    <div
      // className={`menu`}
      className={`menu ${!display ? "hide" : ""}`}
    >
      <div className="menu__left">
        {/* <div style={{ maxWidth: "700px" }}> */}
        <img src={sprites} alt="sprites running border" />
        <h1>FIRE EMBLEM: Evolution of a Video Game Series</h1>
        <p>
          A collection of visual essays and interactive data visualizations
          examining the intersection between technology, culture, storytelling,
          and video games through the lens of the Fire Emblem series.
        </p>
        <button
          className="menu__button menu__button-outline"
          onClick={closeWindow}
        >
          Return
        </button>
        <Link
          className="menu__button menu__button-solid"
          to="/viz"
          onClick={() => {
            closeWindow();
            window.scroll(0, 0);
          }}
        >
          Visualizations
        </Link>
        {/* </div> */}
      </div>
      <div className="menu__right">
        <Link className="menu__link-large" to="/">
          Home
        </Link>
        <Link className="menu__link-large" to="/about">
          About the project
        </Link>
        <Link className="menu__link-large" to="/what-is-fe">
          What is Fire Emblem?
        </Link>
        <Link className="menu__link-large" to="/credits">
          Credits
        </Link>
        <h2>Articles</h2>
        <div className="menu__link-collection">
          <Link
            to="/article/gender"
            onClick={() => {
              closeWindow();
              window.scroll(0, 0);
            }}
          >
            Gender
          </Link>
          <br />
          <Link
            to="/article/development"
            onClick={() => {
              closeWindow();
              window.scroll(0, 0);
            }}
          >
            Development
          </Link>
          <br />
          <Link
            to="/article/relationships"
            onClick={() => {
              closeWindow();
              window.scroll(0, 0);
            }}
          >
            Relationships
          </Link>
          <br />
          <Link
            to="/article/storytelling"
            onClick={() => {
              closeWindow();
              window.scroll(0, 0);
            }}
          >
            Storytelling
          </Link>
        </div>
        <h2>Related Links</h2>
        <div className="menu__link-collection">
          <a href="https://github.com/tvu20/FireEmblemVisualizations">
            Project Code
          </a>{" "}
          <br />
          <a href="https://github.com/tvu20/FireEmblemTextCorpus">
            Data collection
          </a>
          <br />
          <a href="https://drive.google.com/file/d/1rrZtRCRVQZJ9grFDnioefNDvUXXhA1Ay/view?usp=share_link">
            Writeup
          </a>
        </div>

        {/* <h2>My Profile</h2>
        <div className="menu__link-collection">
          <a href="google.com">Portfolio</a>
          <br />
          <a href="google.com">Github</a>
          <br />
          <a href="google.com">Linkedin</a>
        </div> */}
        <h2>Contact Me</h2>
        <div className="menu__link-collection">
          <a
            style={{ textDecoration: "underline" }}
            href="mailto:tgdinh@alumni.princeton.edu"
          >
            tgdinh@alumni.princeton.edu
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
