import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../src/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.scss";

import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { theme } = useTheme();
  const onLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/profile");
    } catch (error) {
      setError(error.message);
      console.log(error.code, error.message);
    }
  };

  return (
    <>
      <div className={`login`} data-theme={theme}>
        <div className="login__main">
          <div className="login-dialog__details">
            <div className="login-dialog__header">
              <h2 className="">Login</h2>
              <p className="">
                Welcome back! Please log in to access your account.
              </p>
            </div>
          </div>
          <div className="login-dialog__form">
            <form className="login-form">
              <div className="login-form__input">
                <div className="form-row username">
                  <label htmlFor="email-address"></label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-row password">
                  <label htmlFor="password"></label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Enter your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {error && <p className="error-message">{error}</p>}

              <div className="login-form__footer">
                <div className="form-row--button">
                  <button className="login-button btn" onClick={onLogin}>
                    Login
                  </button>
                </div>
                <div className="form-row--text">
                  <a>Forgot password?</a>
                </div>
              </div>
            </form>
            <div className="login__bottom">
              No account yet?
              <NavLink className="login-bottom--text" to="/register">
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
