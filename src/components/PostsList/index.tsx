import { postRepository } from "@/repositories/post/json-post-repository";
import { PostCoverImage } from "../PostCoverImage";
import { PostText } from "../PostText";

export async function PostsList() {
    const posts = await postRepository.findAll();
    return (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <div className="flex flex-col gap-4 group" key={post.id}>
                    <PostCoverImage
                        LinkProps={{
                            href: `/post/${post.slug}`,
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
                    />
                </div>
            ))}
        </section>
    );
}
