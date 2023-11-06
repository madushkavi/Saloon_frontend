import React from "react";
import  {HomeList}  from "../helpers/HomeList";
import HomeService from "../components/HomeService";
import "../styles/Home.css";

function HomeItem() {
  return (
    <div className="menu">
      <div className="menuTop">
        <h1 className="menuTitle">Our Services</h1>
      </div>
      <div className="menuList">
        {HomeList.map((HomeService, key) => {
          return (
            <HomeService
              key={key}
              image={HomeService.image}
              name={HomeService.name}
             
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeItem;
