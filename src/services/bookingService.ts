
import { BookingFormData } from "@/pages/booking/types";

export const submitBookingForm = async (formData: BookingFormData): Promise<Response> => {
  console.log("Submitting booking form:", formData);
  
  const scriptURL = "https://script.google.com/macros/s/AKfycbxr1HmvBXJaJkeE_A3mlI2-kxcaKsFshEuCjYEEO6vzVSkJKGKeUX7ebVXZH4oZyYQY/exec";
  
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
