import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
useAuth;
import "./Profile.scss";

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  if (!currentUser) {
    navigate("/login");
    return null;
  }

  return (
    <div className="profile">
      <div className="profile__main">
        <div className="">
          <h2>Welcome, {currentUser.email}</h2>
        </div>

        <div className="form-row--button">
          <button className="login-button btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <NavLink className="login-bottom--text" to="/wishlist">
          Go to wishlist
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;
