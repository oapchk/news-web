// import { useState, useEffect, useRef } from "react";
import "./HelloBar.scss";

const Hellobar = () => {
  const text = "Get unlimited acces to all of articles for $1/week 📖 ";

  const repeatedText = text.repeat(20);

  return (
    <div className="top-bar">
      <div className="top-bar-text">{repeatedText}</div>
    </div>
  );
};
export default Hellobar;
