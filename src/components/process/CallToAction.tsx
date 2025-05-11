
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GoldButton } from "../ui/gold-button";

const CallToAction: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      className="text-center mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
    >
      <GoldButton 
        onClick={() => navigate('/booking')}
        size="lg"
        showShine
        sparkle
        className="group"
      >
        Experience The GleamGlow Method
        <ArrowRight className="inline-block ml-1 group-hover:translate-x-1 transition-transform" size={18} />
      </GoldButton>
    </motion.div>
  );
};

export default CallToAction;
