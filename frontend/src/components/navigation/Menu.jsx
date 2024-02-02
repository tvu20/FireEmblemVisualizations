import React from "react";

import "./menu.css";

function Menu(props) {
  const { display } = props;

  return <div className={`menu ${!display ? "hide" : ""}`}>links menu!!!!</div>;
}

export default Menu;
