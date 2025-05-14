
import React from "react";

interface DateTimeSelectionProps {
  formData: {
    date: string;
    time: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <div className="space-y-4 md:space-y-6 mt-4 md:mt-6">
      <div>
        <label htmlFor="date" className="block text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
          min={new Date().toISOString().split('T')[0]}
          className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div>
        <label htmlFor="time" className="block text-sm md:text-lg font-medium text-gray-700 mb-1 md:mb-2">
          Time
        </label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <option value="">Select a time</option>
          <option value="9:00 AM">9:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
        </select>
      </div>
    </div>
  );
};
