import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg_2.png";
import bg_3 from "../assets/bg_3.jpg";
//import HomeItem from "./pages/HomeItem";
//import AppoinmentForm from "./AppoinmentForm";
import "../styles/Home.css";


function Home() {
  return (
    <>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Hana Saloon Fashion </h1>
        <p> FOR WOMEN</p>
        <Link to="/appointment">
          <button> Get an appoinment </button>
        </Link>
      </div>
    </div>

    </>
  
  );
}

export default Home;
