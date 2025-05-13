
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GoldButton } from "@/components/ui/gold-button";
import { TeamSizeSelector } from "./quote/TeamSizeSelector";
import { EstimateDisplay } from "./quote/EstimateDisplay";
import { calculateEstimate } from "@/utils/pricing-calculator";

interface QuickQuoteProps {
  bedrooms: number;
  bathrooms: number;
  service?: string;
  initialTeamSize?: "1" | "2";
  onTeamSizeChange?: (teamSize: "1" | "2") => void;
}

export const QuickQuote: React.FC<QuickQuoteProps> = ({
  bedrooms,
  bathrooms,
  service = "Glow-Standard",
  initialTeamSize = "1",
  onTeamSizeChange
}) => {
  const [estimate, setEstimate] = React.useState<{
    low: number;
    high: number;
    estimatedTime: number;
  } | null>(null);
  const [teamSize, setTeamSize] = React.useState<"1" | "2">(initialTeamSize);

  React.useEffect(() => {
    const newEstimate = calculateEstimate(bedrooms, bathrooms, service, teamSize);
    setEstimate(newEstimate);
  }, [teamSize, bedrooms, bathrooms, service]);

  const handleTeamSizeChange = (value: "1" | "2") => {
    setTeamSize(value);
    if (onTeamSizeChange) {
      onTeamSizeChange(value);
    }
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
        <TeamSizeSelector 
          value={teamSize} 
          onValueChange={handleTeamSizeChange} 
        />

        {service === "Glow-Occasion" ? (
          <>
            <p className="text-center text-gray-700">
              For special occasions and events, we provide custom quotes tailored to your specific needs.
            </p>
            <GoldButton 
              onClick={() => window.location.href = '/booking'} 
              showShine 
              className="w-full md:w-auto" 
              type="button"
            >
              Request Custom Quote
            </GoldButton>
          </>
        ) : (
          <EstimateDisplay 
            estimate={estimate}
            teamSize={teamSize}
            onBookingClick={() => window.location.href = '/booking'}
          />
        )}
      </CardContent>
    </Card>
  );
};
