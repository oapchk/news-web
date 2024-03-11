import "./Navbar.scss";
import Searchbar from "../../components/Searchbar/Searchbar";
import { FaRegUser, FaRegSun, FaRegMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme("");

  return (
    <div className="navbar_container">
      <div className="navbar__logo">
        <a href="" className="logo">
          Frontend.NEWS
        </a>
      </div>
      <Searchbar />
      {/* <div className="navbar__navigation"> */}
      <div className="navbar_user">
        <a href="" className="navbar__item">
          <FaRegUser />
        </a>
      </div>
      <div className="navbar_mode">
        <a href="" className="navbar__item" onClick={toggleTheme}>
          {isDarkMode ? <FaRegSun /> : <FaRegMoon />}
        </a>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
