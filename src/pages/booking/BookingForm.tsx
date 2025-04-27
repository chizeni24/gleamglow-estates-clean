
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { BookingFormData, Step } from "./types";

interface BookingFormProps {
  steps: Step[];
  currentStep: number;
  formData: BookingFormData;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const BookingForm = ({ 
  steps, 
  currentStep, 
  formData, 
  onPrevStep, 
  onNextStep, 
  onSubmit 
}: BookingFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">{steps[currentStep].title}</h2>
        <p className="text-gray-600 mt-2">{steps[currentStep].description}</p>
      </div>
      
      <div className="min-h-[300px]">
        {steps[currentStep].component}
      </div>
      
      <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
        {currentStep > 0 ? (
          <button
            type="button"
            onClick={onPrevStep}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
        ) : (
          <div></div>
        )}
        
        {currentStep < steps.length - 1 ? (
          <button
            type="button"
            onClick={onNextStep}
            disabled={
              (currentStep === 0 && !formData.service) ||
              (currentStep === 1 && (!formData.date || !formData.time)) ||
              (currentStep === 2 && !formData.bedrooms) ||
              (currentStep === 3 && (!formData.name || !formData.email || !formData.phone)) ||
              (currentStep === 4 && !formData.address)
            }
            className="flex items-center bg-gold text-white px-6 py-3 rounded-md hover:bg-gold-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        ) : (
          <button
            type="submit"
            className="flex items-center bg-gold text-white px-6 py-3 rounded-md hover:bg-gold-dark transition-colors duration-300"
          >
            Confirm Booking
            <Check className="w-4 h-4 ml-2" />
          </button>
        )}
      </div>
    </form>
  );
};
