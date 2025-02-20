import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State to track user data and token
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated (on mount)
  useEffect(() => {
    const storedToken = Cookies.get("accessToken");
    const storedUserData = Cookies.get("userData");

    if (storedToken && storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
        setToken(storedToken);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing user data:", error);
        // Clear invalid cookie data
        Cookies.remove("userData");
        Cookies.remove("accessToken");
        setUserData(null);
        setToken(null);
        setIsAuthenticated(false);
      }
    }
  }, []);


  // // Check authentication status on mount
  // useEffect(() => {
  //   checkAuthStatus();
  // }, []);

 // Function to handle login
 const login = (user, token) => {
  // Store user data and token in cookies
  Cookies.set("userData", JSON.stringify(user), { expires: 1, sameSite: "Strict" });
  Cookies.set("accessToken", token, { expires: 1, sameSite: "Strict" });

  setUserData(user);
  setToken(token);
  setIsAuthenticated(true);
};


  // Function to handle logout
  const logout = () => {
    Cookies.remove("userData");
    Cookies.remove("accessToken");

    setUserData(null);
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
