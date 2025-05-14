
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { BookingFormData } from "@/pages/booking/types";

export const useBookingForm = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const serviceParam = searchParams.get('service');
  const stepParam = searchParams.get('step');
  
  // Set initial step based on URL parameter
  const initialStep = stepParam ? parseInt(stepParam, 10) : 0;
  const [currentStep, setCurrentStep] = useState(initialStep);
  
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
    teamSize: "1",
  });

  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
    
    if (stepParam) {
      const step = parseInt(stepParam, 10);
      if (!isNaN(step) && step >= 0 && step <= 5) {
        setCurrentStep(step);
      }
    }
  }, [serviceParam, stepParam]);

  // Listen for team size changes from the BookingSummary component
  useEffect(() => {
    const handleTeamSizeChange = (e: CustomEvent) => {
      const { teamSize } = e.detail;
      setFormData(prev => ({ ...prev, teamSize }));
    };

    document.addEventListener('teamSizeChanged', handleTeamSizeChange as EventListener);
    
    return () => {
      document.removeEventListener('teamSizeChanged', handleTeamSizeChange as EventListener);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    nextStep();
    navigate(`/booking`, { replace: true });
  };

  const nextStep = () => {
    if (currentStep < 5) { 
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
