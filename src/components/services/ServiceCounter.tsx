
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ServiceCounterProps {
  totalServicesCompleted: number;
}

const ServiceCounter = ({ totalServicesCompleted }: ServiceCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Counter animation
    if (count < totalServicesCompleted) {
      const timer = setTimeout(() => {
        setCount(prev => {
          const increment = Math.floor((totalServicesCompleted - prev) / 10) + 1;
          return Math.min(prev + increment, totalServicesCompleted);
        });
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [count, totalServicesCompleted]);

  return (
    <div className="mt-28 py-12 bg-gray-50 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-2">
          <span className={cn(
            "transition-all duration-500", 
            count === totalServicesCompleted ? "text-gold" : ""
          )}>
            {count.toLocaleString()}
          </span>
        </h3>
        <p className="text-xl text-gray-700">Exceptional Homes Served Since 2010</p>
      </div>
    </div>
  );
};

export default ServiceCounter;
