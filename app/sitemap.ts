import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.muhammedfayazts.in",
      lastModified: new Date(),
    },
    {
      url: "https://www.muhammedfayazts.in/blog",
      lastModified: new Date(),
    },
  ];
}