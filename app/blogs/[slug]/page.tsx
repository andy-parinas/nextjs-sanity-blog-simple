import {getPost, getPosts, urlFor} from "@/lib/sanityClient";
import {PortableText, type PortableTextComponents} from "@portabletext/react";
import Image from "next/image";
import type {SanityImageSource} from "@sanity/image-url/lib/types/types";
import SyntaxHighlighter from "react-syntax-highlighter"
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {dateFormat} from "@/lib/utils";


const SanityImage = ({ image }: {image: SanityImageSource}) => {

    return (<Image
        src={urlFor(image).url()}
        width={500}
        height={500}
        alt="image"
    />);
}


const myPortableTextComponents: PortableTextComponents = {
    types: {
        image: ({value}: {value:any}) => <SanityImage image={value} />,
        code: props => {
            console.log(props.value.code)
            return <SyntaxHighlighter language={props.value.language} style={darcula}>
                {props.value.code}
            </SyntaxHighlighter>
        }
    },
    block: {
        h1: props => <h1 className="text-2xl mb-2">{props.children}</h1>,
        normal: props => <p className="text-base my-3 dark:text-gray-100 tracking-wide">{props.children}</p>
    }

}


async function BLogPage({params}: {params: {slug:string}}) {



    const post = await getPost(params.slug);

    console.log(post)

    if (!post) {
        return <div>Not Found</div>
    }


    return (
        <div>
            <h1 className="text-5xl font-medium tracking-wide">{post.title}</h1>
            <div className="dark:text-gray-400 mb-10 border-b border-gray-600 pb-5">
                <p>By: {post.author.name}</p>
                <p>{dateFormat(post._createdAt)}</p>
            </div>
            <div className="mb-10">
                <PortableText  value={post.body} components={myPortableTextComponents} />
            </div>
        </div>
    )
}

export default BLogPage