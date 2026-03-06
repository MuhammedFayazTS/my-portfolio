import { MapPin } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

interface TimelineItemProps {
    name: string;
    description: string;
    startDate: string;
    endDate?: string;
    image?: string;
    location: string;
    index: number;
}

const TimelineItem: FC<TimelineItemProps> = ({
    name,
    description,
    startDate,
    endDate,
    image,
    location,
    index,
}) => {
    const isLeft = index % 2 === 0;

    return (
        <div
            className={`relative flex items-start md:items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
        >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-500 shadow-lg shadow-sky-500/30" />

            {/* Card */}
            <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                <div
                    className="
          group
          rounded-xl
          border border-neutral-200 dark:border-neutral-800
          bg-white/70 dark:bg-neutral-900/60
          backdrop-blur
          p-5
          transition
          hover:-translate-y-1
          hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/40
        "
                >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-2">
                        {image && (
                            <Image
                                src={image}
                                alt={name}
                                width={36}
                                height={36}
                                className="rounded-md"
                            />
                        )}

                        <h3 className="font-semibold text-lg">{name}</h3>
                    </div>

                    {/* Dates */}
                    <div className="flex gap-2 mb-3">
                        <span className="text-xs px-2 py-1 rounded-md bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
                            {startDate}
                        </span>

                        {endDate && (
                            <span className="text-xs px-2 py-1 rounded-md bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">
                                {endDate}
                            </span>
                        )}
                    </div>

                    {/* Description */}
                    <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {description.split("#").map((text, i) => (
                            <li key={i}>• {text.trim()}</li>
                        ))}
                    </ul>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-xs mt-3 text-neutral-500">
                        <MapPin className="w-3 h-3" />
                        {location}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;