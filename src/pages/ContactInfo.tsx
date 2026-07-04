import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useAuth } from '../contexts/AuthContext';

export default function ContactInfo() {
  const navigate = useNavigate();
  const { user, refreshUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
      playerMobile: '',
      parentMobile: '',
      landlinePhone: '',
      homeAddress: ''
  });

  useEffect(() => {
      if (user) {
          setFormData({
              playerMobile: user.mobileNumber || '',
              parentMobile: user.parentMobile || '',
              landlinePhone: user.landlinePhone || '',
              homeAddress: user.homeAddress || ''
          });
      }
  }, [user]);

    const convertPersianToEnglishDigits = (str: string) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return str.replace(/[۰-۹]/g, w => persianDigits.indexOf(w).toString());
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'playerMobile' || name === 'parentMobile' || name === 'landlinePhone') {
            const englishDigits = convertPersianToEnglishDigits(value);
            const numericValue = englishDigits.replace(/[^0-9]/g, '');
            if (numericValue.length > 11) return;
            setFormData({ ...formData, [name]: numericValue });
            return;
        }
        setFormData({ ...formData, [name]: value });
    };

  const handleSubmit = async () => {
      setLoading(true);
      try {
          await api.put('/users/contact-info', formData);
          // Note: MobileNumber (PlayerMobile) cannot be changed via contact-info API easily right now, so we only update the others.
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
    <div id="view-contact-info" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">اطلاعات تماس</h3><button className="btn-top-action btn-submit-top" onClick={handleSubmit} disabled={loading}><i className="fa fa-check"></i> {loading ? '...' : 'ثبت'}</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>موبایل بازیکن (نام کاربری)</label><input type="text" inputMode="numeric" name="playerMobile" value={formData.playerMobile} onChange={handleChange} disabled={true} style={{ "opacity": 0.6 }} />
                        <small style={{ "color": "var(--text-muted)", "fontSize": "0.75rem", "marginTop": "4px" }}>برای تغییر
                            موبایل به پشتیبانی تیکت دهید.</small>
                    </div>
                    <div className="input-group"><label>موبایل ولی (پدر یا مادر)</label><input type="text" inputMode="numeric" name="parentMobile" placeholder="09..." value={formData.parentMobile} onChange={handleChange} /></div>
                    <div className="input-group"><label>تلفن ثابت منزل</label><input type="text" inputMode="numeric" name="landlinePhone" placeholder="021..." value={formData.landlinePhone} onChange={handleChange} /></div>
                    <div className="input-group" style={{ "gridColumn": "1 / -1" }}><label>آدرس دقیق منزل</label><input type="text" name="homeAddress" placeholder="استان، شهر، خیابان..." value={formData.homeAddress} onChange={handleChange} /></div>
                </div>
            </div>
        </div>
  );
}
