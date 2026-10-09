import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Epyon AI University | Potential into opportunity",
  description:
    "Potential is everywhere. Opportunity should be, too. We bring human coaching, AI guides, and community resources together to make learning accessible.",
  keywords: [
    "AI education",
    "AI safety for kids",
    "workforce development",
    "content adaptation",
    "accessible learning",
    "501(c)(3)",
    "nonprofit",
    "Atlanta",
    "EpyonAI",
  ],
  authors: [{ name: "Epyon AI University" }],
  creator: "Epyon AI University",
  metadataBase: new URL("https://www.epyonai.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.epyonai.org",
    title: "Epyon AI University | Potential into opportunity",
    description:
      "Human coaches, AI guides, and community resources. Discover Pathways, PATCH, and Compass News.",
    siteName: "Epyon AI University",
    images: [
      {
        url: "/mission/copilot.webp",
        width: 752,
        height: 752,
        alt: "An illustrated Epyon AI guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/mission/copilot.webp"],
    title: "Epyon AI University | Potential into opportunity",
    description:
      "Human coaches, AI guides, and community resources. Discover Pathways, PATCH, and Compass News.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b12",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#070b12]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
