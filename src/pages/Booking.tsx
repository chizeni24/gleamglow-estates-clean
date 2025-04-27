
import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ServiceSelection } from "@/components/booking-steps/ServiceSelection";
import { DateTimeSelection } from "@/components/booking-steps/DateTimeSelection";
import { PropertyDetails } from "@/components/booking-steps/PropertyDetails";
import { ContactInfo } from "@/components/booking-steps/ContactInfo";
import { ServiceAddress } from "@/components/booking-steps/ServiceAddress";
import { BookingSummary } from "@/components/booking-steps/BookingSummary";
import { StepIndicator } from "./booking/StepIndicator";
import { BookingForm } from "./booking/BookingForm";
import type { Step, BookingFormData } from "./booking/types";

const BookingPage = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const serviceParam = searchParams.get('service');
  
  const [currentStep, setCurrentStep] = useState(0);
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
      if (currentStep === 0) {
        setCurrentStep(1);
      }
    }
  }, [serviceParam, currentStep]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    nextStep();
    // Use navigate instead of directly changing window.location to avoid full page reload
    navigate(`/booking?service=${encodeURIComponent(service)}`, { replace: true });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      // Scroll to top when changing steps
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      // Scroll to top when changing steps
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Booking Requested",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    // Use navigate instead of directly changing window.location to avoid full page reload
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  };

  const steps: Step[] = [
    {
      id: "service",
      title: "Select Service",
      description: "Choose the service that best fits your needs",
      component: <ServiceSelection formData={formData} onServiceSelect={handleServiceSelect} />
    },
    {
      id: "datetime",
      title: "Select Date & Time",
      description: "Choose your preferred date and time for the service",
      component: <DateTimeSelection formData={formData} handleInputChange={handleInputChange} />
    },
    {
      id: "propertyDetails",
      title: "Property Details",
      description: "Tell us about your property",
      component: <PropertyDetails formData={formData} handleInputChange={handleInputChange} />
    },
    {
      id: "contact",
      title: "Your Information",
      description: "Please provide your contact details",
      component: <ContactInfo formData={formData} handleInputChange={handleInputChange} />
    },
    {
      id: "address",
      title: "Service Address",
      description: "Where would you like us to provide the service?",
      component: <ServiceAddress formData={formData} handleInputChange={handleInputChange} />
    },
    {
      id: "confirm",
      title: "Confirm Your Booking",
      description: "Please review your information before submitting",
      component: <BookingSummary formData={formData} />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="container-custom py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Cleaning Service</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your professional cleaning service in a few simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <StepIndicator steps={steps} currentStep={currentStep} />
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 transition-all duration-500">
            <BookingForm 
              steps={steps}
              currentStep={currentStep}
              formData={formData}
              onPrevStep={prevStep}
              onNextStep={nextStep}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
