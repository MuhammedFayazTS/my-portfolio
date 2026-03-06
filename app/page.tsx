import BlogCardList from "@/components/blog/BlogList";
import ContactForm from "@/components/form/ContactForm";
import Profile from "@/components/profile/Profile";
import Skills from "@/components/profile/Skills";
import Socials from "@/components/profile/Socials";
import Projects from "@/components/projects/Projects";
import ExperienceAndEducationTabs from "@/components/timeline/ExperienceAndEducationTabs";
import { client } from "@/lib/sanity-client";
import { LATEST_POSTS_QUERY } from "@/sanity/queries/blog";
import { SanityDocument } from "next-sanity";
import dynamic from "next/dynamic";

const MapBox = dynamic(
  () => import("@/components/map/ProfileMapView"),
  // { ssr: false }
);

const options = { next: { revalidate: 60 * 60 * 24 } };

export default async function Home() {
  const myPositionFromENV = process.env.NEXT_PUBLIC_MY_POSITION
    ? process.env.NEXT_PUBLIC_MY_POSITION
      .split(",")
      .map(coord => parseFloat(coord.trim()))
    : null;

  const myPosition: [number, number] =
    myPositionFromENV && myPositionFromENV.length >= 2
      ? [myPositionFromENV[0], myPositionFromENV[1]]
      : [10.127528, 76.312306];

  const posts = await client.fetch<SanityDocument[]>(LATEST_POSTS_QUERY, {}, options);

  return (
    <div className="min-h-screen w-full flex justify-center py-0 lg:py-3">
      {/* content */}
      <main className="w-full lg:w-8/12 lg:border lg:rounded-xl">
        <MapBox myPosition={myPosition} />
        <Profile />
        <Socials />
        <Skills />
        <ExperienceAndEducationTabs />
        <Projects />
        <BlogCardList posts={posts} isLatestBlogs />
        <ContactForm />
      </main>
    </div>
  );
}