import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

export default function Topbar() {
    const navigate = useNavigate();
    return (
        <nav className="top-navbar">
            <div className="navbar-container">
                {/*  Header Profile & Dropdown  */}
                <div className="header-profile" onClick={(e) => { e.stopPropagation(); document.getElementById('profileMenu')?.classList.toggle('show'); }}>
                    <div className="header-profile-avatar">
                        <img src="src/images/messi-profile.jpg" alt="user" onError={(e) => { e.currentTarget.src = ''; }} />
                    </div>
                    <div>
                        <div className="header-profile-info">
                            <span className="name">محمدرضا قربانی</span>
                            <span className="meta"><i className="fa fa-calendar-check-o" style={{ "marginLeft": "4px" }}></i>عضویت:
                                ۱۴۰۰/۰۹/۱۷</span>
                        </div>
                    </div>
                    <i className="fa fa-angle-down" style={{ "color": "var(--text-muted)", "marginRight": "4px", "fontSize": "1.1rem" }}></i>

                    <div id="profileMenu" className="profile-menu">
                        <div style={{ "padding": "16px", "borderBottom": "1px solid var(--border)", "background": "#f8fafc" }}>
                            <div style={{ "display": "flex", "flexDirection": "row" }}>
                                <div style={{ "fontWeight": "800", "color": "var(--text-dark)", "marginBottom": "12px", "fontSize": "1.05rem", "textAlign": "center", "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
                                    محمدرضا قربانی</div>
                                <div style={{ "marginRight": "auto", "marginBottom": "12px", "display": "flex", "justifyContent": "center" }} onClick={() => navigate('/verification')}>
                                    <span style={{ "borderColor": "#334155" }} className="badge-verify unverified"><i className="fa fa-exclamation-circle"></i>استعلام هویت نشده</span>
                                </div>
                            </div>
                            <div style={{ "display": "flex", "justifyContent": "space-between", "fontSize": "0.8rem", "color": "var(--text-muted)", "marginBottom": "6px" }}>
                                <span>کد ملی:</span> <strong>۱۲۳۴۵۶۷۸۹۰</strong></div>
                            <div style={{ "display": "flex", "justifyContent": "space-between", "fontSize": "0.8rem", "color": "var(--text-muted)", "marginBottom": "6px" }}>
                                <span>تاریخ تولد:</span> <strong>۱۳۷۵/۰۵/۱۲</strong></div>
                            <div style={{ "display": "flex", "justifyContent": "space-between", "fontSize": "0.8rem", "color": "var(--text-muted)", "marginBottom": "6px" }}>
                                <span>سن:</span> <strong>۳۰ سال</strong></div>
                            <div style={{ "display": "flex", "justifyContent": "space-between", "fontSize": "0.8rem", "color": "var(--text-muted)" }}>
                                <span>رده سنی:</span> <strong>بزرگسالان</strong></div>
                        </div>

                        <a href="#" style={{ "color": "#334155" }} onClick={() => navigate('/verification')}><i className="fa fa-shield"></i>
                            تایید هویت و مدارک</a>
                        <a href="#" style={{ "color": "var(--danger)", "padding": "12px 16px" }}><i className="fa fa-sign-out"></i> خروج از
                            حساب</a>
                    </div>
                </div>

                <div className="header-actions">
                    {/*  Bulletin / Notifications Button  */}
                    <button className="btn-noti" title="اعلان‌ها" onClick={() => navigate('/bulletin')}>
                        <i className="fa fa-bell-o"></i>
                        <span className="badge">۳</span>
                    </button>
                    <a href="#" className="btn-app-header" title="دانلود اپلیکیشن">
                        <i className="fa fa-android"></i> <span>دانلود اپ</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
