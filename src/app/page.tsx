import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Welcome from "@/components/home/Welcome";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurSchool from "@/components/home/OurSchool";
import Campus from "@/components/home/Campus";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "Morning Star group of schools | Excellence in Education",
  description:
    "Morning Star group of schools is a leading private school in Ibadan, Nigeria offering world-class primary and secondary education. Admissions open for 2026/2027. Motto: Ora Et Labora.",
  openGraph: {
    title: "Morning Star group of schools | Excellence in Education",
    description:
      "A leading private school in Ibadan offering world-class primary and secondary education. Admissions open for 2026/2027.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Morning Star group of schools",
  description:
    "A world-class institution committed to nurturing future leaders through academic excellence, character development, and holistic education.",
  url: "https://morningstargroup of schools.edu",
  logo: "https://morningstargroup of schools.edu/images/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Old Army Barracks behind Brent Supermarket Sawmill, Old Ife Road",
    addressLocality: "Ibadan",
    addressCountry: "NG",
  },
  telephone: "+234-803-352-9368",
  email: "info@morningstargroup of schools.edu",
  foundingDate: "1987",
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
