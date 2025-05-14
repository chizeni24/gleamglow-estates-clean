
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Step } from "./types";

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="mb-6 md:mb-8 px-2">
      <div className="hidden md:flex justify-between items-center mb-4 overflow-x-auto pb-2">
        <div className="flex items-center space-x-2">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="flex items-center"
            >
              <div className="flex flex-col items-center">
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
                <span className="text-xs mt-1 whitespace-nowrap max-w-[80px] text-center">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="w-8 h-0.5 bg-gray-200 mx-1">
                  <div 
                    className="h-full bg-gold transition-all duration-300"
                    style={{ width: index < currentStep ? "100%" : "0%" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile indicator */}
      <div className="flex md:hidden items-center justify-between mb-4">
        <div className="flex items-center">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center bg-gold text-white mr-2"
          >
            {currentStep + 1}
          </div>
          <span className="text-sm font-medium">
            {steps[currentStep].title} 
          </span>
        </div>
        <span className="text-xs text-gray-500">
          {currentStep + 1}/{steps.length}
        </span>
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
