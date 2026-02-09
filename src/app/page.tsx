import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
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
                        href: "#",
                    }}
                    imageProps={{
                        width: 1200,
                        height: 720,
                        src: "/images/bryen_9.png",
                        alt: "Imagem de capa do post",
                        priority: true,
                    }}
                />
                <div className="flex flex-col gap-4 sm:justify-center">
                    <time
                        className="text-slate-600 text-sm/tight"
                        dateTime="2026-02-09"
                    >
                        09/02/2026 10:00
                    </time>

                    <PostHeading as="h1" url="#">
                        Ola
                    </PostHeading>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Incidunt asperiores esse quo repudiandae at
                        excepturi eius ratione consectetur nisi magni delectus
                        quia repellendus ab voluptatem, aut dolor, veritatis
                        explicabo ullam!
                    </p>
                </div>
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
