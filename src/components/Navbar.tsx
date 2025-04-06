
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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

  const renderNavLink = (text: string, to: string, isAnchor: boolean = true) => {
    if (isHomePage && isAnchor) {
      return (
        <a 
          href={to} 
          className="text-gray-800 hover:text-gold transition-colors" 
          onClick={isMenuOpen ? toggleMenu : undefined}
        >
          {text}
        </a>
      );
    } else {
      return (
        <Link 
          to={`/${isAnchor ? to.substring(1) : to}`} 
          className="text-gray-800 hover:text-gold transition-colors"
          onClick={isMenuOpen ? toggleMenu : undefined}
        >
          {text}
        </Link>
      );
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/90 backdrop-blur-md py-4 shadow-lg"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {renderNavLink("Home", isHomePage ? "#home" : "/")}
          {renderNavLink("About", "#about")}
          {renderNavLink("Services", "#services")}
          {renderNavLink("Testimonials", "#testimonials")}
          {renderNavLink("Contact", "#contact")}
          <Link to="/booking" className="text-white bg-gold hover:bg-gold-dark transition-colors px-4 py-2 rounded-md">Book Now</Link>
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
            {renderNavLink("Home", isHomePage ? "#home" : "/")}
            {renderNavLink("About", "#about")}
            {renderNavLink("Services", "#services")}
            {renderNavLink("Testimonials", "#testimonials")}
            {renderNavLink("Contact", "#contact")}
            <Link 
              to="/booking" 
              className="text-white bg-gold hover:bg-gold-dark transition-colors px-4 py-2 rounded-md w-full text-center"
              onClick={toggleMenu}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
