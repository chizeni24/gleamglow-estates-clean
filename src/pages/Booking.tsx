
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { StepIndicator } from "./booking/StepIndicator";
import { BookingForm } from "./booking/BookingForm";
import { useBookingForm } from "@/hooks/useBookingForm";
import { submitBookingForm } from "@/services/bookingService";
import { createBookingSteps } from "@/components/booking-steps/BookingSteps";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
  const [emblaRef, setEmblaRef] = React.useState<any>(null);

  const steps = createBookingSteps({
    formData,
    handleInputChange,
    handleServiceSelect,
  });

  React.useEffect(() => {
    if (emblaRef) {
      emblaRef.scrollTo(currentStep, true);
    }
  }, [currentStep, emblaRef]);

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

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8E9]">
      <Navbar />
      
      <main className="flex-grow pt-10 md:pt-16 pb-8 md:pb-12 px-4 md:px-6 lg:px-12">
        <div className="text-center mb-4 md:mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Book Your Service</h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Steam-sanitised care for every home and budget. Experience{' '}
            <span className="text-charcoal">the</span>{' '}
            <span className="text-gold">Gleam</span>, breathe{' '}
            <span className="text-charcoal">the</span>{' '}
            <span className="text-gold">Glow</span>.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <StepIndicator steps={steps} currentStep={currentStep} />
          
          <div className="relative overflow-hidden">
            <Carousel 
              opts={{ 
                align: 'start',
                loop: false,
                dragFree: false,
                skipSnaps: false,
              }}
              className="w-full"
              setApi={setEmblaRef}
            >
              <CarouselContent className="cursor-default">
                {steps.map((step, index) => (
                  <CarouselItem key={step.id} className="w-full pl-0">
                    <div className={`w-full ${index === 0 ? 'flex justify-center' : ''}`}>
                      {index === 0 ? (
                        <Services isBookingStep={true} onServiceSelect={handleServiceSelect} />
                      ) : (
                        <div className="max-w-4xl mx-auto w-full">
                          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8">
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
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;
