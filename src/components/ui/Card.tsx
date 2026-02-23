import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 ${
        hover
          ? "shadow-md hover:shadow-xl transition-shadow duration-300"
          : "shadow-md"
      } ${className}`}
    >
      {children}
    </div>
  );
}
