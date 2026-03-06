'use client'

import React, { useEffect, useState, FC } from 'react'

type ClockProps = {
    customClass?: string
}

const Clock: FC<ClockProps> = ({ customClass }) => {

    const timeZone = process.env.NEXT_PUBLIC_TIMEZONE || "UTC";

    const formatTime = () =>
        new Intl.DateTimeFormat("en-US", {
            timeZone,
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        }).format(new Date());

    const [currTime, setCurrTime] = useState(formatTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrTime(formatTime());
        }, 60000); // update every minute

        return () => clearInterval(timer);
    }, [timeZone]);

    return (
        <time
            className={`
        inline-flex items-center
        px-3 py-1.5
        rounded-md
        
        text-xs font-mono font-medium
        
        border border-neutral-200 dark:border-neutral-800
        
        bg-white/60 dark:bg-neutral-900/60
        backdrop-blur-md
        
        text-neutral-700 dark:text-neutral-300
        
        shadow-sm
        hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/30
        
        transition-all duration-200
        hover:-translate-y-0.5
        
        select-none
        ${customClass}
      `}
        >
            {currTime}
        </time>
    )
}

export default Clock