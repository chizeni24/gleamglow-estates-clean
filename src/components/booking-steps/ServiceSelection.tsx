
import React from "react";
import { GoldButton } from "@/components/ui/gold-button";

interface Service {
  title: string;
  description: string;
  highlight: boolean;
}

interface ServiceSelectionProps {
  formData: { service: string };
  onServiceSelect: (service: string) => void;
}

export const ServiceSelection: React.FC<ServiceSelectionProps> = ({
  formData,
  onServiceSelect,
}) => {
  const [hoveredService, setHoveredService] = React.useState<string | null>(null);

  const services: Service[] = [
    {
      title: "Signature Clean",
      description: "Our comprehensive cleaning service that covers every aspect of your home with meticulous attention to detail.",
      highlight: true
    },
    {
      title: "Move-In/Move-Out",
      description: "Start fresh in your new home or leave your previous residence in impeccable condition.",
      highlight: false
    },
    {
      title: "Special Occasions",
      description: "Prepare your home for entertaining guests with our premium pre-event cleaning service.",
      highlight: false
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-6">
      {services.map((service, index) => (
        <button
          key={index}
          onClick={() => onServiceSelect(service.title)}
          onMouseEnter={() => setHoveredService(service.title)}
          onMouseLeave={() => setHoveredService(null)}
          className={`text-left rounded-lg p-8 transition-all duration-300 hover:shadow-xl border ${
            hoveredService === service.title ? "border-gold" : "border-gray-200"
          } bg-white shadow ${formData.service === service.title ? "ring-2 ring-gold" : ""}`}
        >
          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
          <p className="text-gray-700 mb-6">{service.description}</p>
          {service.highlight && (
            <div className="mt-4 text-center">
              <span className="inline-block px-4 py-1 bg-gold-light/10 text-gold font-medium rounded-full text-sm">
                Most Popular
              </span>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};
