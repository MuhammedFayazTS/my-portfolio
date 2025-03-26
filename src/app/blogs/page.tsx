import BlogCardList from "@/components/blog-card-list";
import { Separator } from "@/components/ui/separator";
import { blogs } from "@/content/data";

export default function Blogs() {
    return (
        <main className="w-11/12 sm:w-10/12 md:w-7/12 xl:w-5/12 mx-auto">
            <div className='flex gap-x-2'>
                <h2 className='w-fit p-2 text-xl mb-5 cursor-pointer text-gray-500 dark:text-gray-400'>
                    My Blogs
                </h2>
                <Separator className='flex-1 mt-4' />
            </div>
            <BlogCardList blogs={blogs} />
        </main>
    )
}