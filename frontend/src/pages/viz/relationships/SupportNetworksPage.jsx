import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import SupportsFE6 from "../../../visualizations/relationships/supports/SupportsFE6";

import getColor from "../../../utils/colors";

import "./relationships.css";

function SupportNetworksPage() {
  return (
    <VizWrapper color={getColor("relationships")} navColor={"white"}>
      <div className="support-networks">
        <h1>Support Networks</h1>
        <p>Some description here.</p>
        <SupportsFE6 />
      </div>
    </VizWrapper>
  );
}

export default SupportNetworksPage;
