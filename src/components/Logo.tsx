
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <h1 className="text-2xl font-playfair font-bold">
          <span className="text-gray-900">Gleam</span>
          <span className="text-gold">Glow</span>
        </h1>
        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-gold-light via-gold to-transparent"></div>
      </div>
    </div>
  );
};

export default Logo;
