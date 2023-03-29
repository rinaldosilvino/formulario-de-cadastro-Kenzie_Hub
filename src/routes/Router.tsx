import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register/index"
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import React from "react";

export const Router = () => {
    return (
    <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
    </Routes>
    );
};