import Projects from '@/components/projects/projects'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const ProjectPage = () => {
    return (
        <main className="w-11/12 sm:w-10/12 md:w-7/12 xl:w-5/12 mx-auto">
            <div className='flex flex-col gap-1'>
                <h2 className='w-fit p-2 text-xl mb-5 cursor-pointer text-gray-500 dark:text-gray-400'>
                    Projects
                </h2>
                <Separator className='w-full bg-gradient-to-r from-fuchsia-400 via-yellow-400 to-green-400' />
                <Projects isSection={false} />
            </div>
        </main>
    )
}

export default ProjectPage