import React, { useState, useRef, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import DateObjectModule from "react-date-object";
import persianModule from "react-date-object/calendars/persian";

const DateObject = (DateObjectModule as any).default || DateObjectModule;
const persian = (persianModule as any).default || persianModule;

const ITEM_HEIGHT = 44; // px

const toPersianDigits = (num: number | string) => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
};

const PERSIAN_MONTHS = [
    'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
];

interface ScrollColumnProps {
    items: number[];
    value: number;
    onChange: (val: number) => void;
    label: string;
    isMonth?: boolean;
}

const ScrollColumn: React.FC<ScrollColumnProps> = ({ items, value, onChange, label, isMonth }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<any>(null);
    const isMountedRef = useRef(false);

    // Initial scroll to value
    useEffect(() => {
        if (scrollRef.current) {
            const index = items.indexOf(value);
            if (index !== -1) {
                const targetScrollTop = index * ITEM_HEIGHT;
                // 'auto' is universally supported for instant jump, unlike 'instant'
                scrollRef.current.scrollTo({ top: targetScrollTop, behavior: 'auto' });
                scrollRef.current.scrollTop = targetScrollTop; // Fallback
                isMountedRef.current = true;
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    // Sync when value changes externally, BUT avoid fighting native scroll
    useEffect(() => {
        if (!isMountedRef.current || !scrollRef.current) return;
        
        const index = items.indexOf(value);
        if (index !== -1) {
            const targetScrollTop = index * ITEM_HEIGHT;
            // Only programmatically scroll if we are significantly out of sync
            if (Math.abs(scrollRef.current.scrollTop - targetScrollTop) > 20) {
                scrollRef.current.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
            }
        }
    }, [value, items]);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        // Use a slight debounce to ensure native scrolling has finished snapping before updating React state
        scrollTimeoutRef.current = setTimeout(() => {
            if (!scrollRef.current) return;
            const scrollTop = scrollRef.current.scrollTop;
            const index = Math.round(scrollTop / ITEM_HEIGHT);
            if (index >= 0 && index < items.length) {
                if (items[index] !== value) {
                    onChange(items[index]);
                }
            }
        }, 100); 
    };

    return (
        <div style={{ flex: 1, height: ITEM_HEIGHT * 5, position: 'relative', zIndex: 2, overflow: 'hidden' }}>
            <div 
                ref={scrollRef}
                className="hide-scrollbar"
                onScroll={handleScroll}
                style={{
                    height: '100%',
                    overflowY: 'auto',
                    scrollSnapType: 'y mandatory',
                    scrollBehavior: 'smooth',
                    WebkitOverflowScrolling: 'touch' // Enable buttery smooth momentum scrolling on iOS
                }}
            >
                {/* Top Placeholders */}
                <div style={{ height: ITEM_HEIGHT * 2, scrollSnapAlign: 'center' }} />
                
                {items.map((item) => (
                    <div 
                        key={item} 
                        style={{
                            height: ITEM_HEIGHT,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            scrollSnapAlign: 'center',
                            fontSize: item === value ? (isMonth ? '1.1rem' : '1.3rem') : (isMonth ? '0.9rem' : '1.1rem'),
                            fontWeight: item === value ? '800' : '500',
                            color: item === value ? 'var(--primary)' : 'var(--text-muted)',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                        onClick={() => {
                            // Allow tapping an item to snap to it
                            onChange(item);
                            scrollRef.current?.scrollTo({
                                top: items.indexOf(item) * ITEM_HEIGHT,
                                behavior: 'smooth'
                            });
                        }}
                    >
                        {isMonth ? PERSIAN_MONTHS[item - 1] : toPersianDigits(item)}
                    </div>
                ))}

                {/* Bottom Placeholders */}
                <div style={{ height: ITEM_HEIGHT * 2, scrollSnapAlign: 'center' }} />
            </div>
        </div>
    );
};

interface CustomScrollDatePickerProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (dateString: string) => void;
    initialDate?: string; // YYYY/MM/DD
    allowFuture?: boolean;
}

export default function CustomScrollDatePicker({ isOpen, onClose, onConfirm, initialDate, allowFuture = false }: CustomScrollDatePickerProps) {
    // Get today's Jalali date only once when component mounts
    const todayJalali = useMemo(() => {
        const today = new DateObject({ calendar: persian });
        return {
            year: today.year,
            month: today.month.number,
            day: today.day
        };
    }, []);

    const [year, setYear] = useState<number>(todayJalali.year);
    const [month, setMonth] = useState<number>(todayJalali.month);
    const [day, setDay] = useState<number>(todayJalali.day);

    const convertPersianToEnglishDigits = (str: string) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return str.replace(/[۰-۹]/g, w => persianDigits.indexOf(w).toString());
    };

    useEffect(() => {
        if (isOpen) {
            if (initialDate && initialDate.trim() !== '') {
                // Ensure english digits for parsing
                const englishInitial = convertPersianToEnglishDigits(initialDate);
                const parts = englishInitial.split('/');
                if (parts.length === 3) {
                    setYear(parseInt(parts[0], 10));
                    setMonth(parseInt(parts[1], 10));
                    setDay(parseInt(parts[2], 10));
                }
            } else {
                setYear(todayJalali.year);
                setMonth(todayJalali.month);
                setDay(todayJalali.day);
            }
        }
    }, [isOpen, initialDate, todayJalali]);

    const years = useMemo(() => {
        if (allowFuture) {
            // Show from 50 years in future to 50 years in past
            return Array.from({ length: 100 }, (_, i) => todayJalali.year + 50 - i);
        }
        // Past only (e.g. birth dates)
        return Array.from({ length: 110 }, (_, i) => todayJalali.year - i);
    }, [todayJalali.year, allowFuture]);
    
    // Only show months up to the current month if the current year is selected (and not allowing future)
    let maxMonths = 12;
    if (!allowFuture && year === todayJalali.year) {
        maxMonths = todayJalali.month;
    }
    const months = Array.from({ length: maxMonths }, (_, i) => i + 1);
    
    let maxDays = 31;
    if (month > 6) maxDays = 30;
    if (month === 12) maxDays = 29; 
    if (!allowFuture && year === todayJalali.year && month === todayJalali.month) {
        maxDays = Math.min(maxDays, todayJalali.day);
    }
    const days = Array.from({ length: maxDays }, (_, i) => i + 1);

    // Auto correct month or day if they go out of bounds due to year/month changing
    useEffect(() => {
        if (month > maxMonths) setMonth(maxMonths);
    }, [maxMonths, month]);

    useEffect(() => {
        if (day > maxDays) setDay(maxDays);
    }, [maxDays, day]);

    if (!isOpen) return null;

    const handleConfirm = () => {
        const yStr = year.toString();
        const mStr = month.toString().padStart(2, '0');
        const dStr = day.toString().padStart(2, '0');
        onConfirm(`${yStr}/${mStr}/${dStr}`);
    };

    if (typeof document === 'undefined') return null;

    return ReactDOM.createPortal(
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.3s ease'
        }}>
            <div style={{
                background: '#fff',
                borderTopLeftRadius: '28px',
                borderTopRightRadius: '28px',
                padding: '24px 20px',
                boxShadow: '0 -10px 40px rgba(0,0,0,0.15)',
                // Ensure it's comfortably above bottom edges on mobile
                paddingBottom: 'max(24px, env(safe-area-inset-bottom))'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <button type="button" onClick={onClose} style={{ background: 'rgba(239, 68, 68, 0.1)', border: 'none', color: 'var(--danger)', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer', padding: '8px 16px', borderRadius: '12px' }}>لغو</button>
                    <h4 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-dark)', fontWeight: '800' }}>انتخاب تاریخ</h4>
                    <button type="button" onClick={handleConfirm} style={{ background: 'var(--primary)', border: 'none', color: '#fff', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer', padding: '8px 16px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)' }}>تایید</button>
                </div>

                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', background: '#f8fafc', borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                    
                    {/* Column Headers */}
                    <div style={{ display: 'flex', direction: 'rtl', padding: '12px 0', borderBottom: '1px solid #e2e8f0', background: '#f1f5f9' }}>
                        <div style={{ flex: 1, textAlign: 'center', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>روز</div>
                        <div style={{ flex: 1, textAlign: 'center', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>ماه</div>
                        <div style={{ flex: 1, textAlign: 'center', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>سال</div>
                    </div>

                    <div style={{ position: 'relative', display: 'flex', direction: 'rtl' }}>
                        {/* Selection Highlight Box */}
                        <div style={{
                            position: 'absolute',
                            top: ITEM_HEIGHT * 2,
                            left: 10,
                            right: 10,
                            height: ITEM_HEIGHT,
                            background: '#fff',
                            border: '2px solid var(--primary)',
                            borderRadius: '12px',
                            boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)',
                            pointerEvents: 'none',
                            zIndex: 1
                        }} />

                        <ScrollColumn items={days} value={day} onChange={setDay} label="" />
                        <ScrollColumn items={months} value={month} onChange={setMonth} label="" isMonth={true} />
                        <ScrollColumn items={years} value={year} onChange={setYear} label="" />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
