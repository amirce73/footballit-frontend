import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import api from "../api";

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  nationalCode?: string;
  birthDate?: string;
  mobileNumber?: string;
  parentMobile?: string;
  landlinePhone?: string;
  homeAddress?: string;
  mainPosition?: string;
  dominantFoot?: string;
  nationalTeamExperience?: string;
  currentClass?: string;
  currentTerm?: string;
  createdAt?: string;
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (newToken: string) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }
    try {
      const res = await api.get('/users/me');
      setUser(res.data);
    } catch (err) {
      console.error(err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const login = async (newToken: string) => {
    localStorage.setItem('token', newToken);
    await fetchUser();
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const refreshUser = async () => {
    await fetchUser();
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
