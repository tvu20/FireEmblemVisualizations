import React from "react";

import "./description.css";

import { DESC } from "../../utils/descriptions";

function Description(props) {
  const { tag } = props;
  console.log(tag);
  return (
    <div class="description__container">
      {props.children}
      <div class="description__hover-box">
        <h3>{DESC[tag].name}</h3>
        <p>{DESC[tag].description}</p>
        <i></i>
      </div>
    </div>
  );
}

export default Description;
