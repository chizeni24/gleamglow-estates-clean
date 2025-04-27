
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SparkleEffect } from "../effects/SparkleEffect";
import type { Service } from "./ServicesData";

interface ServiceCardProps {
  service: Service;
  isMainService?: boolean;
  isBookingStep?: boolean;
  onServiceSelect?: (service: string) => void;
  isSelected?: boolean;
}

const ServiceCard = ({ 
  service, 
  isMainService, 
  isBookingStep, 
  onServiceSelect,
  isSelected 
}: ServiceCardProps) => {
  const handleClick = () => {
    if (isBookingStep && onServiceSelect) {
      onServiceSelect(service.title);
    }
  };

  return (
    <Card 
      className={`relative h-full transition-all duration-300 group
        ${isSelected ? 'ring-2 ring-gold shadow-lg scale-105 bg-gradient-to-br from-gold/5 to-transparent' : 'hover:shadow-lg hover:-translate-y-1'}
        ${isMainService ? 'border-gold/50' : ''}
      `}
      onClick={handleClick}
      role={isBookingStep ? "button" : undefined}
      style={isBookingStep ? { cursor: 'pointer' } : undefined}
    >
      {isSelected && <SparkleEffect className="opacity-30" />}
      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className={`text-xl font-bold transition-colors duration-300 ${isSelected ? 'text-gold' : 'group-hover:text-gold'}`}>
              {service.title}
              {service.subtitle && (
                <span className="text-sm text-muted-foreground ml-2">
                  {service.subtitle}
                </span>
              )}
            </CardTitle>
            <CardDescription className="mt-2">{service.description}</CardDescription>
          </div>
          {service.highlight && (
            <span className="inline-block px-3 py-1 text-xs font-medium text-gold bg-gold/10 rounded-full">
              Most Popular
            </span>
          )}
        </div>
        <div className="text-lg font-semibold mt-2">
          {service.title === "Glow-Move" ? "$89.99/hr" : 
           service.title === "Glow-Occasion" ? "Custom quote — scope and schedule tailored on request" : 
           service.rate}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        {service.prefix && (
          <p className="text-sm font-medium mb-4">{service.prefix}</p>
        )}
        <ul className="space-y-2 flex-grow">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className={`transition-colors duration-300 ${isSelected ? 'text-gold' : 'text-gold group-hover:text-gold-dark'}`}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        {isBookingStep ? (
          <button 
            className={`w-full text-center px-4 py-2 rounded-lg transition-all duration-300
              ${isSelected 
                ? 'bg-gradient-to-r from-gold to-gold-dark text-white shadow-md hover:shadow-lg transform hover:scale-105' 
                : 'bg-gold text-white hover:bg-gold-dark'}`}
            onClick={(e) => {
              e.preventDefault();
              if (onServiceSelect) {
                onServiceSelect(service.title);
              }
            }}
          >
            Select Service
          </button>
        ) : (
          <Link 
            to={`/booking?service=${encodeURIComponent(service.title)}&step=1`}
            className="w-full text-center px-4 py-2 rounded-lg bg-gold text-white hover:bg-gold-dark transition-colors duration-300"
          >
            Book Now
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
