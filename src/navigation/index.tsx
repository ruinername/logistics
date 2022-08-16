import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "../features/header/Header";
import UI from "./UI";

function AppNavigation() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={null} />
        <Route path="about" element={null} />
        <Route path="ui" element={<UI />} />
      </Routes>
    </>
);
}

export default AppNavigation;
