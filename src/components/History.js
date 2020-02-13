import React from "react";
import LatexDisplay from "./LatexDisplay";

function History({ history, fractions }) {
  const GetJSX = () => {
    let len = history.length;
    let ans = fractions ? "answerFraction" : "answer";

    return history.map((item, index) => {
      return (
        <div className="line" key={index}>
          {item.message && len === 1 ? item.message : ""}
          <div className="expression">
            {item.latex ? <LatexDisplay text={item.latex} /> : <> </>}
          </div>
          <div className="answer">
            {item[ans] ? <LatexDisplay text={item[ans]} /> : <> </>}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="history" name="history" id="history">
        <GetJSX />
      </div>
    </>
  );
}

export default History;
