import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const programs = [
  {
    image: "/images/06.54.08_13ff57a4.jpg.jpeg",
    title: "Early Years",
    description: "A nurturing foundation for ages 3–5, fostering curiosity and social skills through play-based learning.",
    grades: "Pre-K – KG2",
  },
  {
    image: "/images/06.54.09_34d33aae.jpg.jpeg",
    title: "Primary School",
    description: "Building strong academic foundations with a balanced curriculum that develops critical thinking.",
    grades: "Grades 1 – 6",
  },
  {
    image: "/images/06.54.09_c48f8176.jpg.jpeg",
    title: "Secondary School",
    description: "Preparing students for university with rigorous academics, leadership opportunities, and career guidance.",
    grades: "JSS 1 – SS 3",
  },
];

export default function OurSchool() {
  return (
    <SectionWrapper bg="white" id="academics">
      <SectionHeading
        title="Our School Programs"
        subtitle="Comprehensive education pathways designed for every stage of your child's development."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div
            key={program.title}
            className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/60 to-transparent" />
              <span className="absolute bottom-4 left-4 bg-accent text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
                {program.grades}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary-dark mb-2">{program.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
