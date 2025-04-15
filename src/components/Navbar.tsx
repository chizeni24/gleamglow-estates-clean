
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is currently in view
      if (isHomePage) {
        const sections = ["home", "about", "our-story", "services", "faq", "blog", "testimonials", "contact"];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const buffer = 100; // Add buffer to improve UX
            if (rect.top <= buffer && rect.bottom >= buffer) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial active section
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        if (isMenuOpen) toggleMenu();
        window.history.pushState(null, '', `#${sectionId}`);
        setActiveSection(sectionId);
      }
    }
  };

  const renderNavLink = (text: string, to: string, isAnchor: boolean = true) => {
    const sectionId = isAnchor ? to.substring(1) : to;
    const isActive = activeSection === sectionId && isHomePage;

    if (isHomePage && isAnchor) {
      return (
        <a 
          href={to} 
          className={cn(
            "transition-colors relative",
            isActive ? "text-gold-lighter" : "text-gray-800 hover:text-gold"
          )}
          onClick={(e) => handleSmoothScroll(e, sectionId)}
        >
          {text}
          {isActive && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gold-lighter to-transparent"></span>
          )}
        </a>
      );
    } else {
      return (
        <Link 
          to={`/${isAnchor ? sectionId : to}`} 
          className="text-gray-800 hover:text-gold transition-colors"
          onClick={isMenuOpen ? toggleMenu : undefined}
        >
          {text}
        </Link>
      );
    }
  };

  const handleBookNowClick = () => {
    toast({
      title: "Booking Request Received",
      description: "We'll contact you shortly to schedule your appointment!",
      duration: 5000,
    });
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
          {renderNavLink("Our Story", "#our-story")}
          {renderNavLink("Services", "#services")}
          {renderNavLink("FAQ", "#faq")}
          {renderNavLink("Testimonials", "#testimonials")}
          {renderNavLink("Contact", "#contact")}
          <Link 
            to="/booking" 
            className="text-white bg-gold-lighter hover:bg-gold transition-colors px-4 py-2 rounded-md"
            onClick={handleBookNowClick}
          >
            Book Now
          </Link>
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
            {renderNavLink("Our Story", "#our-story")}
            {renderNavLink("Services", "#services")}
            {renderNavLink("FAQ", "#faq")}
            {renderNavLink("Testimonials", "#testimonials")}
            {renderNavLink("Contact", "#contact")}
            <Link 
              to="/booking" 
              className="text-white bg-gold-lighter hover:bg-gold transition-colors px-4 py-2 rounded-md w-full text-center"
              onClick={() => {
                toggleMenu();
                handleBookNowClick();
              }}
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
