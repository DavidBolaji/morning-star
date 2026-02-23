import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-accent hover:bg-accent-light text-primary-dark font-semibold shadow-lg hover:shadow-xl",
  secondary:
    "bg-primary hover:bg-primary-light text-white font-semibold shadow-lg hover:shadow-xl",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-primary-dark font-semibold",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center px-8 py-3 rounded-full transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
}
