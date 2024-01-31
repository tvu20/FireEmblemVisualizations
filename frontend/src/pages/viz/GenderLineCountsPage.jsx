import React from "react";

import VizWrapper from "../../components/visualizations/VizWrapper";
import GenderLineCounts from "../../visualizations/gender-line-counts/GenderLineCounts";

function GenderLineCountsPage() {
  return (
    <div>
      <VizWrapper color={{ r: 0, g: 0, b: 0 }}>
        <GenderLineCounts />
      </VizWrapper>
    </div>
  );
}

export default GenderLineCountsPage;
