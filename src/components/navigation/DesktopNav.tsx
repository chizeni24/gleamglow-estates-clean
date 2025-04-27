
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface DesktopNavProps {
  isHomePage: boolean;
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
  activeSection: string;
}

export const DesktopNav = ({ isHomePage, handleSmoothScroll, activeSection }: DesktopNavProps) => {
  const { toast } = useToast();
  const location = useLocation();

  const handleBookNowClick = () => {
    toast({
      title: "Booking Request Received",
      description: "We'll contact you shortly to schedule your appointment!",
      duration: 5000,
    });
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
            onClick={(e) => handleSmoothScroll(e, "services")}
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
          onClick={(e) => handleSmoothScroll(e, sectionId)}
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
      >
        {text}
      </Link>
    );
  };

  return (
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
  );
};
