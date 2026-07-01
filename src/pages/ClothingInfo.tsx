import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClothingInfo() {
  const navigate = useNavigate();
  return (
    <div id="view-clothing-info" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">سایز پوشاک</h3><button className="btn-top-action btn-submit-top" onClick={() => {}}><i className="fa fa-check"></i> ثبت</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>سایز پیراهن</label><select>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select></div>
                    <div className="input-group"><label>سایز شورت ورزشی</label><select>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select></div>
                    <div className="input-group"><label>سایز کفش (شماره)</label><input type="number" placeholder="مثال: 42" />
                    </div>
                </div>
            </div>
        </div>
  );
}
