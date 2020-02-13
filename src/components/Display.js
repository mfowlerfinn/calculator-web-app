import React, { useState, useEffect } from "react";
import History from "./History";
import CurrentEquation from "./CurrentEquation";

const message = "Calc v1.0";

const historyReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      let history = [];
      return history;
    default:
      let newHistory = [...state, action];
      return newHistory;
  }
};

function Display({ keys, run, setRun }) {
  const [history, setHistory] = React.useReducer(historyReducer, [
    { message: message }
  ]);
  const [fractions, setFractions] = useState(true);

  const handleToggle = () => {
    let val = !fractions;
    setFractions(val);
  };

  useEffect(() => {
    const historyDiv = document.getElementById("history");
    historyDiv.scrollTop = historyDiv.scrollHeight;
  }, [history]);

  return (
    <div className="display">
      <button id="fraction-decimal-toggle" onClick={handleToggle}>
        {fractions ? "Fraction mode" : "Decimal mode"}
      </button>
      <History history={history} fractions={fractions} />
      <CurrentEquation
        keys={keys}
        run={run}
        setRun={setRun}
        setHistory={setHistory}
        history={history}
      />
    </div>
  );
}

export default Display;
