
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";

const steps = [
  { 
    step: '1', 
    title: 'Gather & Declutter', 
    text: 'Clear surfaces, empty bins, set each room for action.',
    delay: 0 
  },
  { 
    step: '2', 
    title: 'Lift & Dust', 
    text: 'Top-down dusting of ceilings, fans, vents, furniture.',
    delay: 0.2 
  },
  { 
    step: '3', 
    title: 'Prep & Pre-Steam', 
    text: 'Loosen grime with eco solutions while the steamer heats.',
    delay: 0.4 
  },
  { 
    step: '4', 
    title: 'Steam-Sanitise', 
    text: 'Dry steam sweeps hard surfaces & upholstery, removing 99.9% of germs.',
    delay: 0.6 
  },
  { 
    step: '5', 
    title: 'Polish & Glow', 
    text: 'Streak-free shine, hotel-fold linens, subtle eucalyptus finish.',
    delay: 0.8 
  },
];

const ProcessTimeline = () => {
  const navigate = useNavigate();

  return (
    <section id="process" className="py-20 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif mb-4">
          The <span className="text-gold">Gleam Glow Method</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our proven five-step process ensures consistent, exceptional results.
        </p>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        {steps.map((s, index) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: s.delay }}
            className={`relative mb-12 md:mb-16 ${
              index % 2 === 0 ? 'md:ml-0 md:mr-[50%]' : 'md:ml-[50%] md:mr-0'
            } bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gold/10`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                {s.step}
              </div>
              <div>
                <h3 className="font-serif text-xl text-gold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.text}</p>
              </div>
            </div>
            <Star className="absolute -top-2 -right-2 text-gold-lighter w-4 h-4 opacity-50" />
          </motion.div>
        ))}
        
        {/* Connecting line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-gold-lighter via-gold to-gold-lighter opacity-20 hidden md:block" />
      </div>

      <div className="text-center mt-12">
        <Button 
          onClick={() => navigate('/booking')}
          className="bg-gold hover:bg-gold-dark text-white font-serif group"
        >
          Experience The Method <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default ProcessTimeline;
