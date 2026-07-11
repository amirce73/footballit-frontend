import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AgeIcon, AttendanceIcon, InsuranceIcon, TalentIcon } from '../../components/icons';
import sepahanLogo from '../../images/logo/Sepahan_New_Logo.svg';
import ClubDetailsModal from '../../components/ClubDetailsModal';

export default function Dashboard() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div id="view-dashboard" className="view-section fade-in">
            <ClubDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="dashboard-grid">
                <div className="dashboard-top-row">
                    {/* Club Intro Block */}
                    <div className="profile-card club-intro-card">
                        <div className="profile-club-row club-intro-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', width: '100%' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div className="club-logo-wrapper">
                                    <div className="club-logo club-logo-interactive">
                                        <img src={sepahanLogo} alt="logo" onError={(e) => { e.currentTarget.src = ''; }} />
                                    </div>
                                    <a href="tel:09123456789" className="club-phone-number-btn dir-ltr">
                                        <i className="fa fa-phone"></i> 09123456789
                                    </a>
                                </div>
                                <div className="club-info" style={{ marginRight: '18px', marginLeft: 0 }}>
                                    <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: 'black' }}>باشگاه فوتبال</h3>
                                    <div className="term-pill">ترم تابستان ۱۴۰۵</div>
                                    <div style={{ "fontSize": "0.75rem", "marginTop": "4px", "marginBottom": "12px", "opacity": 1, "color": "rgb(113 113 122 / var(--tw-text-opacity, 1))" }}>کلاس آموزشی</div>

                                    <button className="beautiful-modal-btn" onClick={() => setIsModalOpen(true)}>
                                        اطلاعات باشگاه
                                    </button>
                                </div>
                            </div>

                            <div className="social-column">
                                <a href="#" className="social-btn" title="تلگرام"><i style={{ "color": "deepskyblue" }} className="fa fa-paper-plane"></i></a>
                                <a href="#" className="social-btn" title="اینستاگرام"><i style={{ "color": "red" }} className="fa fa-instagram"></i></a>
                                <a href="#" className="social-btn" title="واتساپ"><i style={{ "color": "lawngreen" }} className="fa fa-whatsapp"></i></a>
                                <a href="#" className="social-btn" title="وب‌سایت"><i style={{ "color": "orange" }} className="fa fa-globe"></i></a>
                            </div>
                        </div>
                        <div className="profile-actions-box">
                            <div className="action-row" style={{ "marginBottom": "6px" }}>
                                <span className="action-label"><i className="fa fa-exclamation-triangle" style={{ "color": "#fde047", "fontSize": "1rem" }}></i> اطلاعات شما تکمیل نیست (۳۲٪)</span>
                                <button className="btn-mini" onClick={(e) => { e.stopPropagation(); navigate('/profile-hub'); }}>تکمیل اطلاعات</button>
                            </div>
                            <div className="progress-bar-wrap">
                                <div className="progress-fill" style={{ "width": "32%" }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Debt Card */}
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
                            <div className="stat-icon ic-purple"><i className="fa fa-futbol-o"></i></div>
                            <div className="stat-info"><span className="stat-label">گل زده</span><span className="stat-val">۵</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-matches"><i className="fa fa-play-circle"></i></div>
                            <div className="stat-info"><span className="stat-label">مسابقات</span><span className="stat-val">۱۴ (۸۵٪)</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-green"><i className="fa fa-calendar-check-o"></i></div>
                            <div className="stat-info"><span className="stat-label">حضور در تمرینات</span><span className="stat-val">۲۰ (۸۵٪)</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-yellow-card"><i className="fa fa-times-rectangle"></i></div>
                            <div className="stat-info"><span className="stat-label">کارت زرد</span><span className="stat-val">۲</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-red-card"><i className="fa fa-times-rectangle"></i></div>
                            <div className="stat-info"><span className="stat-label">کارت قرمز</span><span className="stat-val">۰</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-orange"><i className="fa fa-ban"></i></div>
                            <div className="stat-info"><span className="stat-label">تعداد محرومیت</span><span className="stat-val">۰</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-blue"><i className="fa fa-clock-o"></i></div>
                            <div className="stat-info"><span className="stat-label">دقایق بازی</span><span className="stat-val">۸۵۰</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 media-group-wrapper">
                    <div className="dash-action-grid">
                        <div className="dash-action-card card-store" onClick={() => navigate('/store')}>
                            <i className="fa fa-shopping-cart"></i>
                            <h4>فروشگاه</h4>
                        </div>
                        <div className="dash-action-card card-gallery" onClick={() => navigate('/gallery')}>
                            <i className="fa fa-picture-o"></i>
                            <h4>گالری</h4>
                        </div>
                        {/* Training Backpack (Laptop only) */}
                        <div className="dash-action-card card-backpack" onClick={() => navigate('/training-backpack')}>
                            <i className="fa fa-briefcase"></i>
                            <h4>ویدیو</h4>
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
