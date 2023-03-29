import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import React from "react";

export const ProtectedRoutes = () => {
    const { userData, loading } = useContext(AuthContext);

    if (loading) {
        return (
        <>
            <h3>Carregando...</h3>
        </>
        );
    }

return userData ? <Outlet /> : <Navigate to="/" replace />;
};