import type {ImageAsset, Slug} from "@sanity/types";
import type {PortableTextBlock} from "@portabletext/types"


export interface Author {
    _id: string
    name: string
}

export interface Post {
    // _type: 'post'
    _id: string
    _createdAt: string
    title?: string
    slug: Slug
    author: Author
    // excerpt?: string
    // mainImage?: ImageAsset
    // body: PortableTextBlock[]
}