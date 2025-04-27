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
  const isBookingPage = location.pathname === '/booking';

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

    if (isHomePage && isAnchor) {
      return (
        <a 
          href={to} 
          className={cn(
            "transition-all duration-300 relative group overflow-hidden",
            isActive ? "text-gold-lighter" : "text-gold hover:text-gold-lighter"
          )}
          onClick={(e) => handleSmoothScroll(e, sectionId)}
        >
          {text}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-lighter to-transparent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          {isActive && <SparkleEffect className="opacity-30" />}
        </a>
      );
    }
    return (
      <Link 
        to={`/${isAnchor ? sectionId : to}`} 
        className="text-gold hover:text-gold-lighter transition-all duration-300 relative group overflow-hidden"
      >
        {text}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-lighter to-transparent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      </Link>
    );
  };

  return (
    <div className="hidden md:flex space-x-8 items-center">
      {renderNavLink("Home", isHomePage ? "#home" : "/")}
      {renderNavLink("About", "#about")}
      {renderNavLink("Our Story", "#our-story")}
      {renderNavLink("FAQ", "#faq")}
      {renderNavLink("Testimonials", "#testimonials")}
      {renderNavLink("Contact", "#contact")}
      {!isBookingPage && (
        <Link 
          to="/booking" 
          className="relative overflow-hidden group text-white bg-gradient-to-r from-gold to-gold-lighter hover:from-gold-lighter hover:to-gold transition-all duration-300 px-6 py-2.5 rounded-md transform hover:scale-105 active:scale-95"
          onClick={handleBookNowClick}
        >
          <span className="relative z-10 flex items-center gap-2">
            Book Now
            <Sparkle className="w-4 h-4" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-gold-lighter to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      )}
    </div>
  );
};
