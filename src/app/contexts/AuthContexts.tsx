// authContext.ts
"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { IUser } from "../interfaces/User";

interface AuthContextType {
  user: IUser | null;
  login: (userData: IUser) => void;
  logout: () => void;
  isAuthenticated: () => boolean; // Add isAuthenticated function
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = React.useState<IUser | null>(null);

  const login = (userData: IUser | any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = () => {
    return !!user;
  };

  const contextValue = {
    user,
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
