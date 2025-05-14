
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
  onSubmit,
}: BookingFormProps) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return !!formData.service;
      case 1:
        return (
          !!formData.bedrooms &&
          !!formData.bathrooms &&
          !!formData.kitchens &&
          !!formData.livingAreas &&
          !!formData.cleaningFrequency
        );
      case 2:
        return !!formData.date && !!formData.time;
      case 3:
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^[0-9-+\s()]{10,}$/;
        return (
          !!formData.name &&
          emailRegex.test(formData.email) &&
          phoneRegex.test(formData.phone)
        );
      case 4:
        return !!formData.address;
      default:
        return true;
    }
  };

  return (
    <form onSubmit={handleFormSubmit} id="booking-form" className="relative">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-bold">
          {steps[currentStep].title}
        </h2>
        <p className="text-gray-600 mt-1 text-sm md:text-base">{steps[currentStep].description}</p>
      </div>

      <div className="min-h-[280px] max-h-[70vh] overflow-y-auto pr-2 pl-1 pb-4 scrollbar-thin">
        {steps[currentStep].component}
      </div>

      <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
        {currentStep > 0 ? (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onPrevStep();
            }}
            className="flex items-center text-gray-600 hover:text-gray-900 py-2 px-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span className="text-sm md:text-base">Back</span>
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
            className="flex items-center bg-gold text-white px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-gold-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        ) : (
          <button
            type="submit"
            className="flex items-center bg-gold text-white px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-gold-dark transition-colors duration-300 text-sm md:text-base"
          >
            <span>Confirm Booking</span>
            <Check className="w-4 h-4 ml-1" />
          </button>
        )}
      </div>
    </form>
  );
};
