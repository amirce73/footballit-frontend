import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Verification() {
  const navigate = useNavigate();
  return (
    <div id="view-verification" className="view-section fade-in">
            <div className="sticky-top-bar">
                <button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">احراز هویت حساب</h3>
                <button className="btn-top-action btn-submit-top" onClick={() => {}}><i className="fa fa-check"></i> ارسال
                    مدارک</button>
            </div>

            <div style={{"background":"var(--primary-light)","color":"var(--primary)","padding":"16px","borderRadius":"12px","marginBottom":"16px","fontSize":"0.8rem","fontWeight":"700","lineHeight":"1.6"}}>
                <i className="fa fa-info-circle" style={{"fontSize":"1.1rem","marginBottom":"6px","display":"block"}}></i>
                لطفاً اطلاعات هویتی خود را دقیق وارد کنید. این اطلاعات برای استعلام از سامانه ثبت احوال استفاده می‌شود.
            </div>

            <div className="card">
                <div className="form-grid">
                    <div className="input-group">
                        <label>کد ملی (۱۰ رقم)</label>
                        <input type="number" placeholder="مثال: ۱۲۳۴۵۶۷۸۹۰" />
                    </div>
                    <div className="input-group">
                        <label>تاریخ تولد (طبق شناسنامه)</label>
                        <input type="date" />
                    </div>
                    <div className="input-group" style={{"gridColumn":"1 / -1","marginTop":"8px"}}>
                        <label>آپلود تصویر روی کارت ملی</label>
                        <div style={{"border":"2px dashed var(--border)","padding":"20px","textAlign":"center","borderRadius":"12px","background":"#f8fafc","cursor":"pointer"}}>
                            <i className="fa fa-id-card-o" style={{"fontSize":"2rem","color":"var(--text-muted)","marginBottom":"8px"}}></i>
                            <p style={{"fontSize":"0.8rem","color":"var(--text-muted)","fontWeight":"700"}}>برای انتخاب فایل
                                کلیک کنید</p>
                            <input type="file" accept="image/*" style={{"display":"none"}} />
                        </div>
                    </div>
                    <div className="input-group" style={{"gridColumn":"1 / -1"}}>
                        <label>تصویر چهره (سلفی زنده)</label>
                        <div style={{"border":"2px dashed var(--border)","padding":"20px","textAlign":"center","borderRadius":"12px","background":"#f8fafc","cursor":"pointer"}}>
                            <i className="fa fa-camera" style={{"fontSize":"2rem","color":"var(--text-muted)","marginBottom":"8px"}}></i>
                            <p style={{"fontSize":"0.8rem","color":"var(--text-muted)","fontWeight":"700"}}>برای گرفتن عکس
                                کلیک کنید</p>
                            <input type="file" accept="image/*" capture="user" style={{"display":"none"}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
