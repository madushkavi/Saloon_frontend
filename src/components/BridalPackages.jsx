import React from "react";
import { Link } from "react-router-dom";
import "../styles/Threading.css";
import bride from "../assets/bride.jpg";

const removeSpaces = (str) => {
  return str.replace(/\s+/g, '');
};

const bridalservices = [
  { service: "Bronze", price: "Rs.60,000" },
  { service: "Silver", price: "Rs.75,000" },
  { service: "Gold", price: "Rs.100,000" },
  { service: "Diamond", price: "Rs.125,000" },
  { service: "Platinum", price: "Rs.150,000" },
  { service: "VIP Packages", price: "Rs.200,000" },
  { service: "VVIP Packages", price: "Rs.250,000" },
];

const BridalPackages = () => {
  return (
    <div>
      <div className="container" style={{ backgroundImage: `url(${bride})` }}>
        <h1>Bridal Services</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {bridalservices.map((item, index) => (
            <tr key={index}>
              <td>
                <Link to={`/${removeSpaces(item.service)}`}>
                  {item.service}
                </Link>
              </td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BridalPackages;
