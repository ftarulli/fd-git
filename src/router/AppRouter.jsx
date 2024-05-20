import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import { AdminPage } from "../components/AdminPage";
// import { LoginPage } from "../components/LoginPage";
// import { ErrorPage } from "../components/ErrorPage";
// import { RegPage } from "../components/RegPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/admin" element={<AdminPage />} />
        <Route path="/reg" element={<RegPage />} /> */}
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/404" element={<ErrorPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
