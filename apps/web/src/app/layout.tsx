import "@/styles/globals.css";

import { GeistMono, GeistSans } from "geist/font";
import { headers } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import NavBar from "./_components/nav-bar";

export const metadata = {
  title: "Human Livestocks",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// The downside to wrapping the entire app in a TRPCReactProvider here is that it makes EVERY single page SSR.
// The NavBar also causes this because it checks auth state.
// Ideally the landing page should be static, and the NavBar should be rendered client-side.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <TRPCReactProvider headers={headers()}>
          <NavBar />
          <main className="mx-auto flex min-h-screen flex-col pt-20">
            {children}
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
