
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GoldButton } from "./ui/gold-button";
import { SparkleEffect } from "./effects/SparkleEffect";
import { Sparkles } from "./effects/Sparkles";
import { Star, ArrowRight } from "lucide-react";

const steps = [
  { 
    step: '1', 
    title: 'Gather & Declutter', 
    text: 'We start by clearing surfaces and preparing your space for the full GleamGlow experience.',
    icon: '✨',
    color: 'bg-gold-light'
  },
  { 
    step: '2', 
    title: 'Lift & Dust', 
    text: 'Our top-down dusting approach ensures no surface is left untouched or unloved.',
    icon: '🧹',
    color: 'bg-gold-lighter/30'
  },
  { 
    step: '3', 
    title: 'Prep & Steam', 
    text: 'We apply our signature eco-friendly solutions and prepare our premium steamers.',
    icon: '💧',
    color: 'bg-gold/20'
  },
  { 
    step: '4', 
    title: 'Steam-Sanitise', 
    text: 'Our advanced steam technology eliminates 99.9% of germs and bacteria without harsh chemicals.',
    icon: '🔥',
    color: 'bg-gold-lighter/40'
  },
  { 
    step: '5', 
    title: 'Polish & Glow', 
    text: 'The final touch - we add our signature streak-free shine and perfect every detail.',
    icon: '✨',
    color: 'bg-gold-light/50'
  },
];

const ProcessTimeline = () => {
  const navigate = useNavigate();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px rgba(203, 163, 95, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="process" className="relative py-20 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-lighter/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-lighter/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-4 text-charcoal relative inline-block">
              The <span className="gleam-text relative">
                GleamGlow
                <SparkleEffect className="opacity-60" color="#EBD27D" count={5} minSize={3} maxSize={5} />
              </span> Method
            </h2>
          </motion.div>
          <motion.p 
            className="text-gray-600 mx-auto max-w-2xl mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Our signature five-step process transforms any space from ordinary to extraordinary,
            leaving nothing but brilliance in our wake.
          </motion.p>
          
          <div className="flex justify-center space-x-2 mb-12">
            {[0, 1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-gold-lighter"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              whileHover="hover"
              className={`relative bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gold/10 transition-all`}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-12 top-full w-[2px] h-8 bg-gradient-to-b from-gold-lighter to-transparent -z-10"></div>
              )}
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-4xl shrink-0`}>
                  {step.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-gold text-xl font-serif mr-2">Step {step.step}:</span>
                    <h3 className="text-xl font-bold text-charcoal">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.text}</p>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gold-light/30 text-gold">
                  <Star size={18} />
                </div>
              </div>
              
              <div className="absolute top-2 right-2">
                <Sparkles className="opacity-30" count={3} minSize={1} maxSize={2} />
              </div>
            </motion.div>
          ))}
        </motion.div>

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
      </div>
    </section>
  );
};

export default ProcessTimeline;
