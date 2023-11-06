import React from "react";
import "../styles/Threading.css";
import threading from "../assets/threading.png";

const threadingServices = [
  { service: "Eyebrow ", price: "Rs.200" },
  { service: "Upper Lip", price: "Rs.50" },
  { service: "Forehead", price: "Rs.50" },
  { service: "Chin", price: "Rs.50 upwards" },
  { service: "Full Face", price: "Rs.500" },

];

const Threading = () => {
  return (
    <div>
     <div className="container" style={{ backgroundImage: `url(${threading})` }}>
     <h1>Threading Services</h1>
     </div>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {threadingServices.map((item, index) => (
            <tr key={index}>
              <td>{item.service}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Threading;
