import pizzaAbout from "./pizzaAbout.jpeg"
import "./About.css";


const About = () => {
  return (
    <div className='about'>

      <div className='aboutTop' style={{ backgroundImage: `url(${pizzaAbout})` }} ></div>

      <div className='aboutBottom'></div>
      <h1> About Us</h1>
      <p>
        Welcome to our Italian Pizza Restaurant!

        At our restaurant, we're passionate about bringing you the authentic taste of Italy. Our dedicated chefs use traditional Italian recipes and the finest locally-sourced ingredients to create mouthwatering pizzas that will transport you to the streets of Napoli.

        With a warm and inviting ambiance, we strive to provide a dining experience that feels just like home. Whether you're here for a casual family dinner or a romantic evening for two, we guarantee a memorable time filled with delicious flavors and exceptional service.
      </p>


    </div>
  )
}

export default About