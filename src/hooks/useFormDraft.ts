import { useEffect, useCallback, useRef } from 'react';

export function useFormDraft(formId: string, methods: any, isDataLoaded: boolean) {
    const { watch, reset } = methods;
    const isRestoringRef = useRef(false);

    // Load draft when API data is loaded
    useEffect(() => {
        if (!isDataLoaded) return;
        
        const savedDraft = localStorage.getItem(`form-draft-${formId}`);
        if (savedDraft) {
            try {
                const parsed = JSON.parse(savedDraft);
                if (parsed && Object.keys(parsed).length > 0) {
                    isRestoringRef.current = true;
                    // setTimeout ensures we overwrite the component's default reset from the API
                    const timeoutId = setTimeout(() => {
                        reset(parsed);
                        // allow a tiny bit more time for watch to fire before unlocking
                        setTimeout(() => {
                            isRestoringRef.current = false;
                        }, 50);
                    }, 50);
                    return () => clearTimeout(timeoutId);
                }
            } catch (e) {
                console.error("Failed to parse form draft", e);
            }
        }
    }, [formId, reset, isDataLoaded]);

    // Save draft continuously
    useEffect(() => {
        if (!isDataLoaded) return;
        
        const subscription = watch((value) => {
            // If we are in the middle of restoring from draft, do NOT overwrite the draft with API defaults
            if (isRestoringRef.current) return;
            
            // Don't save empty objects
            if (value && Object.keys(value).length > 0) {
                localStorage.setItem(`form-draft-${formId}`, JSON.stringify(value));
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, formId, isDataLoaded]);

    const clearDraft = useCallback(() => {
        localStorage.removeItem(`form-draft-${formId}`);
    }, [formId]);

    return { clearDraft };
}
