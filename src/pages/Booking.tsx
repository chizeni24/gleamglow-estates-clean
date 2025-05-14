
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { StepIndicator } from "./booking/StepIndicator";
import { BookingForm } from "./booking/BookingForm";
import { useBookingForm } from "@/hooks/useBookingForm";
import { submitBookingForm } from "@/services/bookingService";
import { createBookingSteps } from "@/components/booking-steps/BookingSteps";

const BookingPage = () => {
  const {
    formData,
    currentStep,
    handleInputChange,
    handleServiceSelect,
    nextStep,
    prevStep,
    toast,
    navigate
  } = useBookingForm();
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const steps = createBookingSteps({
    formData,
    handleInputChange,
    handleServiceSelect,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted in Booking.tsx:", formData);
    
    if (isSubmitting) {
      console.log("Submission already in progress, skipping");
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Show loading toast
      toast({
        title: "Submitting",
        description: "Please wait while we process your booking...",
      });
      
      console.log("Calling submitBookingForm...");
      const response = await submitBookingForm(formData);
      console.log("Submission response received:", response);
      
      const responseData = await response.json();
      console.log("Response data:", responseData);
      
      if (responseData.success) {
        // Show success toast
        toast({
          title: "Booking Confirmed",
          description: "We've received your booking request. Thank you!",
        });

        // Navigate to thank you page with booking data
        navigate("/thank-you", { 
          replace: true,
          state: { bookingData: formData } 
        });
      } else {
        throw new Error(responseData.message || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Error",
        description: "There was an issue submitting the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    // Prevent auto-scrolling to bottom when the page loads
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8E9]">
      <Navbar />
      
      <main className="flex-grow container-custom pt-24 pb-16">
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
            <div className="flex justify-center w-full">
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
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;
