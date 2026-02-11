import { findAllPublicPosts } from "@/lib/Post/queries";
import { PostCoverImage } from "../PostCoverImage";
import { PostText } from "../PostText";

export async function PostsList() {
    const posts = await findAllPublicPosts();
    return (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {posts.slice(1).map((post) => {
                const postLink = `/post/${post.slug}`;
                return (
                    <div className="flex flex-col gap-4 group" key={post.id}>
                        <PostCoverImage
                            LinkProps={{
                                href: postLink,
                            }}
                            imageProps={{
                                width: 1200,
                                height: 720,
                                src: post.coverImageUrl,
                                alt: post.title,
                            }}
                        />
                        <PostText
                            createdAt={post.createdAt}
                            excerpt={post.excerpt}
                            title={post.title}
                            url={postLink}
                            postHeadingAs="h2"
                        />
                    </div>
                );
            })}
        </section>
    );
}
