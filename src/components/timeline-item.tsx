import { MapPin } from 'lucide-react'
import Image from 'next/image'
import React, { FC } from 'react'

interface TimelineItemProps {
    name: string
    description: string
    startDate: string
    image?: string
    endDate?: string
    location: string
}

const TimelineItem: FC<TimelineItemProps> = ({ name, description, image, startDate, endDate, location }) => {
    return (
        <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-sky-600 after:border-4 after:box-content after:border-gray-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <div className='sm:absolute left-0 translate-y-0.5 flex justify-center items-center md:flex-col md:space-y-2 md:space-x-0 space-x-2'>
                    <time className="translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                        {startDate}
                    </time>
                    {endDate && <time className="translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-amber-600 bg-amber-100 rounded-full">
                        {endDate}
                    </time>}
                </div>
                {image && <Image src={image}
                    alt={name}
                    width={36} height={18}
                    className="rounded-full hover:grayscale transition ease-in-out"
                />}
                <div className="mx-2 text-xl font-bold text-gray-900 dark:text-gray-300">{name}</div>
            </div>
            {/* <!-- Content --> */}
            <ul>
                {description
                    .split("#")
                    .map((words, index) => (
                        <li key={index} className="text-gray-500 dark:text-gray-400">
                            {words.trim()} {/* Remove extra spaces */}
                        </li>
                    ))}
            </ul>
            <div className="inline-flex items-center gap-x-1 text-gray-500 dark:text-gray-400">
                <MapPin className='w-4 h-4' />
                {location}
            </div>
        </div>
    )
}

export default TimelineItem