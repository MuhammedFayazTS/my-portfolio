import { Icon } from "@/assets/icons/icons";
import ExperienceAndEducationTabs from "@/components/exp-and-edu-tabs";
import MapBox from "@/components/mapBox";
import SkillCard from "@/components/skillCard";
import { skills, profileDescription } from "@/content/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 sm:w-10/12 md:w-7/12 xl:w-5/12 flex flex-col justify-center">

        <MapBox />

        <div className="w-full flex justify-start my-5 px-5">
          <Image src="/icon.jpg"
            alt="image"
            width={60} height={30}
            className="rounded-full hover:grayscale transition ease-in-out"
          />
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

        <div className="w-full grid grid-cols-4 lg:grid-cols-6 gap-3 my-5">
          {
            skills.map(({ name, iconName }) => (
              <SkillCard
                key={name}
                name={name}
                Icon={<Icon iconName={iconName} className="w-6 h-6" />}
              />
            ))
          }
        </div>

        <ExperienceAndEducationTabs />

      </div>
    </main>
  );
}
