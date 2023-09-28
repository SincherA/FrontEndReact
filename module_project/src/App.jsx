import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import "./Footer.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />

        </Routes>

       <Footer /> 

      </Router>
    </div>
  );
}

export default App;
