
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Info, Phone, Calendar, Image } from "lucide-react";
import { cn } from "@/lib/utils";

const DarkNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 h-16 md:h-20 transition-all duration-300",
      scrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-md" : "bg-gray-900"
    )}>
      <div className="container-custom h-full flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">
          <span className="text-white">Responsive</span>
          <span className="text-blue-400">Demo</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" icon={<Home className="w-4 h-4" />} label="Home" />
          <NavLink to="#about" icon={<Info className="w-4 h-4" />} label="About" />
          <NavLink to="#gallery" icon={<Image className="w-4 h-4" />} label="Gallery" />
          <NavLink to="#contact" icon={<Phone className="w-4 h-4" />} label="Contact" />
          <NavLink to="/booking" icon={<Calendar className="w-4 h-4" />} label="Booking" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-lg animate-fade-in">
          <div className="flex flex-col py-4">
            <MobileNavLink to="/" icon={<Home className="w-4 h-4" />} label="Home" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="#about" icon={<Info className="w-4 h-4" />} label="About" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="#gallery" icon={<Image className="w-4 h-4" />} label="Gallery" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="#contact" icon={<Phone className="w-4 h-4" />} label="Contact" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/booking" icon={<Calendar className="w-4 h-4" />} label="Booking" onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const NavLink = ({ to, icon, label }: NavLinkProps) => (
  <Link
    to={to}
    className="text-gray-300 flex items-center gap-1.5 hover:text-white transition-colors duration-200"
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, label, onClick }: NavLinkProps) => (
  <Link
    to={to}
    className="text-gray-300 flex items-center gap-2 px-6 py-3 hover:bg-gray-800 transition-colors duration-200"
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default DarkNavbar;
