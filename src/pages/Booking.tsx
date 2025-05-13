import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
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
    if (currentStep < steps.length - 1) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted in Booking.tsx:", formData);
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbxr1HmvBXJaJkeE_A3mlI2-kxcaKsFshEuCjYEEO6vzVSkJKGKeUX7ebVXZH4oZyYQY/exec";

    try {
      console.log("Sending data to Google Sheets:", JSON.stringify({
        ...formData,
        secret: "GLEAM-KEY-92fjw28u3dh4n38s03a",
      }));
      
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          secret: "GLEAM-KEY-92fjw28u3dh4n38s03a",
        }),
      });

      console.log("Response status:", response.status);
      
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      toast({
        title: "Booking Confirmed",
        description: "We've received your request. Thank you!",
      });

      setTimeout(() => {
        navigate("/", { replace: true });
      }, 3000);
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Error",
        description: "There was an issue submitting the form. Please try again.",
        variant: "destructive",
      });
    }
  };

  const steps: Step[] = [
    {
      id: "service",
      title: "Select Service",
      description: "Choose the service that best fits your needs",
      component: <Services isBookingStep={true} onServiceSelect={handleServiceSelect} />
    },
    {
      id: "propertyDetails",
      title: "Property Details",
      description: "Tell us about your property",
      component: <PropertyDetails formData={formData} handleInputChange={handleInputChange} />
    },
    {
      id: "datetime",
      title: "Select Date & Time",
      description: "Choose your preferred date and time for the service",
      component: <DateTimeSelection formData={formData} handleInputChange={handleInputChange} />
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
    <div className="min-h-screen bg-[#FFF8E9]">
      <Navbar />

      <div className="container-custom py-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Book Your Service</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Steam-sanitised care for every home and budget. Experience{' '}
            <span className="text-charcoal">the</span>{' '}
            <span className="text-gold">Gleam</span>, breathe{' '}
            <span className="text-charcoal">the</span>{' '}
            <span className="text-gold">Glow</span>.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <StepIndicator steps={steps} currentStep={currentStep} />
          
          {currentStep === 0 ? (
            <div>
              <Services isBookingStep={true} onServiceSelect={handleServiceSelect} />
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
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
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
