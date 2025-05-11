
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs } from "./ui/tabs";
import { steps } from "./process/steps-data";
import ProcessHeader from "./process/ProcessHeader";
import StepsTabs from "./process/StepsTabs";
import StepContent from "./process/StepContent";
import ProgressLine from "./process/ProgressLine";
import CallToAction from "./process/CallToAction";

const ProcessTimeline = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <section id="process" className="relative py-20 px-4 bg-white/50 backdrop-blur-sm overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-lighter/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-lighter/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <ProcessHeader />
        
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
            <StepsTabs activeTab={activeTab} />
            
            <div className="relative mt-12">
              {/* Progress line */}
              <ProgressLine activeTab={activeTab} />
              
              {steps.map((step) => (
                <StepContent key={step.step} step={step} />
              ))}
            </div>
          </Tabs>
        </motion.div>

        <CallToAction />
      </div>
    </section>
  );
};

export default ProcessTimeline;
