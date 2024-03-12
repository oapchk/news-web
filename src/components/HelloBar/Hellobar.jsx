// import { useState, useEffect, useRef } from "react";
import "./HelloBar.scss";

const Hellobar = () => {
  const text = "Get unlimited acces to all of articles for $1/week 📖 ";

  const repeatedText = text.repeat(50);

  return (
    <div className="top-bar">
      <div className="top-bar-text">{repeatedText}</div>
    </div>
  );
};
export default Hellobar;
