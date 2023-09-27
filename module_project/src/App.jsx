import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import "./Footer.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />

        </Routes>

       <Footer /> 

      </Router>
    </div>
  );
}

export default App;
