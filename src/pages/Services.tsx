
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="container-custom py-12 md:py-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Our Cleaning Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cleaning services for every home and budget, delivering quality results you can see and feel.
          </p>
        </div>
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
