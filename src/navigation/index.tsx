import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "../features/header/Header";
import UI from "./UI";
import SignIn from "./SignIn";
import DashboardNavigation from "./dashboard";

function AppNavigation() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={null} />
        <Route path="about" element={null} />
        <Route path="ui" element={<UI />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="dashboard/*" element={<DashboardNavigation />} />
      </Routes>
    </>
);
}

export default AppNavigation;
