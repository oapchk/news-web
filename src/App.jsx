import "./App.scss";
import Hellobar from "./components/HelloBar/Hellobar";
import { ThemeProvider } from "./context/ThemeContext";
import Main from "./layouts/Main/Main";
import Navbar from "./layouts/Navbar/Navbar";

function App() {
  return (
    <>
      <ThemeProvider>
        <Hellobar />
        <Navbar />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
