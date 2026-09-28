import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site } from "@/content/site";
import "./tokens.css";
import "./components.css";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the production domain (e.g. on Vercel) so social previews resolve.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${site.name} — Engineering for the city`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/hero-vancouver-dusk.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
