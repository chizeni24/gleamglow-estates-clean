
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ServiceCard from "./services/ServiceCard";
import { services } from "./services/ServicesData";
import { useMediaQuery } from "@/hooks/use-media-query";

interface ServicesProps {
  isBookingStep?: boolean;
  onServiceSelect?: (service: string) => void;
}

const Services = ({ isBookingStep, onServiceSelect }: ServicesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<'regular' | 'special'>('regular');
  const [selectedService, setSelectedService] = useState<string>("");
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const regularServices = services.filter(service => service.category === 'regular');
  const specialServices = services.filter(service => service.category === 'special');

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    if (onServiceSelect) {
      onServiceSelect(service);
    }
  };

  return (
    <section id="services" className="section-padding w-full max-w-7xl mx-auto">
      <div className="container-custom">
        {!isBookingStep && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-700 text-lg">
              We offer a range of specialized cleaning services designed to meet the unique needs of your home. Each service is fully customizable to your specific requirements.
            </p>
          </div>
        )}

        <Tabs defaultValue="regular" className="w-full">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger 
              value="regular" 
              className="group relative hover:text-gold transition-all duration-300 
                         hover:after:scale-x-100 after:origin-left 
                         after:absolute after:bottom-0 after:left-0 after:w-full 
                         after:h-[2px] after:bg-gold 
                         after:scale-x-0 after:transition-transform
                         hover:scale-105 hover:shadow-[0_4px_6px_rgba(203,163,95,0.2)]"
            >
              Regular Services
            </TabsTrigger>
            <TabsTrigger 
              value="special" 
              className="group relative hover:text-gold transition-all duration-300 
                         hover:after:scale-x-100 after:origin-left 
                         after:absolute after:bottom-0 after:left-0 after:w-full 
                         after:h-[2px] after:bg-gold 
                         after:scale-x-0 after:transition-transform
                         hover:scale-105 hover:shadow-[0_4px_6px_rgba(203,163,95,0.2)]"
            >
              Special Services
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="regular">
            <div className="grid md:grid-cols-2 gap-8">
              {regularServices.map((service) => (
                <ServiceCard 
                  key={service.title} 
                  service={service}
                  isMainService={true}
                  isBookingStep={isBookingStep}
                  onServiceSelect={handleServiceSelect}
                  isSelected={selectedService === service.title}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="special">
            <div className="grid md:grid-cols-2 gap-8">
              {specialServices.map((service) => (
                <ServiceCard 
                  key={service.title} 
                  service={service}
                  isBookingStep={isBookingStep}
                  onServiceSelect={handleServiceSelect}
                  isSelected={selectedService === service.title}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <p className="text-center mt-12 text-gray-700">
          <strong>All rates include supplies and equipment.</strong> Two-hour minimum applies to regular services.
        </p>
      </div>
    </section>
  );
};

export default Services;
