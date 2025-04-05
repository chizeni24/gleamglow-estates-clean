
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center no-underline hover:opacity-90 transition-opacity">
      <div className="relative">
        <h1 className="text-3xl font-playfair font-bold">
          <span className="text-gray-900">Gleam</span>
          <span className="text-gold">Glow</span>
        </h1>
        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-gold-light via-gold to-transparent"></div>
      </div>
    </Link>
  );
};

export default Logo;
