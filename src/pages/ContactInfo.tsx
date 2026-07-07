import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { useFormDraft } from '../hooks/useFormDraft';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import StickySubmitButton from '../components/StickySubmitButton';

const schema = yup.object().shape({
    mobile: yup.string().required('موبایل الزامی است').matches(/^09[0-9]{9}$/, 'موبایل باید ۱۱ رقم باشد و با ۰۹ شروع شود'),
    guardianMobile: yup.string().matches(/^09[0-9]{9}$/, 'شماره ولی باید ۱۱ رقم باشد و با ۰۹ شروع شود').nullable(),
    tel: yup.string().matches(/^0[1-9][0-9]{9}$/, 'تلفن ثابت باید ۱۱ رقم باشد و با صفر شروع شود (مثال: 021...)').nullable(),
    emergencyPhone: yup.string().required('تلفن ضروری الزامی است').matches(/^0[0-9]{10}$/, 'تلفن ضروری باید ۱۱ رقم باشد و با صفر (۰) شروع شود'),
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'فرمت ایمیل وارد شده معتبر نیست').nullable(),
    telegram: yup.string().nullable(),
    instagram: yup.string().nullable(),
    linkedIn: yup.string().nullable(),
    facebook: yup.string().nullable(),
    website: yup.string().matches(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/, 'آدرس وب‌سایت وارد شده نامعتبر است').nullable(),
    address: yup.string().nullable(),
    parentsWorkAddress: yup.string().nullable()
});

type FormData = yup.InferType<typeof schema>;

export default function ContactInfo() {
    const navigate = useNavigate();
    const methods = useForm<any>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    const { user, refreshUser } = useAuth();
    const [loading, setLoading] = React.useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = methods;
    const isDataLoaded = !!user;
    const { clearDraft } = useFormDraft('contactinfo', methods, isDataLoaded);

    useEffect(() => {
        if (user && user.contact) {
            reset({
                mobile: user.contact.mobile || '',
                guardianMobile: user.contact.guardianMobile || '',
                tel: user.contact.tel || '',
                emergencyPhone: user.contact.emergencyPhone || '',
                email: user.contact.email || '',
                telegram: user.contact.telegram || '',
                instagram: user.contact.instagram || '',
                linkedIn: user.contact.linkedIn || '',
                facebook: user.contact.facebook || '',
                website: user.contact.website || '',
                address: user.contact.address || '',
                parentsWorkAddress: user.contact.parentsWorkAddress || ''
            });
        }
    }, [user, reset]);

    const convertPersianToEnglishDigits = (str: string) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return str.replace(/[۰-۹]/g, w => persianDigits.indexOf(w).toString());
    };

    const enforceNumericLength = (e: React.FormEvent<HTMLInputElement>, maxLength: number) => {
        const val = e.currentTarget.value;
        const converted = convertPersianToEnglishDigits(val);
        let digitsOnly = converted.replace(/[^0-9]/g, '');
        if (digitsOnly.length > maxLength) {
            digitsOnly = digitsOnly.slice(0, maxLength);
        }
        e.currentTarget.value = digitsOnly;
    };

    const enforceNumeric = (e: React.FormEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        const converted = convertPersianToEnglishDigits(val);
        e.currentTarget.value = converted.replace(/[^0-9]/g, '');
    };

    const enforceEnglishAndSymbols = (e: React.FormEvent<HTMLInputElement>) => {
        // Allow English letters, digits, and common symbols used in URLs/Emails/Handles
        e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z0-9@._:\/\-]/g, '');
    };

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            await api.post('/Profile/contact-info', data);
            clearDraft();
            await refreshUser();
            alert('اطلاعات تماس با موفقیت ذخیره شد!');
        } catch (error) {
            console.error('Error saving data:', error);
            alert('خطا در ذخیره اطلاعات');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="view-contact-info" className="view-section fade-in">
            <div className="sticky-top-bar">
                <button type="button" className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}>
                    <i className="fa fa-arrow-right"></i> پروفایل
                </button>
                <h3 className="sticky-title">اطلاعات تماس</h3>
                
            </div>

            <div className="card">
                <form className="form-grid" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <label className={errors.mobile ? 'error-label' : ''}>موبایل بازیکن</label>
                        <input type="text" inputMode="numeric" disabled {...register('mobile')} style={{ opacity: 0.6 }} className={errors.mobile ? 'error' : ''} />
                        <small style={{ color: "var(--text-muted)", fontSize: "0.61rem", marginTop: "4px" }}>
                            برای تغییر موبایل به پشتیبانی تیکت دهید.
                        </small>
                        {errors.mobile && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.mobile.message)}</span>}
                    </div>

                    <div className="input-group">
                        <label className={errors.tel ? 'error-label' : ''}>تلفن ثابت</label>
                        <input type="text" inputMode="numeric" placeholder="021..." {...register('tel')} onInput={(e) => enforceNumericLength(e, 11)} className={errors.tel ? 'error' : ''} />
                        {errors.tel && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.tel.message)}</span>}
                    </div>

                    <div className="input-group">
                        <label className={errors.guardianMobile ? 'error-label' : ''}>شماره ولی (پدر یا مادر)</label>
                        <input type="text" inputMode="numeric" placeholder="09..." {...register('guardianMobile')} onInput={(e) => enforceNumericLength(e, 11)} className={errors.guardianMobile ? 'error' : ''} />
                        {errors.guardianMobile && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.guardianMobile.message)}</span>}
                    </div>

                    <div className="input-group">
                        <label className={errors.emergencyPhone ? 'error-label' : ''}>تلفن ضروری</label>
                        <input type="text" inputMode="numeric" {...register('emergencyPhone')} onInput={(e) => enforceNumericLength(e, 11)} className={errors.emergencyPhone ? 'error' : ''} />
                        {errors.emergencyPhone && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.emergencyPhone.message)}</span>}
                    </div>

                    <div className="input-group">
                        <label className={errors.email ? 'error-label' : ''}>ایمیل</label>
                        <input type="email" style={{ textAlign: 'left', direction: 'ltr' }} {...register('email')} onInput={enforceEnglishAndSymbols} className={errors.email ? 'error' : ''} />
                        {errors.email && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.email.message)}</span>}
                    </div>

                    <div className="input-group">
                        <label>تلگرام</label>
                        <input type="text" style={{ textAlign: 'left', direction: 'ltr' }} {...register('telegram')} onInput={enforceEnglishAndSymbols} />
                    </div>

                    <div className="input-group">
                        <label>اینستاگرام</label>
                        <input type="text" style={{ textAlign: 'left', direction: 'ltr' }} {...register('instagram')} onInput={enforceEnglishAndSymbols} />
                    </div>

                    <div className="input-group">
                        <label>لینکدین</label>
                        <input type="text" style={{ textAlign: 'left', direction: 'ltr' }} {...register('linkedIn')} onInput={enforceEnglishAndSymbols} />
                    </div>

                    <div className="input-group">
                        <label>فیسبوک</label>
                        <input type="text" style={{ textAlign: 'left', direction: 'ltr' }} {...register('facebook')} onInput={enforceEnglishAndSymbols} />
                    </div>

                    <div className="input-group">
                        <label className={errors.website ? 'error-label' : ''}>وب سایت</label>
                        <input type="text" style={{ textAlign: 'left', direction: 'ltr' }} placeholder="https://..." {...register('website')} onInput={enforceEnglishAndSymbols} className={errors.website ? 'error' : ''} />
                        {errors.website && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.website.message)}</span>}
                    </div>

                    <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                        <label>آدرس دقیق منزل</label>
                        <textarea rows={2} {...register('address')} placeholder="استان، شهر، خیابان..."></textarea>
                    </div>

                    <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                        <label>آدرس محل کار والدین</label>
                        <textarea rows={2} {...register('parentsWorkAddress')} placeholder="آدرس دقیق"></textarea>
                    </div>
                <StickySubmitButton loading={loading} text="ثبت اطلاعات" loadingText="در حال ثبت..." />

            </form>
            </div>
        </div>
    );
}
