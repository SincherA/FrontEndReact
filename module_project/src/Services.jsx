import "./Services.css"; // Updated CSS file path
import pizzaContact from "./pizzaContact.jpg";

const Services = () => {
  return (
    <div className='services'>
      <div className='aboutTop' style={{ backgroundImage: `url(${pizzaContact})` }} ></div>
      <h1>Our Services</h1>
      <div className='service'>
        <h2>Catering</h2>
        <p>
          Elevate your event with our exquisite catering services. From corporate gatherings to intimate celebrations, our culinary experts will craft a menu that delights your guests. Experience the perfect blend of authentic Italian flavors and impeccable service that will leave a lasting impression.
        </p>
      </div>
      <div className='service'>
        <h2>Private Parties</h2>
        <p>
          Host your private party with us and create unforgettable memories. Our dedicated event coordinators will assist you in planning every detail, ensuring a seamless and enjoyable experience. Whether it's a birthday, anniversary, or any special occasion, our charming venue and delectable offerings are sure to make your event a success.
        </p>
      </div>
    </div>
  );
};

export default Services;
