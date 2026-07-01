import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AgeIcon, AttendanceIcon, InsuranceIcon, TalentIcon } from '../components/icons';

export default function Dashboard() {
    const navigate = useNavigate();
    return (
        <div id="view-dashboard" className="view-section fade-in">
            <div className="dashboard-grid">
                <div className="profile-card col-span-2">
                    <div className="profile-actions-box">
                        <div className="action-row" style={{ "marginBottom": "6px" }}>
                            <span className="action-label"><i className="fa fa-exclamation-triangle" style={{ "color": "#fde047", "fontSize": "1rem" }}></i> اطلاعات شما تکمیل نیست (۳۲٪)</span>
                            <button className="btn-mini" onClick={() => navigate('/profile-hub')}>تکمیل اطلاعات</button>
                        </div>
                        <div className="progress-bar-wrap">
                            <div className="progress-fill" style={{ "width": "32%" }}></div>
                        </div>
                    </div>

                    <div className="profile-club-row">
                        <div className="club-logo">
                            <img src="src/images/logo/Sepahan_New_Logo.svg" alt="logo" onError={(e) => { e.currentTarget.src = ''; }} />
                        </div>
                        <div className="club-info">
                            <h3>استعداد برتر دامغان</h3>
                            <div className="term-pill">ترم تابستان ۱۴۰۵</div>
                            <div style={{ "fontSize": "0.75rem", "color": "rgba(255,255,255,0.8)", "marginTop": "4px" }}>کلاس آموزشی
                            </div>
                            <div className="social-row">
                                <a href="#" className="social-btn" title="تلگرام"><i style={{ "color": "deepskyblue" }} className="fa fa-paper-plane"></i></a>
                                <a href="#" className="social-btn" title="اینستاگرام"><i style={{ "color": "red" }} className="fa fa-instagram"></i></a>
                                <a href="#" className="social-btn" title="واتساپ"><i style={{ "color": "lawngreen" }} className="fa fa-whatsapp"></i></a>
                                <a href="#" className="social-btn" title="وب‌سایت"><i style={{ "color": "orange" }} className="fa fa-globe"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="debt-card status-clear">
                    <div className="debt-info-wrap">
                        <div className="debt-icon"><i className="fa fa-check"></i></div>
                        <div className="debt-info">
                            <span className="label">وضعیت مالی حساب</span>
                            <span className="amount">بدون بدهی</span>
                        </div>
                    </div>
                    <button className="btn-credit" title="افزایش اعتبار"><i className="fa fa-plus"></i> شارژ</button>
                </div>

                <div className="stats-container-block">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon ic-blue"><AgeIcon width="24" height="24" /></div>
                            <div className="stat-info"><span className="stat-label">رده سنی</span><span className="stat-val">بزرگسالان</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-green"><AttendanceIcon width="24" height="24" /></div>
                            <div className="stat-info"><span className="stat-label">حضور تمرین</span><span className="stat-val">۰ از
                                ۰</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-orange"><InsuranceIcon width="24" height="24" /></div>
                            <div className="stat-info"><span className="stat-label">اعتبار بیمه</span><span className="stat-val">—</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-purple"><TalentIcon width="24" height="24" /></div>
                            <div className="stat-info"><span className="stat-label">استعدادیابی</span><span className="stat-val">۰</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 media-group-wrapper">
                    <div className="dash-action-grid">
                        <div className="dash-action-card card-store" onClick={() => navigate('/store')}>
                            <i className="fa fa-shopping-cart"></i>
                            <h4>فروشگاه باشگاه</h4>
                        </div>
                        <div className="dash-action-card card-gallery" onClick={() => navigate('/gallery')}>
                            <i className="fa fa-picture-o"></i>
                            <h4>گالری تصاویر</h4>
                        </div>
                    </div>
                    <div className="card news-card" onClick={() => navigate('/bulletin')} style={{ "cursor": "pointer", "marginBottom": "0px" }}>
                        <div className="news-header">
                            <h4><i className="fa fa-bell-o" style={{ "color": "var(--primary)" }}></i> اطلاعیه و پیام‌ها</h4>
                            <span className="badge-new">۱ پیام جدید</span>
                        </div>
                        <div className="news-body">
                            برای مشاهده همه پیام‌های بولتن خبری کلیک کنید. ثبت‌نام در طرح ترم تابستان ۱۴۰۵ شروع شده
                            است...
                            <span className="news-date">۱۴۰۵/۰۳/۰۱</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
