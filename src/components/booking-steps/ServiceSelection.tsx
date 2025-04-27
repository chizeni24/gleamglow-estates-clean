
import React from "react";
import { GoldButton } from "@/components/ui/gold-button";

interface Service {
  title: string;
  description: string;
  highlight: boolean;
  rate: string;
  features: string[];
  subtitle?: string;
  customButton?: string;
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
      title: "Glow-Standard",
      description: "Our comprehensive cleaning service that covers every aspect of your home with meticulous attention to detail.",
      rate: "$73.99 /hr",
      features: [
        "Whole-home coverage — bedrooms, living areas, halls",
        "Kitchen & bath refresh",
        "Surface wipe + HEPA vacuum",
        "Steam on high-touch points"
      ],
      highlight: true
    },
    {
      title: "Glow-Deep",
      description: "Everything in Glow-Standard plus extra attention to detail including inside appliances and full-home steam treatment.",
      rate: "$84.99 /hr",
      features: [
        "Inside fridge & oven",
        "Baseboards, blinds, vents",
        "Full-home steam pass",
        "Detailed grout & fixture polish"
      ],
      highlight: false
    },
    {
      title: "Glow-Move",
      subtitle: "(In / Out)",
      description: "Comprehensive move-in / move-out cleaning service.",
      rate: "Custom quote — scope and schedule tailored on request",
      features: [
        "Cabinet & drawer wipe-out",
        "Appliance steam-clean",
        "Floor scrub & polish",
        "Garage / balcony sweep",
        "Deposit-ready presentation"
      ],
      highlight: false
    },
    {
      title: "Glow-Occasion",
      description: "Bespoke cleaning for events, offices, restaurants, short-term rentals, and commercial turnovers.",
      rate: "$89 / hr — supplies, steam, and two bathrooms included (no surprise fees)",
      features: [
        "Priority scheduling",
        "Entertainment / guest areas spotlight",
        "Fresh linen staging",
        "Optional next-day steam refresh"
      ],
      highlight: false,
      customButton: "Request Quote"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 mt-6">
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
          <h3 className="text-2xl font-bold mb-2">
            {service.title}
            {service.subtitle && (
              <span className="text-lg text-gray-600 ml-2">{service.subtitle}</span>
            )}
          </h3>
          <p className="text-gray-700 mb-4">{service.description}</p>
          <p className="font-semibold mb-4">{service.rate}</p>
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-gold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto text-center">
            {service.highlight && (
              <span className="inline-block px-4 py-1 bg-gold-light/10 text-gold font-medium rounded-full text-sm mb-4">
                Most Popular
              </span>
            )}
            <div className="inline-block w-full">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onServiceSelect(service.title);
                }}
                className="w-full bg-gold text-white px-6 py-3 rounded-md hover:bg-gold-dark transition-colors duration-300"
              >
                {service.customButton || "Select Service"}
              </button>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
