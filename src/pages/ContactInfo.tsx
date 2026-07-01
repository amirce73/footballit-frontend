import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactInfo() {
  const navigate = useNavigate();
  return (
    <div id="view-contact-info" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">اطلاعات تماس</h3><button className="btn-top-action btn-submit-top" onClick={() => {}}><i className="fa fa-check"></i> ثبت</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>موبایل بازیکن</label><input type="tel" value="09120000000" /></div>
                    <div className="input-group"><label>موبایل ولی/سرپرست</label><input type="tel" placeholder="0912..." />
                    </div>
                    <div className="input-group"><label>تلفن ثابت</label><input type="tel" placeholder="021..." /></div>
                    <div className="input-group" style={{"gridColumn":"1 / -1"}}><label>آدرس منزل</label><input type="text" placeholder="استان، شهر، خیابان..." /></div>
                </div>
            </div>
        </div>
  );
}
