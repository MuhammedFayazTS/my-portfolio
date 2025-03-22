import React from 'react'
import { projectsData } from '@/content/data'
import ProjectCard from './project-card'
import { Separator } from './ui/separator'

const Projects = () => {
    return (
        <>
            <div className='flex gap-x-2'>
                <span className='w-fit p-2 text-xs mb-5 cursor-pointer bg-gray-100 dark:bg-gray-900/50 dark:hover:bg-gray-800/50 hover:bg-gray-200 border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 text-gray-500 dark:text-gray-400 rounded'>Recent Projects</span>
                <Separator className='flex-1 mt-4' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                {
                    projectsData.map(({ name, duration, image, stack, github, live }) => (
                        <ProjectCard
                            key={name}
                            name={name}
                            duration={duration}
                            image={image}
                            stack={stack}
                            github={github}
                            live={live}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Projects