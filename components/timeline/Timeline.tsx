import React, { FC } from "react";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
    data: any[];
}

const Timeline: FC<TimelineProps> = ({ data }) => {
    return (
        <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />

            <div className="space-y-10">
                {data.map((item, index) => (
                    <TimelineItem key={item.name} {...item} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Timeline;