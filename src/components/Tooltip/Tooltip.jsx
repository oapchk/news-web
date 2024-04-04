import { useState } from "react";
import "./Tooltip.scss";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";

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

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default Tooltip;
