import "@/styles/globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import NavBar from "./_components/nav-bar";
import Providers from "./providers";

export const metadata = {
  title: "Human Livestocks",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Providers>
          <NavBar />
          <main className="mx-auto flex min-h-screen flex-col bg-tremor-background-muted pt-20 dark:bg-dark-tremor-background-muted">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
