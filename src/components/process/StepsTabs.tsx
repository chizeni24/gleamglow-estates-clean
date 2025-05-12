
import React from "react";
import { TabsList, TabsTrigger } from "../ui/tabs";
import { steps } from "./steps-data";

interface StepsTabsProps {
  activeTab: string;
}

const StepsTabs: React.FC<StepsTabsProps> = ({ activeTab }) => {
  return (
    <div className="flex flex-col items-center">
      <TabsList className="grid grid-cols-5 bg-gold-light/10 p-1 rounded-xl mb-8 w-full max-w-4xl">
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
  );
};

export default StepsTabs;
