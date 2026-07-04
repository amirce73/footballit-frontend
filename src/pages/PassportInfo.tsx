import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useAuth } from '../contexts/AuthContext';

export default function PassportInfo() {
  const navigate = useNavigate();
  const { user, refreshUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
      passportNumber: '',
      passportIssueDate: '',
      passportExpiryDate: ''
  });

  useEffect(() => {
      if (user) {
          setFormData({
              passportNumber: user.passportNumber || '',
              passportIssueDate: user.passportIssueDate ? user.passportIssueDate.split('T')[0] : '',
              passportExpiryDate: user.passportExpiryDate ? user.passportExpiryDate.split('T')[0] : ''
          });
      }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
      setLoading(true);
      try {
          await api.put('/users/passport', formData);
          await refreshUser();
          alert('اطلاعات گذرنامه با موفقیت ذخیره شد!');
      } catch (error) {
          console.error(error);
          alert('خطا در ذخیره اطلاعات');
      } finally {
          setLoading(false);
      }
  };

  return (
    <div id="view-passport-info" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">اطلاعات گذرنامه</h3><button className="btn-top-action btn-submit-top" onClick={handleSubmit} disabled={loading}><i className="fa fa-check"></i> {loading ? '...' : 'ثبت'}</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>شماره گذرنامه</label><input type="text" name="passportNumber" placeholder="شماره گذرنامه" value={formData.passportNumber} onChange={handleChange} />
                    </div>
                    <div className="input-group"><label>تاریخ صدور</label><input type="date" name="passportIssueDate" value={formData.passportIssueDate} onChange={handleChange} /></div>
                    <div className="input-group"><label>تاریخ انقضا</label><input type="date" name="passportExpiryDate" value={formData.passportExpiryDate} onChange={handleChange} /></div>
                </div>
            </div>
        </div>
  );
}
