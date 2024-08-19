import type { Metadata } from "next";
import { Theme } from "@/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Nest Demo",
  description: "Next.js frontend and Nest.js backend training session"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
