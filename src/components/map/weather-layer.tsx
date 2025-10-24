'use client';
import Image from 'next/image';
import React, { useMemo } from 'react';

interface WeatherLayerProps {
    type: 'rain' | 'cloudy' | 'thunderstorm' | 'sunny';
}

const WeatherLayer: React.FC<WeatherLayerProps> = ({ type }) => {

    const raindrops = useMemo(() => {
        if (type === 'rain' || type === 'thunderstorm') {
            return Array.from({ length: 100 }, (_, i) => (
                <div
                    key={i}
                    className="raindrop"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random()}s`,
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
                    width={100}
                    height={60}
                    className={`cloud cloud-${i + 1}`}
                    alt="cloud"
                />
            ));
        }
        return [];
    }, [type]);

    const lightning = useMemo(() => {
        if (type === 'thunderstorm') {
            return <div className="lightning" />;
        }
        return null;
    }, [type]);

    const sunGlare = useMemo(() => {
        if (type === 'sunny') {
            return <div className="sun-glare" />;
        }
        return null;
    }, [type]);

    return (
        <div className="pointer-events-none absolute inset-0 z-[500]">
            {raindrops}
            {clouds}
            {lightning}
            {sunGlare}
        </div>
    );
};

export default WeatherLayer;
