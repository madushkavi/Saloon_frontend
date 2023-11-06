import React from "react";
import "../styles/Threading.css";
import nail from "../assets/nail.avif";

const nailServices = [
  { service: "Manicure-Mini", price: "Rs.2500" },
  { service: "Manicure-Normal", price: "Rs.3500" },
  { service: "Manicure-Hi FI", price: "Rs.6000" },
  { service: "Predicure-Mini", price: "Rs.2500" },
  { service: "Predicure-Normal", price: "Rs.4000" },
  { service: "Predicure-Hi FI", price: "Rs.7000" },

];

const NailTreatment = () => {
  return (
    <div>
     <div className="container" style={{ backgroundImage: `url(${nail})` }}>
     <h1>Nail Services</h1>
     </div>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {nailServices.map((item, index) => (
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

export default NailTreatment;
