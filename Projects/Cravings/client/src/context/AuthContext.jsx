import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const getStoredUser = () => {
    try {
      const storedUser = sessionStorage.getItem("cravingUser");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse stored user:", error);
      return null;
    }
  };

  const [user, setUser] = useState(getStoredUser);
  const [isLogin, setIsLogin] = useState(!!user);
  const [role, setRole] = useState(user ? user.userType : null);

  useEffect(() => {
    setIsLogin(!!user);
    setRole(user ? user.userType : null);
  }, [user]);

  const value = { user, isLogin, role, setUser, setIsLogin, setRole };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);