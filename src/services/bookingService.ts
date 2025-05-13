
import { BookingFormData } from "@/pages/booking/types";
import { supabase } from "@/integrations/supabase/client";

export const submitBookingForm = async (formData: BookingFormData): Promise<Response> => {
  console.log("Submitting booking form:", formData);
  
  const scriptURL = "https://script.google.com/macros/s/AKfycbyO59rqvkF7AldaM6TuswARY_HnPsqIVpDKRerNXyyNRmv8ut05GEHA4P0a3bL0i79e/exec";
  
  try {
    // First, save to Supabase
    // Map camelCase to snake_case for Supabase
    const { data: bookingData, error: bookingError } = await supabase
      .from('bookings')
      .insert({
        service: formData.service,
        date: formData.date,
        time: formData.time,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        notes: formData.notes,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        kitchens: formData.kitchens,
        living_areas: formData.livingAreas,
        square_footage: formData.squareFootage,
        cleaning_frequency: formData.cleaningFrequency,
        pets: formData.pets,
        special_requirements: formData.specialRequirements
      })
      .select();
      
    if (bookingError) {
      console.error("Error saving booking to Supabase:", bookingError);
      throw bookingError;
    }
    
    console.log("Booking saved to Supabase:", bookingData);
    
    // Then, send to Google Sheets as backup
    console.log("Sending data to Google Sheets:", JSON.stringify({
      ...formData,
      secret: "GLEAM-KEY-92fjw28u3dh4n38s03a",
    }));
    
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        secret: "GLEAM-KEY-92fjw28u3dh4n38s03a",
      }),
      mode: "no-cors", // Add this to handle potential CORS issues
    });
    
    console.log("Google Sheets response received:", response);
    return response;
  } catch (error) {
    console.error("Error in booking submission:", error);
    throw error;
  }
};
