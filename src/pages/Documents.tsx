import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useAuth } from '../contexts/AuthContext';

export default function Documents() {
  const navigate = useNavigate();
  const { refreshUser } = useAuth();
  const [loading, setLoading] = useState(false);
  
  const [nationalCard, setNationalCard] = useState<File | null>(null);
  const [birthCertificate, setBirthCertificate] = useState<File | null>(null);
  const [personalPhoto, setPersonalPhoto] = useState<File | null>(null);

  const handleSubmit = async () => {
      setLoading(true);
      const formData = new FormData();
      if (nationalCard) formData.append('nationalCard', nationalCard);
      if (birthCertificate) formData.append('birthCertificate', birthCertificate);
      if (personalPhoto) formData.append('personalPhoto', personalPhoto);

      try {
          await api.post('/users/documents', formData, {
              headers: { 'Content-Type': 'multipart/form-data' }
          });
          await refreshUser();
          alert('مدارک با موفقیت آپلود شد!');
      } catch (error) {
          console.error(error);
          alert('خطا در آپلود مدارک');
      } finally {
          setLoading(false);
      }
  };

  return (
    <div id="view-documents" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">مستندات و مدارک</h3><button className="btn-top-action btn-submit-top" onClick={handleSubmit} disabled={loading}><i className="fa fa-check"></i> {loading ? '...' : 'آپلود'}</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>اسکن کارت ملی</label><input type="file" accept="image/*" onChange={(e) => setNationalCard(e.target.files?.[0] || null)} /></div>
                    <div className="input-group"><label>اسکن شناسنامه</label><input type="file" accept="image/*" onChange={(e) => setBirthCertificate(e.target.files?.[0] || null)} /></div>
                    <div className="input-group" style={{"gridColumn":"1 / -1"}}><label>عکس پرسنلی (۴×۳)</label><input type="file" accept="image/*" onChange={(e) => setPersonalPhoto(e.target.files?.[0] || null)} /></div>
                </div>
            </div>
        </div>
  );
}
