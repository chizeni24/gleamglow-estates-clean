
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  { 
    step: '1', 
    title: 'Declutter & Dust', 
    text: 'Surfaces cleared, high-dust vents & corners.',
    delay: 0 
  },
  { 
    step: '2', 
    title: 'Deep Clean & Steam', 
    text: 'Dry steam sanitises handles, switches, and appliances.',
    delay: 0.2 
  },
  { 
    step: '3', 
    title: 'Final Polish & Walk-Through', 
    text: 'Hotel-fold linens, scent mist, client sign-off.',
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
          Our proven three-step process ensures consistent, exceptional results.
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
            className="relative pl-10 mb-10 cursor-pointer group hover:bg-gold-light/10 p-4 rounded-lg transition-all"
          >
            <div className="absolute w-4 h-4 bg-gold rounded-full -left-2 top-1.5 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-gold/20 transition-all" />
            <h3 className="font-serif text-xl group-hover:text-gold transition-colors">{s.step}. {s.title}</h3>
            <p className="text-gray-600 mt-2">{s.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button 
          onClick={() => navigate('/booking')}
          className="bg-gold hover:bg-gold-dark text-white font-serif group"
        >
          Book Your Steam Clean <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default ProcessTimeline;
