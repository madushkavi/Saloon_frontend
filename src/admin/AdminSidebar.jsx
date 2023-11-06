import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SidebarData } from "./Data";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../styles/adminnsidebar.css";
import SearchBar from "../admin/pagez/SearchBar";

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [customer, setCustomer] = useState(null);

  const toggleSearchBar = () => {
    setSearchVisible(!isSearchVisible);
    setCustomer(null);
  };

  const handleSearch = (query) => {
    if (!query) {
      setCustomer(null);
      return;
    }

    fetch(`http://127.0.0.1:8000/api/users/search?query=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCustomer(data);
      })
      .catch((error) => {
        console.error("Error searching for customers:", error);
      });
  };

  return (
    <div>
      <div className="Sidebar">
        <div className="menuIteam" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
          <span>Go Back</span>
        </div>
        <div className="other">
          {SidebarData.map((item, index) => (
            <div
              className={
                location.pathname === item.path
                  ? "menuIteam active"
                  : "menuIteam"
              }
              key={index}
              onClick={() => navigate(item.path)}
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className="menuIteam" onClick={toggleSearchBar}>
          <SearchIcon />
          <span>Search Customer</span>
        </div>
      </div>
      {isSearchVisible && (
        <div>
          <SearchBar
            onClose={toggleSearchBar}
            onSearch={handleSearch}
            customer={customer}
          />
        </div>
      )}
    </div>
  );
};

export default AdminSidebar;
