import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Logout } from "@mui/icons-material";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

import "../styles/adminmain.css";
import img from "../assets/bg_2.png";

export default function Adminmain() {
  const navigate = useNavigate();
  const [monthlyData, setMonthlyData] = useState([]);
  const [monthlyLabels, setMonthlyLabels] = useState([]);
  const [monthlyAppointments, setMonthlyAppointments] = useState(0);

  const handleLogout = () => {
    navigate("/login");
    alert("Are you sure you want to logout?");
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/appointments")
      .then((response) => {
        const acceptedAppointments = response.data.filter(
          (appointment) => appointment.status === "accept"
        );

        const monthStartDate = new Date();
        monthStartDate.setDate(1);

        const monthlyCounts = Array(12).fill(0);
        const monthLabels = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        acceptedAppointments.forEach((appointment) => {
          const appointmentDate = new Date(appointment.date);
          const monthIndex = appointmentDate.getMonth();
          monthlyCounts[monthIndex]++;
        });

        setMonthlyData(monthlyCounts);
        setMonthlyLabels(monthLabels);

        const currentMonth = monthStartDate.getMonth();
        const totalMonthlyAppointments = monthlyCounts[currentMonth];
        setMonthlyAppointments(totalMonthlyAppointments);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const data = {
    labels: monthlyLabels,
    datasets: [
      {
        label: "Monthly Appointments",
        data: monthlyData,
        backgroundColor: "rgba(16, 50, 70, 0.8)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        type: "category",
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="main">
      <div className="leftside">
        <AdminSidebar />
      </div>
      <div className="middle">
        <div>
          <h2>Appointments</h2>
          <p>Total Appointments in the Current Month: {monthlyAppointments}</p>
          <Bar data={data} options={options} />
        </div>
      </div>

      <div className="rightside">
        <div className="admin-image">
          <img
            src={img}
            alt="Admin"
            style={{ width: "4.5rem", height: "4.5rem" }}
          />
        </div>
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
