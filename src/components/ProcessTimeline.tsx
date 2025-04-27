
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

// Updated step content to emphasize steam cleaning throughout the process
const steps = [
  { 
    step: '1', 
    title: 'Preparation & Declutter', 
    text: 'We organize spaces and prepare surfaces for our signature steam cleaning process.',
    delay: 0 
  },
  { 
    step: '2', 
    title: 'Steam Deep-Clean', 
    text: 'Our hospital-grade steam technology eliminates 99.9% of germs on all surfaces.',
    delay: 0.2 
  },
  { 
    step: '3', 
    title: 'Polish & Finishing', 
    text: 'Final touches with our eco-friendly products for that unmistakable Glow finish.',
    delay: 0.4 
  },
];

const ProcessTimeline = () => {
  const navigate = useNavigate();

  return (
    <section id="process" className="py-20 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif mb-4">
          The <span className="text-gold">Glow Standard</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our signature steam-powered cleaning process leaves your home not just clean, 
          but sanitized and gleaming - without harsh chemicals.
        </p>
      </div>
      
      <div className="relative max-w-3xl mx-auto border-l-2 border-gold-light px-6 mb-12">
        {steps.map(s => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: s.delay }}
            onClick={() => navigate('/booking')}
            className="pl-10 mb-10 cursor-pointer group hover:bg-gold-light/10 p-4 rounded-lg transition-all"
          >
            <div className="w-4 h-4 bg-gold rounded-full -left-2 top-1.5 absolute group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-gold/20 transition-all" />
            <h3 className="font-semibold text-lg group-hover:text-gold transition-colors">{s.step}. {s.title}</h3>
            <p className="text-sm text-gray-600">{s.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button 
          onClick={() => navigate('/booking')}
          className="bg-gold hover:bg-gold-dark text-white group"
        >
          Book Your Steam Cleaning <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default ProcessTimeline;
