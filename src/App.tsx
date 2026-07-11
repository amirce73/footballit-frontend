import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Topbar from './components/Layout/Topbar';
import Sidebar from './components/Layout/Sidebar';
import BottomNav from './components/Layout/BottomNav';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

import Login from './pages/Login';
import { useAuth } from './contexts/AuthContext';

import ClubDashboard from './pages/club/Dashboard';
import SchoolDashboard from './pages/school/Dashboard';
import ClubProfileHub from './pages/club/ProfileHub';
import SchoolProfileHub from './pages/school/ProfileHub';
import ClubFinancialHub from './pages/club/FinancialHub';
import SchoolFinancialHub from './pages/school/FinancialHub';
import ClubSpecializedHub from './pages/club/SpecializedHub';
import SchoolSpecializedHub from './pages/school/SpecializedHub';
import ClubRegistration from './pages/club/Registration';
import SchoolRegistration from './pages/school/Registration';
import ClubStore from './pages/club/Store';
import SchoolStore from './pages/school/Store';
import ClubGallery from './pages/club/Gallery';
import SchoolGallery from './pages/school/Gallery';
import ClubFinancialTimeline from './pages/club/FinancialTimeline';
import SchoolFinancialTimeline from './pages/school/FinancialTimeline';
import ClubVerification from './pages/club/Verification';
import SchoolVerification from './pages/school/Verification';
import ClubRegistrationHistory from './pages/club/RegistrationHistory';
import SchoolRegistrationHistory from './pages/school/RegistrationHistory';
import ClubPersonalInfo from './pages/club/PersonalInfo';
import SchoolPersonalInfo from './pages/school/PersonalInfo';
import ClubContactInfo from './pages/club/ContactInfo';
import SchoolContactInfo from './pages/school/ContactInfo';
import ClubPassportInfo from './pages/club/PassportInfo';
import SchoolPassportInfo from './pages/school/PassportInfo';
import ClubBankInfo from './pages/club/BankInfo';
import SchoolBankInfo from './pages/school/BankInfo';
import ClubSportsInfo from './pages/club/SportsInfo';
import SchoolSportsInfo from './pages/school/SportsInfo';
import ClubClubInfo from './pages/club/ClubInfo';
import SchoolClubInfo from './pages/school/ClubInfo';
import ClubClothingInfo from './pages/club/ClothingInfo';
import SchoolClothingInfo from './pages/school/ClothingInfo';
import ClubDocuments from './pages/club/Documents';
import SchoolDocuments from './pages/school/Documents';
import ClubPassword from './pages/club/Password';
import SchoolPassword from './pages/school/Password';
import ClubAttendance from './pages/club/Attendance';
import SchoolAttendance from './pages/school/Attendance';
import ClubTalent from './pages/club/Talent';
import SchoolTalent from './pages/school/Talent';
import ClubInsurance from './pages/club/Insurance';
import SchoolInsurance from './pages/school/Insurance';
import ClubInsuranceStatus from './pages/club/InsuranceStatus';
import SchoolInsuranceStatus from './pages/school/InsuranceStatus';
import ClubCertificate from './pages/club/Certificate';
import SchoolCertificate from './pages/school/Certificate';
import ClubBulletin from './pages/club/Bulletin';
import SchoolBulletin from './pages/school/Bulletin';
import ClubTrainingBackpack from './pages/club/TrainingBackpack';
import SchoolTrainingBackpack from './pages/school/TrainingBackpack';



const PanelRoute = ({ ClubComponent, SchoolComponent }: { ClubComponent: any, SchoolComponent: any }) => {
  const { panelType } = useAuth();
  if (panelType === 'school') return <SchoolComponent />;
  return <ClubComponent />;
};

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
          <Route path="/dashboard" element={<PanelRoute ClubComponent={ClubDashboard} SchoolComponent={SchoolDashboard} />} />
          <Route path="/profile-hub" element={<PanelRoute ClubComponent={ClubProfileHub} SchoolComponent={SchoolProfileHub} />} />
          <Route path="/financial-hub" element={<PanelRoute ClubComponent={ClubFinancialHub} SchoolComponent={SchoolFinancialHub} />} />
          <Route path="/specialized-hub" element={<PanelRoute ClubComponent={ClubSpecializedHub} SchoolComponent={SchoolSpecializedHub} />} />
          <Route path="/registration" element={<PanelRoute ClubComponent={ClubRegistration} SchoolComponent={SchoolRegistration} />} />
          <Route path="/store" element={<PanelRoute ClubComponent={ClubStore} SchoolComponent={SchoolStore} />} />
          <Route path="/gallery" element={<PanelRoute ClubComponent={ClubGallery} SchoolComponent={SchoolGallery} />} />
          <Route path="/training-backpack" element={<PanelRoute ClubComponent={ClubTrainingBackpack} SchoolComponent={SchoolTrainingBackpack} />} />
          <Route path="/financial-timeline" element={<PanelRoute ClubComponent={ClubFinancialTimeline} SchoolComponent={SchoolFinancialTimeline} />} />
          <Route path="/verification" element={<PanelRoute ClubComponent={ClubVerification} SchoolComponent={SchoolVerification} />} />
          <Route path="/registration-history" element={<PanelRoute ClubComponent={ClubRegistrationHistory} SchoolComponent={SchoolRegistrationHistory} />} />
          <Route path="/personal-info" element={<PanelRoute ClubComponent={ClubPersonalInfo} SchoolComponent={SchoolPersonalInfo} />} />
          <Route path="/contact-info" element={<PanelRoute ClubComponent={ClubContactInfo} SchoolComponent={SchoolContactInfo} />} />
          <Route path="/passport-info" element={<PanelRoute ClubComponent={ClubPassportInfo} SchoolComponent={SchoolPassportInfo} />} />
          <Route path="/bank-info" element={<PanelRoute ClubComponent={ClubBankInfo} SchoolComponent={SchoolBankInfo} />} />
          <Route path="/sports-info" element={<PanelRoute ClubComponent={ClubSportsInfo} SchoolComponent={SchoolSportsInfo} />} />
          <Route path="/club-info" element={<PanelRoute ClubComponent={ClubClubInfo} SchoolComponent={SchoolClubInfo} />} />
          <Route path="/clothing-info" element={<PanelRoute ClubComponent={ClubClothingInfo} SchoolComponent={SchoolClothingInfo} />} />
          <Route path="/documents" element={<PanelRoute ClubComponent={ClubDocuments} SchoolComponent={SchoolDocuments} />} />
          <Route path="/password" element={<PanelRoute ClubComponent={ClubPassword} SchoolComponent={SchoolPassword} />} />
          <Route path="/attendance" element={<PanelRoute ClubComponent={ClubAttendance} SchoolComponent={SchoolAttendance} />} />
          <Route path="/talent" element={<PanelRoute ClubComponent={ClubTalent} SchoolComponent={SchoolTalent} />} />
          <Route path="/insurance" element={<PanelRoute ClubComponent={ClubInsurance} SchoolComponent={SchoolInsurance} />} />
          <Route path="/insurance-status" element={<PanelRoute ClubComponent={ClubInsuranceStatus} SchoolComponent={SchoolInsuranceStatus} />} />
          <Route path="/certificate" element={<PanelRoute ClubComponent={ClubCertificate} SchoolComponent={SchoolCertificate} />} />
          <Route path="/bulletin" element={<PanelRoute ClubComponent={ClubBulletin} SchoolComponent={SchoolBulletin} />} />
        </Routes>
      </main>
      <BottomNav />
    </BrowserRouter>
  );
}
