import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [isClicked, setisClicked] = useState(false);
  const handleClick = () => {
    const makeIttrue = true;
    setisClicked(makeIttrue);
  };
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        click
      </button>
      {isClicked && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}

export default App;
