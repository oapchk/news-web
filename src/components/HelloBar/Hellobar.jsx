// import { useState, useEffect, useRef } from "react";
import "./HelloBar.scss";
import { useTheme } from "../../context/ThemeContext";

const Hellobar = () => {
  const text = "Get unlimited acces to all of articles for $1/week 📖 ";
  const { theme } = useTheme();
  const repeatedText = text.repeat(50);

  return (
    <div className={`top-bar`} data-theme={theme}>
      <div className="top-bar-text">{repeatedText}</div>
    </div>
  );
};
export default Hellobar;
