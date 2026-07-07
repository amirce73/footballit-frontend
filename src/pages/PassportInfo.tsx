import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidPassportNumber } from '../utils/validations';
import api from '../api';
import { useAuth } from '../contexts/AuthContext';
import DatePickerModule from "react-multi-date-picker";
import persianModule from "react-date-object/calendars/persian";
import persianFaModule from "react-date-object/locales/persian_fa";
import DateObjectModule from "react-date-object";
import { useForm, Controller } from 'react-hook-form';
import { useFormDraft } from '../hooks/useFormDraft';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import StickySubmitButton from '../components/StickySubmitButton';

const DatePicker = (DatePickerModule as any).default || DatePickerModule;
const persian = (persianModule as any).default || persianModule;
const persian_fa = (persianFaModule as any).default || persianFaModule;
const DateObject = (DateObjectModule as any).default || DateObjectModule;

const schema = yup.object().shape({
    passportNumber: yup.string().required('شماره گذرنامه الزامی است')
        .max(9, 'شماره گذرنامه حداکثر ۹ کاراکتر است')
        .test('isValidPassport', 'فرمت پاسپورت نامعتبر است (یک حرف انگلیسی و ۸ عدد)', (value) => isValidPassportNumber(value || '')),
    issueDate: yup.string().required('تاریخ صدور الزامی است'),
    expiryDate: yup.string().required('تاریخ انقضا الزامی است')
        .test('is-after-issue', 'تاریخ انقضا باید پس از تاریخ صدور باشد', function (value) {
            const { issueDate } = this.parent;
            if (!issueDate || !value) return true;
            return value > issueDate;
        }),
    englishName: yup.string().matches(/^[A-Za-z\s]+$/, 'فقط حروف انگلیسی مجاز است').nullable(),
    englishSurname: yup.string().matches(/^[A-Za-z\s]+$/, 'فقط حروف انگلیسی مجاز است').nullable(),
    description: yup.string().nullable()
});

type FormData = yup.InferType<typeof schema>;

export default function PassportInfo() {
    const navigate = useNavigate();
    const { user, refreshUser } = useAuth();
    const [loading, setLoading] = React.useState(false);

    const methods = useForm<any>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    const { register, handleSubmit, control, setValue, reset, watch, formState: { errors } } = methods;
    const { clearDraft } = useFormDraft('passportinfo', methods);

    useEffect(() => {
        if (user && user.passport) {
            reset({
                passportNumber: user.passport.passportNumber || '',
                issueDate: user.passport.issueDate || '',
                expiryDate: user.passport.expiryDate || '',
                englishName: user.passport.englishName || '',
                englishSurname: user.passport.englishSurname || '',
                description: user.passport.description || ''
            });
        }
    }, [user, reset]);

    const convertPersianToEnglishDigits = (str: string) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return str.replace(/[۰-۹]/g, w => persianDigits.indexOf(w).toString());
    };

    const enforceEnglishAlphaNumericLength = (e: React.FormEvent<HTMLInputElement>, maxLength: number) => {
        const val = e.currentTarget.value;
        const converted = convertPersianToEnglishDigits(val);
        let alphaNumOnly = converted.replace(/[^A-Za-z0-9]/g, '');
        if (alphaNumOnly.length > maxLength) {
            alphaNumOnly = alphaNumOnly.slice(0, maxLength);
        }
        e.currentTarget.value = alphaNumOnly;
    };

    const enforceEnglishOnly = (e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s]/g, '');
    };

    const handleIssueDateChange = (date: any) => {
        if (!date) {
            setValue('issueDate', '', { shouldValidate: true });
            return;
        }
        const persianDate = date.format("YYYY/MM/DD");
        const englishDate = convertPersianToEnglishDigits(persianDate);
        setValue('issueDate', englishDate, { shouldValidate: true });
    };

    const handleExpiryDateChange = (date: any) => {
        if (!date) {
            setValue('expiryDate', '', { shouldValidate: true });
            return;
        }
        const persianDate = date.format("YYYY/MM/DD");
        const englishDate = convertPersianToEnglishDigits(persianDate);
        setValue('expiryDate', englishDate, { shouldValidate: true });
    };

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            await api.post('/Profile/passport-info', data);
            clearDraft();
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
            <div className="sticky-top-bar">
                <button type="button" className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}>
                    <i className="fa fa-arrow-right"></i> پروفایل
                </button>
                <h3 className="sticky-title">اطلاعات گذرنامه</h3>
                
            </div>

            <div className="card">
                <form className="form-grid" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <label className={errors.passportNumber ? 'error-label' : ''}>شماره گذرنامه</label>
                        <input type="text" placeholder="شماره گذرنامه" {...register('passportNumber')} onInput={(e) => enforceEnglishAlphaNumericLength(e, 9)} className={errors.passportNumber ? 'error' : ''} style={{ textAlign: 'left', direction: 'ltr' }} />
                        {errors.passportNumber && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.passportNumber.message)}</span>}
                    </div>

                    <div className="input-group">
                        <label className={errors.issueDate ? 'error-label' : ''}>تاریخ صدور</label>
                        <Controller
                            control={control}
                            name="issueDate"
                            render={({ field }) => (
                                <DatePicker
                                    value={field.value}
                                    onChange={handleIssueDateChange}
                                    calendar={persian}
                                    locale={persian_fa}
                                    maxDate={new DateObject({ calendar: persian })}
                                    calendarPosition="bottom"
                                    fixMainPosition={true}
                                    editable={false}
                                    inputClass={`date-picker-input ${errors.issueDate ? 'error' : ''}`}
                                    containerStyle={{ width: '100%' }}
                                    style={{ width: '100%', padding: '12px 14px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', background: 'transparent' }}
                                    placeholder="انتخاب تاریخ"
                                />
                            )}
                        />
                        {errors.issueDate && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.issueDate.message)}</span>}
                    </div>

                    <div className="input-group">
                        <label className={errors.expiryDate ? 'error-label' : ''}>تاریخ انقضا</label>
                        <Controller
                            control={control}
                            name="expiryDate"
                            render={({ field }) => (
                                <DatePicker
                                    value={field.value}
                                    onChange={handleExpiryDateChange}
                                    calendar={persian}
                                    locale={persian_fa}
                                    minDate={new DateObject({ calendar: persian })}
                                    calendarPosition="bottom"
                                    fixMainPosition={true}
                                    editable={false}
                                    inputClass={`date-picker-input ${errors.expiryDate ? 'error' : ''}`}
                                    containerStyle={{ width: '100%' }}
                                    style={{ width: '100%', padding: '12px 14px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', background: 'transparent' }}
                                    placeholder="انتخاب تاریخ"
                                />
                            )}
                        />
                        {errors.expiryDate && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.expiryDate.message)}</span>}
                    </div>

                    <div className="input-group">
                        <label className={errors.englishName ? 'error-label' : ''}>نام (انگلیسی)</label>
                        <input type="text" style={{ textAlign: 'left', direction: 'ltr' }} {...register('englishName')} onInput={enforceEnglishOnly} className={errors.englishName ? 'error' : ''} />
                        {errors.englishName && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.englishName.message)}</span>}
                    </div>

                    <div className="input-group">
                        <label className={errors.englishSurname ? 'error-label' : ''}>نام خانوادگی (انگلیسی)</label>
                        <input type="text" style={{ textAlign: 'left', direction: 'ltr' }} {...register('englishSurname')} onInput={enforceEnglishOnly} className={errors.englishSurname ? 'error' : ''} />
                        {errors.englishSurname && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.englishSurname.message)}</span>}
                    </div>

                    <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                        <label>توضیحات</label>
                        <textarea rows={3} {...register('description')}></textarea>
                    </div>

                    {/* Passport Image Upload */}
                    <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                        <label>تصویر گذرنامه</label>
                        <input type="file" id="passportFile" style={{ display: 'none' }} accept="image/*" onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                alert(`فایل ${e.target.files[0].name} انتخاب شد (در نسخه اصلی آپلود می‌شود)`);
                            }
                        }} />
                        <div onClick={() => document.getElementById('passportFile')?.click()} style={{ border: '2px dashed #cbd5e1', padding: '20px', textAlign: 'center', borderRadius: '12px', background: '#f8fafc', cursor: 'pointer', transition: '0.2s' }} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.borderColor = '#cbd5e1'}>
                            <i className="fa fa-cloud-upload" style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '10px' }}></i>
                            <p style={{ margin: 0, color: 'var(--text-muted)' }}>برای انتخاب فایل کلیک کنید</p>
                        </div>
                    </div>
                <StickySubmitButton loading={loading} text="ثبت اطلاعات" loadingText="در حال ثبت..." />

            </form>
            </div>
        </div>
    );
}
