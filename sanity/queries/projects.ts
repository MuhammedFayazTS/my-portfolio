import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "project"] | order(_updatedAt desc) {
    _id,
    name,
    duration,
    description,
    "imageUrl": image.asset->url,
    stack,
    github,
    live
  }
`;
