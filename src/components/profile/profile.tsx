import { profileDescription } from '@/content/data'
import React from 'react'
import ProfileImage from './profile-image'

const Profile = () => {

    return (
        <>
            <div className="w-full flex justify-start my-5 px-5">
                <ProfileImage />
                <div className="flex flex-col ml-3 md:ml-4">
                    <h2 className="text-xl font-bold text-gray-700 dark:text-gray-100">Muhammed Fayaz TS</h2>
                    <div className="flex gap-x-1 items-center">
                        <div className="animate-pulse w-2 h-2 rounded-full bg-green-600 dark:bg-green-500"></div>
                        <span className="text-sm text-neutral-400 dark:text-neutral-500">Available For Work</span>
                    </div>
                </div>
            </div>

            <span className="w-full ml-0 md:ml-4 text-gray-600 dark:text-gray-300">
                {profileDescription}
            </span>
        </>
    )
}

export default Profile
