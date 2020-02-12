  const displayContainer = document.querySelector(".display");
  const operButtons = document.querySelectorAll(".key-oper");
  const numButtons = document.querySelectorAll(".key-num");
  const currentDisplay = document.querySelector("#expression");
  const historyDisplay = document.querySelector("#history");

  let currentExpression = "";
  let history = [];
  const regex = /[a-z]/i;
  let ans = 0;
  let lastInput = "";

  function updateDisplay() {
    currentDisplay.innerHTML = currentExpression;
    console.log(currentExpression);
  }

  function updateHistory() {
    while (history.length > 16) {
      history.splice(0, 1);
    }
    let hist = "";
    for (let i = 0; i < history.length;) {
      hist += `<li class="line expression">${history[i]}</li>
            <li class="line answer">${history[i + 1]}</li>`;
      i += 2;
    }
    historyDisplay.innerHTML = hist;
    historyDisplay.scrollTop = historyDisplay.scrollHeight;
  }

  function handleNumber(e) {
    let input = e.currentTarget.value;
    //console.log(input);
    currentExpression += input;
    updateDisplay();
  }

  function handleOperation(e) {
    let input = "";
    if (e.currentTarget.classList.contains("nonplot")) {
      if (e.currentTarget.id === "equals") runExpression();
      if (e.currentTarget.id === "clear") currentExpression = "";
      if (e.currentTarget.id === "clear-history") {
        history = [];
        updateHistory();
      }
      if (e.currentTarget.id === "last-ans") currentExpression += ans;
      if (e.currentTarget.id === "del") backSpace();
    } else {
      if (e.currentTarget.id === "dot") input = ".";
      if (e.currentTarget.id === "multiply") input = " * ";
      if (e.currentTarget.id === "divide") input = " / ";
      if (e.currentTarget.id === "add") input = " + ";
      if (e.currentTarget.id === "subtract") input = " - ";
      if (e.currentTarget.id === "power") input = "**";
      if (e.currentTarget.id === "lh") input = lhPar();
      if (e.currentTarget.id === "rh") input += ")";
      if (e.currentTarget.id === "pi") input += "3.1415";
      if (e.currentTarget.id === "mod") input += " % ";
      currentExpression += input;
    }
    updateDisplay();
  }

  function memory(num) {
    console.log(num);
  }

  function lhPar() {
    let exp = "";
    let lastChar = "";
    if (currentExpression.length > 0) {
      exp = currentExpression.trim();
      lastChar = exp[exp.length - 1];
    }
    if (lastChar === ")" || lastChar.match(/[0-9]/)) {
      input = " * (";
    } else {
      input = "(";
    }
    return input;
  }

  function handleKey(e) {
    let key = e.key;
    console.log(key);
    if (e.keyCode === 8) {
      e.preventDefault();
      backSpace();
    }
    if (key === "/") {
      e.preventDefault();
    }
    if (key.match(/[0-9]|[()+/*%^.-]/)) {
      if (key.match(/[+/%*-]/)) currentExpression += " " + key + " ";
      else {
        if (key.match(/[(]/)) key = lhPar();
        if (key.match(/[/^]/)) key = "**";
        currentExpression += key;
      }
      updateDisplay();
    }
    if (key === "Enter") runExpression();
  }

  function backSpace() {
    let newStr = currentExpression.slice(0, currentExpression.length - 1);
    currentExpression = newStr;
    updateDisplay();
  }


  function runExpression() {
    currentExpression.match(regex) ? (ans = "no letters please") : (ans = eval(currentExpression));
    console.log(ans);
    history.push(currentExpression);
    history.push(ans);
    currentExpression = "";
    updateHistory();
    updateDisplay();
  }

  async function registerSW() {
    if ("serviceWorker" in navigator) {
      try {
        await navigator.serviceWorker.register("./service-worker.js");
      } catch (e) {
        // alert("ServiceWorker registration failed. Sorry about that.");
      }
    } else {
      document.querySelector(".alert").removeAttribute("hidden");
    }
  }

  function setScreenSize() {
    let h = window.innerHeight;
    h = h - 312 - 3 - 3 - 3;
    displayContainer.style.height = `${h}px`;
  }

  window.onresize = setScreenSize;

  window.addEventListener("keydown", handleKey);
  operButtons.forEach(button => button.addEventListener("click", handleOperation));
  numButtons.forEach(button => button.addEventListener("click", handleNumber));

  window.addEventListener("load", e => setScreenSize());

  window.addEventListener("load", e => registerSW());