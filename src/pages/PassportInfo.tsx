import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PassportInfo() {
  const navigate = useNavigate();
  return (
    <div id="view-passport-info" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">اطلاعات گذرنامه</h3><button className="btn-top-action btn-submit-top" onClick={() => {}}><i className="fa fa-check"></i> ثبت</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>شماره گذرنامه</label><input type="text" placeholder="شماره گذرنامه" />
                    </div>
                    <div className="input-group"><label>تاریخ صدور</label><input type="date" /></div>
                    <div className="input-group"><label>تاریخ انقضا</label><input type="date" /></div>
                </div>
            </div>
        </div>
  );
}
