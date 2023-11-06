import React, { useState, useEffect } from "react";
import AdminSidebar from "../AdminSidebar";
import { useNavigate } from "react-router-dom";
import "../../styles/adminmain.css";
import axios from "axios";
import { Logout } from "@mui/icons-material";

export default function CustomerDetail() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [adminName, setAdminName] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    navigate("/login");
    alert('Are you sure you want to logout?');
  };

  const removeCustomer = (customerId) => {
    if (window.confirm("Are you sure you want to remove this customer?")) {
      fetch(`http://127.0.0.1:8000/api/users/${customerId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          // Remove the deleted customer from the data state
          setData((prevData) => prevData.filter((item) => item.id !== customerId));
        })
        .catch((err) => {
          setError(err);
        });
    }
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

    fetch("http://127.0.0.1:8000/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="main">
      <div className="leftside">
        <AdminSidebar />
      </div>
      <div className="middle">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Sex</th>
                <th>Remove Customer</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.sex}</td>
                  <td>
                    <button className="warn" onClick={() => removeCustomer(item.id)}>
                      Remove Customer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
}
