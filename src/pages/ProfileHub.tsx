import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileHub() {
    const navigate = useNavigate();
    return (
        <div id="view-profile-hub" className="view-section fade-in">
            <div className="sticky-top-bar">
                <button className="btn-top-action btn-back-top" onClick={() => navigate('/dashboard')}><i className="fa fa-arrow-right"></i> داشبورد</button>
                <h3 className="sticky-title">پروفایل کاربری</h3>
                <div style={{ "width": "80px" }}></div>
            </div>

            <div className="profile-hub-sections-wrapper">
                <div className="verify-banner unverified">
                    <div className="verify-banner-content">
                        <div className="verify-banner-icon"><i className="fa fa-shield"></i></div>
                        <div className="verify-banner-text">
                            <h4>کاربر استعلام هویتی نشده است!</h4>
                            <p>
                                <span className="desktop-text-400">جهت استفاده از تمامی امکانات و ثبت‌نام، مدارک خود را تکمیل کنید.</span>
                                <span className="mobile-text-400">جهت استفاده از تمامی امکانات و ثبت‌نام<br/>مدارک خود را تکمیل کنید.</span>
                            </p>
                        </div>
                    </div>
                    <button className="btn-verify-action" onClick={() => navigate('/verification')}>تکمیل هویت</button>
                </div>

                <div className="profile-frame">
                    <div className="frame-title">
                        <i className="fa fa-user" style={{ "color": "var(--primary)" }}></i> اطلاعات فردی
                    </div>
                    <div className="frame-grid">
                        <div className="frame-item" onClick={() => navigate('/personal-info')}>
                            <div className="frame-icon-circle ic-blue"><i className="fa fa-id-card-o"></i></div>
                            <span className="frame-item-label">اطلاعات شخصی</span>
                        </div>
                        <div className="frame-item" onClick={() => navigate('/contact-info')}>
                            <div className="frame-icon-circle ic-green"><i className="fa fa-phone"></i></div>
                            <span className="frame-item-label">اطلاعات تماس</span>
                        </div>
                        <div className="frame-item" onClick={() => navigate('/passport-info')}>
                            <div className="frame-icon-circle ic-orange"><i className="fa fa-globe"></i></div>
                            <span className="frame-item-label">سایر (گذرنامه)</span>
                        </div>
                    </div>
                </div>

                <div className="profile-frame">
                    <div className="frame-title">
                        <i className="fa fa-soccer-ball-o" style={{ "color": "var(--warning)" }}></i> اطلاعات ورزشی
                    </div>
                    <div className="frame-grid">
                        <div className="frame-item" onClick={() => navigate('/sports-info')}>
                            <div className="frame-icon-circle ic-purple"><i className="fa fa-star"></i></div>
                            <span className="frame-item-label">مشخصات ورزشی</span>
                        </div>
                        <div className="frame-item" onClick={() => navigate('/club-info')}>
                            <div className="frame-icon-circle ic-blue"><i className="fa fa-shield"></i></div>
                            <span className="frame-item-label">اطلاعات باشگاهی</span>
                        </div>

                    </div>
                </div>

                <div className="profile-frame">
                    <div className="frame-title">
                        <i className="fa fa-folder-open" style={{ "color": "var(--danger)" }}></i> مستندات و مدارک
                    </div>
                    <div className="frame-grid">
                        <div className="frame-item" onClick={() => navigate('/documents')}>
                            <div className="frame-icon-circle ic-blue"><i className="fa fa-file-image-o"></i></div>
                            <span className="frame-item-label">کارت ملی</span>
                        </div>
                        <div className="frame-item" onClick={() => navigate('/documents')}>
                            <div className="frame-icon-circle ic-green"><i className="fa fa-file-text-o"></i></div>
                            <span className="frame-item-label">شناسنامه</span>
                        </div>
                        <div className="frame-item" onClick={() => navigate('/documents')}>
                            <div className="frame-icon-circle ic-purple"><i className="fa fa-certificate"></i></div>
                            <span className="frame-item-label">مجوز ورزشی</span>
                        </div>
                        <div className="frame-item" onClick={() => navigate('/documents')}>
                            <div className="frame-icon-circle ic-red-card"><i className="fa fa-plus-circle"></i></div>
                            <span className="frame-item-label">مدارک و سایر</span>
                        </div>
                    </div>
                </div>

                <div className="profile-frame">
                    <div className="frame-title">
                        <i className="fa fa-shield" style={{ "color": "var(--success)" }}></i> امنیت و حساب کاربری
                    </div>
                    <div className="frame-grid">
                        <div className="frame-item" onClick={() => navigate('/password')}>
                            <div className="frame-icon-circle ic-orange"><i className="fa fa-lock"></i></div>
                            <span className="frame-item-label">تغییر رمز عبور</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
