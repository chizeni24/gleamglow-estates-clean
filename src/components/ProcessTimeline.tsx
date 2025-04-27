
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  { 
    step: '1', 
    title: 'Gather & Declutter', 
    text: 'Clear surfaces, empty bins.'
  },
  { 
    step: '2', 
    title: 'Lift & Dust', 
    text: 'Top-down dusting of surfaces.'
  },
  { 
    step: '3', 
    title: 'Prep & Steam', 
    text: 'Apply eco solutions, heat steamer.'
  },
  { 
    step: '4', 
    title: 'Steam-Sanitise', 
    text: 'Remove 99.9% of germs.'
  },
  { 
    step: '5', 
    title: 'Polish & Glow', 
    text: 'Streak-free shine, fold linens.'
  },
];

const ProcessTimeline = () => {
  const navigate = useNavigate();

  return (
    <section id="process" className="py-12 max-w-4xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif mb-2 text-gold">
          The Gleam Glow Method
        </h2>
        <p className="text-gray-600 text-sm">
          Five steps to exceptional cleaning
        </p>
      </div>
      
      <div className="space-y-4">
        {steps.map((s) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gold/10 rounded-lg p-4 flex items-center"
          >
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white mr-4">
              {s.step}
            </div>
            <div>
              <h3 className="text-gold font-semibold">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button 
          onClick={() => navigate('/booking')}
          className="bg-gold hover:bg-gold-dark text-white"
        >
          Book Your Gleam <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default ProcessTimeline;
