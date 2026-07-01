import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClubInfo() {
  const navigate = useNavigate();
  return (
    <div id="view-club-info" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">اطلاعات باشگاهی</h3>
                <div style={{"width":"80px"}}></div>
            </div>
            <div className="card" style={{"padding":"20px"}}>
                <div className="info-row-text"><strong>باشگاه فعلی:</strong> <span>استعداد برتر دامغان</span></div>
                <div className="info-row-text"><strong>شماره پیراهن:</strong> <span>۱۰</span></div>
                <div className="info-row-text"><strong>رده سنی:</strong> <span>۱۴ و ۱۵ سال</span></div>
                <div className="info-row-text"><strong>تاریخ شروع قرارداد:</strong> <span>۱۴۰۵/۰۳/۰۱</span></div>
            </div>
        </div>
  );
}
