import React, { createContext, useState, useContext, useEffect } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AuthParam = createContext({
  user: null,
  isAuthenticated: false,
  loading: true,
  register: () => {},
  login: () => {},
  logout: () => {},
  checkAuthStatus: () => {},
});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  //

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const register = async (userCredentials) => {
    try {
      const response = await api.post("/auth/register", userCredentials);
      toast.success("Register Successful !!!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const login = async (userCredentials) => {
    try {
      const response = await api.post("/auth/login", userCredentials);
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      toast.success("loggedIn successfully");
      navigate("/events");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("token");
      setUser(null), setIsAuthenticated(false);
      toast.success("Logout Successfully !!");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  const checkAuthStatus = async () => {
    try {
      setLoading(true);
      const response = await api.get("/auth/isLoggedIn");
      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch (err) {
      toast.error("Please login again !!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthParam.Provider
      value={{
        user,
        register,
        login,
        logout,
        checkAuthStatus,
        isAuthenticated,
        loading,
      }}
    >
      {children}
    </AuthParam.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthParam);
  return context;
}
