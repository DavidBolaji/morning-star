import Hero from "@/components/home/Hero";
import Welcome from "@/components/home/Welcome";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurSchool from "@/components/home/OurSchool";
import Campus from "@/components/home/Campus";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
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
