import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar";
import { useNavigate } from "react-router-dom";
import "../../styles/adminmain.css";

import { Logout } from "@mui/icons-material";
import Calendar from "react-calendar";
import axios from "axios";

export default function Calenderview() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [adminName, setAdminName] = useState('');

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    alert('Are you sure you want to logout?');
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
        const acceptedAppointments = response.data.filter(
          (appointment) => appointment.status === "accept"
        );
        setAppointments(acceptedAppointments);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="main">
      <div className="leftside">
        <AdminSidebar />
      </div>
      <div className="middle">
        <div className="calendar">
          <h2>Calendar Updates</h2>
          <Calendar
            value={new Date()}
            tileContent={({ date }) => {
              const matchingAppointments = appointments.filter((appointment) => {
                const appointmentDate = new Date(appointment.date);
                return (
                  appointmentDate.getDate() === date.getDate() &&
                  appointmentDate.getMonth() === date.getMonth() &&
                  appointmentDate.getFullYear() === date.getFullYear()
                );
              });

              if (matchingAppointments.length > 0) {
                return (
                  <div className="accepted-appointment">
                    {matchingAppointments.map((appointment, index) => (
                      <div key={index}>
                         ${appointment.name},
                         ${appointment.phone_number},
                         ${appointment.reason}
                      </div>
                    ))}
                  </div>
                );
              }
            }}
          />
        </div>
        <div></div>
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
