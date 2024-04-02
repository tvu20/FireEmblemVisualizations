import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "./Menu";

import "./navbar.css";

function NavBar(props) {
  //   const { pathname } = useLocation();
  const [showLinks, setShowLinks] = useState(false);
  // const pages = ["", "about"];

  // const createLinks = () => {
  //   return pages.map((p) => (
  //     <Link
  //       to={`/${p}`}
  //       key={p}
  //       onClick={() => {
  //         window.scroll(0, 0);
  //       }}
  //     >
  //       {p === "" ? "home" : p}
  //     </Link>
  //   ));
  // };

  const mobileMenu = () => {
    return (
      <>
        <Link
          to="/"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          <h4
            className={showLinks ? "hide" : ""}
            style={{
              zIndex: 3,
              color: props.navColor ? props.navColor : "white",
            }}
          >
            Giao Vu Dinh | <b>Princeton University</b>
          </h4>
        </Link>
        {/* <input
          id="burger"
          type="checkbox"
          className="checkboxInput"
          checked={showLinks}
          onChange={() => setShowLinks((prevState) => !prevState)}
        /> */}
        {/* <label htmlFor="burger">
          <span></span>
          <span></span>
          <span></span>
        </label> */}
      </>
    );
  };

  return (
    <>
      <Menu display={showLinks} closeWindow={() => setShowLinks(false)} />
      <nav
        className={`navbar ${showLinks ? "hide" : ""}`}
        style={{
          background: `linear-gradient(
            180deg,
            rgba(${props.color?.r}, ${props.color?.g}, ${props.color?.b}, 1) 0%,
            rgba(${props.color?.r}, ${props.color?.g}, ${props.color?.b}, 0.9) 45%,
              rgba(0, 212, 255, 0) 100%
          )`,
        }}
      >
        {mobileMenu()}
      </nav>
      <input
        id="burger"
        type="checkbox"
        className="checkboxInput"
        checked={showLinks}
        onChange={() => setShowLinks((prevState) => !prevState)}
      />
      <label htmlFor="burger">
        <span
          style={{
            background: props.navColor && !showLinks ? props.navColor : "",
          }}
        ></span>
        <span
          style={{
            background: props.navColor && !showLinks ? props.navColor : "",
          }}
        ></span>
        <span
          style={{
            background: props.navColor && !showLinks ? props.navColor : "",
          }}
        ></span>
      </label>
      {/* <Menu display={showLinks} /> */}
      {/* {linksMenu()} */}
    </>
  );
}

export default NavBar;
