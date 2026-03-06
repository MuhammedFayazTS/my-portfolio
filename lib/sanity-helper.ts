import imageUrlBuilder, { SanityImageSource } from "@sanity/image-url";
import { client } from "./sanity-client";

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;