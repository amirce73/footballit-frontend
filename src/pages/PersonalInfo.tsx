import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useAuth } from '../contexts/AuthContext';
import DatePickerModule from "react-multi-date-picker";
import persianModule from "react-date-object/calendars/persian";
import persianFaModule from "react-date-object/locales/persian_fa";
import DateObjectModule from "react-date-object";

const DatePicker = (DatePickerModule as any).default || DatePickerModule;
const persian = (persianModule as any).default || persianModule;
const persian_fa = (persianFaModule as any).default || persianFaModule;
const DateObject = (DateObjectModule as any).default || DateObjectModule;

export default function PersonalInfo() {
    const navigate = useNavigate();
    const { user, refreshUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        nationalCode: '',
        birthDate: '',
        fatherName: '',
        gender: 'مرد',
        height: '',
        weight: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                nationalCode: user.nationalCode || '',
                birthDate: user.birthDate || '',
                fatherName: user.fatherName || '',
                gender: user.gender || 'مرد',
                height: user.height?.toString() || '',
                weight: user.weight?.toString() || ''
            });
        }
    }, [user]);

    const convertPersianToEnglishDigits = (str: string) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return str.replace(/[۰-۹]/g, w => persianDigits.indexOf(w).toString());
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        if (name === 'nationalCode') {
            const englishDigits = convertPersianToEnglishDigits(value);
            const numericValue = englishDigits.replace(/[^0-9]/g, '');
            if (numericValue.length > 10) return;
            setFormData({ ...formData, [name]: numericValue });
            return;
        }
        
        if (name === 'height' || name === 'weight') {
            const englishDigits = convertPersianToEnglishDigits(value);
            const numericValue = englishDigits.replace(/[^0-9]/g, '');
            setFormData({ ...formData, [name]: numericValue });
            return;
        }
        
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date: any) => {
        if (!date) {
            setFormData({ ...formData, birthDate: '' });
            return;
        }
        // Extract formatted date which might be in Persian digits (e.g. ۱۳۸۸/۰۷/۰۴)
        const persianDate = date.format("YYYY/MM/DD");
        const englishDate = convertPersianToEnglishDigits(persianDate);
        setFormData({ ...formData, birthDate: englishDate });
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            await api.put('/users/personal-info', {
                ...formData,
                height: formData.height ? parseInt(formData.height) : null,
                weight: formData.weight ? parseInt(formData.weight) : null
            });
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
        <div id="view-personal-info" className="view-section fade-in">
            <div className="sticky-top-bar"><button className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">مشخصات فردی</h3><button className="btn-top-action btn-submit-top" onClick={handleSubmit} disabled={loading}><i className="fa fa-check"></i> {loading ? '...' : 'ثبت'}</button>
            </div>
            <div className="card">
                <div className="form-grid">
                    <div className="input-group"><label>نام</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} /></div>
                    <div className="input-group"><label>نام خانوادگی</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} /></div>
                    <div className="input-group"><label>کد ملی (۱۰ رقم)</label><input name="nationalCode" type="text" inputMode="numeric" placeholder="مثال: 1234567890" value={formData.nationalCode} onChange={handleChange}></input></div>
                    <div className="input-group">
                        <label>تاریخ تولد</label>
                        <DatePicker
                            value={formData.birthDate}
                            onChange={handleDateChange}
                            onMonthChange={handleDateChange}
                            onYearChange={handleDateChange}
                            onFocusedDateChange={handleDateChange}
                            calendar={persian}
                            locale={persian_fa}
                            maxDate={new DateObject({ calendar: persian })}
                            calendarPosition="bottom"
                            fixMainPosition={true}
                            inputClass="date-picker-input"
                            containerStyle={{ width: '100%' }}
                            placeholder="انتخاب تاریخ"
                        />
                        <small style={{ "color": "var(--text-muted)", "fontSize": "0.75rem", "marginTop": "4px" }}>
                            نکته: برای تغییر سال و ماه، روی نام آن‌ها در بالای تقویم کلیک کنید.
                        </small>
                    </div>
                    <div className="input-group"><label>نام پدر</label><input type="text" name="fatherName" placeholder="نام پدر" value={formData.fatherName} onChange={handleChange} /></div>
                    <div className="input-group"><label>جنسیت</label><select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="مرد">مرد</option>
                        <option value="زن">زن</option>
                    </select></div>
                    <div className="input-group">
                        <label>قد (سانتی‌متر)</label>
                        <input type="text" inputMode="numeric" name="height" placeholder="مثال: 180" value={formData.height} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>وزن (کیلوگرم)</label>
                        <input type="text" inputMode="numeric" name="weight" placeholder="مثال: 75" value={formData.weight} onChange={handleChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}
