import {getPosts} from "@/lib/sanityClient";


async function BLogPage() {

    const posts = await getPosts();

    console.log(posts)

    return (
        <div>
            Blog Page
        </div>
    )
}

export default BLogPage