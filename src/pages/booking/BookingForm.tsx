
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
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission triggered");
    onSubmit(e);
  };

  const isStepValid = () => {
    switch(currentStep) {
      case 0: // Service
        return !!formData.service;
      case 1: // Property Details
        return !!formData.bedrooms && 
               !!formData.bathrooms && 
               !!formData.kitchens && 
               !!formData.livingAreas && 
               !!formData.cleaningFrequency;
      case 2: // Date & Time
        return !!formData.date && !!formData.time;
      case 3: // Contact Info
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^[0-9-+\s()]{10,}$/;
        return !!formData.name && 
               emailRegex.test(formData.email) && 
               phoneRegex.test(formData.phone);
      case 4: // Address
        return !!formData.address;
      default:
        return true;
    }
  };
  
  return (
    <form onSubmit={handleFormSubmit} id="booking-form">
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
            onClick={(e) => {
              e.preventDefault();
              onPrevStep();
            }}
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
            onClick={(e) => {
              e.preventDefault();
              if (isStepValid()) {
                onNextStep();
              }
            }}
            disabled={!isStepValid()}
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
