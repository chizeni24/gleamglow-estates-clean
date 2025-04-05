
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-white"
    >
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
              <Link to="/" className="block">
                <Logo size="large" />
              </Link>
            </div>
            <div className="inline-block px-4 py-1 bg-gold/20 backdrop-blur-sm rounded-full">
              <span className="text-gold text-sm font-medium">Transforming Luxury Spaces Since 2010</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Where Brilliance <span className="text-gold-light">Meets Precision</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            At GleamGlow, we don't just clean spaces—we transform environments. Every surface tells a story of meticulous care and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking" className="btn-gold relative overflow-hidden group">
              <span className="relative z-10">Book a Consultation</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <a href="#services" className="border-2 border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300 px-8 py-3 rounded-md font-medium">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gold">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
