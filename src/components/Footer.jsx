import React, { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import "../styles/Footer.css";

function Footer() {
  const [count, setCount] = useState(1);
  const targetCount = 99;

  useEffect(() => {
    let animationFrameId;

    const incrementCount = () => {
      if (count < targetCount) {
        setCount((prevCount) => prevCount + 1);
        animationFrameId = requestAnimationFrame(incrementCount);
      }
    };

    incrementCount();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <div className="footer">
      <div className="footer_left">
        <h3>Contact Us</h3>
        <div className="info">
          {" "}
          <PinDropIcon /> 7/1/D,Indiparape,Mirigama.
        </div>
        <div className="info">
          <PhoneIcon /> +752337142
        </div>
        <div className="info">
          <MailIcon /> jayaniudara1998wa22@gmail.com
        </div>
      </div>
      <div className="footer_right">
        <div className="info_first">
          {count < targetCount ? count : `${targetCount}% `}
        </div>
        <div className="info_second">
          Satisfied customers
        </div>
      </div>

      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p> &copy; 2023 copyrightsaloon.com</p>
    </div>
  );
}

export default Footer;
