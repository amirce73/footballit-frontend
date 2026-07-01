import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BankInfo() {
  const navigate = useNavigate();
  return (
    <div id="view-bank-info" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/financial-hub')}><i className="fa fa-arrow-right"></i> مالی</button>
                <h3 className="sticky-title">حساب بانکی</h3><button className="btn-top-action btn-submit-top" onClick={() => {}}><i className="fa fa-check"></i> ثبت</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>نام بانک</label><input type="text" placeholder="مثال: ملی" /></div>
                    <div className="input-group"><label>شماره کارت</label><input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" /></div>
                    <div className="input-group" style={{"gridColumn":"1 / -1"}}><label>شماره شبا</label><input type="text" placeholder="IR..." /></div>
                </div>
            </div>
        </div>
  );
}
