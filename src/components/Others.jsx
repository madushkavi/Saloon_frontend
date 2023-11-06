import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Threading.css";
import makeup from "../assets/makeup.avif";

const Others = () => {
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

  const OtherServices = services.filter(
    (service) => service.serviceType === "other"
  );
  return (
    <div>
     <div className="container" style={{ backgroundImage: `url(${makeup})` }}>
     <h1>Other Services</h1>
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
          {OtherServices.map((service) => (
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

export default Others;
