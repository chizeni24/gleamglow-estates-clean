
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
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <div className="space-y-6 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="bedrooms" className="block text-lg font-medium text-gray-700 mb-2">
            Bedrooms
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5">5+ Bedrooms</option>
          </select>
        </div>
        <div>
          <label htmlFor="bathrooms" className="block text-lg font-medium text-gray-700 mb-2">
            Bathrooms
          </label>
          <select
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="1">1 Bathroom</option>
            <option value="2">2 Bathrooms</option>
            <option value="3">3 Bathrooms</option>
            <option value="4">4 Bathrooms</option>
            <option value="5">5+ Bathrooms</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="kitchens" className="block text-lg font-medium text-gray-700 mb-2">
            Kitchens
          </label>
          <select
            id="kitchens"
            name="kitchens"
            value={formData.kitchens}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="1">1 Kitchen</option>
            <option value="2">2 Kitchens</option>
            <option value="3">3+ Kitchens</option>
          </select>
        </div>
        <div>
          <label htmlFor="livingAreas" className="block text-lg font-medium text-gray-700 mb-2">
            Living Areas
          </label>
          <select
            id="livingAreas"
            name="livingAreas"
            value={formData.livingAreas}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="1">1 Living Area</option>
            <option value="2">2 Living Areas</option>
            <option value="3">3 Living Areas</option>
            <option value="4">4+ Living Areas</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="squareFootage" className="block text-lg font-medium text-gray-700 mb-2">
          Approximate Square Footage
        </label>
        <input
          type="text"
          id="squareFootage"
          name="squareFootage"
          value={formData.squareFootage}
          onChange={handleInputChange}
          placeholder="e.g., 1500"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      
      <div>
        <label htmlFor="cleaningFrequency" className="block text-lg font-medium text-gray-700 mb-2">
          Cleaning Frequency
        </label>
        <select
          id="cleaningFrequency"
          name="cleaningFrequency"
          value={formData.cleaningFrequency}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <option value="one-time">One-time Service</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="pets" className="block text-lg font-medium text-gray-700 mb-2">
          Do you have pets?
        </label>
        <select
          id="pets"
          name="pets"
          value={formData.pets}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <option value="no">No</option>
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
          <option value="both">Both Dogs and Cats</option>
          <option value="other">Other Pets</option>
        </select>
      </div>
    </div>
  );
};
