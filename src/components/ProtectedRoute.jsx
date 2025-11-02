import React from "react";
import { Navigate } from "react-router-dom";   // <-- This line is crucial
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
