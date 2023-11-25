import {type ClientConfig} from "@sanity/client";
import {createClient} from "next-sanity";

const config: ClientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    apiVersion: "2023-11-23"
}

const client = createClient(config)

export async function getPosts(){
    return await client.fetch('*[_type == "post"]{_id, title, _createdAt, slug, author->{_id, name}}')
}