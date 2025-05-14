
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Sparkle } from "lucide-react";
import { SparkleEffect } from "../effects/SparkleEffect";

interface DesktopNavProps {
  isHomePage: boolean;
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
  activeSection: string;
}

export const DesktopNav = ({ isHomePage, handleSmoothScroll, activeSection }: DesktopNavProps) => {
  const { toast } = useToast();
  const location = useLocation();
  const isBookingPage = location.pathname.includes('/booking');
  const isThankYouPage = location.pathname.includes('/thank-you');

  const handleBookNowClick = () => {
    if (!isBookingPage && !isThankYouPage) {
      toast({
        title: "Booking Request",
        description: "Taking you to our booking page",
        duration: 3000,
      });
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
            "transition-all duration-300 nav-link",
            isActive ? "text-gold after:scale-x-100" : "text-charcoal hover:text-gold"
          )}
          onClick={(e) => handleSmoothScroll(e, sectionId)}
        >
          {text}
          {isActive && <SparkleEffect className="opacity-30" />}
        </a>
      );
    }
    return (
      <Link 
        to={`/${isAnchor ? '' : to}`} 
        className="text-charcoal hover:text-gold transition-all duration-300 nav-link"
      >
        {text}
      </Link>
    );
  };

  return (
    <div className="hidden md:flex space-x-8 items-center">
      {renderNavLink("Home", isHomePage ? "#home" : "/", false)}
      {renderNavLink("About", "#about")}
      {renderNavLink("Our Story", "#our-story")}
      {renderNavLink("Services", "services", false)}
      {renderNavLink("FAQ", "#faq")}
      {renderNavLink("Testimonials", "#testimonials")}
      {renderNavLink("Contact", "#contact")}
      {!isBookingPage && !isThankYouPage && (
        <Link 
          to="/booking" 
          className="relative overflow-hidden group text-white bg-gold hover:bg-gold-dark transition-all duration-300 px-6 py-2.5 rounded-md transform hover:scale-105 active:scale-95"
          onClick={handleBookNowClick}
        >
          <span className="relative z-10 flex items-center gap-2">
            Book Now
            <Sparkle className="w-4 h-4" />
          </span>
        </Link>
      )}
    </div>
  );
};
