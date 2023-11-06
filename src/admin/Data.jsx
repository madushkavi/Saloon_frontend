import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";

import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


import React from "react";
export const SidebarData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    path: "/admin",
  },
  {
    title: "Services",
    icon: <SettingsSuggestIcon />,
    path: "/admin/adservice",
  },
  {
    title: "Appointment",
    icon: <EventAvailableIcon />,
    path: "/admin/adappointment",
  },
  
  {
    title: "Customer List",
    icon: <GroupsIcon />,
    path: "/admin/customer_list",
  },

  {
    title: "calender",
    icon: <CalendarMonthIcon />,
    path: "/admin/adcalender",
  },

  
];



