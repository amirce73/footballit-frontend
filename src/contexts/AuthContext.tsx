import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import api from "../api";

export interface User {
  firstName?: string;
  lastName?: string;
  nationalId?: string;
  birthDate?: string;
  fatherName?: string;
  gender?: string;
  height?: number;
  weight?: number;
  birthCertificateNo?: string;
  bloodGroup?: string;
  healthStatus?: string;
  maritalStatus?: string;
  militaryServiceStatus?: string;
  religion?: string;
  occupation?: string;
  description?: string;
  contact?: {
    mobile?: string;
    guardianMobile?: string;
    tel?: string;
    address?: string;
    emergencyPhone?: string;
    email?: string;
    telegram?: string;
    instagram?: string;
    linkedIn?: string;
    facebook?: string;
    website?: string;
    parentsWorkAddress?: string;
  };
  passport?: {
    passportNumber?: string;
    issueDate?: string;
    expiryDate?: string;
    englishName?: string;
    englishSurname?: string;
    description?: string;
  };
  sports?: {
    mainPosition?: string;
    preferredFoot?: string;
    hasNationalTeam?: boolean;
    competitionSeason?: string;
    playingAbility?: string;
    sportsInsuranceNumber?: string;
    shirtSize?: string;
    footballShoeSize?: string;
    slipperSize?: string;
    sportsWarmerSize?: string;
    sportsSlogan?: string;
    description?: string;
  };
  club?: {
    clubName?: string;
    shirtNumber?: number;
    ageCategory?: string;
    contractStart?: string;
  };
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
      const res = await api.get('/profile/hub');
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
