import React, { useState, useEffect } from "react";
import AdminSidebar from "../AdminSidebar";
import { useNavigate } from "react-router-dom";
import "../../styles/adminmain.css";

import { Logout } from "@mui/icons-material";
import axios from "axios";

export default function Appointment() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [adminName, setAdminName] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showUpcomingAppointments, setShowUpcomingAppointments] = useState(true);

  const handleAccept = (appointment) => {
    axios
      .put(`http://127.0.0.1:8000/api/appointments/${appointment.id}/accept`)
      .then((response) => {
        alert("Appointment accepted", response);
        window.location.reload();
      })
      .catch((error) => {
        alert("Error: ", error);
      });
  };

  const handleReject = (appointment) => {
    axios
      .put(`http://127.0.0.1:8000/api/appointments/${appointment.id}/reject`)
      .then((response) => {
        alert("Appointment rejected", response);
        window.location.reload(); 
      })
      .catch((error) => {
        alert("Error: ", error);
      });
  };

  const handleLogout = () => {
    navigate("/login");
    alert("Are you sure you want to logout?");
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
      .get("http://127.0.0.1:8000/api/appointments")
      .then((response) => {
        setAppointments(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const handleToggleAppointments = () => {
    setShowUpcomingAppointments(!showUpcomingAppointments);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="main">
      <div className="leftside">
        <AdminSidebar />
      </div>
      <div className="middle">
        <div className="edit">
          {showUpcomingAppointments ? (
            <button type="button" onClick={handleToggleAppointments}>
              Appointment History
            </button>
          ) : (
            <button type="button" onClick={handleToggleAppointments}>
             Upcoming Appointments
            </button>
          )}
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : showUpcomingAppointments ? (
          <div>
            <h2>Upcoming Appointments</h2>
            <table>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>Appointment Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {appointments
                  .filter((appointment) => appointment.date >= today)
                  .map((appointment, index) => (
                    <tr key={index}>
                      <td>{appointment.name}</td>
                      <td>{appointment.address}</td>
                      <td>{appointment.phone_number}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.reason}</td>
                      <td>{appointment.status}</td>
                      <td>
                        <button onClick={() => handleAccept(appointment)}>
                          Accept
                        </button>
                        <button
                          className="warn"
                          onClick={() => handleReject(appointment)}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h2>Appointment History</h2>
            <table>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>Appointment Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments
                  .filter((appointment) => appointment.date < today)
                  .map((appointment, index) => (
                    <tr key={index}>
                      <td>{appointment.name}</td>
                      <td>{appointment.address}</td>
                      <td>{appointment.phone_number}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.reason}</td>
                      <td>{appointment.status}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
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
