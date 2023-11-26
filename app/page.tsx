import {getPosts, urlFor} from "@/lib/sanityClient";
import {Post} from "@/types";
import Link from "next/link";
import type {SanityImageSource} from "@sanity/image-url/lib/types/types";


export default async function Home() {

    const posts = await getPosts();

    console.log(posts)

    return (
        <main>
            <h2 className="text-xl font-semibold text-orange-400 mb-5">Latest Blogs</h2>
            <div>
                {posts.map((post: Post) => (
                    <div key={post._id}>
                        <div>
                            <img src={urlFor(post.mainImage as SanityImageSource).width(200).url()} />
                        </div>
                        <Link href={`/blogs/${post.slug.current}`}>
                            <h2 className="text-2xl font-light">{post.title}</h2>
                        </Link>
                        <div className="flex items-center gap-x-3 text-sm">
                            <span> {post.author.name} </span>
                            <span>{post._createdAt}</span>

                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
