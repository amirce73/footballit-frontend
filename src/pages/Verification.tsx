import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import StickySubmitButton from '../components/StickySubmitButton';
import { isValidIranianNationalId } from '../utils/validations';
import CustomScrollDatePicker from '../components/CustomScrollDatePicker';

const schema = yup.object().shape({
    nationalId: yup.string().length(10, 'کد ملی باید دقیقاً ۱۰ رقم باشد')
        .matches(/^[0-9]+$/, 'فقط عدد مجاز است')
        .test('isValidNationalId', 'کد ملی وارد شده معتبر نیست', (value) => isValidIranianNationalId(value || ''))
        .required('کد ملی الزامی است'),
    birthDate: yup.string().required('تاریخ تولد الزامی است')
});

type FormData = yup.InferType<typeof schema>;

export default function Verification() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const { register, handleSubmit, control, setValue, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const idCardInputRef = React.useRef<HTMLInputElement>(null);
    const selfieInputRef = React.useRef<HTMLInputElement>(null);

    const convertPersianToEnglishDigits = (str: string) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return str.replace(/[۰-۹]/g, w => persianDigits.indexOf(w).toString());
    };

    const enforceNumericLength = (e: React.FormEvent<HTMLInputElement>, maxLength: number) => {
        const val = e.currentTarget.value;
        const converted = convertPersianToEnglishDigits(val);
        e.currentTarget.value = converted.replace(/[^0-9]/g, '');
        if (e.currentTarget.value.length > maxLength) {
            e.currentTarget.value = e.currentTarget.value.slice(0, maxLength);
        }
    };

    const handleDateChange = (date: any) => {
        if (!date) {
            setValue('birthDate', '', { shouldValidate: true });
            return;
        }
        const persianDate = date.format("YYYY/MM/DD");
        const englishDate = convertPersianToEnglishDigits(persianDate);
        setValue('birthDate', englishDate, { shouldValidate: true });
    };

    const onSubmit = (data: FormData) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert('مدارک با موفقیت ارسال شد!');
        }, 2000);
    };

    return (
        <div id="view-verification" className="view-section fade-in">
            <div className="sticky-top-bar">
                <button type="button" className="btn-top-action btn-back-top" onClick={() => navigate('/profile-hub')}><i className="fa fa-arrow-right"></i> پروفایل</button>
                <h3 className="sticky-title">احراز هویت حساب</h3>
            </div>

            <div style={{ "background": "var(--primary-light)", "color": "var(--primary)", "padding": "16px", "borderRadius": "var(--radius-md)", "marginBottom": "16px", "fontSize": "0.8rem", "fontWeight": "700", "lineHeight": "1.6" }}>
                <i className="fa fa-info-circle" style={{ "fontSize": "1.1rem", "marginBottom": "6px", "display": "block" }}></i>
                لطفاً اطلاعات هویتی خود را دقیق وارد کنید. این اطلاعات برای استعلام از سامانه ثبت احوال استفاده می‌شود.
            </div>

            <div className="card">
                <form className="form-grid" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <label className={errors.nationalId ? 'error-label' : ''}>کد ملی (۱۰ رقم)</label>
                        <input type="text" inputMode="numeric" placeholder="مثال: ۱۲۳۴۵۶۷۸۹۰" {...register('nationalId')} onInput={(e) => enforceNumericLength(e, 10)} className={errors.nationalId ? 'error' : ''} />
                        {errors.nationalId && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.nationalId.message)}</span>}
                    </div>
                    <div className="input-group">
                        <label className={errors.birthDate ? 'error-label' : ''}>تاریخ تولد(شناسنامه)</label>
                        <Controller
                            control={control}
                            name="birthDate"
                            render={({ field }) => (
                                <>
                                    <div 
                                        className={`date-picker-input ${errors.birthDate ? 'error' : ''}`}
                                        style={{ width: '100%', padding: '12px 14px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', background: '#fff', cursor: 'pointer', minHeight: '44px', display: 'flex', alignItems: 'center' }}
                                        onClick={() => setIsDatePickerOpen(true)}
                                    >
                                        {field.value || <span style={{ color: '#94a3b8' }}>انتخاب تاریخ</span>}
                                    </div>
                                    <CustomScrollDatePicker
                                        isOpen={isDatePickerOpen}
                                        onClose={() => setIsDatePickerOpen(false)}
                                        onConfirm={(dateString) => {
                                            field.onChange(dateString);
                                            setIsDatePickerOpen(false);
                                        }}
                                        initialDate={field.value}
                                    />
                                </>
                            )}
                        />
                        {errors.birthDate && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.birthDate.message)}</span>}
                    </div>
                    <div className="input-group desktop-full-width" style={{ marginTop: '8px' }}>
                        <label>تصویر روی کارت ملی</label>
                        <div 
                            style={{ "border": "2px dashed var(--border)", "padding": "20px", "textAlign": "center", "borderRadius": "var(--radius-md)", "background": "#f8fafc", "cursor": "pointer" }}
                            onClick={() => idCardInputRef.current?.click()}
                        >
                            <i className="fa fa-id-card-o" style={{ "fontSize": "2rem", "color": "var(--text-muted)", "marginBottom": "8px" }}></i>
                            <p style={{ "fontSize": "0.8rem", "color": "var(--text-muted)", "fontWeight": "700" }}>برای انتخاب فایل
                                کلیک کنید</p>
                            <input ref={idCardInputRef} type="file" accept="image/*" style={{ "display": "none" }} />
                        </div>
                    </div>
                    <div className="input-group desktop-full-width">
                        <label>تصویر چهره (سلفی زنده)</label>
                        <div 
                            style={{ "border": "2px dashed var(--border)", "padding": "20px", "textAlign": "center", "borderRadius": "var(--radius-md)", "background": "#f8fafc", "cursor": "pointer" }}
                            onClick={() => selfieInputRef.current?.click()}
                        >
                            <i className="fa fa-camera" style={{ "fontSize": "2rem", "color": "var(--text-muted)", "marginBottom": "8px" }}></i>
                            <p style={{ "fontSize": "0.8rem", "color": "var(--text-muted)", "fontWeight": "700" }}>برای گرفتن عکس
                                کلیک کنید</p>
                            <input ref={selfieInputRef} type="file" accept="image/*" capture="user" style={{ "display": "none" }} />
                        </div>
                    </div>

                    <StickySubmitButton
                        loading={loading}
                        text="ارسال مدارک"
                        loadingText="در حال ارسال..."
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
}
