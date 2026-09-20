import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/600.css";
import "./globals.css";
import InteractionLayer from "./InteractionLayer";
import ScrollReveal from "./ScrollReveal";
import { sitePath } from "./paths";
import { profile } from "./siteData";

export const metadata: Metadata = {
  title: profile.title,
  description: profile.description,
  icons: { icon: sitePath("/favicon.svg") },
  openGraph: {
    type: "website",
    url: "https://geoceff.github.io/portfolio-website-public/",
    title: profile.title,
    description: profile.description,
    images: [{
      url: "https://geoceff.github.io/portfolio-website-public/images/social-preview.png",
      width: 1200,
      height: 630,
      alt: "Geo Gabaisen portfolio preview with an ASCII portrait"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: profile.title,
    description: profile.description,
    images: ["https://geoceff.github.io/portfolio-website-public/images/social-preview.png"]
  }
};

const globalStyles = readFileSync(path.join(process.cwd(), "app", "globals.css"), "utf8");

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body
        style={{
          "--hero-background": `url("${sitePath("/images/hero-forest-background.png")}")`
        } as React.CSSProperties}
      >
        <InteractionLayer />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
