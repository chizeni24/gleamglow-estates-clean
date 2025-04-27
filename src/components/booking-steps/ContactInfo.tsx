
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
    <div className="space-y-6 mt-6">
      <div>
        <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
    </div>
  );
};
