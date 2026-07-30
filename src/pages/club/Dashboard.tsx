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
                    <div className="card matches-card new-matches-card" style={{ flex: 1, padding: 0, margin: 0, display: 'flex', flexDirection: 'column', border: 'none', background: 'transparent', boxShadow: 'none' }}>
                        <div className="new-stats-grid">
                            
                            {/* Section 1: Matches Performance */}
                            <div className="stat-section-card matches-perf-card">
                                <div className="section-head">
                                    <div className="section-icon icon-matches"><i className="fa fa-trophy"></i></div>
                                    <span className="section-title-new">عملکرد در مسابقات</span>
                                </div>
                                <div className="section-body">
                                    <div className="donut-wrapper">
                                        <div className="donut-chart" style={{ background: 'conic-gradient(#10b981 0% 58%, #3b82f6 58% 84%, #94a3b8 84% 95%, #f97316 95% 100%)' }}></div>
                                        <div className="donut-legend">
                                            <div className="legend-item">
                                                <div className="legend-title"><span className="legend-dot" style={{ backgroundColor: '#10b981' }}></span> فیکس</div>
                                                <span className="val-bold">۱۱</span>
                                            </div>
                                            <div className="legend-item">
                                                <div className="legend-title"><span className="legend-dot" style={{ backgroundColor: '#3b82f6' }}></span> ذخیره</div>
                                                <span className="val-bold">۵</span>
                                            </div>
                                            <div className="legend-item">
                                                <div className="legend-title"><span className="legend-dot" style={{ backgroundColor: '#94a3b8' }}></span> هتلی</div>
                                                <span className="val-bold">۲</span>
                                            </div>
                                            <div className="legend-item">
                                                <div className="legend-title"><span className="legend-dot" style={{ backgroundColor: '#f97316' }}></span> مصدوم</div>
                                                <span className="val-bold">۱</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Practice Performance (with Halo) */}
                            <div className="stat-section-card practice-halo-card" onClick={() => navigate('/attendance')} style={{ cursor: 'pointer' }}>
                                <div className="section-head">
                                    <div className="section-icon icon-practice"><i className="fa fa-calendar-check-o"></i></div>
                                    <span className="section-title-new">عملکرد در تمرینات</span>
                                </div>
                                <div className="section-body">
                                    <div className="donut-wrapper">
                                        <div className="donut-chart" style={{ background: 'conic-gradient(#10b981 0% 80%, #ef4444 80% 93%, #f97316 93% 100%)' }}></div>
                                        <div className="donut-legend">
                                            <div className="legend-item">
                                                <div className="legend-title"><span className="legend-dot" style={{ backgroundColor: '#10b981' }}></span> حضور</div>
                                                <span className="val-bold">۲۴</span>
                                            </div>
                                            <div className="legend-item">
                                                <div className="legend-title"><span className="legend-dot" style={{ backgroundColor: '#ef4444' }}></span> غیاب</div>
                                                <span className="val-bold">۴</span>
                                            </div>
                                            <div className="legend-item">
                                                <div className="legend-title"><span className="legend-dot" style={{ backgroundColor: '#f97316' }}></span> مصدوم</div>
                                                <span className="val-bold">۲</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Cards */}
                            <div className="stat-section-card cards-stat-card">
                                <div className="section-head">
                                    <div className="section-icon icon-cards"><i className="fa fa-clone"></i></div>
                                    <span className="section-title-new">کارت زرد و قرمز</span>
                                </div>
                                <div className="section-body flex-around">
                                    <div className="card-item yellow-card-item">
                                        <div className="card-shape yellow-shape"></div>
                                        <span className="card-val">۵</span>
                                    </div>
                                    <div className="card-item red-card-item">
                                        <div className="card-shape red-shape"></div>
                                        <span className="card-val">۱</span>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Match Stats */}
                            <div className="stat-section-card general-stats-card">
                                <div className="section-head">
                                    <div className="section-icon icon-stats"><i className="fa fa-line-chart"></i></div>
                                    <span className="section-title-new">آمار بازی</span>
                                </div>
                                <div className="section-body perf-grid-4">
                                    <div className="mini-stat"><span className="mini-lbl">دقایق</span><span className="mini-val text-blue">۷۵'</span></div>
                                    <div className="mini-stat"><span className="mini-lbl">گل</span><span className="mini-val text-green">۱۴</span></div>
                                    <div className="mini-stat"><span className="mini-lbl">پاس گل</span><span className="mini-val text-orange">۷</span></div>
                                    <div className="mini-stat"><span className="mini-lbl">کلین‌شیت</span><span className="mini-val text-purple">۳</span></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> {/* End dashboard-top-row */}

                <div className="dashboard-kpi-grid col-span-3" style={{ marginTop: '16px', marginBottom: '16px' }}>

                    {/* Financial Card (With Debt Logic) - First so it appears on the far right */}
                    {false ? (
                        <>
                            <div className="kpi-desktop-only" style={{ border: '1px solid #fca5a5', background: 'linear-gradient(to left, #fef2f2, #ffffff)', borderRadius: '16px', padding: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <i className="fa fa-exclamation" style={{ color: '#dc2626', fontSize: '1.2rem' }}></i>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>وضعیت مالی</div>
                                        <div style={{ fontSize: '0.95rem', color: '#dc2626', fontWeight: '900', marginTop: '2px' }}>۷,۵۰۰,۰۰۰ بدهی</div>
                                    </div>
                                </div>
                                <button style={{ background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', padding: '6px 12px', fontSize: '0.75rem', fontWeight: 'bold', cursor: 'pointer' }}>
                                    پرداخت
                                </button>
                            </div>
                            <div className="kpi-mobile-only" style={{ border: '1px solid #fca5a5', background: 'linear-gradient(to bottom, #ffffff, #fef2f2)', borderRadius: '16px', padding: '16px', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>وضعیت مالی:</div>
                                        <div style={{ fontSize: '1.1rem', color: '#dc2626', fontWeight: '900' }}>۷,۵۰۰,۰۰۰ بدهی</div>
                                    </div>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fa fa-exclamation" style={{ color: '#dc2626', fontSize: '1.2rem' }}></i>
                                    </div>
                                </div>
                                <button style={{ width: '100%', background: '#ef4444', color: 'white', border: 'none', borderRadius: '12px', padding: '10px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
                                    پرداخت
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="kpi-desktop-only" style={{ border: '1px solid #86efac', background: 'linear-gradient(to left, #f0fdf4, #ffffff)', borderRadius: '16px', padding: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <i className="fa fa-check" style={{ color: '#16a34a', fontSize: '1.2rem' }}></i>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>وضعیت مالی</div>
                                        <div style={{ fontSize: '0.95rem', color: '#16a34a', fontWeight: '900', marginTop: '2px' }}>بدون بدهی</div>
                                    </div>
                                </div>
                                <button style={{ background: '#10b981', color: 'white', border: 'none', borderRadius: '8px', padding: '6px 12px', fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                                    <i className="fa fa-plus"></i> شارژ
                                </button>
                            </div>
                            <div className="kpi-mobile-only" style={{ border: '1px solid #86efac', background: 'linear-gradient(to bottom, #ffffff, #f0fdf4)', borderRadius: '16px', padding: '16px', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>وضعیت مالی:</div>
                                        <div style={{ fontSize: '1.1rem', color: '#16a34a', fontWeight: '900' }}>بدون بدهی</div>
                                    </div>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fa fa-check" style={{ color: '#16a34a', fontSize: '1.2rem' }}></i>
                                    </div>
                                </div>
                                <button style={{ width: '100%', background: '#10b981', color: 'white', border: 'none', borderRadius: '12px', padding: '10px', fontSize: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
                                    <i className="fa fa-plus"></i> شارژ
                                </button>
                            </div>
                        </>
                    )}

                    {/* BMI Card - Second */}
                    <>
                        <div className="kpi-desktop-only" style={{ border: '1px solid #e2e8f0', background: '#ffffff', borderRadius: '16px', padding: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                                        <path d="M4 14a8 8 0 0 1 16 0" stroke="#cbd5e1" strokeWidth="3" />
                                        <path d="M4 14a8 8 0 0 1 2.3-5.7" stroke="#3b82f6" strokeWidth="3" />
                                        <path d="M6.3 8.3a8 8 0 0 1 5.7-2.3" stroke="#22c55e" strokeWidth="3" />
                                        <path d="M12 6a8 8 0 0 1 5.7 2.3" stroke="#eab308" strokeWidth="3" />
                                        <path d="M17.7 8.3a8 8 0 0 1 2.3 5.7" stroke="#ef4444" strokeWidth="3" />
                                        <path d="M12 14l3-3" stroke="#1f2937" strokeWidth="2" />
                                        <circle cx="12" cy="14" r="2.5" fill="#1f2937" stroke="none" />
                                    </svg>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>شاخص BMI</div>
                                    <div style={{ fontSize: '1rem', color: '#0f172a', fontWeight: '900', marginTop: '2px' }}>نامشخص</div>
                                </div>
                            </div>
                        </div>
                        <div className="kpi-mobile-only" style={{ border: '1px solid #e2e8f0', background: '#ffffff', borderRadius: '16px', padding: '16px', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: '900' }}>BMI</div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>شاخص توده بدنی</div>
                                </div>
                                <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                                        <path d="M4 14a8 8 0 0 1 16 0" stroke="#cbd5e1" strokeWidth="3" />
                                        <path d="M4 14a8 8 0 0 1 2.3-5.7" stroke="#3b82f6" strokeWidth="3" />
                                        <path d="M6.3 8.3a8 8 0 0 1 5.7-2.3" stroke="#22c55e" strokeWidth="3" />
                                        <path d="M12 6a8 8 0 0 1 5.7 2.3" stroke="#eab308" strokeWidth="3" />
                                        <path d="M17.7 8.3a8 8 0 0 1 2.3 5.7" stroke="#ef4444" strokeWidth="3" />
                                        <path d="M12 14l3-3" stroke="#1f2937" strokeWidth="2" />
                                        <circle cx="12" cy="14" r="2.5" fill="#1f2937" stroke="none" />
                                    </svg>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ padding: '6px 12px', background: '#f1f5f9', color: '#475569', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>نامشخص</div>
                                <div style={{ fontSize: '1.5rem', color: '#1e293b', fontWeight: '900' }}>--</div>
                            </div>
                        </div>
                    </>

                    {/* Age Card - Third */}
                    <div style={{ border: '1px solid #e2e8f0', background: '#ffffff', borderRadius: '16px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#3b82f6' }}>
                                <AgeIcon width="24" height="24" />
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>رده سنی</div>
                                <div style={{ fontSize: '1rem', color: '#0f172a', fontWeight: '900', marginTop: '2px' }}>نامشخص</div>
                            </div>
                        </div>
                    </div>

                    {/* Insurance Card - Fourth */}
                    <div style={{ border: '1px solid #e2e8f0', background: '#ffffff', borderRadius: '16px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => navigate('/insurance-status')}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ea580c' }}>
                                <InsuranceIcon width="24" height="24" />
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>اعتبار بیمه</div>
                                <div style={{ fontSize: '1rem', color: '#0f172a', fontWeight: '900', marginTop: '2px' }}>—</div>
                            </div>
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
