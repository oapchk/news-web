import "./App.scss";
import Hellobar from "./components/HelloBar/Hellobar";
import Login from "./components/Login/Login";
import Profile from "./components/ProfilePage/Profile";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./layouts/Footer/Footer";
import Main from "./layouts/Main/Main";
import Navbar from "./layouts/Navbar/Navbar";
import Wishlist from "./layouts/Wishlist/Wishlist";
import Trending from "./layouts/Trending/Trending";
import "./sass/variables.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <Router>
            <Hellobar />
            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
            <Footer />
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
