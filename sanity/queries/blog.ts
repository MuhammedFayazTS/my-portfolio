import { groq } from "next-sanity";

export const LATEST_POSTS_QUERY = groq`*[
  _type == "post" &&
  defined(slug.current)
] | order(publishedAt desc)[0...4]{
  _id,
  title,
  slug,
  publishedAt
}`;

export const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export const PROFILE_QUERY = `*[_type == "profile"][0]{
  about
}`
