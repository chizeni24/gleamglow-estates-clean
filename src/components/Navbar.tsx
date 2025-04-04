
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-gold transition-colors">Home</a>
          <a href="#about" className="text-gray-800 hover:text-gold transition-colors">About</a>
          <a href="#services" className="text-gray-800 hover:text-gold transition-colors">Services</a>
          <a href="#testimonials" className="text-gray-800 hover:text-gold transition-colors">Testimonials</a>
          <a href="#contact" className="text-gray-800 hover:text-gold transition-colors">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#home" className="text-gray-800 hover:text-gold transition-colors py-2" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-gray-800 hover:text-gold transition-colors py-2" onClick={toggleMenu}>About</a>
            <a href="#services" className="text-gray-800 hover:text-gold transition-colors py-2" onClick={toggleMenu}>Services</a>
            <a href="#testimonials" className="text-gray-800 hover:text-gold transition-colors py-2" onClick={toggleMenu}>Testimonials</a>
            <a href="#contact" className="text-gray-800 hover:text-gold transition-colors py-2" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
