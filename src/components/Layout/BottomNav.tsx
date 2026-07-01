import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

export default function BottomNav() {
  const navigate = useNavigate();
  return (
    <nav className="bottom-nav">
        <button className="bnav-item active" onClick={() => navigate('/dashboard')}><i className="fa fa-home"></i> خانه</button>
        <button className="bnav-item" onClick={() => navigate('/profile-hub')}><i className="fa fa-user"></i> پروفایل</button>
        <button className="bnav-item" onClick={() => navigate('/registration')}><i className="fa fa-edit"></i> ثبت‌نام</button>
        <button className="bnav-item" onClick={() => navigate('/financial-hub')}><i className="fa fa-credit-card"></i> مالی</button>
        <button className="bnav-item" onClick={() => navigate('/specialized-hub')}><i className="fa fa-building"></i> تخصصی</button>
    </nav>
  );
}
