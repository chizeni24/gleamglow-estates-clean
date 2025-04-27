
import { ReactNode } from "react";

export type Step = {
  id: string;
  title: string;
  description: string;
  component: ReactNode;
};

export interface BookingFormData {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  bedrooms: string;
  bathrooms: string;
  kitchens: string;
  livingAreas: string;
  squareFootage: string;
  cleaningFrequency: string;
  pets: string;
  specialRequirements: string;
}
