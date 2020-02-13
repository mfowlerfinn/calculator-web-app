import React, { Fragment, useState, useEffect } from "react";
import asciimath2latex from "asciimath-to-latex";
import LatexDisplay from "./LatexDisplay";
import { create, all } from "mathjs";

const math = create(all);

function CurrentEquation({ keys, run, setRun, setHistory, history }) {
  const [latex, setLatex] = useState();
  const [asciiInput, setAsciiInput] = useState("");

  function handleInput(e) {
    let key = e.target.value;
    const regex = /[+*/%^-]/;
    if (asciiInput.length < 1 && regex.test(key)) {
      concatLastAns(key);
    } else {
      setAsciiInput(key);
    }
  }

  function getFraction(num) {
    let result;

    try {
      let wholeNum = Math.trunc(num);
      let Remainder = num - wholeNum;
      if (Remainder !== 0) {
        let obj = math.fraction(Remainder);
        result =
          wholeNum === 0
            ? String.raw`\frac{${obj.n}}{${obj.d}}`
            : String.raw`${wholeNum}\frac{${obj.n}}{${obj.d}}`;
      } else {
        result = wholeNum;
      }
    } catch {
      return null;
    }
    return result;
  }

  function Eval() {
    try {
      if (asciiInput !== "") {
        let ans = String.raw`${math.evaluate(asciiInput)}`;
        let fract = String.raw`${getFraction(ans)}`;
        setAsciiInput("");
        setHistory({
          ascii: asciiInput,
          latex: latex,
          answer: ans,
          answerFraction: fract
        });
      }
    } catch (err) {
      console.error("SYNTAX ERROR, revise input expression.");
    }
  }

  useEffect(() => {
    if (run) {
      Eval();
    }
    setRun(false);
  }, [run]);

  useEffect(() => {
    if (asciiInput) {
      setLatex(asciimath2latex(asciiInput));
    } else {
      setLatex(asciimath2latex(" "));
    }
  }, [asciiInput]);

  const concatLastAns = (addOperator = "") => {
    let index = history.length - 1;
    let ans = history[index].answer;
    let newInput = `${asciiInput}${ans}${addOperator}`;
    if (newInput !== "undefined") setAsciiInput(newInput);
  };

  const backSpace = () => {
    let str = asciiInput;
    let result = str.length > 1 ? str.slice(0, -1) : "";
    setAsciiInput(result);
  };

  useEffect(() => {
    let key = keys.value;
    let nonplot = keys.nonplot;
    if (!nonplot) {
      const regex = /[+*/%^-]/;
      if (asciiInput.length < 1 && regex.test(key)) {
        concatLastAns(key);
      } else {
        let newInput = `${asciiInput}${key}`;
        if (newInput !== "undefined") setAsciiInput(newInput);
      }
    } else {
      switch (key) {
        case "last-ans":
          concatLastAns();
          break;
        case "clear-history":
          setHistory({ type: "CLEAR" });
          break;
        case "clear":
          setAsciiInput("");
          break;
        case "del":
          backSpace();
          break;
        case "equals":
          setRun(true);
          break;
        default:
          break;
      }
    }
  }, [keys]);

  return (
    <Fragment>
      <div id="operatorDisplay">
        <div className="preview">
          {latex ? <LatexDisplay text={latex} /> : <div></div>}
        </div>
        <input
          type="text"
          id="ascii_math_input"
          value={asciiInput}
          name="ascii_math_input"
          onChange={handleInput}
        ></input>
      </div>
    </Fragment>
  );
}

export default CurrentEquation;
