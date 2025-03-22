import { Copyright } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Socials from './socials'

const Footer = () => {
    return (
        <footer className='w-full flex justify-center items-center'>
            <div className='w-11/12 sm:w-10/12 md:w-7/12 xl:w-5/12 p-5 flex justify-center md:justify-between items-center flex-wrap'>
                <span className='inline-flex items-center gap-x-1 '>
                    <span className='inline-flex items-center text-xs text-gray-400'>
                        <Copyright className='w-2.5 h-2.5 mr-1' /> 2025 {" | "}
                    </span>
                    <Link href={"/"} className='text-gray-300 hover:text-gray-100' >muhammedfayazts.xyz</Link>
                </span>
                <Socials />
            </div>
        </footer>
    )
}

export default Footer