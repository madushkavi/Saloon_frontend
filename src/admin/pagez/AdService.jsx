import React, { useState, useEffect } from "react";
import AdminSidebar from "../AdminSidebar";
import { useNavigate } from "react-router-dom";
import "../../styles/adminmain.css";

import { Logout } from "@mui/icons-material";

import axios from "axios";

const AdService = () => {
  const [showServiceTable, setShowServiceTable] = useState(false);
  const [adminName, setAdminName] = useState('');

  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    serviceType: "",
    serviceName: "",
    serviceDescription: "",
    serviceImage: null,
    price: "",
  });
const [editServiceId, setEditServiceId] = useState(null); 
const [isEditMode, setIsEditMode] = useState(false); 

  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      navigate("/login");
    }
  };
  const handleEditService = (id) => {
    const serviceToEdit = services.find((service) => service.id === id);
    if (serviceToEdit) {
      setEditServiceId(id);
      setFormData({
        serviceType: serviceToEdit.serviceType,
        serviceName: serviceToEdit.serviceName,
        
        price: serviceToEdit.price,
      });
      setShowServiceTable(false);
      setIsEditMode(true); 
    }
  };
  const handleCancelEdit = () => {
    setEditServiceId(null);
    setShowServiceTable(true);
    setIsEditMode(false);
    setFormData({
      serviceType: "",
      serviceName: "",
      
      price: "",
    });
  };

  const handleDelService = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/servicesdel/${id}`)
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin/adservice");
          alert("successfully delete.");
          window.location.reload(); 
        } else {
          alert("Delete fail. Please try again.");
        }
  
      })
      .catch((error) => {
        console.error("Delete Error:", error);
      });
  };

  const handleManageServices = () => {
    setShowServiceTable(!showServiceTable);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/adminview") 
      .then((response) => {
        setAdminName(response.data.name);
      })
      .catch((error) => {
        console.error(error);
      });

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append("serviceType", formData.serviceType);
    dataToSend.append("serviceName", formData.serviceName);
    dataToSend.append("price", formData.price);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API_URL}/api/services`,
        dataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        navigate("/services");
      } else {
        alert("Service addition failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the service.");
    }
  };
  const handleUpdateService = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/servicesedit/${editServiceId}`, formData);
      setEditServiceId(null);
      setShowServiceTable(true);
      setIsEditMode(false); 
      setFormData({
        serviceType: "",
        serviceName: "",
        serviceDescription: "",
        price: "",
      });
    } catch (error) {
      console.error("Edit Error:", error);
    }
  };


  return (
    <div className="main">
      <div className="leftside">
        <AdminSidebar />
      </div>
      <div className="middle">
        <div className="edit">
          {showServiceTable ? (
            <button type="button" onClick={handleManageServices}>
              Add Service
            </button>
          ) : (
            <button type="button" onClick={handleManageServices}>
              Manage Services
            </button>
          )}
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : showServiceTable ? (
          <div className="input_take">
            <h2>Manage Service</h2>
            <table>
              <thead>
                <tr>
                  <th>Service Type</th>
                  <th>Service Name</th>
          
                  <th>Price</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index}>
                    <td>{service.serviceType}</td>
                    <td>{service.serviceName}</td>
        
                    <td>{service.price}</td>
                    <td>
                      <button onClick={() => handleEditService(service.id)}>
                        Edit
                      </button>
                      <span className="space" />
                      <button className="warn" onClick={() => handleDelService(service.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )  : isEditMode ? (  
          <form onSubmit={handleUpdateService} encType="multipart/form-data">
            <h2>Edit Service</h2>
            <div className="input_take">
              <label htmlFor="serviceType">Service Type:</label>
              <input
                type="text"
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
              />
            </div>
            <div className="input_take">
              <label htmlFor="serviceName">Service Name:</label>
              <input
                type="text"
                id="serviceName"
                name="serviceName"
                value={formData.serviceName}
                onChange={handleInputChange}
              />
            </div>
           
            
            <div className="input_take">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
              </div>
            <button type="button" onClick={handleCancelEdit}>
              Cancel
            </button>
            <button type="submit">Update Service</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h2>Add Service</h2>
            
            <div className="input_take">
              <label htmlFor="serviceType">Service Type:</label>
              <input
                type="text"
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
              />
            </div>
            <div className="input_take">
              <label htmlFor="serviceName">Service Name:</label>
              <input
                type="text"
                id="serviceName"
                name="serviceName"
                value={formData.serviceName}
                onChange={handleInputChange}
              />
            </div>
           
            
            <div className="input_take">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Add Service</button>
          </form>
        )}
      </div>
       <div className="rightside">
        <div className="text">
           {adminName}
        </div>
        Welcome.!!
        <div className="motivational-sentence">
          <p>Stay motivated and keep serving your clients!</p>
        </div>
        <div className="password-reset">Reset Password</div>
        <div className="logout" onClick={handleLogout}>
          <Logout />
          Logout
        </div>
      </div>
    </div>
  );
};

export default AdService;
