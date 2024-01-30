import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Menu from "./Menu";

import "./navbar.css";

function NavBar(props) {
  //   const { pathname } = useLocation();
  const [showLinks, setShowLinks] = useState(false);
  const pages = ["", "about"];

  const createLinks = () => {
    return pages.map((p) => (
      <Link
        to={`/${p}`}
        key={p}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        {p === "" ? "home" : p}
      </Link>
    ));
  };

  const mobileMenu = () => {
    return (
      <>
        <h4 style={{ zIndex: 3 }}>
          Giao Vu Dinh | <b>Princeton University</b>
        </h4>
        <input
          id="burger"
          type="checkbox"
          className="checkboxInput"
          checked={showLinks}
          onChange={() => setShowLinks((prevState) => !prevState)}
        />
        <label htmlFor="burger">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </>
    );
  };

  const linksMenu = () => {
    return (
      <nav className={`navbar__fullscreen ${!showLinks ? "hide" : ""}`}>
        {createLinks()}
        {/* {showFullscreenMenu && (
          <FadeInSection delay={400}>{createFullscreenLinks()}</FadeInSection>
        )} */}
      </nav>
    );
  };

  return (
    <>
      <nav
        className={
          "navbar"
          //     `navbar-mobile
          //   navbar__background${
          //     pathname === "/" && altHeader ? "--alt" : ""
          //   }`
        }
      >
        {mobileMenu()}
      </nav>
      <Menu display={showLinks} />
      {/* {linksMenu()} */}
    </>
  );
}

export default NavBar;
