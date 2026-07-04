import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function Password() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
      if (formData.newPassword !== formData.confirmPassword) {
          alert('رمز عبور جدید و تکرار آن یکسان نیستند.');
          return;
      }
      setLoading(true);
      try {
          await api.put('/users/password', {
              currentPassword: formData.currentPassword,
              newPassword: formData.newPassword
          });
          alert('رمز عبور با موفقیت تغییر یافت!');
          setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      } catch (error: any) {
          console.error(error);
          alert(error.response?.data || 'خطا در تغییر رمز عبور');
      } finally {
          setLoading(false);
      }
  };

  return (
    <div id="view-password" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">تغییر رمز عبور</h3><button className="btn-top-action btn-submit-top" onClick={handleSubmit} disabled={loading}><i className="fa fa-check"></i> {loading ? '...' : 'تغییر رمز'}</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group" style={{"gridColumn":"1 / -1"}}><label>رمز عبور فعلی</label><input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} /></div>
                    <div className="input-group"><label>رمز عبور جدید</label><input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} /></div>
                    <div className="input-group"><label>تکرار رمز عبور جدید</label><input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} /></div>
                </div>
            </div>
        </div>
  );
}
