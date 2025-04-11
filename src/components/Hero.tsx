
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-white pt-16 md:pt-24"
    >
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
              <Link to="/" className="block">
                <Logo size="large" />
              </Link>
            </div>
            <div className="inline-block px-4 py-1 bg-gold/20 backdrop-blur-sm rounded-full">
              <span className="text-gold text-sm font-medium">Bringing Luxury To Every Space Since 2010</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
            Where <span className="text-gold">Excellence Meets Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            At <span className="font-medium">GleamGlow</span>, we define luxury through our meticulous cleaning services. We transform every environment with our unparalleled attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/booking" className="btn-gold relative overflow-hidden group">
              <span className="relative z-10">Check Availability</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <a href="#services" className="border-2 border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300 px-8 py-3 rounded-md font-medium">
              Discover Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
