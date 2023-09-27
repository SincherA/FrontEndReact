import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Navbar'
import Home from "./Home";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
