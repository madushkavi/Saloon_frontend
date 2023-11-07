import React, {useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import DehazeIcon from '@mui/icons-material/Dehaze';
import "../styles/Navbar.css";


function Navbar() {
  const [openLinks,setOpenLinks]=useState(false);
  

  const toggleNavbar=()=> {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" >
      {/*logo*/}
      <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Sal
            <span>oo</span>n
          </span>
        </div>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/services"> Services </Link>
          <Link to="/contact"> Contact </Link>
          
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/services"> Services </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/profile">Profile</Link>
        
        <Link to="/admin"> Admin </Link>
        <Link to="/loginsignup"> Login / Signup </Link>
        <button onClick={toggleNavbar}>
          <DehazeIcon/>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
