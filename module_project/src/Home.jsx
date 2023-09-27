import {Link} from "react-router-dom"
import BannerImage from "./pizza.jpeg";
import "./Home.css"



const Home = () => {
  return (
    <div className="home" style= {{backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">
      <h1> LaVita Trattoria & Pizzeria </h1>
      <h3> best pizza in the city </h3>
      <br>
      </br>
      <Link to="menu">
      <button> Order now </button>
      </Link>
    </div>
    </div>
  )
}

export default Home