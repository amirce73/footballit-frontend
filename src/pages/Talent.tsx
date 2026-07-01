import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Talent() {
  const navigate = useNavigate();
  return (
    <div id="view-talent" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/specialized-hub')}><i className="fa fa-arrow-right"></i> تخصصی</button>
                <h3 className="sticky-title">استعدادیابی</h3>
                <div style={{"width":"80px"}}></div>
            </div>
            <div className="card" style={{"padding":"20px","textAlign":"center"}}>
                <div className="stat-icon ic-purple" style={{"width":"60px","height":"60px","fontSize":"2rem","margin":"0 auto 16px"}}><i className="fa fa-trophy"></i></div>
                <h3 style={{"marginBottom":"8px"}}>سوابق استعدادیابی</h3>
                <p style={{"color":"var(--text-muted)","fontSize":"0.85rem"}}>هنوز هیچ فرم ارزیابی یا استعدادیابی برای شما ثبت
                    نشده است.</p>
            </div>
        </div>
  );
}
