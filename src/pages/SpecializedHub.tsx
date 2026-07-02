import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SpecializedHub() {
  const navigate = useNavigate();
  return (
    <div id="view-specialized-hub" className="view-section fade-in">
            <div className="sticky-top-bar">
                <button className="btn-top-action btn-back-top" onClick={() => navigate('/dashboard')}><i className="fa fa-arrow-right"></i> داشبورد</button>
                <h3 className="sticky-title">اطلاعات تخصصی</h3>
                <div style={{"width":"80px"}}></div>
            </div>

            <div className="specialized-top-grid">
                <div className="card" style={{"marginBottom":"0"}}>
                    <div className="section-title" style={{"padding":"0 16px","marginTop":"16px"}}>
                        <i className="fa fa-dashboard" style={{"color":"var(--primary)"}}></i> شاخص‌های عملکرد (KPI) - باشگاهی
                    </div>
                    <div className="stats-grid" style={{"padding":"0 16px 16px"}}>
                        <div className="stat-card">
                            <div className="stat-icon ic-matches"><i className="fa fa-play-circle"></i></div>
                            <div className="stat-info"><span className="stat-label">مسابقات (فیکس/ذخیره)</span><span className="stat-val">۱۴ (۱۰ فیکس)</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-green"><i className="fa fa-calendar-check-o"></i></div>
                            <div className="stat-info"><span className="stat-label">حضور در تمرینات</span><span className="stat-val">۸۵٪</span></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-yellow-card"><i className="fa fa-times-rectangle"></i></div>
                            <div className="stat-info"><span className="stat-label">کارت زرد</span><span className="stat-val">۲</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon ic-red-card"><i className="fa fa-times-rectangle"></i></div>
                            <div className="stat-info"><span className="stat-label">کارت قرمز</span><span className="stat-val">۰</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" style={{"marginBottom":"0","padding":"16px"}}>
                    <div className="section-title" style={{"marginTop":"0"}}>
                        <i className="fa fa-area-chart" style={{"color":"var(--warning)"}}></i> شاخص فشار تمرین (RPE) - هفته اخیر
                    </div>
                    <div className="css-chart-wrap">
                        <div className="css-bar-col">
                            <div className="css-bar">
                                <div className="css-bar-fill" style={{"height":"40%"}}><span className="css-bar-val">4</span></div>
                            </div><span className="css-bar-label">شنبه</span>
                        </div>
                        <div className="css-bar-col">
                            <div className="css-bar">
                                <div className="css-bar-fill" style={{"height":"60%"}}><span className="css-bar-val">6</span></div>
                            </div><span className="css-bar-label">۱شنبه</span>
                        </div>
                        <div className="css-bar-col">
                            <div className="css-bar">
                                <div className="css-bar-fill" style={{"height":"80%","background":"var(--warning)"}}><span className="css-bar-val">8</span></div>
                            </div><span className="css-bar-label">۲شنبه</span>
                        </div>
                        <div className="css-bar-col">
                            <div className="css-bar">
                                <div className="css-bar-fill" style={{"height":"30%"}}><span className="css-bar-val">3</span></div>
                            </div><span className="css-bar-label">۳شنبه</span>
                        </div>
                        <div className="css-bar-col">
                            <div className="css-bar">
                                <div className="css-bar-fill" style={{"height":"70%"}}><span className="css-bar-val">7</span></div>
                            </div><span className="css-bar-label">۴شنبه</span>
                        </div>
                        <div className="css-bar-col">
                            <div className="css-bar">
                                <div className="css-bar-fill" style={{"height":"50%"}}><span className="css-bar-val">5</span></div>
                            </div><span className="css-bar-label">۵شنبه</span>
                        </div>
                        <div className="css-bar-col">
                            <div className="css-bar">
                                <div className="css-bar-fill" style={{"height":"0%"}}><span className="css-bar-val">0</span></div>
                            </div><span className="css-bar-label">جمعه</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="section-title" style={{"padding":"0 16px","marginTop":"16px"}}>
                    <i className="fa fa-folder-open" style={{"color":"var(--danger)"}}></i> فرم‌ها و گزارش‌ها
                </div>
                <div className="spec-grid">
                    <div className="spec-item" onClick={() => navigate('/attendance')}>
                        <div className="spec-icon" style={{"color":"#10b981","background":"#dcfce7"}}><i className="fa fa-check-square-o"></i></div>
                        <div className="spec-title">گزارش حضور و غیاب<br />در تمرینات</div>
                    </div>
                    <div className="spec-item" onClick={() => { alert('باز کردن فرم RPE / Hooper...') }}>
                        <div className="spec-icon" style={{"color":"var(--warning)","background":"#fef3c7"}}><i className="fa fa-battery-half"></i></div>
                        <div className="spec-title">فرم فشار تمرین<br />(RPE / Hooper)</div>
                    </div>
                    <div className="spec-item" onClick={() => navigate('/registration-history')}>
                        <div className="spec-icon" style={{"color":"#1d4ed8","background":"var(--primary-light)"}}><i className="fa fa-history"></i></div>
                        <div className="spec-title">تاریخچه<br />ثبت‌نام‌ها</div>
                    </div>
                    <div className="spec-item" onClick={() => navigate('/talent')}>
                        <div className="spec-icon" style={{"color":"#9333ea","background":"#f3e8ff"}}><i className="fa fa-search"></i>
                        </div>
                        <div className="spec-title">فرم<br />استعدادیابی</div>
                    </div>
                    <div className="spec-item" onClick={() => { alert('گزارش عملکرد مسابقه...') }}>
                        <div className="spec-icon" style={{"color":"#f59e0b","background":"#fef3c7"}}><i className="fa fa-line-chart"></i></div>
                        <div className="spec-title">تحلیل عملکرد<br />در مسابقه</div>
                    </div>
                    <div className="spec-item" onClick={() => { alert('گزارش عملکرد تمرین...') }}>
                        <div className="spec-icon" style={{"color":"#3b82f6","background":"#e0e7ff"}}><i className="fa fa-area-chart"></i></div>
                        <div className="spec-title">تحلیل عملکرد<br />در تمرینات</div>
                    </div>
                    <div className="spec-item" onClick={() => navigate('/insurance-status')}>
                        <div className="spec-icon" style={{"color":"#0ea5e9","background":"#e0f2fe"}}><i className="fa fa-heartbeat"></i></div>
                        <div className="spec-title">وضعیت<br />بیمه ورزشی</div>
                    </div>
                    <div className="spec-item" onClick={() => navigate('/certificate')}>
                        <div className="spec-icon" style={{"color":"#f59e0b","background":"#fef3c7"}}><i className="fa fa-certificate"></i></div>
                        <div className="spec-title">گواهی<br />پایان دوره</div>
                    </div>
                    <div className="spec-item" onClick={() => { alert('باز کردن فرم پزشکی...') }}>
                        <div className="spec-icon" style={{"color":"#ef4444","background":"#fee2e2"}}><i className="fa fa-medkit"></i>
                        </div>
                        <div className="spec-title">فرم<br />پزشکی</div>
                    </div>
                    <div className="spec-item" onClick={() => { alert('کارت عضویت شما در حال دانلود است...') }}>
                        <div className="spec-icon" style={{"color":"#64748b","background":"#f1f5f9"}}><i className="fa fa-id-badge"></i>
                        </div>
                        <div className="spec-title">دریافت کارت<br />عضویت</div>
                    </div>
                </div>
            </div>
        </div>
  );
}
