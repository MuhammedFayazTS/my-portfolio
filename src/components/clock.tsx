'use client'

import React, { useEffect, useState,FC } from 'react'

type ClockProps = {
    customClass?: string
}

const Clock:FC<ClockProps> = ({customClass}) => {

    const timeZone = process.env.NEXT_PUBLIC_TIMEZONE || "UTC";
    const [currTime, setCurrTime] = useState(
        new Intl.DateTimeFormat("en-US", {
            timeZone,
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        }).format(new Date())
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrTime(
                new Intl.DateTimeFormat("en-US", {
                    timeZone,
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                }).format(new Date())
            );
        }, 6000);

        return () => clearInterval(timer);
    }, [timeZone]);

    return (
        <span className={`text-xs font-semibold cursor-pointer p-2 rounded bg-gray-900 text-gray-300 ${customClass}`}>{currTime}</span>
    )
}

export default Clock