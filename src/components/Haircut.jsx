import React, { useState, useEffect } from "react";
import "../styles/Threading.css";
import Loreal from "../assets/Loreal.jpg";
import axios from "axios";

const Haircut = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/servicesview")
      .then((response) => {
        setServices(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const haircutServices = services.filter(
    (service) => service.serviceType === "haircut"
  );

  return (
    <div>
      <div className="containerrr" style={{ backgroundImage: `url(${Loreal})` }}>
        <h1>Haircut Services</h1>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {haircutServices.map((service) => (
                <tr key={service.id}>
                  <td>{service.serviceName}</td>
                  <td>{service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Haircut;
