import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TrainingBackpack() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        sport: '',
        topic: '',
        ageGroup: '',
        trainingType: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div id="view-training-backpack" className="view-section fade-in">
            <div className="sticky-top-bar">
                <button className="btn-top-action btn-back-top" onClick={() => navigate('/dashboard')}><i className="fa fa-arrow-right"></i> داشبورد</button>
                <h3 className="sticky-title">کوله تمرینات</h3>
                <div style={{ "width": "80px" }}></div>
            </div>

            <div className="backpack-container">
                <div className="backpack-header">
                    <div className="backpack-icon">
                        <i className="fa fa-briefcase"></i>
                    </div>
                    <div className="backpack-title-box">
                        <h2>کوله پشتی تمرین شما</h2>
                        <p>برنامه‌ها و آیتم‌های تمرینی خود را در اینجا پیکربندی کنید</p>
                    </div>
                </div>

                <div className="backpack-form-card">
                    <form className="backpack-form">
                        <div className="form-group">
                            <label>رشته ورزشی</label>
                            <select name="sport" value={formData.sport} onChange={handleChange} className="form-control">
                                <option value="">انتخاب کنید...</option>
                                <option value="football">فوتبال</option>
                                <option value="futsal">فوتسال</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>موضوع تمرین</label>
                            <select name="topic" value={formData.topic} onChange={handleChange} className="form-control">
                                <option value="">انتخاب کنید...</option>
                                <option value="tactical">تاکتیکی</option>
                                <option value="technical">تکنیکی</option>
                                <option value="physical">بدنسازی و آمادگی جسمانی</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>رده سنی</label>
                            <select name="ageGroup" value={formData.ageGroup} onChange={handleChange} className="form-control">
                                <option value="">انتخاب کنید...</option>
                                <option value="u10">زیر ۱۰ سال</option>
                                <option value="u14">نونهالان (زیر ۱۴ سال)</option>
                                <option value="u16">نوجوانان (زیر ۱۶ سال)</option>
                                <option value="u18">جوانان (زیر ۱۸ سال)</option>
                                <option value="adults">بزرگسالان</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>نوع تمرین</label>
                            <select name="trainingType" value={formData.trainingType} onChange={handleChange} className="form-control">
                                <option value="">انتخاب کنید...</option>
                                <option value="group">گروهی</option>
                                <option value="individual">انفرادی</option>
                                <option value="match">بازی تدارکاتی</option>
                            </select>
                        </div>

                        <button type="button" className="btn-backpack-submit">
                            مشاهده برنامه‌ها
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
