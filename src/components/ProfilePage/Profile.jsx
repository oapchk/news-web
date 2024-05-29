import { useNavigate } from "react-router-dom";
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
        <h2>Welcome, {currentUser.email}</h2>
        <div className="form-row--button">
          <button className="login-button btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
