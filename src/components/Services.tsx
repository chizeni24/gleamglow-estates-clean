
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ServiceCard from "./services/ServiceCard";
import { services } from "./services/ServicesData";
import { useMediaQuery } from "@/hooks/use-media-query";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<'regular' | 'special'>('regular');
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const regularServices = services.filter(service => service.category === 'regular');
  const specialServices = services.filter(service => service.category === 'special');

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-700 text-lg">
            We offer a range of specialized cleaning services designed to meet the unique needs of your home. Each service is fully customizable to your specific requirements.
          </p>
        </div>

        <Tabs defaultValue="regular" className="w-full">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="regular">Regular Services</TabsTrigger>
            <TabsTrigger value="special">Special Services</TabsTrigger>
          </TabsList>
          
          <TabsContent value="regular">
            <div className="grid md:grid-cols-2 gap-8">
              {regularServices.map((service, index) => (
                <ServiceCard 
                  key={service.title} 
                  service={service}
                  isMainService={true}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="special">
            <div className="grid md:grid-cols-2 gap-8">
              {specialServices.map((service, index) => (
                <ServiceCard 
                  key={service.title} 
                  service={service}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <p className="text-center mt-12 text-gray-700">
          <strong>All rates include supplies, equipment, and taxes.</strong> No booking fees. Ever.
        </p>
      </div>
    </section>
  );
};

export default Services;
