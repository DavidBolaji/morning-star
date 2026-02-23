import Image from "next/image";
import Button from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src="/images/6.56.51 AM.jpeg"
        alt="Morning Star Academy campus"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary-dark/75" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Give Your Child the Gift of Excellence
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
          Join the Morning Star family and set your child on a path to success.
          Applications for the 2026/2027 academic session are now open.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary">
            Start Application
          </Button>
          <Button href="/about" variant="outline">
            Schedule a Visit
          </Button>
        </div>
      </div>
    </section>
  );
}
