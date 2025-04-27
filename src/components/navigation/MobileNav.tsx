import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Sparkle } from "lucide-react";
import { SparkleEffect } from "../effects/SparkleEffect";

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

    if (isHomePage && isAnchor) {
      return (
        <a 
          href={to} 
          className={cn(
            "transition-all duration-300 relative group overflow-hidden block w-full py-3",
            isActive ? "text-gold-lighter" : "text-gold hover:text-gold-lighter"
          )}
          onClick={(e) => {
            handleSmoothScroll(e, sectionId);
            toggleMenu();
          }}
        >
          <span className="relative z-10">{text}</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-lighter to-transparent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          {isActive && <SparkleEffect className="opacity-30" />}
        </a>
      );
    }
    return (
      <Link 
        to={`/${isAnchor ? sectionId : to}`} 
        className="text-gold hover:text-gold-lighter transition-all duration-300 relative group overflow-hidden block w-full py-3"
        onClick={toggleMenu}
      >
        <span className="relative z-10">{text}</span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-lighter to-transparent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      </Link>
    );
  };

  return (
    <div 
      className={cn(
        "md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transition-all duration-300",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex flex-col p-6 space-y-4 mt-16">
        {renderNavLink("Home", isHomePage ? "#home" : "/")}
        {renderNavLink("About", "#about")}
        {renderNavLink("Our Story", "#our-story")}
        {renderNavLink("FAQ", "#faq")}
        {renderNavLink("Testimonials", "#testimonials")}
        {renderNavLink("Contact", "#contact")}
        <Link 
          to="/booking" 
          className="relative overflow-hidden group text-white bg-gradient-to-r from-gold to-gold-lighter hover:from-gold-lighter hover:to-gold transition-all duration-300 px-6 py-3 rounded-md transform hover:scale-105 active:scale-95 w-full text-center mt-4"
          onClick={() => {
            toggleMenu();
            handleBookNowClick();
          }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Book Now
            <Sparkle className="w-4 h-4" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-gold-lighter to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>
      
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-8 w-32 h-32 bg-gold-lighter/5 rounded-full blur-2xl"></div>
    </div>
  );
};
