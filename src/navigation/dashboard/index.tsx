import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useCookies } from "react-cookie";
import Trucks from "./Trucks";
import AddTruck from "./AddTruck";
import EditTruck from "./EditTruck";
import Home from "./Home";
import Truck from "./Truck";

function DashboardNavigation() {
  const [cookies] = useCookies(['current_user']);

  useEffect(() => {
    if (!cookies.current_user) {
      window.location.href = '/sign-in';
    }
  }, [cookies.current_user]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="/add-truck" element={<AddTruck />} />
        <Route path="/edit-truck/:vin" element={<EditTruck />} />
        <Route path="/truck/:vin" element={<Truck />} />
      </Routes>
    </>
  );
}

export default DashboardNavigation;
