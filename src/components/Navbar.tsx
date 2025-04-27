
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";
import { MobileNav } from "./navigation/MobileNav";
import { DesktopNav } from "./navigation/DesktopNav";
import { MenuButton } from "./navigation/MenuButton";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isMobile = useIsMobile();
  
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

      if (isHomePage) {
        const sections = ["home", "about", "our-story", "services", "faq", "blog", "testimonials", "contact"];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const buffer = 100;
            if (rect.top <= buffer && rect.bottom >= buffer) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <DesktopNav 
          isHomePage={isHomePage}
          handleSmoothScroll={handleSmoothScroll}
          activeSection={activeSection}
        />
        <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>
      
      <MobileNav 
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isHomePage={isHomePage}
        handleSmoothScroll={handleSmoothScroll}
        activeSection={activeSection}
      />
    </nav>
  );
};

export default Navbar;
