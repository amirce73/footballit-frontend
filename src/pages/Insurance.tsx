import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Insurance() {
  const navigate = useNavigate();
  return (
    <div id="view-insurance" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/specialized-hub')}><i className="fa fa-arrow-right"></i> تخصصی</button>
                <h3 className="sticky-title">فرم فشار تمرین RPE</h3><button className="btn-top-action btn-submit-top" onClick={() => {}}><i className="fa fa-check"></i> ثبت گزارش</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>شاخص فشار تمرین RPE (از ۰ تا ۱۰)</label><input type="number" min="0" max="10" value="5" /></div>
                    <div className="input-group"><label>کیفیت خواب (۱ تا ۵)</label><input type="number" min="1" max="5" value="4" /></div>
                </div>
            </div>
        </div>
  );
}
