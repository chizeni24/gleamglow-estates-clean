
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ServiceSelection } from "@/components/booking-steps/ServiceSelection";
import { DateTimeSelection } from "@/components/booking-steps/DateTimeSelection";
import { PropertyDetails } from "@/components/booking-steps/PropertyDetails";
import { ContactInfo } from "@/components/booking-steps/ContactInfo";
import { ServiceAddress } from "@/components/booking-steps/ServiceAddress";
import { BookingSummary } from "@/components/booking-steps/BookingSummary";

type Step = {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
};

const BookingPage = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const serviceParam = searchParams.get('service');
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
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
    navigate(`/booking?service=${encodeURIComponent(service)}`);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Booking Requested",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setTimeout(() => {
      window.location.href = "/";
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Luxury Clean</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your premium cleaning service in a few simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 transition-all duration-500">
            <form onSubmit={handleSubmit}>
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
                    onClick={prevStep}
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
                    onClick={nextStep}
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
