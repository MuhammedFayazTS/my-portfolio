'use client';

import { WeatherData } from '@/lib/api';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface WeatherInfoProps {
    weather: WeatherData;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather }) => {
    const { temperature, weatherName } = weather;
    const container = useRef<HTMLDivElement>(null);

    gsap.registerPlugin();

    useGSAP(() => {
        if (!container.current || !weatherName) return;

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });
        tl.fromTo(
            container.current,
            { y: 30 },
            { y: 0,  duration: 1, ease: 'power2.out' }
        ).to(
            container.current,
            { y: 30, duration: 1, delay: 5, ease: 'power2.in' }
        );

        return () => tl.kill();
    }, { scope: container, dependencies: [weatherName] });

    if (!temperature) return null;

    return (
        <>
            {weatherName && (
                <div
                    ref={container}
                    className="absolute bottom-2 left-4 z-[1000] text-xs font-bold text-gray-800 dark:text-gray-400"
                >
                    {weatherName}
                </div>
            )}
            <div className="absolute bottom-2 right-4 z-[1000] text-xs font-bold text-gray-800 dark:text-gray-400">
                {temperature} ℃
            </div>
        </>
    );
};

export default WeatherInfo;
