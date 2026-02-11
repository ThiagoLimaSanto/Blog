import type { Metadata } from "next";

import "./globals.css";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: {
        default: "The Blog",
        template: "%s | The Blog",
    },
    description: "Este é um blog com NextJs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>
                <Container>
                    <Heading />
                    {children}
                    <Footer/>
                </Container>
            </body>
        </html>
    );
}
