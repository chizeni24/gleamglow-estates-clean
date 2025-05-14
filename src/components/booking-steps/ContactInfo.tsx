
import React from "react";

interface ContactInfoProps {
  formData: {
    name: string;
    email: string;
    phone: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <div className="space-y-4 md:space-y-6 mt-4 md:mt-6">
      <div>
        <label htmlFor="name" className="block text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="Your full name"
          minLength={2}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="example@mail.com"
        />
        <p className="text-xs md:text-sm text-gray-500 mt-1">We'll send your booking confirmation here</p>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          pattern="[0-9-+\s()]+"
          minLength={10}
          className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="Your phone number"
        />
        <p className="text-xs md:text-sm text-gray-500 mt-1">For booking confirmation and service updates</p>
      </div>
    </div>
  );
};
