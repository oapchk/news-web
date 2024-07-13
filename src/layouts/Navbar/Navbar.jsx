import "./Navbar.scss";
import Searchbar from "../../components/Searchbar/Searchbar";
import { FaRegUser, FaRegSun, FaRegMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import Tooltip from "../../components/Tooltip/Tooltip";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleSignup = () => {
    navigate("/register");
  };
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };
  const toggleMode = () => {
    toggleTheme();
  };
  return (
    <nav className={`navbar_container`} data-theme={theme}>
      <div className="navbar__logo">
        <Link href="" className="logo" to="/">
          Frontend.NEWS
        </Link>
      </div>
      <Searchbar />
      <div className="navbar__buttons">
        <div className="navbar_user">
          <button className="navbar__item">
            <Tooltip
              content={
                <div>
                  {currentUser ? (
                    <>
                      <NavLink to="/profile">
                        Welcome, {currentUser.email}
                      </NavLink>
                      <button
                        className="navbar__item--btn btn"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <p>If you are a new customer</p>
                      <button
                        className="navbar__item--btn btn"
                        onClick={handleSignup}
                      >
                        SIGN UP
                      </button>
                      <p>If you already have an account on our website</p>
                      <Link className="navbar__item--signin" to="/login">
                        SIGN IN
                      </Link>
                    </>
                  )}
                </div>
              }
              className="signin-tooltip"
            >
              <FaRegUser />
            </Tooltip>
          </button>
        </div>
        <div className="navbar_mode">
          <button className="navbar__item" onClick={toggleMode}>
            <Tooltip content={"Change theme"} className="mode-tooltip">
              {theme === "light" ? <FaRegSun /> : <FaRegMoon />}
            </Tooltip>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
