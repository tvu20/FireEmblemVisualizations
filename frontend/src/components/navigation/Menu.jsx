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
        <img src={sprites} alt="sprites running border" />
        <h1>FIRE EMBLEM: Evolution of a Video Game Series</h1>
        <p>
          [Brief description of project site] Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
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
          Explore
        </Link>
      </div>
      <div className="menu__right">
        <Link className="menu__link-large" to="/about">
          About the project
        </Link>
        <Link className="menu__link-large" to="/what-is-fe">
          What is Fire Emblem?
        </Link>
        <a
          className="menu__link-large"
          href="https://github.com/tvu20/FireEmblemVisualizations"
        >
          Project Repository
        </a>
        <h2>Related Links</h2>
        <div className="menu__link-collection">
          <a href="google.com">Writeup</a>
          <br />
          <a href="google.com">Data collection</a>
        </div>

        <h2>My Profile</h2>
        <div className="menu__link-collection">
          <a href="google.com">Portfolio</a>
          <br />
          <a href="google.com">Github</a>
          <br />
          <a href="google.com">Linkedin</a>
        </div>
        <h2>Contact Me</h2>
        <div className="menu__link-collection">
          <a style={{ textDecoration: "underline" }} href="google.com">
            tgdinh@princeton.edu
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
