import type { Metadata } from "next";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Morning Star Academy's mission, vision, motto 'Ora Et Labora', core values, and the dedicated leadership team behind our world-class education in Ibadan, Nigeria. Founded in 1987.",
  openGraph: {
    title: "About Us | Morning Star Academy",
    description:
      "Discover our mission, vision, motto, history, and the team behind Morning Star Academy's world-class education since 1987.",
    url: "/about",
    images: [
      {
        url: "/images/06.54.01_8c95968d.jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Morning Star Academy - About Us",
      },
    ],
  },
  alternates: {
    canonical: "/about",
  },
};

const values = [
  { icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z", title: "Academic Excellence", desc: "Striving for the highest standards in teaching and learning to unlock every student's potential." },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "Leadership", desc: "Developing confident leaders who inspire and guide others with vision and integrity." },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Integrity", desc: "Building character through honesty, accountability, and ethical conduct in all we do." },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "Teamwork", desc: "Fostering collaboration and cooperation to achieve common goals together." },
  { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", title: "Critical Thinking", desc: "Encouraging analytical and creative thinking to solve complex problems." },
  { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", title: "Character Development", desc: "Nurturing strong moral values and personal growth in every student." },
];

const leaders = [
  { name: "Dr. Amina Bakare", role: "Principal", image: "/images/AM(1).jpeg" },
  { name: "Mr. Chukwuemeka Obi", role: "Vice Principal, Academics", image: "/images/06.54.06_1d4a0094.jpg.jpeg" },
  { name: "Mrs. Folake Adeyemi", role: "Head of Admissions", image: "/images/06.54.09_c48f8176.jpg.jpeg" },
];

const milestones = [
  { year: "1987", title: "The Beginning", event: "Founded with a bold vision to transform education. Motto: 'Ora Et Labora' (Pray and Work)." },
  { year: "1995", title: "Growth & Expansion", event: "Expanded to include secondary school programs, growing our student community." },
  { year: "2005", title: "Two Decades Strong", event: "Celebrated 18 years of excellence in education." },
  { year: "2015", title: "Community Impact", event: "Recognized for outstanding contribution to education in Ibadan." },
  { year: "2020", title: "Modern Learning", event: "Enhanced facilities and adopted innovative teaching methods." },
  { year: "2027", title: "40th Anniversary", event: "Celebrating four decades of academic excellence and character building." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-87.5 flex items-center">
        <Image
          src="/images/06.54.01_8c95968d.jpg.jpeg"
          alt="About Morning Star Academy"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-dark/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Our Story</h1>
          <div className="mb-4">
            <p className="text-accent font-serif text-2xl italic mb-1">Ora Et Labora</p>
            <p className="text-white/60 text-sm">Pray and Work - Our Guiding Motto Since 1987</p>
          </div>
          <p className="text-white/80 text-lg max-w-xl">
            Nearly four decades of shaping minds, building character, and creating leaders.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-surface rounded-2xl p-8">
            <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leading educational institution creating life long learners, unlocking potentials and inspiring excellence.
            </p>
          </div>
          <div className="bg-surface rounded-2xl p-8">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide through innovative teaching and personalized guidance, a dynamic learning environment where we nuture curious minds, foster creativity and cultivate a passion for knowledge.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper bg="surface">
        <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do at Morning Star Academy." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <Card key={v.title} className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-primary-dark mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* History Timeline */}
      <SectionWrapper bg="white">
        <SectionHeading title="Our Journey" subtitle="Key milestones in the Morning Star Academy story." />

        <div className="relative max-w-4xl mx-auto">
          {/* Center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-accent/20" />

          <div className="space-y-16 md:space-y-20">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={m.year} className="relative md:grid md:grid-cols-2 md:gap-16 items-center">
                  {/* Center dot — desktop */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-white" />
                  </div>

                  {/* Left column */}
                  <div className={`${isLeft ? "" : "md:order-2"}`}>
                    <div className={`${isLeft ? "md:text-right" : ""}`}>
                      <span className="text-5xl md:text-6xl font-bold text-accent/15 leading-none block mb-1">
                        {m.year}
                      </span>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className={`mt-2 md:mt-0 ${isLeft ? "" : "md:order-1 md:text-right"}`}>
                    <h4 className="text-lg font-bold text-primary-dark">{m.title}</h4>
                    <p className="text-gray-500 mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper bg="surface">
        <SectionHeading title="Our Leadership" subtitle="Meet the dedicated team guiding Morning Star Academy." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader) => (
            <div key={leader.name} className="text-center group">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="160px"
                />
              </div>
              <h3 className="font-bold text-primary-dark">{leader.name}</h3>
              <p className="text-gray-500 text-sm">{leader.role}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="primary">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Schedule a campus visit or begin your application today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">Apply Now</Button>
            <Button href="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
