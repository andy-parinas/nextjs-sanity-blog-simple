import {type ClientConfig} from "@sanity/client";
import {createClient} from "next-sanity";
import {Post} from "@/types";
import createImageUrlBuilder from "@sanity/image-url";
import type {SanityImageSource} from "@sanity/image-url/lib/types/types";
import {ImageAsset} from "@sanity/types";

const config: ClientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    apiVersion: "2023-11-23"
}

const client = createClient(config)

export async function getPosts(){
    return await client.fetch<Post[]>(
        '*[_type == "post"]{_id, title, excerpt, mainImage, _createdAt, slug, author->{_id, name}}')
}

export async function getPost(slug: string){
    const posts = await client.fetch<Post[]>(
        `*[_type == "post" && slug.current == "${slug}"] 
            {_id, title,body, _createdAt, author->{_id, name}}`)

    return posts[0]
}

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}