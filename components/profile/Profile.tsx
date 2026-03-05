import { PROFILE_QUERY } from '@/sanity/queries/blog';
import { client } from '@/lib/sanity-client';
import ProfileImage from './ProfileImage';

const Profile = async () => {
    const profile = await client.fetch<{ about: string }>(
        PROFILE_QUERY,
        {},
        { next: { revalidate: 60 * 60 * 24 * 7 } }
    );

    return (
        <section className="w-full flex flex-col items-center text-center px-6 py-10">

            {/* Profile Image */}
            <div className="mb-4">
                <ProfileImage />
            </div>

            <span className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400">
                <span className="animate-pulse w-2 h-2 rounded-full bg-green-500"></span>
                Available for Work
            </span>

            {/* Name */}
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Muhammed Fayaz TS
            </h1>

            {/* Role Highlight */}
            <div className="mt-3 flex items-center gap-2">
                <span className="px-3 py-1 text-sm font-medium rounded-full 
        bg-blue-100 text-blue-700 
        dark:bg-blue-900/40 dark:text-blue-300">
                    Software Engineer
                </span>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
                {profile.about ?? ""}
            </p>

        </section>
    );
};

export default Profile;