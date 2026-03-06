'use client';

import Image from 'next/image';
import React, { useMemo } from 'react';

interface WeatherLayerProps {
    type: 'rain' | 'cloudy' | 'thunderstorm' | 'sunny';
}

const WeatherLayer: React.FC<WeatherLayerProps> = ({ type }) => {

    const raindrops = useMemo(() => {
        if (type === 'rain' || type === 'thunderstorm') {
            return Array.from({ length: 50 }, (_, i) => (
                <span
                    key={i}
                    className="weather-rain"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ));
        }
        return [];
    }, [type]);

    const clouds = useMemo(() => {
        if (type === 'cloudy' || type === 'thunderstorm') {
            return Array.from({ length: type === 'cloudy' ? 4 : 2 }, (_, i) => (
                <Image
                    key={i}
                    src="/assets/cloud.webp"
                    width={160}
                    height={90}
                    alt="cloud"
                    className={`weather-cloud weather-cloud-${i + 1}`}
                />
            ));
        }
        return [];
    }, [type]);

    const lightning = type === 'thunderstorm' ? (
        <div className="weather-lightning" />
    ) : null;

    const sun = type === 'sunny' ? <div className="weather-sun" /> : null;

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-[400]">
            {raindrops}
            {clouds}
            {lightning}
            {sun}
        </div>
    );
};

export default WeatherLayer;