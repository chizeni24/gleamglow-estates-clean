import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GoldButton } from "@/components/ui/gold-button";
import { motion } from "framer-motion";
import { Check, Sparkle, Users } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
  const [teamSize, setTeamSize] = React.useState<1 | 2>(1);

  // Handle quote calculation
  const handleQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // For Glow-Move
    if (service === "Glow-Move") {
      const baseRate = teamSize === 1 ? 89 : 139; // Adjusted rate based on team size
      const hours = 3 + Math.max(bedrooms + bathrooms - 2, 0) * 0.75; // Updated hours calculation
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
    let baseRate = teamSize === 1 ? 73.99 : 115.99; // Adjusted rate for team size

    // Adjust rate based on service type
    if (service === "Glow-Deep") {
      baseRate = teamSize === 1 ? 84.99 : 132.99;
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
          <>
            <p className="text-sm text-gray-600 text-center">
              Base rate starts at $89/hr for standard team (1 cleaner) or $139/hr for express team (2 cleaners). Includes supplies and equipment.
            </p>
            
            <div className="bg-gold/5 rounded-lg p-4">
              <RadioGroup
                defaultValue="1"
                className="flex flex-wrap justify-center gap-4"
                onValueChange={(value) => setTeamSize(Number(value) as 1 | 2)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id="standard" />
                  <label
                    htmlFor="standard"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                  >
                    <Users className="h-4 w-4" />
                    Standard (1 cleaner)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2" id="express" />
                  <label
                    htmlFor="express"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                  >
                    <Users className="h-4 w-4" />
                    Express (2 cleaners)
                  </label>
                </div>
              </RadioGroup>
            </div>
          </>
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
            className="space-y-6 text-center p-4"
          >
            <div className="bg-gold-light/10 rounded-lg p-4">
              <p className="text-gray-600 mb-2">Estimated total:</p>
              <p className="text-3xl font-bold text-gold mb-2">
                ${estimate.low.toFixed(0)} – ${estimate.high.toFixed(0)}
              </p>
              <p className="text-sm text-gray-500">
                Includes all supplies and equipment
                {teamSize === 2 && " • Express service with 2 cleaners"}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="bg-gold/5 rounded-lg p-4">
                <h4 className="text-gold font-medium mb-2 flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  Transparent Pricing
                </h4>
                <p className="text-sm text-gray-600">
                  Our quotes are transparent with no hidden fees. The final price may vary based on specific requirements and add-ons discussed during booking.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <GoldButton
                  onClick={() => window.location.href = '/booking'}
                  className="w-full group relative overflow-hidden"
                  showShine
                  showGlow
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Confirm Booking
                    <Sparkle className="w-4 h-4" />
                  </span>
                </GoldButton>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};
