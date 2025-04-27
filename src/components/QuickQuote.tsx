
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GoldButton } from "@/components/ui/gold-button";
import { motion } from "framer-motion";

interface QuickQuoteProps {
  bedrooms: number;
  bathrooms: number;
  service?: string;
}

export const QuickQuote: React.FC<QuickQuoteProps> = ({
  bedrooms,
  bathrooms,
  service = "Glow-Standard"
}) => {
  const [estimate, setEstimate] = React.useState<{
    low: number;
    high: number;
  } | null>(null);

  // Handle quote calculation
  const handleQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // For Glow-Move
    if (service === "Glow-Move") {
      const baseRate = 89; // $89/hr rate
      const hours = Math.ceil((bedrooms + bathrooms) * 1.5); // Rough estimate
      const total = baseRate * hours;
      
      setEstimate({
        low: total * 0.9,
        high: total * 1.1
      });
      return;
    }

    // For Glow-Occasion, return null (custom quote only)
    if (service === "Glow-Occasion") {
      setEstimate(null);
      return;
    }

    // For standard services
    const extraRooms = Math.max(bedrooms + bathrooms - 2, 0);
    const hours = 2 + extraRooms * 0.5;
    let baseRate = 73.99; // Default Glow-Standard rate

    // Adjust rate based on service type
    if (service === "Glow-Deep") {
      baseRate = 84.99;
    }

    const low = hours * baseRate * 0.9;
    const high = hours * baseRate * 1.1;
    setEstimate({
      low,
      high
    });
  };

  return (
    <Card className="bg-white border border-gold-light/50 shadow-lg">
      <CardHeader className="text-center">
        <h3 className="text-2xl font-serif">Get Your Free Quote</h3>
        <p className="text-gray-600 text-sm mt-2">
          Based on {bedrooms} bedroom{bedrooms !== 1 ? 's' : ''} and {bathrooms} bathroom{bathrooms !== 1 ? 's' : ''}
          {service && <span className="block mt-1">Service: {service}</span>}
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {service === "Glow-Move" && (
          <p className="text-sm text-gray-600 text-center">
            Base rate of $89/hr includes supplies and equipment. Additional charges may apply for homes over 2,000 sq ft.
          </p>
        )}

        {service === "Glow-Occasion" ? (
          <>
            <p className="text-center text-gray-700">
              For special occasions and events, we provide custom quotes tailored to your specific needs.
            </p>
            <GoldButton onClick={handleQuote} showShine className="w-full md:w-auto" type="button">
              Request Custom Quote
            </GoldButton>
          </>
        ) : (
          <>
            <p className="text-gray-700 text-center">
              Click below to see your estimated price range
            </p>
            <GoldButton onClick={handleQuote} showShine className="w-full md:w-auto" type="button">
              Calculate My Quote
            </GoldButton>
          </>
        )}

        {estimate && !estimate.low && !estimate.high && service === "Glow-Occasion" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-4 bg-gold-light/10 rounded-lg"
          >
            <p className="text-gray-700">
              Thank you for your interest! We'll contact you shortly with a customized quote for your occasion.
            </p>
          </motion.div>
        )}

        {estimate && estimate.low && estimate.high && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-4 bg-gold-light/10 rounded-lg"
          >
            <p className="text-gray-600 mb-2">Estimated total:</p>
            <p className="text-3xl font-bold text-gold mb-2">
              ${estimate.low.toFixed(0)} – ${estimate.high.toFixed(0)}
            </p>
            <p className="text-sm text-gray-500">Includes all supplies and equipment</p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};
