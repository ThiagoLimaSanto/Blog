import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
    return (
        <Container>
            <Heading />
            <Suspense fallback={<SpinLoader />}>
                <PostFeatured />
            </Suspense>
            <Suspense fallback={<SpinLoader />}>
                <PostsList />
            </Suspense>
            <Footer />
        </Container>
    );
}
