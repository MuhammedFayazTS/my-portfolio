import { Icon } from "@/assets/icons/icons";
import BlogCardList from "@/components/blog/blog-card-list";
import Chatbot from "@/components/chatbot/chatbot";
import ContactForm from "@/components/contact";
import ExperienceAndEducationTabs from "@/components/exp-and-edu-tabs";
import MapBox from "@/components/map/mapBox";
import Profile from "@/components/profile/profile";
import Projects from "@/components/projects/projects";
import SkillCard from "@/components/skillCard";
import Socials from "@/components/socials";
import { skills, blogs } from "@/content/data";
import { getWeather } from "@/lib/api";

export default async function Home() {
  const myPositionFromENV = process.env.NEXT_PUBLIC_MY_POSITION
    ? process.env.NEXT_PUBLIC_MY_POSITION
      .split(",")
      .map(coord => parseFloat(coord.trim()))
    : null;

  const myPosition: L.LatLngTuple =
    myPositionFromENV && myPositionFromENV.length >= 2
      ? [myPositionFromENV[0], myPositionFromENV[1]]
      : [10.127528, 76.312306];

  const weather = await getWeather(myPosition[0], myPosition[1]);

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 sm:w-10/12 md:w-7/12 xl:w-5/12 flex flex-col justify-center">

        <MapBox
          weather={weather}
          myPosition={myPosition}
           />

        <Profile />

        <Socials />

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

        <Projects />

        <BlogCardList blogs={blogs} limit={4} isLatestBlogs />

        <ContactForm />

        <Chatbot />

      </div>
    </main>
  );
}
