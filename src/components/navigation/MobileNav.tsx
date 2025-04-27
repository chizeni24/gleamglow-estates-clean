import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface MobileNavProps {
  isOpen: boolean;
  toggleMenu: () => void;
  isHomePage: boolean;
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
  activeSection: string;
}

export const MobileNav = ({
  isOpen,
  toggleMenu,
  isHomePage,
  handleSmoothScroll,
  activeSection
}: MobileNavProps) => {
  const { toast } = useToast();
  const location = useLocation();

  const handleBookNowClick = () => {
    toast({
      title: "Booking Request Received",
      description: "We'll contact you shortly to schedule your appointment!",
      duration: 5000,
    });
    toggleMenu();
  };

  const renderNavLink = (text: string, to: string, isAnchor: boolean = true) => {
    const sectionId = isAnchor ? to.substring(1) : to;
    const isActive = activeSection === sectionId && isHomePage;

    if (text === "Services") {
      if (isHomePage) {
        return (
          <a 
            href="#services" 
            className={cn(
              "transition-colors relative",
              isActive ? "text-gold-lighter" : "text-gray-800 hover:text-gold"
            )}
            onClick={(e) => {
              handleSmoothScroll(e, "services");
              toggleMenu();
            }}
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
            to="/services" 
            className="text-gray-800 hover:text-gold transition-colors"
            onClick={toggleMenu}
          >
            {text}
          </Link>
        );
      }
    }

    if (isHomePage && isAnchor) {
      return (
        <a 
          href={to} 
          className={cn(
            "transition-colors relative",
            isActive ? "text-gold-lighter" : "text-gray-800 hover:text-gold"
          )}
          onClick={(e) => {
            handleSmoothScroll(e, sectionId);
            toggleMenu();
          }}
        >
          {text}
          {isActive && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gold-lighter to-transparent"></span>
          )}
        </a>
      );
    }
    return (
      <Link 
        to={`/${isAnchor ? sectionId : to}`} 
        className="text-gray-800 hover:text-gold transition-colors"
        onClick={toggleMenu}
      >
        {text}
      </Link>
    );
  };

  return (
    <div 
      className={cn(
        "md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 pt-16",
        isOpen ? "translate-x-0" : "translate-x-full"
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
      
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-8 w-32 h-32 bg-gold-lighter/5 rounded-full blur-2xl"></div>
    </div>
  );
};
