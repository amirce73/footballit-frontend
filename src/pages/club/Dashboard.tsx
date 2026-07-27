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
                                    <div style={{ "fontSize": "0.75rem", "marginTop": "4px", "marginBottom": "12px", "opacity": 1, "color": "rgb(113 113 122 / var(--tw-text-opacity, 1))" }}>
                                        کلاس آموزشی
                                        <br />
                                        <span style={{ fontWeight: 'bold', color: '#000', marginTop: '4px', display: 'inline-block' }}>پست: هافبک | شماره: ۱۰</span>
                                    </div>

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

                    {/* Matches Card */}
                    <div className="card matches-card" style={{ flex: 1, padding: '16px', margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <div className="section-title" style={{ marginTop: 0, fontSize: '0.95rem', marginBottom: '16px', color: 'var(--text-dark)', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                اطلاعات مسابقات
                            </div>
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#fef08a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fa fa-play" style={{ color: '#eab308', fontSize: '0.6rem', marginLeft: '2px' }}></i>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', flex: 1, alignContent: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 4px', borderRadius: '12px', border: '1px solid #f8fafc', background: '#f8fafc' }}>
                                <i className="fa fa-star" style={{ color: '#10b981', fontSize: '0.9rem', marginBottom: '6px' }}></i>
                                <span style={{ color: '#10b981', fontSize: '1.05rem', fontWeight: '900', marginBottom: '2px' }}>۱۰</span>
                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '600' }}>فیکس</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 4px', borderRadius: '12px', border: '1px solid #f8fafc', background: '#f8fafc' }}>
                                <i className="fa fa-exchange" style={{ color: '#eab308', fontSize: '0.9rem', marginBottom: '6px' }}></i>
                                <span style={{ color: '#eab308', fontSize: '1.05rem', fontWeight: '900', marginBottom: '2px' }}>۴</span>
                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '600' }}>ذخیره</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 4px', borderRadius: '12px', border: '1px solid #f8fafc', background: '#f8fafc' }}>
                                <i className="fa fa-bed" style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '6px' }}></i>
                                <span style={{ color: '#ef4444', fontSize: '1.05rem', fontWeight: '900', marginBottom: '2px' }}>۱</span>
                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '600' }}>هتلی</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 4px', borderRadius: '12px', border: '1px solid #f8fafc', background: '#f8fafc' }}>
                                <i className="fa fa-clock-o" style={{ color: '#3b82f6', fontSize: '0.9rem', marginBottom: '6px' }}></i>
                                <span style={{ color: '#3b82f6', fontSize: '1.05rem', fontWeight: '900', marginBottom: '2px' }}>۸۵۰</span>
                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '600' }}>دقایق بازی</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 4px', borderRadius: '12px', border: '1px solid #f8fafc', background: '#f8fafc', cursor: 'pointer' }} onClick={() => navigate('/attendance')}>
                                <i className="fa fa-calendar-check-o" style={{ color: '#8b5cf6', fontSize: '0.9rem', marginBottom: '6px' }}></i>
                                <span style={{ color: '#8b5cf6', fontSize: '1.05rem', fontWeight: '900', marginBottom: '2px' }}>۱۴</span>
                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '600' }}>حضور</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 4px', borderRadius: '12px', border: '1px solid #f8fafc', background: '#f8fafc', cursor: 'pointer' }} onClick={() => navigate('/sports-info')}>
                                <i className="fa fa-clone" style={{ color: '#f97316', fontSize: '0.9rem', marginBottom: '6px' }}></i>
                                <span style={{ color: '#f97316', fontSize: '0.95rem', fontWeight: '900', direction: 'ltr', marginBottom: '2px' }}>0 / 2</span>
                                <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: '600', textAlign: 'center' }}>کارت (ز/ق)</span>
                            </div>
                        </div>
                    </div>

                    {/* Left Cards Container */}
                    <div className="left-cards-container">
                        {/* BMI Card */}
                        <div className="card bmi-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 0, padding: '16px' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 'bold' }}>شاخص BMI</div>
                            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-dark)' }}>۲۲.۵</div>
                            <div style={{ fontSize: '0.7rem', padding: '2px 12px', borderRadius: '12px', background: '#dcfce7', color: '#166534', marginTop: '6px', fontWeight: 'bold' }}>نرمال</div>
                        </div>

                        {/* Debt Card */}
                        <div className="debt-card status-clear" style={{ flex: 1, margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '12px', gap: '12px' }}>
                            <div className="debt-info-wrap" style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center' }}>
                                <div className="debt-icon" style={{ flexShrink: 0, width: '32px', height: '32px', fontSize: '1rem' }}><i className="fa fa-check"></i></div>
                                <div className="debt-info" style={{ overflow: 'hidden' }}>
                                    <span className="label" style={{ fontSize: '0.65rem', whiteSpace: 'nowrap' }}>وضعیت مالی حساب</span>
                                    <span className="amount" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap' }}>بدون بدهی</span>
                                </div>
                            </div>
                            <button className="btn-credit" title="افزایش اعتبار" style={{ alignSelf: 'center', width: 'fit-content', padding: '6px 20px', fontSize: '0.75rem' }}><i className="fa fa-plus"></i> شارژ</button>
                        </div>
                    </div>
                </div>

                <div className="stats-container-block">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon ic-blue"><AgeIcon width="24" height="24" /></div>
                            <div className="stat-info"><span className="stat-label">رده سنی</span><span className="stat-val">بزرگسالان</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-red-card"><i className="fa fa-medkit"></i></div>
                            <div className="stat-info"><span className="stat-label">مصدومیت</span><span className="stat-val">۰</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-matches"><i className="fa fa-play-circle"></i></div>
                            <div className="stat-info"><span className="stat-label">مسابقات</span><span className="stat-val">۱۴ (۸۵٪)</span></div>
                        </div>
                        <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/attendance')}>
                            <div className="stat-icon ic-green"><i className="fa fa-calendar-check-o"></i></div>
                            <div className="stat-info"><span className="stat-label">حضور در تمرینات</span><span className="stat-val">۱۴/۲۰ (۷۰٪)</span></div>
                        </div>
                        <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/sports-info')}>
                            <div className="stat-icon"><div style={{ width: '16px', height: '24px', backgroundColor: '#eab308', borderRadius: '4px' }}></div></div>
                            <div className="stat-info"><span className="stat-label">کارت زرد</span><span className="stat-val">۲</span></div>
                        </div>
                        <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/sports-info')}>
                            <div className="stat-icon"><div style={{ width: '16px', height: '24px', backgroundColor: '#ef4444', borderRadius: '4px' }}></div></div>
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
                        <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/insurance-status')}>
                            <div className="stat-icon ic-orange"><InsuranceIcon width="24" height="24" /></div>
                            <div className="stat-info"><span className="stat-label">اعتبار بیمه</span><span className="stat-val">—</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-purple"><i className="fa fa-futbol-o"></i></div>
                            <div className="stat-info"><span className="stat-label">گل زده</span><span className="stat-val">۵</span></div>
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
