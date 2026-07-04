import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function BankInfo() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
      bankName: '',
      cardNumber: '',
      shabaNumber: ''
  });

  useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await api.get('/users/me');
              if (res.data) {
                  setFormData({
                      bankName: res.data.bankName || '',
                      cardNumber: res.data.cardNumber || '',
                      shabaNumber: res.data.shabaNumber || ''
                  });
              }
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
      setLoading(true);
      try {
          await api.put('/users/bank-info', formData);
          alert('اطلاعات با موفقیت ذخیره شد!');
      } catch (error) {
          console.error('Error saving data:', error);
          alert('خطا در ذخیره اطلاعات');
      } finally {
          setLoading(false);
      }
  };

  return (
    <div id="view-bank-info" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/financial-hub')}><i className="fa fa-arrow-right"></i> مالی</button>
                <h3 className="sticky-title">حساب بانکی</h3><button className="btn-top-action btn-submit-top" onClick={handleSubmit} disabled={loading}><i className="fa fa-check"></i> {loading ? '...' : 'ثبت'}</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>نام بانک</label><input type="text" name="bankName" placeholder="مثال: ملی" value={formData.bankName} onChange={handleChange} /></div>
                    <div className="input-group"><label>شماره کارت</label><input type="text" name="cardNumber" placeholder="xxxx-xxxx-xxxx-xxxx" value={formData.cardNumber} onChange={handleChange} /></div>
                    <div className="input-group" style={{"gridColumn":"1 / -1"}}><label>شماره شبا</label><input type="text" name="shabaNumber" placeholder="IR..." value={formData.shabaNumber} onChange={handleChange} /></div>
                </div>
            </div>
        </div>
  );
}
