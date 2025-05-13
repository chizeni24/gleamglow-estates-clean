
import { BookingFormData } from "@/pages/booking/types";

export const submitBookingForm = async (formData: BookingFormData): Promise<Response> => {
  console.log("Submitting booking form:", formData);
  
  const scriptURL = "https://script.google.com/a/macros/gleamglowtx.com/s/AKfycbzucvDIqcZe59oZP45EPVMfP_Ni3vr4IBL06J9LTd36SgVRTGZ0gjIZO7OFFxxaOscAgg/exec";
  
  console.log("Sending data to Google Sheets:", JSON.stringify({
    ...formData,
    secret: "GLEAM-KEY-92fjw28u3dh4n38s03a",
  }));
  
  return fetch(scriptURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
      secret: "GLEAM-KEY-92fjw28u3dh4n38s03a",
    }),
  });
};
