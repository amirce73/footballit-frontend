import React, { useEffect, useState, useRef } from 'react';

interface StickySubmitButtonProps {
    loading: boolean;
    loadingText?: string;
    text?: string;
    onClick?: () => void;
    type?: 'submit' | 'button';
}

export default function StickySubmitButton({
    loading,
    loadingText = 'در حال ثبت...',
    text = 'ثبت اطلاعات',
    onClick,
    type = 'submit'
}: StickySubmitButtonProps) {
    const [bottomOffset, setBottomOffset] = useState(65); // default: above bottom nav
    const btnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const vv = window.visualViewport;
        if (!vv) return;

        const handleResize = () => {
            const windowHeight = window.innerHeight;
            const viewportHeight = vv.height;
            const keyboardHeight = windowHeight - viewportHeight;

            if (keyboardHeight > 100) {
                // Keyboard is open — place button just above keyboard
                setBottomOffset(keyboardHeight + 5);
            } else {
                // Keyboard is closed — place above bottom nav
                setBottomOffset(65);
            }
        };

        vv.addEventListener('resize', handleResize);
        vv.addEventListener('scroll', handleResize);

        return () => {
            vv.removeEventListener('resize', handleResize);
            vv.removeEventListener('scroll', handleResize);
        };
    }, []);

    return (
        <div
            ref={btnRef}
            className="sticky-submit-wrapper"
            style={{ bottom: `${bottomOffset}px` }}
        >
            <button
                type={type}
                className="btn-app-primary sticky-submit-btn"
                disabled={loading}
                onClick={onClick}
            >
                <i className="fa fa-check" style={{ marginLeft: '8px' }}></i>
                {loading ? loadingText : text}
            </button>
        </div>
    );
}
