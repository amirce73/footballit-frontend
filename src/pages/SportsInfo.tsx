import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SportsInfo() {
  const navigate = useNavigate();
  return (
    <div id="view-sports-info" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">مشخصات ورزشی</h3><button className="btn-top-action btn-submit-top" onClick={() => {}}><i className="fa fa-check"></i> ثبت</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>پست اصلی</label><select>
                            <option>مهاجم</option>
                            <option>هافبک</option>
                            <option>مدافع</option>
                            <option>دروازه‌بان</option>
                        </select></div>
                    <div className="input-group"><label>پای تخصصی</label><select>
                            <option>راست</option>
                            <option>چپ</option>
                            <option>هردو</option>
                        </select></div>
                    <div className="input-group"><label>سابقه بازی ملی؟</label><select>
                            <option>خیر</option>
                            <option>بله</option>
                        </select></div>
                </div>
            </div>
        </div>
  );
}
