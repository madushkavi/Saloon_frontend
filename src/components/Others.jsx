import React from "react";
import "../styles/Threading.css";
import makeup from "../assets/makeup.avif";

const otherServices = [
  { service: "Normal Saree Ironing", price: "Rs.500" },
  { service: "Bridal Saree Ironing", price: "Rs.1500" },


];

const Others = () => {
  return (
    <div>
     <div className="container" style={{ backgroundImage: `url(${makeup})` }}>
     <h1>Other Services</h1>
     </div>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {otherServices.map((item, index) => (
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

export default Others;
