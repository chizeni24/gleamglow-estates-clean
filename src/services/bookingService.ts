
import { BookingFormData } from "@/pages/booking/types";
import { supabase } from "@/integrations/supabase/client";
import { calculateEstimate } from "@/utils/pricing-calculator";

export const submitBookingForm = async (formData: BookingFormData): Promise<Response> => {
  console.log("Submitting booking form:", formData);
  
  try {
    console.log("Calculating price estimates");
    
    // Calculate pricing estimates
    const priceEstimate = calculateEstimate(
      parseInt(formData.bedrooms), 
      parseInt(formData.bathrooms),
      formData.service,
      formData.teamSize || "1",
      formData.squareFootage,
      parseInt(formData.kitchens)
    );
    
    console.log("Raw price estimates:", priceEstimate);
    
    // Make sure we have numeric values for the database
    const lowPrice = priceEstimate?.low ? Number(priceEstimate.low) : null;
    const highPrice = priceEstimate?.high ? Number(priceEstimate.high) : null;
    const estimatedTime = priceEstimate?.estimatedTime ? Number(priceEstimate.estimatedTime) : null;
    
    console.log("Formatted price estimates:", { lowPrice, highPrice, estimatedTime });
    console.log("Saving to Supabase with team size:", formData.teamSize || "1");
    
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
        special_requirements: formData.specialRequirements,
        price_low: lowPrice,
        price_high: highPrice,
        estimated_time: estimatedTime,
        team_size: formData.teamSize || "1"
      });
      
    if (bookingError) {
      console.error("Error saving booking to Supabase:", bookingError);
      throw bookingError;
    }
    
    console.log("Booking saved to Supabase successfully", bookingData);
    
    // Return success response
    return new Response(JSON.stringify({ 
      success: true, 
      message: "Booking submitted successfully"
    }), { 
      headers: { "Content-Type": "application/json" } 
    });
  } catch (error) {
    console.error("Error in booking submission:", error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: "Failed to submit booking" 
    }), { 
      status: 500,
      headers: { "Content-Type": "application/json" } 
    });
  }
};
