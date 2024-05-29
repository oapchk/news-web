import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import "./Signup.scss";
const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { theme } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signup(name, email, password);
      const user = userCredential.user;
      console.log(user);
      navigate("/register");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error code:", errorCode, "Error message:", errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`signup`} data-theme={theme}>
        <div className="signup__main">
          <div className="signup-dialog__details">
            <h2 className=""> Welcome to Frontend.NEWS! </h2>
          </div>
          <div className="signup-dialog__form">
            <form className="signup-form" onSubmit={onSubmit}>
              <div className="signup-form__input">
                <div className="signup-form-row username">
                  <label htmlFor="name"></label>
                  <input
                    type="name"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="signup-form-row email">
                  <label htmlFor="email-address"></label>
                  <input
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your Email"
                  />
                </div>

                <div className="signup-form-row password">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                  />
                </div>
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="signup-form-row--button">
                <button
                  className="signup-button btn"
                  type="submit"
                  // onClick={onSubmit}
                  disabled={loading}
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </button>
              </div>
            </form>
            <div className="signup__bottom">
              <p>
                Already have an account?
                <NavLink className="signup-bottom--text" to="/login">
                  Sign in
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
