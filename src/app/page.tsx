import { Icon } from "@/assets/icons/icons";
import BlogCardList from "@/components/blog-card-list";
import Chatbot from "@/components/chatbot";
import ContactForm from "@/components/contact";
import ExperienceAndEducationTabs from "@/components/exp-and-edu-tabs";
import MapBox from "@/components/mapBox";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import SkillCard from "@/components/skillCard";
import Socials from "@/components/socials";
import { skills, blogs } from "@/content/data";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 sm:w-10/12 md:w-7/12 xl:w-5/12 flex flex-col justify-center">

        <MapBox />

        <Profile/>

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
