import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidIranianBankCard, isValidSheba } from '../utils/validations';
import api from '../api';
import { useForm } from 'react-hook-form';
import { useFormDraft } from '../hooks/useFormDraft';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import StickySubmitButton from '../components/StickySubmitButton';

interface BankAccount {
    id: number;
    bankName: string;
    cardNumber: string;
    sheba: string;
    branch?: string;
}

const schema = yup.object().shape({
    bankName: yup.string().required('نام بانک الزامی است').matches(/^[آ-یژپچگ\s]+$/, 'فقط حروف فارسی مجاز است'),
    accountName: yup.string().required('نام صاحب حساب الزامی است').matches(/^[آ-یژپچگ\s]+$/, 'فقط حروف فارسی مجاز است'),
    cardNumber: yup.string().required('شماره کارت الزامی است')
        .length(16, 'شماره کارت باید ۱۶ رقم باشد')
        .test('isValidCard', 'شماره کارت نامعتبر است', (value) => isValidIranianBankCard(value || '')),
    sheba: yup.string().required('شماره شبا الزامی است')
        .length(24, 'شماره شبا باید ۲۴ رقم (بدون IR) باشد')
        .test('isValidSheba', 'شماره شبا نامعتبر است', (value) => isValidSheba(value || '')),
    branch: yup.string().nullable().matches(/^[آ-یژپچگ\s]*$/, 'فقط حروف فارسی مجاز است')
});

type FormData = yup.InferType<typeof schema>;

export default function BankInfo() {
    const navigate = useNavigate();
    const [accounts, setAccounts] = useState<BankAccount[]>([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const methods = useForm<any>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    const { register, handleSubmit, reset, watch, formState: { errors } } = methods;
    const { clearDraft } = useFormDraft('bankinfo', methods);

    const fetchAccounts = async () => {
        try {
            const res = await api.get('/Finance/hub');
            if (res.data && res.data.bankAccounts) {
                setAccounts(res.data.bankAccounts);
            }
        } catch (error) {
            console.error('Error fetching bank accounts:', error);
        }
    };

    useEffect(() => {
        fetchAccounts();
    }, []);

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

    const enforcePersian = (e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.value = e.currentTarget.value.replace(/[^آ-یژپچگ\s]/g, '');
    };

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            await api.post('/Finance/bank-account', {
                bankName: data.bankName,
                cardNumber: data.cardNumber,
                sheba: data.sheba,
                branch: data.branch
            });
            alert('حساب بانکی با موفقیت اضافه شد!');
            setIsModalOpen(false);
            reset();
            fetchAccounts();
        } catch (error) {
            console.error('Error saving bank account:', error);
            alert('خطا در ذخیره اطلاعات');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="view-bank-info" className="view-section fade-in">
            <div className="sticky-top-bar">
                <button className="btn-top-action btn-back-top" onClick={() => navigate('/financial-hub')}>
                    <i className="fa fa-arrow-right"></i> مالی
                </button>
                <h3 className="sticky-title">حساب‌های بانکی</h3>
                
            </div>
            
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="table-responsive">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>نام بانک</th>
                                <th>شعبه</th>
                                <th>شماره کارت</th>
                                <th>شماره شبا</th>
                                <th>عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.length === 0 ? (
                                <tr>
                                    <td colSpan={5} style={{ textAlign: 'center', padding: '20px' }}>هیچ حساب بانکی ثبت نشده است.</td>
                                </tr>
                            ) : (
                                accounts.map((acc) => (
                                    <tr key={acc.id}>
                                        <td>{acc.bankName}</td>
                                        <td>{acc.branch || '-'}</td>
                                        <td style={{ direction: 'ltr', textAlign: 'right' }}>{acc.cardNumber}</td>
                                        <td style={{ direction: 'ltr', textAlign: 'right' }}>{acc.sheba}</td>
                                        <td>
                                            <button className="btn-icon" title="حذف" onClick={() => alert('حذف در این نسخه آزمایشی غیرفعال است')}>
                                                <i className="fa fa-trash" style={{ color: 'var(--danger)' }}></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)} style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
                    backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', 
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <div className="modal-content" onClick={e => e.stopPropagation()} style={{
                        background: 'var(--surface)', padding: '20px', borderRadius: '12px', 
                        width: '90%', maxWidth: '500px', boxShadow: 'var(--shadow-md)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h3 style={{ margin: 0 }}>ثبت حساب بانکی جدید</h3>
                            <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: 'var(--text-dark)' }}>&times;</button>
                        </div>
                        
                        <form className="form-grid" onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                                <label className={errors.bankName ? 'error-label' : ''}>نام بانک</label>
                                <input type="text" placeholder="مثال: ملی" {...register('bankName')} onInput={enforcePersian} className={errors.bankName ? 'error' : ''} />
                                {errors.bankName && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.bankName.message)}</span>}
                            </div>
                            
                            <div className="input-group">
                                <label className={errors.sheba ? 'error-label' : ''}>شماره شبا (بدون IR)</label>
                                <div style={{ display: 'flex', alignItems: 'stretch' }}>
                                    <span style={{ padding: '12px', background: '#e2e8f0', border: '1px solid #cbd5e1', borderLeft: 'none', borderRadius: '0 8px 8px 0', fontSize: '0.9rem', color: '#64748b' }}>IR</span>
                                    <input type="text" inputMode="numeric" placeholder="مثال: 1201234..." {...register('sheba')} onInput={(e) => enforceNumericLength(e, 24)} className={errors.sheba ? 'error' : ''} style={{ borderRadius: '8px 0 0 8px', textAlign: 'left', direction: 'ltr' }} />
                                </div>
                                {errors.sheba && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.sheba.message)}</span>}
                            </div>

                            <div className="input-group">
                                <label className={errors.branch ? 'error-label' : ''}>شعبه</label>
                                <input type="text" {...register('branch')} onInput={enforcePersian} className={errors.branch ? 'error' : ''} />
                                {errors.branch && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.branch.message)}</span>}
                            </div>

                            <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                                <label className={errors.cardNumber ? 'error-label' : ''}>شماره کارت (۱۶ رقم)</label>
                                <input type="text" inputMode="numeric" style={{ direction: 'ltr', textAlign: 'left' }} placeholder="xxxx-xxxx-xxxx-xxxx" {...register('cardNumber')} onInput={(e) => enforceNumericLength(e, 16)} className={errors.cardNumber ? 'error' : ''} />
                                {errors.cardNumber && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.cardNumber.message)}</span>}
                            </div>

                            <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                                <label className={errors.sheba ? 'error-label' : ''}>شماره شبا (۲۴ رقم - بدون IR)</label>
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <span style={{ padding: '0 10px', background: '#e2e8f0', borderRadius: '0 8px 8px 0', border: '1px solid #cbd5e1', borderLeft: 'none', height: '42px', display: 'flex', alignItems: 'center', zIndex: 1, color: '#475569', fontWeight: 'bold' }}>IR</span>
                                    <input type="text" style={{ direction: 'ltr', textAlign: 'left', borderRadius: '8px 0 0 8px', flex: 1 }} placeholder="000000000000000000000000" {...register('sheba')} onInput={(e) => enforceNumericLength(e, 24)} className={errors.sheba ? 'error' : ''} />
                                </div>
                                {errors.sheba && <span className="error-text"><i className="fa fa-exclamation-triangle"></i> {String(errors.sheba.message)}</span>}
                            </div>

                            <div className="input-group" style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
                                <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', padding: '12px' }}>
                                    {loading ? 'در حال ثبت...' : 'ثبت حساب بانکی'}
                                </button>
                            </div>
                <StickySubmitButton loading={loading} text="ثبت حساب بانکی" loadingText="در حال ثبت..." />

            </form>
                    </div>
                </div>
            )}
        </div>
    );
}
