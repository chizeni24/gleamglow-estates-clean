
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import ServiceCard from "./services/ServiceCard";
import ServiceAreas from "./services/ServiceAreas";
import BlogSection from "./services/BlogSection";
import ServiceCounter from "./services/ServiceCounter";
import { services, serviceAreas, blogPosts } from "./services/ServicesData";

const Services = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const totalServicesCompleted = 936;
  const totalSteps = 4;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Progress bar animation
    setProgress((currentStep / totalSteps) * 100);
  }, [currentStep]);

  const handleContinue = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      
      // Scroll to the next section based on the current step
      const nextSectionId = getNextSectionId(currentStep);
      const nextSection = document.getElementById(nextSectionId);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  // Helper function to determine which section to scroll to next
  const getNextSectionId = (step) => {
    switch(step) {
      case 1:
        return "service-areas"; // Scroll to service areas after services
      case 2:
        return "blog-section"; // Scroll to blog section after service areas
      case 3:
        return "testimonials"; // Scroll to testimonials after blog
      default:
        return "services"; // Default to services section
    }
  };

  return (
    <section id="services" className="section-padding">
      {/* Fixed progress bar */}
      <div className={cn(
        "w-full transition-all duration-300 z-20", 
        isScrolled ? "fixed top-0 left-0 bg-white shadow-md py-2" : ""
      )}>
        <div className="container-custom">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">Service Selection</h3>
            <span className="text-gold">{currentStep} of {totalSteps}</span>
          </div>
          <Progress 
            value={progress} 
            className="h-2 bg-gray-200 mb-6"
          />
        </div>
      </div>
      
      <div className="container-custom mt-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-700 text-lg">
            We offer a range of specialized cleaning services designed to meet the unique needs of your home. Each service is fully customizable to your specific requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard service={service} index={index} key={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={handleContinue}
            className="btn-gold relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">Continue to Next Step</span>
            <span className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 bg-white/20 scale-x-0 group-active:scale-x-100 origin-left transition-transform duration-500"></span>
          </button>
        </div>
        
        {/* Counter Animation */}
        <ServiceCounter totalServicesCompleted={totalServicesCompleted} />
        
        {/* Service Areas */}
        <ServiceAreas serviceAreas={serviceAreas} />
        
        {/* Blog Section */}
        <BlogSection blogPosts={blogPosts} />
      </div>
    </section>
  );
};

export default Services;
