import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  showArrow?: boolean;
  className?: string;
}

function Button({
  children,
  href,
  variant = "primary",
  showArrow = false,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#27B33E] text-white hover:bg-[#209634] hover:-translate-y-0.5 focus:ring-[#27B33E]",

    outline:
      "border border-[#0B3D91]/30 bg-white text-[#0B3D91] hover:border-[#0B3D91] hover:bg-[#F4F8FC] focus:ring-[#0B3D91]",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}

        {showArrow && <ArrowRight size={17} strokeWidth={2} />}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}

      {showArrow && <ArrowRight size={17} strokeWidth={2} />}
    </button>
  );
}

export default Button;