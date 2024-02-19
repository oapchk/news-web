import "./App.scss";
import Hellobar from "./components/HelloBar/Hellobar";
import Main from "./layouts/Main/Main";
import Navbar from "./layouts/Navbar/Navbar";

function App() {
  return (
    <>
      <Hellobar />
      <Navbar />
      <Main />
    </>
  );
}

export default App;
