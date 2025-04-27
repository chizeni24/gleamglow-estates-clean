
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Service } from "./ServicesData";

interface ServiceCardProps {
  service: Service;
  isMainService?: boolean;
}

const ServiceCard = ({ service, isMainService }: ServiceCardProps) => {
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      isMainService ? 'border-gold/50' : ''
    }`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold">
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
        <div className="text-lg font-semibold mt-2">{service.rate}</div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        {service.prefix && (
          <p className="text-sm font-medium mb-4">{service.prefix}</p>
        )}
        <ul className="space-y-2 flex-grow">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-gold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link 
          to={`/booking?service=${encodeURIComponent(service.title)}&step=1`}
          className="w-full text-center px-4 py-2 rounded-lg bg-gold text-white hover:bg-gold-dark transition-colors"
        >
          Book Now
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
