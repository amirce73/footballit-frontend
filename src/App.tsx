import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Topbar from './components/Layout/Topbar';
import Sidebar from './components/Layout/Sidebar';
import BottomNav from './components/Layout/BottomNav';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

import Login from './pages/Login';

import ClubDashboard from './pages/club/Dashboard';
import ClubProfileHub from './pages/club/ProfileHub';
import ClubFinancialHub from './pages/club/FinancialHub';
import ClubSpecializedHub from './pages/club/SpecializedHub';
import ClubRegistration from './pages/club/Registration';
import ClubStore from './pages/club/Store';
import ClubGallery from './pages/club/Gallery';
import ClubFinancialTimeline from './pages/club/FinancialTimeline';
import ClubVerification from './pages/club/Verification';
import ClubRegistrationHistory from './pages/club/RegistrationHistory';
import ClubPersonalInfo from './pages/club/PersonalInfo';
import ClubContactInfo from './pages/club/ContactInfo';
import ClubPassportInfo from './pages/club/PassportInfo';
import ClubBankInfo from './pages/club/BankInfo';
import ClubSportsInfo from './pages/club/SportsInfo';
import ClubClubInfo from './pages/club/ClubInfo';
import ClubClothingInfo from './pages/club/ClothingInfo';
import ClubDocuments from './pages/club/Documents';
import ClubPassword from './pages/club/Password';
import ClubAttendance from './pages/club/Attendance';
import ClubTalent from './pages/club/Talent';
import ClubInsurance from './pages/club/Insurance';
import ClubInsuranceStatus from './pages/club/InsuranceStatus';
import ClubCertificate from './pages/club/Certificate';
import ClubBulletin from './pages/club/Bulletin';
import ClubTrainingBackpack from './pages/club/TrainingBackpack';

export default function App() {
  React.useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
        // Scroll element into view with an offset so the sticky button doesn't cover it
        setTimeout(() => {
          const target = e.target as HTMLElement;
          const rect = target.getBoundingClientRect();
          const viewHeight = window.innerHeight;
          // If the input is near the bottom (where the sticky button is), scroll it up
          if (rect.bottom > viewHeight - 120) {
            window.scrollBy({ top: rect.bottom - (viewHeight - 120), behavior: 'smooth' });
          }
        }, 300);
      }
    };
    // Use capture phase to catch focus events since they don't bubble
    window.addEventListener('focus', handleFocus, true);
    return () => window.removeEventListener('focus', handleFocus, true);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Topbar />
      <Sidebar />
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ClubDashboard />} />
          <Route path="/profile-hub" element={<ClubProfileHub />} />
          <Route path="/financial-hub" element={<ClubFinancialHub />} />
          <Route path="/specialized-hub" element={<ClubSpecializedHub />} />
          <Route path="/registration" element={<ClubRegistration />} />
          <Route path="/store" element={<ClubStore />} />
          <Route path="/gallery" element={<ClubGallery />} />
          <Route path="/training-backpack" element={<ClubTrainingBackpack />} />
          <Route path="/financial-timeline" element={<ClubFinancialTimeline />} />
          <Route path="/verification" element={<ClubVerification />} />
          <Route path="/registration-history" element={<ClubRegistrationHistory />} />
          <Route path="/personal-info" element={<ClubPersonalInfo />} />
          <Route path="/contact-info" element={<ClubContactInfo />} />
          <Route path="/passport-info" element={<ClubPassportInfo />} />
          <Route path="/bank-info" element={<ClubBankInfo />} />
          <Route path="/sports-info" element={<ClubSportsInfo />} />
          <Route path="/club-info" element={<ClubClubInfo />} />
          <Route path="/clothing-info" element={<ClubClothingInfo />} />
          <Route path="/documents" element={<ClubDocuments />} />
          <Route path="/password" element={<ClubPassword />} />
          <Route path="/attendance" element={<ClubAttendance />} />
          <Route path="/talent" element={<ClubTalent />} />
          <Route path="/insurance" element={<ClubInsurance />} />
          <Route path="/insurance-status" element={<ClubInsuranceStatus />} />
          <Route path="/certificate" element={<ClubCertificate />} />
          <Route path="/bulletin" element={<ClubBulletin />} />
        </Routes>
      </main>
      <BottomNav />
    </BrowserRouter>
  );
}
