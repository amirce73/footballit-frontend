import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

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
    const [bottomOffset, setBottomOffset] = useState(65);

    useEffect(() => {
        const vv = window.visualViewport;
        if (!vv) return;

        const onResize = () => {
            const keyboardHeight = window.innerHeight - vv.height - vv.offsetTop;
            if (keyboardHeight > 150) {
                setBottomOffset(keyboardHeight + 4);
            } else {
                setBottomOffset(65);
            }
        };

        vv.addEventListener('resize', onResize);
        vv.addEventListener('scroll', onResize);
        return () => {
            vv.removeEventListener('resize', onResize);
            vv.removeEventListener('scroll', onResize);
        };
    }, []);

    // Use a Portal so the button is rendered directly on body,
    // outside any ancestor with transform/animation (which breaks position:fixed)
    const button = (
        <div
            className="sticky-submit-wrapper"
            style={{ bottom: `${bottomOffset}px`, transition: 'bottom 0.2s ease' }}
        >
            <button
                type={type}
                className="sticky-submit-btn btn-app-primary"
                disabled={loading}
                onClick={onClick}
            >
                <i className="fa fa-check" style={{ marginLeft: '8px' }}></i>
                {loading ? loadingText : text}
            </button>
        </div>
    );

    return (
        <>
            {/* Spacer so the last form field isn't hidden behind the fixed button */}
            <div style={{ height: '80px', flexShrink: 0 }} />
            {createPortal(button, document.body)}
        </>
    );
}
