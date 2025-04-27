
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PriceTable from "@/components/PriceTable";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="container-custom py-12 md:py-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Our Pricing Plans</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our transparent pricing options designed to fit every budget and cleaning need.
          </p>
        </div>
        <PriceTable />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
