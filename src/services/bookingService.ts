
import { BookingFormData } from "@/pages/booking/types";
import { supabase } from "@/integrations/supabase/client";

export const submitBookingForm = async (formData: BookingFormData): Promise<Response> => {
  console.log("Submitting booking form:", formData);
  
  const scriptURL = "https://script.google.com/macros/s/AKfycbyO59rqvkF7AldaM6TuswARY_HnPsqIVpDKRerNXyyNRmv8ut05GEHA4P0a3bL0i79e/exec";
  
  try {
    // Try to save to Supabase first
    console.log("Attempting to save to Supabase");
    let supabaseSuccess = false;
    
    try {
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
        });
        
      if (bookingError) {
        console.error("Error saving booking to Supabase:", bookingError);
      } else {
        console.log("Booking saved to Supabase successfully");
        supabaseSuccess = true;
      }
    } catch (supabaseError) {
      console.error("Supabase submission error:", supabaseError);
      // Continue with Google Sheets even if Supabase fails
    }
    
    // Then, send to Google Sheets as backup
    console.log("Attempting to send to Google Sheets");
    
    const payload = {
      ...formData,
      secret: "GLEAM-KEY-92fjw28u3dh4n38s03a",
    };
    
    console.log("Sending data to Google Sheets:", JSON.stringify(payload));
    
    try {
      await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        mode: "no-cors", // This is important for cross-origin requests
      });
      
      console.log("Google Sheets request sent successfully");
    } catch (googleSheetsError) {
      console.error("Google Sheets submission error:", googleSheetsError);
      
      // If both submissions failed, throw an error
      if (!supabaseSuccess) {
        throw new Error("Failed to submit booking data to both Supabase and Google Sheets");
      }
    }
    
    // Return success response
    return new Response(JSON.stringify({ 
      success: true, 
      message: "Booking submitted successfully",
      supabaseSuccess: supabaseSuccess
    }), { 
      headers: { "Content-Type": "application/json" } 
    });
  } catch (error) {
    console.error("Error in booking submission:", error);
    throw error;
  }
};
