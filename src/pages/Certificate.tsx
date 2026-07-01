import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Certificate() {
  const navigate = useNavigate();
  return (
    <div id="view-certificate" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/specialized-hub')}><i className="fa fa-arrow-right"></i> تخصصی</button>
                <h3 className="sticky-title">گواهی پایان دوره</h3>
                <div style={{"width":"80px"}}></div>
            </div>
            <div className="card" style={{"padding":"20px","textAlign":"center","border":"2px dashed var(--primary)"}}>
                <i className="fa fa-certificate" style={{"fontSize":"3rem","color":"var(--primary)","marginBottom":"12px"}}></i>
                <h3 style={{"marginBottom":"8px"}}>گواهی سطح پیشرفته</h3>
                <p style={{"color":"var(--text-muted)","fontSize":"0.85rem","marginBottom":"16px"}}>ترم تابستان ۱۴۰۴ با نمره
                    عالی گذرانده شد.</p>
                <button className="btn-buy" style={{"margin":"0 auto","width":"200px"}} onClick={() => { alert('در حال ایجاد فایل PDF...') }}><i className="fa fa-download"></i> دانلود گواهی PDF</button>
            </div>
        </div>
  );
}
