import React, { useState } from "react";
import "./App.css";
import "./calc.css";
import Display from "./components/Display.js";
import Keypad from "./components/Keypad.js";

function App() {
  const [keys, setKeys] = useState("");
  const [run, setRun] = useState(false);

  const handleKey = e => {
    // e.preventDefault();
    let lastKey = e.key;
    if (lastKey.length > 1) {
      switch (lastKey) {
        case "Enter":
          setRun(true);
          break;
        case "Backspace":
          let data = {
            value: "del",
            nonplot: true
          };
          setKeys(data);
          e.preventDefault();
          break;
        default:
          break;
      }
    }
  };

  return (
    <div id="main_focus" tabIndex={-1} onKeyDown={event => handleKey(event)}>
      <Display keys={keys} setKeys={setKeys} run={run} setRun={setRun} />
      <Keypad keys={keys} setKeys={setKeys} />
    </div>
  );
}

export default App;
