import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <a href="https://github.com/Fifla47/react-homework">Github URL</a>
      </div>
    </div>
  );
}
