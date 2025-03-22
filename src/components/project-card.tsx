import React, { FC } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"
import { Icon, iconName } from '@/assets/icons/icons'
import Image from 'next/image'
import Link from 'next/link'
import { Globe } from 'lucide-react'

interface ProjectCardProps {
    name: string
    duration: string
    image: string
    stack: iconName[]
    github: string
    live: string
}

const ProjectCard: FC<ProjectCardProps> = ({ name, duration, image, stack, github, live }) => {
    return (
        <Card className='bg-gray-50 dark:bg-neutral-950'>
            <CardContent className='p-3'>
                <div className='flex flex-col gap-y-2'>
                    <Image
                        src={image}
                        alt={name}
                        width={0} height={0}
                        layout="responsive"
                        objectFit="cover"
                        className='border border-gray-300 dark:border-gray-800 rounded'
                    />
                    <div>
                        <CardTitle>{name}</CardTitle>
                        <CardDescription>{duration}</CardDescription>
                    </div>
                    <div className="flex gap-x-1">
                        {
                            stack.map((tech) => (
                                <Icon key={tech} iconName={tech} className='w-4 h-4' />
                            ))
                        }
                    </div>
                </div>
            </CardContent>
            <CardFooter className='p-3 flex items-center gap-2'>
                {github && <Link key={'github'} href={github}
                    target='_blank'
                    className='text-xs inline-flex items-center rounded p-1 bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-gray-300 dark:hover:text-gray-700 dark:hover:bg-gray-300 transition-colors ease-in-out duration-300'>
                    Source
                    <Icon iconName={"github"} className='ml-1 w-3 h-3' />
                </Link>}
                {live && <Link key={'live'} href={live}
                    target='_blank'
                    className='text-xs inline-flex items-center rounded p-1 bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-gray-300 dark:hover:text-gray-700 dark:hover:bg-gray-300 transition-colors ease-in-out duration-300'>
                    Live
                    <Globe className='ml-1 w-3 h-3' />
                </Link>}
            </CardFooter>
        </Card>
    )
}

export default ProjectCard