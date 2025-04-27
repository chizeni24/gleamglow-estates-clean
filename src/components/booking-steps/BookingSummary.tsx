
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
  };
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({ formData }) => {
  return (
    <div className="space-y-6 mt-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Service</p>
            <p className="font-medium">{formData.service}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date & Time</p>
            <p className="font-medium">{formData.date} at {formData.time}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Property Size</p>
            <p className="font-medium">{formData.bedrooms} Bedroom(s), {formData.bathrooms} Bathroom(s)</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Cleaning Frequency</p>
            <p className="font-medium">
              {formData.cleaningFrequency === "one-time" ? "One-time Service" :
               formData.cleaningFrequency === "weekly" ? "Weekly Service" :
               formData.cleaningFrequency === "bi-weekly" ? "Bi-weekly Service" : "Monthly Service"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">{formData.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{formData.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{formData.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium">{formData.address}</p>
          </div>
        </div>
        
        {formData.notes && (
          <div className="mt-4">
            <p className="text-sm text-gray-500">Special Instructions</p>
            <p className="font-medium">{formData.notes}</p>
          </div>
        )}
        
        {formData.specialRequirements && (
          <div className="mt-4">
            <p className="text-sm text-gray-500">Additional Services</p>
            <p className="font-medium">{formData.specialRequirements}</p>
          </div>
        )}
      </div>

      <div className="mt-8">
        <QuickQuote 
          bedrooms={Number(formData.bedrooms)} 
          bathrooms={Number(formData.bathrooms)}
          service={formData.service}
        />
      </div>
    </div>
  );
};

