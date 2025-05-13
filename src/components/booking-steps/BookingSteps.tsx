
import React from "react";
import { ServiceSelection } from "@/components/booking-steps/ServiceSelection";
import { PropertyDetails } from "@/components/booking-steps/PropertyDetails";
import { DateTimeSelection } from "@/components/booking-steps/DateTimeSelection";
import { ContactInfo } from "@/components/booking-steps/ContactInfo";
import { ServiceAddress } from "@/components/booking-steps/ServiceAddress";
import { BookingSummary } from "@/components/booking-steps/BookingSummary";
import Services from "@/components/Services";
import { Step } from "@/pages/booking/types";

interface BookingStepsProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleServiceSelect: (service: string) => void;
}

export const createBookingSteps = ({
  formData,
  handleInputChange,
  handleServiceSelect,
}: BookingStepsProps): Step[] => {
  return [
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
};
