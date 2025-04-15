
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "small" | "medium" | "large";
  asLink?: boolean;
}

const Logo = ({
  size = "medium",
  asLink = true
}: LogoProps) => {
  const fontSizes = {
    small: "text-2xl",
    medium: "text-3xl",
    large: "text-5xl"
  };

  const logoContent = (
    <div className="relative group">
      <h1 className={cn("font-playfair font-bold flex items-center", fontSizes[size])}>
        <span className="relative group-hover:scale-105 transition-transform duration-300">
          <span className="relative z-10 text-gold">Gleam</span>
        </span>
        <span className="text-gray-800 relative group-hover:scale-105 transition-transform duration-300 delay-75">
          <span className="relative z-10 text-gold-lighter">Glow</span>
        </span>
      </h1>
      <div className={cn(
        "absolute -bottom-1 left-0 w-full bg-gradient-to-r from-gold-lighter via-gold to-transparent group-hover:w-[110%] transition-all duration-300",
        {
          "h-[1px]": size === "small",
          "h-[2px]": size === "medium",
          "h-[3px]": size === "large"
        }
      )}></div>
    </div>
  );

  if (asLink) {
    return (
      <Link to="/" className="flex items-center no-underline hover:opacity-90 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;
