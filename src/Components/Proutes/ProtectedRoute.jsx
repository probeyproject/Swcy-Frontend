import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./../../AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/signin"  />;
  }
  else{
    return children;
  }

 
};

export default ProtectedRoute;
