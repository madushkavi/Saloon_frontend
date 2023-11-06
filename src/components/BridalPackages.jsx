import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Threading.css";
import axios from "axios";
import bride from "../assets/bride.jpg";

const removeSpaces = (str) => {
  return str.replace(/\s+/g, '');
};

const BridalPackages = () => {
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
  
    const bridalServices = services.filter((service) => {
      const firstWord = service.serviceType.split(' ')[0];
      return firstWord === 'bridal';
    });
    
  return (
    <div>
      <div className="container" style={{ backgroundImage: `url(${bride})` }}>
        <h1>Bridal Services</h1>
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
          {bridalServices.map((service) => (
            <tr key={service.id}>
              <td>
                <Link to={`/${removeSpaces(service.serviceType.split(' ')[1])}`}>
                {service.serviceType.split(' ')[1]}
                </Link>
              </td>
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

export default BridalPackages;
