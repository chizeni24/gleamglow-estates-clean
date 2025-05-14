
import React from "react";
import { QuickQuote } from "@/components/QuickQuote";

interface BookingSummaryProps {
  formData: {
    service: string;
    date: string;
    time: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    bedrooms: string;
    bathrooms: string;
    cleaningFrequency: string;
    notes?: string;
    specialRequirements?: string;
    teamSize?: "1" | "2";
  };
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({ formData }) => {
  const [teamSize, setTeamSize] = React.useState<"1" | "2">(formData.teamSize || "1");

  // Update parent form data when team size changes
  React.useEffect(() => {
    if (formData.teamSize !== teamSize) {
      const event = new CustomEvent('teamSizeChanged', { 
        detail: { teamSize } 
      });
      document.dispatchEvent(event);
    }
  }, [teamSize, formData.teamSize]);

  return (
    <div className="space-y-4 md:space-y-6 mt-4 md:mt-6">
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Booking Summary</h3>
        
        <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
          <div className="border-b md:border-b-0 pb-2 md:pb-0">
            <p className="text-xs md:text-sm text-gray-500">Service</p>
            <p className="font-medium text-sm md:text-base">{formData.service}</p>
          </div>
          <div className="border-b md:border-b-0 pb-2 md:pb-0">
            <p className="text-xs md:text-sm text-gray-500">Date & Time</p>
            <p className="font-medium text-sm md:text-base">{formData.date} at {formData.time}</p>
          </div>
          <div className="border-b md:border-b-0 pb-2 md:pb-0">
            <p className="text-xs md:text-sm text-gray-500">Property Size</p>
            <p className="font-medium text-sm md:text-base">{formData.bedrooms} Bedroom(s), {formData.bathrooms} Bathroom(s)</p>
          </div>
          <div className="border-b md:border-b-0 pb-2 md:pb-0">
            <p className="text-xs md:text-sm text-gray-500">Cleaning Frequency</p>
            <p className="font-medium text-sm md:text-base">
              {formData.cleaningFrequency === "one-time" ? "One-time Service" :
               formData.cleaningFrequency === "weekly" ? "Weekly Service" :
               formData.cleaningFrequency === "bi-weekly" ? "Bi-weekly Service" : "Monthly Service"}
            </p>
          </div>
          <div className="border-b md:border-b-0 pb-2 md:pb-0">
            <p className="text-xs md:text-sm text-gray-500">Name</p>
            <p className="font-medium text-sm md:text-base">{formData.name}</p>
          </div>
          <div className="border-b md:border-b-0 pb-2 md:pb-0">
            <p className="text-xs md:text-sm text-gray-500">Email</p>
            <p className="font-medium text-sm md:text-base truncate">{formData.email}</p>
          </div>
          <div className="border-b md:border-b-0 pb-2 md:pb-0">
            <p className="text-xs md:text-sm text-gray-500">Phone</p>
            <p className="font-medium text-sm md:text-base">{formData.phone}</p>
          </div>
          <div>
            <p className="text-xs md:text-sm text-gray-500">Address</p>
            <p className="font-medium text-sm md:text-base">{formData.address}</p>
          </div>
        </div>
        
        {formData.notes && (
          <div className="mt-3 md:mt-4 border-t pt-2 md:pt-3">
            <p className="text-xs md:text-sm text-gray-500">Special Instructions</p>
            <p className="font-medium text-sm md:text-base">{formData.notes}</p>
          </div>
        )}
        
        {formData.specialRequirements && (
          <div className="mt-3 md:mt-4 border-t pt-2 md:pt-3">
            <p className="text-xs md:text-sm text-gray-500">Additional Services</p>
            <p className="font-medium text-sm md:text-base">{formData.specialRequirements}</p>
          </div>
        )}
      </div>

      <div className="mt-6 md:mt-8">
        <QuickQuote 
          bedrooms={Number(formData.bedrooms)} 
          bathrooms={Number(formData.bathrooms)}
          service={formData.service}
          onTeamSizeChange={setTeamSize}
          initialTeamSize={teamSize}
        />
      </div>
    </div>
  );
};
