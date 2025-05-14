
import React from "react";

interface PropertyDetailsProps {
  formData: {
    bedrooms: string;
    bathrooms: string;
    kitchens: string;
    livingAreas: string;
    squareFootage: string;
    cleaningFrequency: string;
    pets: string;
    specialRequirements: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <div className="space-y-4 md:space-y-6 mt-4 md:mt-6">
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        <div>
          <label htmlFor="bedrooms" className="block text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
            Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            min="0"
            required
            value={formData.bedrooms}
            onChange={handleInputChange}
            className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <div>
          <label htmlFor="bathrooms" className="block text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
            Bathrooms
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            min="0"
            required
            value={formData.bathrooms}
            onChange={handleInputChange}
            className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <div>
          <label htmlFor="kitchens" className="block text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
            Kitchens
          </label>
          <input
            type="number"
            id="kitchens"
            name="kitchens"
            min="1"
            required
            value={formData.kitchens}
            onChange={handleInputChange}
            className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <div>
          <label htmlFor="livingAreas" className="block text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
            Living Areas
          </label>
          <input
            type="number"
            id="livingAreas"
            name="livingAreas"
            min="0"
            required
            value={formData.livingAreas}
            onChange={handleInputChange}
            className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="squareFootage" className="block text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
          Square Footage (optional)
        </label>
        <input
          type="number"
          id="squareFootage"
          name="squareFootage"
          min="0"
          value={formData.squareFootage}
          onChange={handleInputChange}
          className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="Enter square footage (optional)"
        />
      </div>

      <div>
        <label htmlFor="cleaningFrequency" className="block text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
          Cleaning Frequency
        </label>
        <select
          id="cleaningFrequency"
          name="cleaningFrequency"
          value={formData.cleaningFrequency}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <option value="one-time">One-time Service</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div>
        <label htmlFor="pets" className="block text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
          Do you have pets?
        </label>
        <select
          id="pets"
          name="pets"
          value={formData.pets}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <option value="no">No</option>
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
          <option value="both">Both Dogs and Cats</option>
          <option value="other">Other Pets</option>
        </select>
      </div>

      <div>
        <label htmlFor="specialRequirements" className="block text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
          Special Requirements
        </label>
        <input
          type="text"
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleInputChange}
          placeholder="Enter any special requirements"
          className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
    </div>
  );
};
