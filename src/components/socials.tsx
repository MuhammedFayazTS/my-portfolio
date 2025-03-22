import { Icon } from '@/assets/icons/icons'
import { quickSocials } from '@/content/data'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Socials = () => {
    return (
        <div className='flex items-center gap-x-2 my-2'>
            {
                quickSocials.map(({ iconName, url }) => (
                    <Link key={iconName} href={url}
                        target='_blank'
                        className='rounded-full p-2 border border-gray-300 dark:border-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-gray-300 dark:hover:text-gray-700 dark:hover:bg-gray-300 transition-colors ease-in-out duration-300'>
                        <Icon iconName={iconName} className='w-4 h-4' />
                    </Link>
                ))
            }
            <Link href={"/icon.jpg"}
                download
                target="_blank"
                className='inline-flex items-center gap-x-1 rounded p-2 text-sm border border-gray-300 dark:border-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-gray-300 dark:hover:text-gray-700 dark:hover:bg-gray-300 transition-colors ease-in-out duration-300'>
                Resume
                <Download className='w-4 h-4' />
            </Link>
        </div>
    )
}

export default Socials