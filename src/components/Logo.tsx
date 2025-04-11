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
  const logoContent = <div className="relative">
      <h1 className={cn("font-playfair font-bold", fontSizes[size])}>
        <span className="relative">
          {/* Lighter gold fill for "Gleam" */}
          <span className="relative z-10 text-gold-lighter">Gleam</span>
        </span>
        <span className="text-gray-800 relative">
          <span className="relative z-10 text-yellow-400">Glow</span>
        </span>
      </h1>
      <div className={cn("absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-gold-lighter via-gold to-transparent", {
      "h-[1px]": size === "small",
      "h-[2px]": size === "medium",
      "h-[3px]": size === "large"
    })}></div>
    </div>;
  if (asLink) {
    return <Link to="/" className="flex items-center no-underline hover:opacity-90 transition-opacity">
        {logoContent}
      </Link>;
  }
  return logoContent;
};
export default Logo;