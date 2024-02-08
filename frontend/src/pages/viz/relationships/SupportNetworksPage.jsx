import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import SupportsFE16 from "../../../visualizations/relationships/supports/SupportsFE16";

import getColor from "../../../utils/colors";

import "./relationships.css";

function SupportNetworksPage() {
  return (
    <VizWrapper color={getColor("relationships")} navColor={"white"}>
      <div className="support-networks">
        <h1>Support Networks</h1>
        <p>Some description here.</p>
        <SupportsFE16 />
      </div>
    </VizWrapper>
  );
}

export default SupportNetworksPage;
