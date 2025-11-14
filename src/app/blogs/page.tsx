import BlogCardList from "@/components/blog/blog-card-list";
import { Separator } from "@/components/ui/separator";
import { type SanityDocument } from "next-sanity";
import { client } from "@/lib/sanity-client";
import { POSTS_QUERY } from "../../../sanity/queries/blog";

const options = { next: { revalidate: 30 } };

export default async function Blogs() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
    return (
        <main className="w-11/12 sm:w-10/12 md:w-7/12 xl:w-5/12 mx-auto">
            <div className='flex gap-x-2'>
                <h2 className='w-fit p-2 text-xl mb-5 cursor-pointer text-gray-500 dark:text-gray-400'>
                    My Blogs
                </h2>
                <Separator className='flex-1 mt-4' />
            </div>
            <BlogCardList posts={posts} />
        </main>
    )
}