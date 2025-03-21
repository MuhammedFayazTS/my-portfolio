import React, { FC } from 'react'

type SkillCardProps = {
    name: string
    Icon?: React.ReactElement
}

const SkillCard: FC<SkillCardProps> = ({ name, Icon }) => {
    return (
        <div className={`aspect-video flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 hover:bg-gray-500 dark:hover:bg-sky-500 transition-colors ease-in-out rounded-lg cursor-pointer p-2`}>
            {Icon && Icon}
            <span className="text-xs text-gray-900 dark:text-gray-300">{name}</span>
        </div>
    )
}

export default SkillCard