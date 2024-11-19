import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: "Ignite Studios",
  description: "Let the Studio Ignite Your Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased dark"
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
