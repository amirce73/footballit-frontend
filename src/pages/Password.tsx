import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Password() {
  const navigate = useNavigate();
  return (
    <div id="view-password" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">تغییر رمز عبور</h3><button className="btn-top-action btn-submit-top" onClick={() => {}}><i className="fa fa-check"></i> تغییر رمز</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group" style={{"gridColumn":"1 / -1"}}><label>رمز عبور فعلی</label><input type="password" /></div>
                    <div className="input-group"><label>رمز عبور جدید</label><input type="password" /></div>
                    <div className="input-group"><label>تکرار رمز عبور جدید</label><input type="password" /></div>
                </div>
            </div>
        </div>
  );
}
