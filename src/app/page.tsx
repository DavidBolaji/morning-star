import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Welcome from "@/components/home/Welcome";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurSchool from "@/components/home/OurSchool";
import Campus from "@/components/home/Campus";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "Morning Star Academy | Excellence in Education",
  description:
    "Morning Star Academy is a leading private school in Lagos, Nigeria offering world-class primary and secondary education. Admissions open for 2026/2027.",
  openGraph: {
    title: "Morning Star Academy | Excellence in Education",
    description:
      "A leading private school in Lagos offering world-class primary and secondary education. Admissions open for 2026/2027.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Morning Star Academy",
  description:
    "A world-class institution committed to nurturing future leaders through academic excellence, character development, and holistic education.",
  url: "https://morningstaracademy.edu",
  logo: "https://morningstaracademy.edu/images/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Academy Drive",
    addressLocality: "Victoria Island, Lagos",
    addressCountry: "NG",
  },
  telephone: "+234-800-000-0000",
  email: "info@morningstaracademy.edu",
  foundingDate: "2005",
  sameAs: [],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Welcome />
      <WhyChooseUs />
      <OurSchool />
      <Campus />
      <Testimonials />
      <CallToAction />
    </>
  );
}
