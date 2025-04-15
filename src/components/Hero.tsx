
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { ArrowDown } from "lucide-react";
import { GoldButton } from "./ui/gold-button";

const Hero = () => {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("services")?.scrollIntoView({ behavior: 'smooth' });
  };

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
            <div className="inline-block px-4 py-1 bg-gold-lighter/20 backdrop-blur-sm rounded-full animate-pulse-gold">
              <span className="text-gold-lighter text-sm font-medium">Bringing Luxury To Every Space Since 2010</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 animate-fade-in">
            Where <span className="text-gold-lighter">Excellence Meets Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            At <span className="font-medium">GleamGlow</span>, we define luxury through our meticulous cleaning services. We transform every environment with our unparalleled attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <GoldButton 
              size="lg" 
              showShine 
              className="relative overflow-hidden group"
              onClick={() => window.location.href = '/booking'}
            >
              Check Availability
            </GoldButton>
            
            <GoldButton 
              variant="outline" 
              size="lg"
              onClick={handleScrollToServices}
              className="group"
            >
              Discover Our Services
              <ArrowDown className="inline-block ml-1 group-hover:translate-y-1 transition-transform" size={18} />
            </GoldButton>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-sm hidden md:block">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-500 hover:text-gold-lighter transition-colors"
            >
              <ArrowDown size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-lighter/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-lighter/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
