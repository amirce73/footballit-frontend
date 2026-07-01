import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
  const navigate = useNavigate();
  return (
    <div id="view-registration" className="view-section fade-in">
            <div className="sticky-top-bar">
                <button className="btn-top-action btn-back-top" onClick={() => navigate('/dashboard')}><i className="fa fa-arrow-right"></i> داشبورد</button>
                <h3 className="sticky-title">ثبت‌نام در دوره</h3>
                <button className="btn-top-action btn-submit-top" onClick={() => {}}><i className="fa fa-check"></i> تایید
                    نهایی</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group" style={{"gridColumn":"1 / -1"}}>
                        <label>دوره انتخابی:</label>
                        <select>
                            <option value="1">ترم تابستان ۱۴۰۵</option>
                            <option value="2">ترم پاییز ۱۴۰۵</option>
                        </select>
                    </div>
                    <div className="input-group" style={{"gridColumn":"1 / -1"}}>
                        <label>کلاس / رده سنی:</label>
                        <select>
                            <option value="1">رده سنی ۱۴ و ۱۵ سال</option>
                            <option value="2">رده سنی ۱۶ و ۱۷ سال</option>
                        </select>
                    </div>
                    <div className="input-group" style={{"gridColumn":"1 / -1","background":"var(--primary-light)","padding":"12px","borderRadius":"10px","border":"1px solid rgba(234,179,8,0.3)","color":"var(--text-dark)"}}>
                        <label style={{"color":"var(--text-dark)","display":"flex","alignItems":"center","gap":"8px"}}>
                            <input type="checkbox" style={{"width":"auto","transform":"scale(1.2)"}} />
                            قوانین و مقررات باشگاه را مطالعه کرده و می‌پذیرم.
                        </label>
                    </div>
                </div>
            </div>

            <div className="card" style={{"padding":"16px","marginTop":"16px"}}>
                <h4 style={{"marginBottom":"12px","display":"flex","alignItems":"center","gap":"8px","color":"var(--text-dark)","fontWeight":"800"}}>
                    <i className="fa fa-pie-chart" style={{"color":"var(--primary)"}}></i> گزارش مالی ثبت‌نام‌ها
                </h4>
                <div style={{"display":"flex","justifyContent":"space-between","marginBottom":"8px","fontSize":"0.85rem"}}>
                    <span>کل پرداختی‌های شما:</span>
                    <strong style={{"color":"var(--success)"}}>۱۵,۰۰۰,۰۰۰ تومان</strong>
                </div>
                <div style={{"display":"flex","justifyContent":"space-between","marginBottom":"16px","fontSize":"0.85rem"}}>
                    <span>بدهی فعلی (ترم جاری):</span>
                    <strong style={{"color":"var(--danger)"}}>۷,۵۰۰,۰۰۰ تومان</strong>
                </div>
                <button onClick={() => navigate('/financial-timeline')} style={{"width":"100%","background":"#f8fafc","color":"var(--text-dark)","border":"1px solid var(--border)","padding":"12px","borderRadius":"8px","fontWeight":"800","fontFamily":"inherit","cursor":"pointer","transition":"0.2s"}}>
                    <i className="fa fa-history" style={{"color":"var(--primary)"}}></i> مشاهده تایم‌لاین مالی تراکنش‌ها
                </button>
            </div>
        </div>
  );
}
