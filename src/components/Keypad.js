import React, { Fragment } from "react";

function Keypad({ setKeys }) {
  function handleButton(e) {
    let val = e.target.value;
    let nonplot = e.target.classList.contains("nonplot");
    let data = {
      value: val,
      nonplot: nonplot
    };
    setKeys(data);
  }

  return (
    <Fragment>
      <ul className="buttons disable-select">
        <button
          onClick={handleButton}
          className="key-oper button nonplot"
          id="clear"
          value="clear"
        >
          clear
          <br />
          current
        </button>
        <button
          onClick={handleButton}
          className="key-oper button symbol"
          id="lh"
          value="("
        >
          (
        </button>
        <button
          onClick={handleButton}
          className="key-oper button symbol"
          id="rh"
          value=")"
        >
          )
        </button>
        <button
          onClick={handleButton}
          className="key-oper button symbol"
          id="power"
          value="^"
        >
          ^
        </button>
        <button
          onClick={handleButton}
          className="key-oper button symbol"
          id="divide"
          value="/"
        >
          ÷
        </button>
        <button
          onClick={handleButton}
          className="key-oper button nonplot"
          id="clear-history"
          value="clear-history"
        >
          clear
          <br />
          history
        </button>
        <button
          onClick={handleButton}
          className="key-num button"
          id="n7"
          value="7"
        >
          7
        </button>
        <button
          onClick={handleButton}
          className="key-num button"
          id="n8"
          value="8"
        >
          8
        </button>
        <button
          onClick={handleButton}
          className="key-num button"
          id="n9"
          value="9"
        >
          9
        </button>
        <button
          onClick={handleButton}
          className="key-oper button symbol"
          id="multiply"
          value="*"
        >
          ×
        </button>
        <button
          onClick={handleButton}
          className="key-oper button nonplot"
          id="del"
          value="del"
        >
          delete
        </button>
        <button
          onClick={handleButton}
          className="key-num button"
          id="n4"
          value="4"
        >
          4
        </button>
        <button
          onClick={handleButton}
          className="key-num button"
          id="n5"
          value="5"
        >
          5
        </button>
        <button
          onClick={handleButton}
          className="key-num button"
          id="n6"
          value="6"
        >
          6
        </button>
        <button
          onClick={handleButton}
          className="key-oper button symbol"
          id="add"
          value="+"
        >
          +
        </button>
        <button
          onClick={handleButton}
          className="key-oper button"
          id="pi"
          value="pi"
        >
          Pi
        </button>
        <button
          onClick={handleButton}
          className="key-num button"
          id="n1"
          value="1"
        >
          1
        </button>
        <button
          onClick={handleButton}
          className="key-num button"
          id="n2"
          value="2"
        >
          2
        </button>
        <button
          onClick={handleButton}
          className="key-num button"
          id="n3"
          value="3"
        >
          3
        </button>
        <button
          onClick={handleButton}
          className="key-oper button symbol"
          id="subtract"
          value="-"
        >
          -
        </button>
        <button
          onClick={handleButton}
          className="key-oper button "
          id="mod"
          value="%"
        >
          mod
        </button>
        <button
          onClick={handleButton}
          className="key-num button"
          id="n0"
          value="0"
        >
          0
        </button>
        <button
          onClick={handleButton}
          className="key-oper button symbol"
          id="dot"
          value="."
        >
          .
        </button>
        <button
          onClick={handleButton}
          className="key-oper button nonplot"
          id="last-ans"
          value="last-ans"
        >
          last
          <br />
          ans
        </button>
        <button
          onClick={handleButton}
          className="key-oper button nonplot symbol"
          id="equals"
          value="equals"
        >
          =
        </button>
      </ul>
    </Fragment>
  );
}

export default Keypad;
