import { PostCoverImage } from "../PostCoverImage";
import { PostText } from "../PostText";

export function PostFeatured() {
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
                    src: "/images/bryen_9.png",
                    alt: "Titulo qualquer",
                    priority: true,
                }}
            />
            <PostText
                title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                excerpt=" Nisi, quibusdam? Velit ratione assumenda dicta reprehenderit, corporis
                    earum illo animi asperiores quis, tempora nemo maiores, labore
                    molestiae. Rerum voluptate sed aut!"
                createdAt="2025-04-05T00:24:38.616Z"
                url={`#`}
            ></PostText>
        </section>
    );
}
