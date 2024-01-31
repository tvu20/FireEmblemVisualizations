import React from "react";

import NavBar from "../navigation/NavBar";
import Footer from "../navigation/Footer";

function VizWrapper(props) {
  return (
    <div className="viz-details">
      <NavBar color={props.color} />
      {props.children}
      <Footer />
    </div>
  );
}

export default VizWrapper;
