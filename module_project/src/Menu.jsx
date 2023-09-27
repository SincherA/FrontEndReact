import { MenuList } from "./MenuList"
import MenuItems from "./MenuItems";
import "./MenuStyle.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle"> Our Menu </h1>
      <div className="menuList">
        {MenuList.map((MenuItem, key) => {
          return (
            <MenuItems
              key={key}
              image={MenuItem.image}
              name={MenuItem.name}
              price={MenuItem.price}
            />
          );
        })}

      </div>
    </div>
  )
}

export default Menu