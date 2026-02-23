import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "surface" | "primary" | "dark";
}

const bgMap = {
  white: "bg-white",
  surface: "bg-surface",
  primary: "bg-primary text-white",
  dark: "bg-primary-dark text-white",
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  bg = "white",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgMap[bg]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4">{children}</div>
    </section>
  );
}
