
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "small" | "medium" | "large";
  asLink?: boolean;
}

const Logo = ({ size = "medium", asLink = true }: LogoProps) => {
  const fontSizes = {
    small: "text-2xl",
    medium: "text-3xl",
    large: "text-5xl",
  };

  const logoContent = (
    <div className="relative">
      <h1 className={cn("font-playfair font-bold", fontSizes[size])}>
        <span className="relative">
          {/* White fill with black outline for "Gleam" */}
          <span className="relative z-10 text-white">Gleam</span>
          <span className="absolute inset-0 text-transparent z-0 transform translate-x-[0.5px] translate-y-[0.5px] stroke-black stroke-[1px]">Gleam</span>
          <span className="absolute inset-0 text-transparent z-0 transform -translate-x-[0.5px] -translate-y-[0.5px] stroke-black stroke-[1px]">Gleam</span>
          <span className="absolute inset-0 text-transparent z-0 transform translate-x-[0.5px] -translate-y-[0.5px] stroke-black stroke-[1px]">Gleam</span>
          <span className="absolute inset-0 text-transparent z-0 transform -translate-x-[0.5px] translate-y-[0.5px] stroke-black stroke-[1px]">Gleam</span>
        </span>
        <span className="text-gold relative">
          <span className="relative z-10">Glow</span>
          <span className="absolute inset-0 text-white z-0 transform -translate-x-[1px] -translate-y-[1px]"></span>
          <span className="absolute inset-0 text-black z-[-1] transform -translate-x-[2px] -translate-y-[2px]"></span>
        </span>
      </h1>
      <div className={cn(
        "absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-gold-light via-gold to-transparent",
        {
          "h-[1px]": size === "small",
          "h-[2px]": size === "medium",
          "h-[3px]": size === "large",
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
