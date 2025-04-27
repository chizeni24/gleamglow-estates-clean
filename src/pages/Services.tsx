
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="container-custom py-12 md:py-20">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
