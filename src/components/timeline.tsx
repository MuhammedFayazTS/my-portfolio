import React, { FC } from 'react'
import TimelineItem from './timeline-item'
import { education, experiences } from '@/content/data'

interface TimelineProps {
    data: typeof experiences | typeof education
}

const Timeline: FC<TimelineProps> = ({ data }) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col justify-center divide-y divide-gray-200 [&>*]:py-5">

                <div className="w-full max-w-3xl mx-auto">
                    <div className="-my-6">
                        {
                            data.map(({ name, description, image, startDate, endDate = "", location }) => (
                                <TimelineItem
                                    key={name}
                                    name={name}
                                    description={description}
                                    image={image}
                                    startDate={startDate}
                                    endDate={endDate}
                                    location={location} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Timeline