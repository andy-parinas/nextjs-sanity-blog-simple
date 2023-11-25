import {getPosts} from "@/lib/sanityClient";
import {Post} from "@/types";


export default async function Home() {

    const posts = await getPosts();

    console.log(posts)

    return (
        <main>
            <h2 className="text-xl font-semibold text-orange-400 mb-5">Latest Blogs</h2>
            <div>
                {posts.map((post: Post) => (
                    <div key={post._id}>
                        <h2 className="text-2xl font-light">{post.title}</h2>
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
