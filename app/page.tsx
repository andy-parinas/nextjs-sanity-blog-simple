import {getPosts, urlFor} from "@/lib/sanityClient";
import {Post} from "@/types";
import Link from "next/link";
import type {SanityImageSource} from "@sanity/image-url/lib/types/types";
import {dateFormat} from "@/lib/utils";


export default async function Home() {

    const posts = await getPosts();

    console.log(posts)


    return (
        <main>
            <h2 className="text-7xl font-light  mb-5">Latest</h2>
            <div>
                {posts.map((post: Post) => (
                    <div key={post._id}
                        className="flex items-start gap-x-10 border-t border-gray-300 pt-5 mb-10" >
                        <div className="dark:text-gray-400 text-sm w-[200px]" >{ dateFormat(post._createdAt) }</div>
                        <div>
                            <Link href={`/blogs/${post.slug.current}`}>
                                <h2 className="text-2xl font-bold tracking-wide">{post.title}</h2>
                            </Link>
                            <p className="text-gray-400" >
                                {post.excerpt}
                            </p>
                            <Link href={`/blogs/${post.slug.current}`}>
                                <h2 className="text-pink-600 text-sm mt-5">Read More</h2>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
