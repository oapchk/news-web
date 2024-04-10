import "./Navbar.scss";
import Searchbar from "../../components/Searchbar/Searchbar";
import { FaRegUser, FaRegSun, FaRegMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import Tooltip from "../../components/Tooltip/Tooltip";
// import { useEffect } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const toggleMode = () => {
    toggleTheme();
  };
  return (
    <nav className={`navbar_container`} data-theme={theme}>
      <div className="navbar__logo">
        <a href="" className="logo">
          Frontend.NEWS
        </a>
      </div>
      <Searchbar />
      <div className="navbar__buttons">
        <div className="navbar_user">
          <button className="navbar__item">
            <Tooltip text={"Sign In"} className="signin-tooltip">
              <FaRegUser />
            </Tooltip>
          </button>
        </div>
        <div className="navbar_mode">
          <button className="navbar__item" onClick={toggleMode}>
            <Tooltip text={"Change theme"} className="mode-tooltip">
              {theme === "light" ? <FaRegSun /> : <FaRegMoon />}
            </Tooltip>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
