
import React from "react";
import { motion } from "framer-motion";
import { steps } from "./steps-data";

interface ProgressLineProps {
  activeTab: string;
}

const ProgressLine: React.FC<ProgressLineProps> = ({ activeTab }) => {
  return (
    <div className="absolute top-0 left-0 right-0 h-1 bg-gold-light/20 rounded-full -mt-6 mx-8 hidden md:block">
      <motion.div 
        className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
        style={{ 
          width: `${(Number(activeTab) / steps.length) * 100}%`,
          transition: "width 0.5s ease-out" 
        }}
      />
    </div>
  );
};

export default ProgressLine;
