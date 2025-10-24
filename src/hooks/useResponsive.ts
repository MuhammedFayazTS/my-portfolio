import { useEffect, useState } from 'react';

interface ResponsiveState {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isWideScreen: boolean;
    width: number;
}

export const useResponsive = (): ResponsiveState => {
    const getDeviceState = (width: number): ResponsiveState => ({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024 && width < 1440,
        isWideScreen: width >= 1440,
        width,
    });

    const [state, setState] = useState<ResponsiveState>(() => {
        if (typeof window !== 'undefined') {
            return getDeviceState(window.innerWidth);
        }
        return {
            isMobile: false,
            isTablet: false,
            isDesktop: true,
            isWideScreen: false,
            width: 1024,
        };
    });

    useEffect(() => {
        const handleResize = () => {
            setState(getDeviceState(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return state;
};