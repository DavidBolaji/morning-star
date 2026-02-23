import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PreHeader from "@/components/layout/PreHeader";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Morning Star Academy | Excellence in Education",
  description:
    "Morning Star Academy is a world-class institution committed to nurturing future leaders through academic excellence, character development, and holistic education.",
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
