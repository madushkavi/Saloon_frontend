import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Services.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menuTop">
        <h1 className="menuTitle">Our Services</h1>
      </div>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
