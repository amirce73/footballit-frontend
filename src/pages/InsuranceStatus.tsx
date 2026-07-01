import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function InsuranceStatus() {
  const navigate = useNavigate();
  return (
    <div id="view-insurance-status" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/specialized-hub')}><i className="fa fa-arrow-right"></i> تخصصی</button>
                <h3 className="sticky-title">وضعیت بیمه ورزشی</h3>
                <div style={{"width":"80px"}}></div>
            </div>
            <div className="card" style={{"padding":"20px","textAlign":"center"}}>
                <div className="stat-icon ic-matches" style={{"width":"60px","height":"60px","fontSize":"2rem","margin":"0 auto 16px"}}>
                    <i className="fa fa-heartbeat"></i></div>
                <h3 style={{"marginBottom":"8px"}}>بیمه ورزشی شما فعال نیست!</h3>
                <p style={{"color":"var(--danger)","fontSize":"0.85rem","fontWeight":"700"}}>لطفاً جهت تمدید بیمه ورزشی خود به
                    دفتر باشگاه مراجعه کنید.</p>
            </div>
        </div>
  );
}
