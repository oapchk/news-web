import "./Navbar.scss";
import Searchbar from "../../components/Searchbar/Searchbar";
import { FaRegUser, FaRegSun, FaRegMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useEffect } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const toggleMode = () => {
    toggleTheme();
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <nav className={`navbar_container ${theme}`}>
      <div className="navbar__logo">
        <a href="" className="logo">
          Frontend.NEWS
        </a>
      </div>
      <Searchbar />
      <div className="navbar_user">
        <a href="" className="navbar__item">
          <FaRegUser />
        </a>
      </div>
      <div className="navbar_mode">
        <a href="" className="navbar__item" onClick={toggleMode}>
          {theme === "light" ? <FaRegSun /> : <FaRegMoon />}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
