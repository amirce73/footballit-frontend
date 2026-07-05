import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FinancialRecord {
    id: number;
    season: string;
    remainingDocument: string;
    documentNumber: string;
    documentDate: string;
    debtor: number;
    creditor: number;
    description: string;
}

export default function FinancialTimeline() {
    const navigate = useNavigate();
    
    // Mock data based on the API integration plan
    const [records] = useState<FinancialRecord[]>([
        {
            id: 1,
            season: '1402-1403',
            remainingDocument: 'شهریه ترم پاییز',
            documentNumber: '100123',
            documentDate: '1402/07/15',
            debtor: 5000000,
            creditor: 0,
            description: 'ثبت نام اولیه کلاس'
        },
        {
            id: 2,
            season: '1402-1403',
            remainingDocument: 'شهریه ترم پاییز',
            documentNumber: '100145',
            documentDate: '1402/07/20',
            debtor: 0,
            creditor: 2000000,
            description: 'پرداخت قسط اول'
        },
        {
            id: 3,
            season: '1402-1403',
            remainingDocument: 'خرید لباس',
            documentNumber: '100189',
            documentDate: '1402/08/01',
            debtor: 850000,
            creditor: 0,
            description: 'لباس تمرین'
        }
    ]);

    const formatCurrency = (amount: number) => {
        return amount.toLocaleString() + ' تومان';
    };

    const totalDebtor = records.reduce((sum, r) => sum + r.debtor, 0);
    const totalCreditor = records.reduce((sum, r) => sum + r.creditor, 0);
    const totalRemaining = totalDebtor - totalCreditor;

    return (
        <div id="view-financial-timeline" className="view-section fade-in">
            <div className="sticky-top-bar">
                <button className="btn-top-action btn-back-top" onClick={() => navigate('/financial-hub')}>
                    <i className="fa fa-arrow-right"></i> مالی
                </button>
                <h3 className="sticky-title">تایم‌لاین وضعیت مالی</h3>
                <div style={{ padding: '5px 10px', background: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    بدهی کل: <span style={{ color: totalRemaining > 0 ? 'var(--danger-color)' : 'var(--success-color)' }}>{formatCurrency(totalRemaining)}</span>
                </div>
            </div>

            <div className="card" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                <div className="timeline-container">
                    {records.map((record) => {
                        const isDebt = record.debtor > 0;
                        const statusClass = isDebt ? 'fail' : 'success';
                        const iconClass = isDebt ? 'fa-times' : 'fa-check';
                        const statusText = isDebt ? 'پرداخت نشده (بدهی)' : 'پرداخت موفق';
                        const amount = isDebt ? record.debtor : record.creditor;

                        return (
                            <div className="timeline-item" key={record.id}>
                                <div className={`timeline-icon-circle ${statusClass}`}>
                                    <i className={`fa ${iconClass}`}></i>
                                </div>
                                <div className={`timeline-content ${statusClass}`}>
                                    <div className={`tl-header ${statusClass}`}>
                                        <span className={`tl-title ${statusClass}`}>{record.remainingDocument}</span>
                                        <span className="tl-date">{record.documentDate}</span>
                                    </div>
                                    <div className="tl-row">
                                        <span>مبلغ تراکنش:</span> 
                                        <strong>{formatCurrency(amount)}</strong>
                                    </div>
                                    <div className="tl-row">
                                        <span>بابت / شرح:</span> 
                                        <strong>{record.description}</strong>
                                    </div>
                                    <div className="tl-row">
                                        <span>شماره سند:</span> 
                                        <strong>{record.documentNumber}</strong>
                                    </div>
                                    <div className={`tl-status ${statusClass}`}>
                                        <i className={isDebt ? 'fa fa-exclamation-circle' : 'fa fa-check-circle'}></i> {statusText}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
