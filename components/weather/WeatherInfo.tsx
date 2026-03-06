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

    useGSAP(() => {
        if (!container.current) return;

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 8 });

        tl.fromTo(
            container.current,
            { y: 12, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
        ).to(
            container.current,
            { y: 12, opacity: 0, duration: 0.6, delay: 6, ease: 'power2.in' }
        );

        return () => tl.kill();
    }, { scope: container });

    if (!temperature) return null;

    return (
        <div className="absolute bottom-3 right-3 z-[1000]">
            <div
                ref={container}
                className="
          flex items-center gap-2
          px-3 py-1.5
          rounded-md
          
          text-xs font-medium
          
          border border-neutral-200 dark:border-neutral-800
          
          bg-white/60 dark:bg-neutral-900/60
          backdrop-blur-md
          
          text-neutral-700 dark:text-neutral-300
          
          shadow-sm
          hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/30
          
          transition-all duration-200
          select-none
        "
            >
                {weatherName && (
                    <span className="text-neutral-500 dark:text-neutral-400">
                        {weatherName}
                    </span>
                )}

                <span className="font-mono">{temperature}°C</span>
            </div>
        </div>
    );
};

export default WeatherInfo;