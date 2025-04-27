
import React from 'react';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  return (
    <button 
      className="md:hidden text-gray-800 p-2 relative z-50 hover:text-gold transition-colors"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="relative w-6 h-6">
        <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
        <span className={`absolute h-0.5 w-full bg-current top-3 transition-all duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
      </div>
    </button>
  );
};
