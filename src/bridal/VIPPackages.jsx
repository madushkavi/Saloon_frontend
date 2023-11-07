import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Bridal.css"; 

const VIPPackages = () => {
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

  const vippServices = services.filter((service) => {
    const secondWord = service.serviceType.split(' ')[1];
    return secondWord === 'VIP';
  });

  return (
    <div className="bridal-container">
      <h1>VIP Package</h1>
      <div className="bridal-items">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            
              {vippServices.map((service) => (
                <div className="bridal-item" key={service.id}>
                  {service.serviceName}
                </div>
              ))}
           
          </div>
        )}
      </div>
    </div>
  );
}

export default VIPPackages;
