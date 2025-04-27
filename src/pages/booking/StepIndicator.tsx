
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Step } from "./types";

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className={cn(
              "flex flex-col items-center",
              {"opacity-50": index !== currentStep}
            )}
          >
            <div 
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                index < currentStep 
                  ? "bg-gold text-white" 
                  : index === currentStep 
                    ? "bg-white text-gold border-2 border-gold" 
                    : "bg-gray-100 text-gray-400 border border-gray-300"
              )}
            >
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span className="text-xs mt-2 hidden md:block">{step.title}</span>
          </div>
        ))}
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="absolute h-full bg-gold transition-all duration-500"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};
