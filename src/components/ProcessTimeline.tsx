
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const steps = [
  { 
    step: '1', 
    title: 'Declutter & Dust', 
    text: 'We clear surfaces and high-dust vents, fans & corners.',
    delay: 0 
  },
  { 
    step: '2', 
    title: 'Deep Clean & Steam', 
    text: 'Hospital-grade steam sanitization on all high-touch points.',
    delay: 0.2 
  },
  { 
    step: '3', 
    title: 'Final Polish & Walkthrough', 
    text: 'Hotel-style bed fold, scent mist, client sign-off.',
    delay: 0.4 
  },
];

const ProcessTimeline = () => {
  const navigate = useNavigate();

  return (
    <section id="process" className="py-20">
      <h2 className="text-center text-3xl font-serif mb-12">
        The <span className="text-gold">Glow Standard</span>
      </h2>
      <div className="relative max-w-4xl mx-auto border-l-2 border-gold-light px-6">
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
    </section>
  );
};

export default ProcessTimeline;
