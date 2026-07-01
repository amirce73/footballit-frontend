import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Topbar from './components/Layout/Topbar';
import Sidebar from './components/Layout/Sidebar';
import BottomNav from './components/Layout/BottomNav';
import './index.css';

import Dashboard from './pages/Dashboard';
import ProfileHub from './pages/ProfileHub';
import FinancialHub from './pages/FinancialHub';
import SpecializedHub from './pages/SpecializedHub';
import Registration from './pages/Registration';
import Store from './pages/Store';
import Gallery from './pages/Gallery';
import FinancialTimeline from './pages/FinancialTimeline';
import Verification from './pages/Verification';
import RegistrationHistory from './pages/RegistrationHistory';
import PersonalInfo from './pages/PersonalInfo';
import ContactInfo from './pages/ContactInfo';
import PassportInfo from './pages/PassportInfo';
import BankInfo from './pages/BankInfo';
import SportsInfo from './pages/SportsInfo';
import ClubInfo from './pages/ClubInfo';
import ClothingInfo from './pages/ClothingInfo';
import Documents from './pages/Documents';
import Password from './pages/Password';
import Attendance from './pages/Attendance';
import Talent from './pages/Talent';
import Insurance from './pages/Insurance';
import InsuranceStatus from './pages/InsuranceStatus';
import Certificate from './pages/Certificate';
import Bulletin from './pages/Bulletin';

export default function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Sidebar />
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile-hub" element={<ProfileHub />} />
          <Route path="/financial-hub" element={<FinancialHub />} />
          <Route path="/specialized-hub" element={<SpecializedHub />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/store" element={<Store />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/financial-timeline" element={<FinancialTimeline />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/registration-history" element={<RegistrationHistory />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/contact-info" element={<ContactInfo />} />
          <Route path="/passport-info" element={<PassportInfo />} />
          <Route path="/bank-info" element={<BankInfo />} />
          <Route path="/sports-info" element={<SportsInfo />} />
          <Route path="/club-info" element={<ClubInfo />} />
          <Route path="/clothing-info" element={<ClothingInfo />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/password" element={<Password />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/insurance-status" element={<InsuranceStatus />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/bulletin" element={<Bulletin />} />
        </Routes>
      </main>
      <BottomNav />
    </BrowserRouter>
  );
}
