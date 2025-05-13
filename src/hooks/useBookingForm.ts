
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { BookingFormData } from "@/pages/booking/types";

export const useBookingForm = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const serviceParam = searchParams.get('service');
  const stepParam = searchParams.get('step');
  
  const [currentStep, setCurrentStep] = useState(stepParam ? parseInt(stepParam) : 0);
  const [formData, setFormData] = useState<BookingFormData>({
    service: serviceParam || "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    bedrooms: "1",
    bathrooms: "1",
    kitchens: "1",
    livingAreas: "1",
    squareFootage: "",
    cleaningFrequency: "one-time",
    pets: "no",
    specialRequirements: "",
  });

  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
      if (currentStep === 0 && !stepParam) {
        setCurrentStep(1);
      }
    }
  }, [serviceParam, currentStep, stepParam]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    nextStep();
    navigate(`/booking?service=${encodeURIComponent(service)}`, { replace: true });
  };

  const nextStep = () => {
    if (currentStep < 5) { // Using a hardcoded value since we don't have steps here
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return {
    formData,
    currentStep,
    setCurrentStep,
    handleInputChange,
    handleServiceSelect,
    nextStep,
    prevStep,
    toast,
    navigate
  };
};
