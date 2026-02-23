import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PreHeader from "@/components/layout/PreHeader";
import PageTransition from "@/components/layout/PageTransition";

const siteUrl = "https://morningstaracademy.edu";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Morning Star Academy | Excellence in Education",
    template: "%s | Morning Star Academy",
  },
  description:
    "Morning Star Academy is a world-class institution in Lagos, Nigeria committed to nurturing future leaders through academic excellence, character development, and holistic education.",
  keywords: [
    "Morning Star Academy",
    "school in Lagos",
    "private school Nigeria",
    "international school",
    "best school in Lagos",
    "academic excellence",
    "holistic education",
    "admissions open",
    "primary school Lagos",
    "secondary school Lagos",
  ],
  authors: [{ name: "Morning Star Academy" }],
  creator: "Morning Star Academy",
  publisher: "Morning Star Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Morning Star Academy",
    title: "Morning Star Academy | Excellence in Education",
    description:
      "A world-class institution nurturing future leaders through academic excellence, character development, and holistic education.",
    images: [
      {
        url: "/images/06.54.01_8c95968d.jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Morning Star Academy Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morning Star Academy | Excellence in Education",
    description:
      "A world-class institution nurturing future leaders through academic excellence, character development, and holistic education.",
    images: ["/images/06.54.01_8c95968d.jpg.jpeg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PageTransition />
        <PreHeader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
