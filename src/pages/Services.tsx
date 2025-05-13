
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E9]">
      <Navbar />
      <div className="container-custom py-12 md:py-20 flex justify-center">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
