import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Documents() {
  const navigate = useNavigate();
  return (
    <div id="view-documents" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">مستندات و مدارک</h3><button className="btn-top-action btn-submit-top" onClick={() => {}}><i className="fa fa-check"></i> آپلود</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>اسکن کارت ملی</label><input type="file" accept="image/*" /></div>
                    <div className="input-group"><label>اسکن شناسنامه</label><input type="file" accept="image/*" /></div>
                    <div className="input-group" style={{"gridColumn":"1 / -1"}}><label>عکس پرسنلی (۴×۳)</label><input type="file" accept="image/*" /></div>
                </div>
            </div>
        </div>
  );
}
