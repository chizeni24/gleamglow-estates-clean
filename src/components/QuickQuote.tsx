import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GoldButton } from "@/components/ui/gold-button";
import { motion } from "framer-motion";
import { Check, Sparkle, Users } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
  const [teamSize, setTeamSize] = React.useState<"1" | "2">("1");

  React.useEffect(() => {
    if (service === "Glow-Occasion") {
      setEstimate(null);
      return;
    }

    let baseRate;
    const isTeamOfTwo = teamSize === "2";
    
    if (service === "Glow-Move") {
      baseRate = isTeamOfTwo ? 124.99 : 89.00;
    } else if (service === "Glow-Deep") {
      baseRate = isTeamOfTwo ? 118.99 : 84.99;
    } else {
      baseRate = isTeamOfTwo ? 103.99 : 73.99;
    }
    
    const extraRooms = Math.max(bedrooms + bathrooms - 2, 0);
    const soloHours = service === "Glow-Move" 
      ? 3 + extraRooms * 0.75 
      : 2 + extraRooms * 0.5;
    
    const totalHours = isTeamOfTwo ? soloHours * 0.6 : soloHours;
    
    const total = baseRate * totalHours;
    
    setEstimate({
      low: total * 0.9,
      high: total * 1.1
    });
  }, [teamSize, bedrooms, bathrooms, service]);

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
        <div className="bg-gold/5 rounded-lg p-6">
          <p className="text-center mb-4 text-gray-600 font-medium">Choose Your Team Size:</p>
          
          <ToggleGroup
            type="single"
            value={teamSize}
            onValueChange={(value) => value && setTeamSize(value as "1" | "2")}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <ToggleGroupItem 
              value="1"
              className="flex items-center gap-2 data-[state=on]:bg-gold data-[state=on]:text-white px-4 py-3 rounded-lg border border-gold/20 hover:bg-gold/10 transition-colors"
            >
              <Users className="h-4 w-4" />
              <div className="text-left">
                <div className="font-medium">Standard Service</div>
                <div className="text-xs opacity-90">Single Professional Cleaner</div>
              </div>
            </ToggleGroupItem>
            
            <ToggleGroupItem 
              value="2"
              className="flex items-center gap-2 data-[state=on]:bg-gold data-[state=on]:text-white px-4 py-3 rounded-lg border border-gold/20 hover:bg-gold/10 transition-colors"
            >
              <Users className="h-4 w-4" />
              <div className="text-left">
                <div className="font-medium">Fast Track Service</div>
                <div className="text-xs opacity-90">Two Professional Cleaners</div>
              </div>
            </ToggleGroupItem>
          </ToggleGroup>
          
          {teamSize === "2" && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-gold text-center mt-4"
            >
              <strong>Fast Track Advantage:</strong> Finish 40% faster with two professionals!
            </motion.p>
          )}
        </div>

        {service === "Glow-Occasion" ? (
          <>
            <p className="text-center text-gray-700">
              For special occasions and events, we provide custom quotes tailored to your specific needs.
            </p>
            <GoldButton onClick={handleQuote} showShine className="w-full md:w-auto" type="button">
              Request Custom Quote
            </GoldButton>
          </>
        ) : estimate ? (
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
                {teamSize === "2" && " • Fast Track service (40% faster)"}
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
        ) : null}
      </CardContent>
    </Card>
  );
};
