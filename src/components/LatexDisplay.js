import React from "react";
import katex from "katex";
import ReactHtmlParser from "react-html-parser";

const LatexDisplay = ({ text }) => {
  var html_string = katex.renderToString(text, {
    throwOnError: false,
    displayMode: true,
    output: "mathml"
  });
  return <>{ReactHtmlParser(html_string)}</>;
};

export default LatexDisplay;
