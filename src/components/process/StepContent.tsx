
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Star } from "lucide-react";
import { Sparkles } from "../effects/Sparkles";
import { TabsContent } from "../ui/tabs";
import { Step } from "./steps-data";

interface StepContentProps {
  step: Step;
}

const StepContent: React.FC<StepContentProps> = ({ step }) => {
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <TabsContent key={step.step} value={step.step} className="mt-2 focus:outline-none">
      <motion.div
        variants={fadeVariants}
        initial="hidden"
        animate="visible"
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
                  <p className="text-sm text-gray-600">{step.tip}</p>
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
  );
};

export default StepContent;
