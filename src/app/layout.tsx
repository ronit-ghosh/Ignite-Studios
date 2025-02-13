import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";

const strechPro = localfont({
  src: [{
    path: "../../public/StretchPro.otf",
    weight: "400",
  }],
  variable: "--font-stretch-pro",
})

const coolvetica = localfont({
  src: [{
    path: "../../public/Newake.otf",
    weight: "100",
  }],
  variable: "--font-coolvetica",
})

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
        className={`${strechPro.variable} ${coolvetica.variable}  antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
