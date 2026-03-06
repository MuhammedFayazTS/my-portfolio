import React from "react";
import ProjectCard from "./ProjectsCard";
import { client } from "@/lib/sanity-client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsQuery } from "@/sanity/queries/projects";

const options = { next: { revalidate: 30 } };

interface IProjects {
    isSection?: boolean;
}

const Projects = async ({ isSection = true }: IProjects) => {
    const projectsData = await client.fetch<SanityDocument[]>(projectsQuery, {}, options);

    const data = projectsData?.slice(0, isSection ? 4 : projectsData.length);

    return (
        <section className="w-full my-6 lg:my-8 px-5 lg:px-20">

            {/* Section Header */}
            {isSection && (
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-semibold tracking-tight">
                        Featured Projects
                    </h2>

                    <Link
                        href="/projects"
                        className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition"
                    >
                        View all
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            )}

            {/* Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
                {data?.map(({ name, duration, stack, github, live, imageUrl }) => (
                    <ProjectCard
                        key={name}
                        name={name}
                        duration={duration}
                        stack={stack}
                        github={github}
                        live={live}
                        image={imageUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;