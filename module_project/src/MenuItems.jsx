import PropTypes from 'prop-types';



const MenuItems = ({image, name, price }) => {
  return (
    <div className="menuItem">
      <div style= {{backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price}  </p>
    </div>
  )
}

MenuItems.propTypes = {
  image: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default MenuItems