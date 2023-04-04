import React from "react";
import LoginPage from "../page/LoginPage";
import RegistPage from "../page/RegistPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";

const MyRouters = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRouters;
