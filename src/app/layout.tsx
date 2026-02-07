import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "The Blog",
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
        {children}
      </body>
    </html>
  );
}
