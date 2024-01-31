import React, { useEffect } from "react";

function GenderLineCounts() {
  useEffect(() => {
    fetch("/api/gender/line-counts", {
      method: "GET",
      mode: "cors",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div style={{ height: "100vh" }}>Gender Line Count Viz</div>;
}

export default GenderLineCounts;
