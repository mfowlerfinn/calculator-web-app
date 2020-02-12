import React, { componentDidMount, useContext, useState, useEffect, useRef, Fragment, Provider } from "react";
// import { Data } from "./Data";
import { createContext } from "react";

// export const Formula = createContext(null);
// const { formula, setFormula } = useContext(Formula);

const regex = /[a-z]/i;

let thisFormula = "test";
let isMounted = false;

const Input = () => {
  const { formula, setFormula } = useContext();  
  // let [ formula, setFormula ] = useState("tesss");

  function runExpression() {
    console.log("running expression");
    //   currentExpression.match(regex) ? (ans = "no letters please") : (ans = eval(currentExpression));
    //   console.log(ans);
    //   history.push(currentExpression);
    //   history.push(ans);
    //   currentExpression = "";
    //   updateHistory();
    //   updateDisplay();
  }

  if (!isMounted) {
    window.addEventListener("keydown", handleKey);
    isMounted = true;
  }


function handleKey(e) {
  let key = e.key;
  console.log(key);
  console.log(formula);
  let newFormula = formula.concat('', key);
  setFormula(5);
  console.log(formula);
  if (e.keyCode === 8) {
    e.preventDefault();
    backSpace();
  }
  if (key === "/") {
    e.preventDefault();
  }
  //   setOperation(operation + String.raw`${key}`);
  //   if (key.match(/[0-9]|[()+/*%^.-]/)) {
  //     if (key.match(/[+/%*-]/)) currentExpression += " " + key + " ";
  //     else {
  //       if (key.match(/[(]/)) key = lhPar();
  //       if (key.match(/[/^]/)) key = "**";
  //       currentExpression += key;
  //     }
  //     // updateDisplay();
  //   }
  if (key === "Enter") runExpression();
}

function backSpace() {
  //let newStr = currentExpression.slice(0, currentExpression.length - 1);
  //   currentExpression = newStr;
  //   updateDisplay();
}

function handleNumber(e, props) {
  let input = e.currentTarget.value;
  //console.log(input);
  this.props.setOperation((this.props.operation += input));
}

function handleOperation(e) {
  let input = "";
  if (e.currentTarget.classList.contains("nonplot")) {
    if (e.currentTarget.id === "equals") runExpression();
    // if (e.currentTarget.id === "clear") currentExpression = "";
    // if (e.currentTarget.id === "clear-history") {
    //   history = [];
    //   updateHistory();
    // }
    // if (e.currentTarget.id === "last-ans") currentExpression += ans;
    // if (e.currentTarget.id === "del") backSpace();
  } else {
    
    // if (e.currentTarget.id === "dot") input = ".";
    // if (e.currentTarget.id === "multiply") input = " * ";
    // if (e.currentTarget.id === "divide") input = " / ";
    // if (e.currentTarget.id === "add") input = " + ";
    // if (e.currentTarget.id === "subtract") input = " - ";
    // if (e.currentTarget.id === "power") input = "**";
    // // if (e.currentTarget.id === "lh") input = lhPar();
    // if (e.currentTarget.id === "rh") input += ")";
    // if (e.currentTarget.id === "pi") input += "3.1415";
    // if (e.currentTarget.id === "mod") input += " % ";
    // // currentExpression += input;
  }
  //   updateDisplay();
}


  return (
    <div>empty</div>
  );
}



// operButtons.forEach(button => button.addEventListener("click", handleOperation));
// numButtons.forEach(button => button.addEventListener("click", handleNumber));

export default Input;
