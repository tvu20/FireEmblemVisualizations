import React from "react";

import "./menu.css";

function Menu(props) {
  const { display } = props;

  return (
    <div className={display ? "menu-display" : "menu-hide"}>links menu!!!!</div>
  );
}

export default Menu;
