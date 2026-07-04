import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FinancialTimeline() {
  const navigate = useNavigate();
  return (
    <div id="view-financial-timeline" className="view-section fade-in">
            <div className="sticky-top-bar">
                <button className="btn-top-action btn-back-top" onClick={() => navigate('/registration')}><i className="fa fa-arrow-right"></i> ثبت‌نام</button>
                <h3 className="sticky-title">تایم‌لاین گزارشات مالی</h3>
                <div style={{"width":"80px"}}></div>
            </div>

            <div className="card" style={{"background":"transparent","border":"none","boxShadow":"none"}}>
                <div className="timeline-container">
                    <div className="timeline-item">
                        <div className="timeline-icon-circle fail"><i className="fa fa-times"></i></div>
                        <div className="timeline-content fail">
                            <div className="tl-header fail">
                                <span className="tl-title fail">شهریه ترم تابستان ۱۴۰۵</span>
                                <span className="tl-date">۱۴۰۵/۰۳/۰۱</span>
                            </div>
                            <div className="tl-row"><span>مبلغ تراکنش:</span> <strong>۷,۵۰۰,۰۰۰ تومان</strong></div>
                            <div className="tl-row"><span>بابت:</span> <strong>کلاس پیشرفته الف</strong></div>
                            <div className="tl-status fail"><i className="fa fa-exclamation-circle"></i> پرداخت نشده (بدهی)
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon-circle success"><i className="fa fa-check"></i></div>
                        <div className="timeline-content success">
                            <div className="tl-header success">
                                <span className="tl-title success">خرید پکیج لباس فرم</span>
                                <span className="tl-date">۱۴۰۵/۰۲/۱۵</span>
                            </div>
                            <div className="tl-row"><span>مبلغ تراکنش:</span> <strong>۸۵۰,۰۰۰ تومان</strong></div>
                            <div className="tl-row"><span>شماره پیگیری:</span> <strong>۱۴۵۸۷۹۶۵۲۳</strong></div>
                            <div className="tl-status success"><i className="fa fa-check-circle"></i> پرداخت موفق - درگاه بانک
                                ملت</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon-circle success"><i className="fa fa-check"></i></div>
                        <div className="timeline-content success">
                            <div className="tl-header success">
                                <span className="tl-title success">شهریه ترم بهار ۱۴۰۵</span>
                                <span className="tl-date">۱۴۰۴/۱۲/۲۰</span>
                            </div>
                            <div className="tl-row"><span>مبلغ تراکنش:</span> <strong>۶,۸۰۰,۰۰۰ تومان</strong></div>
                            <div className="tl-row"><span>بابت:</span> <strong>کلاس سپاهان</strong></div>
                            <div className="tl-status success"><i className="fa fa-check-circle"></i> پرداخت موفق - فیش واریزی
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon-circle" style={{"borderColor":"var(--warning)","color":"var(--warning)"}}>
                            <i className="fa fa-refresh"></i></div>
                        <div className="timeline-content warning">
                            <div className="tl-header warning">
                                <span className="tl-title warning">هزینه اردوی تدارکاتی مشهد</span>
                                <span className="tl-date">۱۴۰۴/۱۱/۰۵</span>
                            </div>
                            <div className="tl-row"><span>مبلغ تراکنش:</span> <strong>۱,۲۰۰,۰۰۰ تومان</strong></div>
                            <div className="tl-status warning"><i className="fa fa-clock-o"></i> در حال بررسی فیش واریزی</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon-circle success"><i className="fa fa-check"></i></div>
                        <div className="timeline-content success">
                            <div className="tl-header success">
                                <span className="tl-title success">شهریه ترم زمستان ۱۴۰۴</span>
                                <span className="tl-date">۱۴۰۴/۰۹/۱۵</span>
                            </div>
                            <div className="tl-row"><span>مبلغ تراکنش:</span> <strong>۵,۵۰۰,۰۰۰ تومان</strong></div>
                            <div className="tl-status success"><i className="fa fa-check-circle"></i> پرداخت موفق - درگاه سامان
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
