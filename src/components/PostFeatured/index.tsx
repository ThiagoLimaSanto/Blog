import { findAllPublicPostsCached } from "@/lib/Post/queries";
import { PostCoverImage } from "../PostCoverImage";
import { PostText } from "../PostText";

export async function PostFeatured() {
    const posts = await findAllPublicPostsCached();
    const post = posts[0];

    const postLink = `/post/${post.slug}`;

    return (
        <section
            className="grid grid-cols-1 gap-8 mb-16
            sm:grid-cols-2 group"
        >
            <PostCoverImage
                LinkProps={{
                    href: `#`,
                }}
                imageProps={{
                    width: 1200,
                    height: 720,
                    src: post.coverImageUrl,
                    alt: post.title,
                    priority: true,
                }}
            />
            <PostText
                title={post.title}
                excerpt={post.excerpt}
                createdAt={post.createdAt}
                url={postLink}
                postHeadingAs="h1"
            ></PostText>
        </section>
    );
}
