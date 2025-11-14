import React from "react";
import ProjectCard from "./project-card";
import { client } from "@/lib/sanity-client";
import { projectsQuery } from "../../../sanity/queries/projects";
import { SanityDocument } from "next-sanity";

const options = { next: { revalidate: 30 } };

const Projects = async () => {
    const projectsData = await client.fetch<SanityDocument[]>(projectsQuery, {}, options);
    return (
        <>
            <div className="flex gap-x-2 mb-3">
                <span className="w-fit p-2 text-xs cursor-pointer bg-gray-100 dark:bg-gray-900/50 dark:hover:bg-gray-800/50 hover:bg-gray-200 border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 text-gray-500 dark:text-gray-400 rounded">
                    Projects
                </span>
                <div className="flex-1 border-b border-gray-300 dark:border-gray-800 mt-4"></div>
            </div>

            <div className="flex flex-col gap-2">
                {projectsData.map(({ name, duration, stack, github, live, imageUrl: image }) => (
                    <ProjectCard
                        key={name}
                        name={name}
                        duration={duration}
                        stack={stack}
                        github={github}
                        live={live}
                        image={image}
                    />
                ))}
            </div>
        </>
    );
};

export default Projects;
