import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PersonalInfo() {
  const navigate = useNavigate();
  return (
    <div id="view-personal-info" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">مشخصات فردی</h3><button className="btn-top-action btn-submit-top" onClick={() => {}}><i className="fa fa-check"></i> ثبت</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>نام</label><input type="text" value="محمدرضا" /></div>
                    <div className="input-group"><label>نام خانوادگی</label><input type="text" value="قربانی" /></div>
                    <div className="input-group"><label>نام پدر</label><input type="text" placeholder="نام پدر" /></div>
                    <div className="input-group"><label>جنسیت</label><select>
                            <option>مرد</option>
                            <option>زن</option>
                        </select></div>
                    <div className="input-group"><label>قد (سانتی‌متر)</label><input type="number" placeholder="مثال: 180" />
                    </div>
                    <div className="input-group"><label>وزن (کیلوگرم)</label><input type="number" placeholder="مثال: 75" />
                    </div>
                </div>
            </div>
        </div>
  );
}
