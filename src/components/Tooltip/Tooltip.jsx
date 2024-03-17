import { useState } from "react";
import "./Tooltip.scss";
import { useTheme } from "../../context/ThemeContext";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      className={`tooltip-container`}
      data-theme={theme}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;
