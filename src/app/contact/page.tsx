import type { Metadata } from "next";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Morning Star Academy",
  description:
    "Get in touch with Morning Star Academy. Visit our campus, call us, or send us a message.",
};

const contactDetails = [
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    icon2: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Visit Us",
    lines: ["123 Academy Drive", "Victoria Island, Lagos", "Nigeria"],
  },
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    title: "Call Us",
    lines: ["+234 800 000 0000", "+234 800 111 1111"],
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Email Us",
    lines: ["info@morningstaracademy.edu", "admissions@morningstaracademy.edu"],
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Office Hours",
    lines: ["Mon – Fri: 7:30 AM – 4:00 PM", "Saturday: 8:00 AM – 12:00 PM"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[300px] flex items-center">
        <Image
          src="/images/06.54.06_1d4a0094.jpg.jpeg"
          alt="Contact Morning Star Academy"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-dark/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-xl">
            We&apos;d love to hear from you. Reach out for admissions, inquiries, or to schedule a visit.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <SectionWrapper bg="surface">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item) => (
            <Card key={item.title} className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  {item.icon2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon2} />}
                </svg>
              </div>
              <h3 className="font-bold text-primary-dark mb-2">{item.title}</h3>
              {item.lines.map((line, i) => (
                <p key={i} className="text-gray-600 text-sm">{line}</p>
              ))}
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Form + Map */}
      <SectionWrapper bg="white">
        <SectionHeading
          title="Send Us a Message"
          subtitle="Fill out the form below and we'll get back to you within 24 hours."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286!2d3.4226!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDI1JzIxLjQiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Morning Star Academy Location"
            />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
