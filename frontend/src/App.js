import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState("");

  const getPrediction = () => {
    setLoading(true);
    setLabel("");

    console.log("running predictor");
    const sentence = text.replaceAll(" ", "%20");
    console.log(sentence);
    fetch(`/api/predict-emotion?sentence=${sentence}`, {
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
        setLoading(false);
        setLabel(data.label);
      });
  };

  useEffect(() => {
    fetch("/api/time", {
      method: "GET",
      mode: "cors",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        ... no changes in this part ...
        <p>The current time is {currentTime}.</p>
        <textarea
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={getPrediction}>Get Prediction</button>
        {!loading && <p>Label: {label}</p>}
        {loading && <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
