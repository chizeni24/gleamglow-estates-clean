
import { BookingFormData } from "@/pages/booking/types";

export const submitBookingForm = async (formData: BookingFormData): Promise<Response> => {
  console.log("Submitting booking form:", formData);
  
  const scriptURL = "https://script.google.com/macros/s/AKfycbyO59rqvkF7AldaM6TuswARY_HnPsqIVpDKRerNXyyNRmv8ut05GEHA4P0a3bL0i79e/exec";
  
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
