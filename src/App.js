import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
