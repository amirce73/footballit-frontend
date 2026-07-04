import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useAuth } from '../contexts/AuthContext';

export default function SportsInfo() {
  const navigate = useNavigate();
  const { user, refreshUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
      mainPosition: 'مهاجم',
      dominantFoot: 'راست',
      nationalTeamExperience: 'خیر'
  });

  useEffect(() => {
      if (user) {
          setFormData({
              mainPosition: user.mainPosition || 'مهاجم',
              dominantFoot: user.dominantFoot || 'راست',
              nationalTeamExperience: user.nationalTeamExperience || 'خیر'
          });
      }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
      setLoading(true);
      try {
          await api.put('/users/sports-info', formData);
          await refreshUser();
          alert('اطلاعات با موفقیت ذخیره شد!');
      } catch (error) {
          console.error('Error saving data:', error);
          alert('خطا در ذخیره اطلاعات');
      } finally {
          setLoading(false);
      }
  };

  return (
    <div id="view-sports-info" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">مشخصات ورزشی</h3><button className="btn-top-action btn-submit-top" onClick={handleSubmit} disabled={loading}><i className="fa fa-check"></i> {loading ? '...' : 'ثبت'}</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>پست اصلی</label><select name="mainPosition" value={formData.mainPosition} onChange={handleChange}>
                            <option value="مهاجم">مهاجم</option>
                            <option value="هافبک">هافبک</option>
                            <option value="مدافع">مدافع</option>
                            <option value="دروازه‌بان">دروازه‌بان</option>
                        </select></div>
                    <div className="input-group"><label>پای تخصصی</label><select name="dominantFoot" value={formData.dominantFoot} onChange={handleChange}>
                            <option value="راست">راست</option>
                            <option value="چپ">چپ</option>
                            <option value="هردو">هردو</option>
                        </select></div>
                    <div className="input-group"><label>سابقه بازی ملی؟</label><select name="nationalTeamExperience" value={formData.nationalTeamExperience} onChange={handleChange}>
                            <option value="خیر">خیر</option>
                            <option value="بله">بله</option>
                        </select></div>
                </div>
            </div>
        </div>
  );
}
