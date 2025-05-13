
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ClipboardCheck, CalendarCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state?.bookingData;

  useEffect(() => {
    // If user directly navigates to thank you page without booking data, redirect to booking
    if (!bookingData) {
      const timer = setTimeout(() => {
        navigate("/booking");
      }, 3000);
      return () => clearTimeout(timer);
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [bookingData, navigate]);

  return (
    <div className="min-h-screen bg-[#FFF8E9]">
      <Navbar />
      
      <div className="container-custom pt-24 pb-16">
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gold/10 p-6 rounded-full">
                <ClipboardCheck className="h-16 w-16 text-gold" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your booking has been received and confirmed. We'll be in touch shortly 
              to confirm the details of your service.
            </p>
            
            {bookingData && (
              <div className="bg-gold-light/30 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 flex items-center justify-center">
                  <CalendarCheck className="mr-2 h-5 w-5 text-gold-dark" />
                  Booking Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="text-gray-700">
                    <span className="font-medium">Service:</span> {bookingData.service}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium">Date:</span> {bookingData.date}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium">Time:</span> {bookingData.time}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium">Name:</span> {bookingData.name}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium">Email:</span> {bookingData.email}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium">Phone:</span> {bookingData.phone}
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Return Home
              </button>
              <button 
                onClick={() => navigate("/services")}
                className="px-6 py-3 bg-gold text-white rounded-md hover:bg-gold-dark transition-colors"
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
