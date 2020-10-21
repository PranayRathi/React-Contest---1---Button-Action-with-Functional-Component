import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  function onChange() {
    return (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy.
      </p>
    );
  }
  return (
    <div id="main">
      <button id="click" onChange={() => onChange()}>
        click
      </button>
    </div>
  );
}

export default App;
