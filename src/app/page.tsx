import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostsList } from "@/components/PostsList";
import { PostText } from "@/components/PostText";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
    return (
        <Container>
            <Heading />
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
                        src: "/images/bryen_1.png",
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
                ></PostText>
            </section>
            <Suspense fallback={<SpinLoader />}>
                <PostsList />
            </Suspense>
            <footer>
                <h1 className="text-6xl font-bold text-center py-8">
                    Aqui é a Footer
                </h1>
            </footer>
        </Container>
    );
}
