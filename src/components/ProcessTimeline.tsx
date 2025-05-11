
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GoldButton } from "./ui/gold-button";
import { SparkleEffect } from "./effects/SparkleEffect";
import { Sparkles } from "./effects/Sparkles";
import { Star, ArrowRight, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const steps = [
  { 
    step: '1', 
    title: 'Gather & Declutter', 
    text: 'We start by clearing surfaces and preparing your space for the full GleamGlow experience.',
    color: 'bg-gold-light',
    icon: Star
  },
  { 
    step: '2', 
    title: 'Lift & Dust', 
    text: 'Our top-down dusting approach ensures no surface is left untouched or unloved.',
    color: 'bg-gold-lighter/30',
    icon: Star
  },
  { 
    step: '3', 
    title: 'Prep & Steam', 
    text: 'We apply our signature eco-friendly solutions and prepare our premium steamers.',
    color: 'bg-gold/20',
    icon: Star
  },
  { 
    step: '4', 
    title: 'Steam-Sanitise', 
    text: 'Our advanced steam technology eliminates 99.9% of germs and bacteria without harsh chemicals.',
    color: 'bg-gold-lighter/40',
    icon: Star
  },
  { 
    step: '5', 
    title: 'Polish & Glow', 
    text: 'The final touch - we add our signature streak-free shine and perfect every detail.',
    color: 'bg-gold-light/50',
    icon: Star
  },
];

const ProcessTimeline = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("1");
  
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="process" className="relative py-20 px-4 bg-white/50 backdrop-blur-sm overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-lighter/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-lighter/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 relative">
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
          
          <div className="flex justify-center space-x-2 mb-8">
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <Tabs
            defaultValue="1"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex flex-col items-center">
              <TabsList className="grid grid-cols-5 bg-gold-lighter/10 p-1 rounded-xl mb-8 w-full max-w-4xl">
                {steps.map((step) => (
                  <TabsTrigger
                    key={step.step}
                    value={step.step}
                    className="text-charcoal data-[state=active]:bg-gold data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <span className="hidden md:inline">Step {step.step}</span>
                    <span className="md:hidden">{step.step}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div className="relative mt-12">
              {/* Progress line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold-lighter/20 rounded-full -mt-6 mx-8 hidden md:block">
                <motion.div 
                  className="h-full bg-gradient-to-r from-gold to-gold-lighter rounded-full"
                  style={{ 
                    width: `${(Number(activeTab) / steps.length) * 100}%`,
                    transition: "width 0.5s ease-out" 
                  }}
                />
              </div>
              
              {steps.map((step) => (
                <TabsContent key={step.step} value={step.step} className="focus:outline-none">
                  <motion.div
                    variants={fadeVariants}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gold/10 transition-all h-full"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-8">
                      <div className="flex flex-col items-center md:items-start">
                        <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-3xl font-bold text-gold shrink-0 shadow-md mb-4 border border-gold/20`}>
                          {step.step}
                        </div>
                        
                        <div className="hidden md:flex flex-col items-center space-y-2">
                          {Array.from({ length: Number(step.step) }).map((_, index) => (
                            <div 
                              key={index} 
                              className="w-6 h-6 rounded-full bg-gold-lighter flex items-center justify-center text-white shadow-sm"
                            >
                              <Check size={14} />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <h3 className="text-3xl font-serif font-bold text-charcoal">{step.title}</h3>
                          <div className="ml-3">
                            <Sparkles className="opacity-50" count={3} minSize={1} maxSize={2} />
                          </div>
                        </div>
                        <p className="text-gray-600 text-lg mb-6">{step.text}</p>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="bg-gold/5 p-4 rounded-lg border border-gold/10"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gold-light/30 flex items-center justify-center shrink-0">
                              <Star size={16} className="text-gold" />
                            </div>
                            <div>
                              <h4 className="font-medium text-charcoal mb-1">Gleam Tip</h4>
                              <p className="text-sm text-gray-600">
                                {step.step === "1" && "Start fresh by removing all small items from surfaces for a thorough clean."}
                                {step.step === "2" && "Always dust from top to bottom to avoid re-soiling cleaned areas."}
                                {step.step === "3" && "Our eco-friendly solutions are safe for all surfaces and leave no harmful residues."}
                                {step.step === "4" && "Steam cleaning sanitizes without chemicals, making it perfect for homes with kids and pets."}
                                {step.step === "5" && "Our signature polishing cloth is made from ultra-microfiber for a streak-free finish."}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="absolute top-2 right-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Sparkles className="opacity-30" count={3} minSize={1} maxSize={2} />
                    </motion.div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
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
