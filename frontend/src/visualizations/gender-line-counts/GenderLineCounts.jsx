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
  return <>Gender Line Count Viz</>;
}

export default GenderLineCounts;
