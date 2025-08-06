import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const BlockIfLoggedIn = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/services" replace />;
  }

  return children;
};

export default BlockIfLoggedIn;
