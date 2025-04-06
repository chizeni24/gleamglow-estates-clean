
import React, { useState } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    features: string[];
    highlight: boolean;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={`/booking?service=${encodeURIComponent(service.title)}`}
      key={index}
      className={cn(
        "rounded-lg p-8 transition-all duration-300",
        service.highlight 
          ? "border-2 border-gold bg-white shadow-lg" 
          : "border border-gray-200 bg-white shadow",
        isHovered && !service.highlight && "border-gold",
        "group cursor-pointer"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '',
      }}
    >
      <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
      <p className="text-gray-700 mb-6">{service.description}</p>
      <ul className="space-y-3">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <Check className="text-gold mr-2 flex-shrink-0 mt-1" size={18} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      {service.highlight && (
        <div className="mt-8 text-center">
          <span className="inline-block px-4 py-1 bg-gold-light/10 text-gold font-medium rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}
      <div className="mt-6 text-center">
        <div className={cn(
          "inline-block text-gold font-medium transition-all duration-300",
          isHovered ? "opacity-100" : "opacity-80"
        )}>
          Select This Service 
          <span className={cn(
            "ml-2 transition-transform duration-300",
            isHovered ? "translate-x-1" : "translate-x-0"
          )}>→</span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
