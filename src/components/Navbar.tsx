
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

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
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        if (isMenuOpen) {
          toggleMenu();
        }
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
        
        {/* Mobile Menu Button with animation */}
        <button 
          className="md:hidden text-gray-800 p-2 relative z-50 hover:text-gold transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
            <span className={`absolute h-0.5 w-full bg-current top-3 transition-all duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation with improved animation and positioning */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 pt-16",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 space-y-6">
          {renderNavLink("Home", isHomePage ? "#home" : "/")}
          {renderNavLink("About", "#about")}
          {renderNavLink("Our Story", "#our-story")}
          {renderNavLink("Services", "#services")}
          {renderNavLink("FAQ", "#faq")}
          {renderNavLink("Testimonials", "#testimonials")}
          {renderNavLink("Contact", "#contact")}
          <Link 
            to="/booking" 
            className="text-white bg-gold-lighter hover:bg-gold transition-colors px-4 py-3 rounded-md w-full text-center"
            onClick={() => {
              toggleMenu();
              handleBookNowClick();
            }}
          >
            Book Now
          </Link>
        </div>
        
        {/* Background decoration */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-8 w-32 h-32 bg-gold-lighter/5 rounded-full blur-2xl"></div>
      </div>
    </nav>
  );
};

export default Navbar;
