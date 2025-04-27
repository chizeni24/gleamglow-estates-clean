
import React from "react";

interface ServiceAddressProps {
  formData: {
    address: string;
    notes: string;
    specialRequirements: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const ServiceAddress: React.FC<ServiceAddressProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <div className="space-y-6 mt-6">
      <div>
        <label htmlFor="address" className="block text-lg font-medium text-gray-700 mb-2">
          Full Address
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div>
        <label htmlFor="notes" className="block text-lg font-medium text-gray-700 mb-2">
          Special Instructions
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows={3}
          placeholder="Tell us about any specific areas that need attention or any other special requirements"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div>
        <label htmlFor="specialRequirements" className="block text-lg font-medium text-gray-700 mb-2">
          Additional Services Needed
        </label>
        <textarea
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleInputChange}
          rows={3}
          placeholder="Any additional services like window cleaning, carpet cleaning, etc."
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
    </div>
  );
};
