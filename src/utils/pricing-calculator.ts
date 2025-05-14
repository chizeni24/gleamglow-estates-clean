
interface PricingRates {
  [key: string]: {
    solo: number;
    team: number;
  };
}

const PRICING_RATES: PricingRates = {
  "Glow-Standard": { solo: 77.99, team: 103.99 },
  "Glow-Deep": { solo: 84.99, team: 118.99 },
  "Glow-Move": { solo: 89.00, team: 124.99 },
};

const calculateBaseTime = (bedrooms: number, bathrooms: number, kitchens: number = 1, squareFootage?: string): number => {
  const sqft = squareFootage ? parseInt(squareFootage, 10) : 0;
  return (
    bedrooms * 0.5 +      // 0.5 hours per bedroom
    bathrooms * 0.75 +    // 0.75 hours per bathroom
    kitchens * 0.75 +     // 0.75 hours per kitchen
    (sqft / 1000 * 1.25)  // 1.25 hours per 1000 sqft
  );
};

export const calculateEstimate = (
  bedrooms: number,
  bathrooms: number,
  service: string = "Glow-Standard",
  teamSize: "1" | "2" = "1",
  squareFootage?: string,
  kitchens: number = 1,
) => {
  if (service === "Glow-Occasion") {
    return null;
  }

  // Default to Glow-Standard if service is not in our pricing rates
  const serviceRates = PRICING_RATES[service] || PRICING_RATES["Glow-Standard"];
  const baseRate = teamSize === "2" 
    ? serviceRates.team 
    : serviceRates.solo;

  // Calculate base time and apply 15% buffer
  const baseTime = calculateBaseTime(bedrooms, bathrooms, kitchens, squareFootage);
  const totalTime = baseTime * 1.15; // Add 15% buffer
  
  // Adjust time for team size (60% of solo time if team of 2)
  const adjustedTime = teamSize === "2" ? totalTime * 0.6 : totalTime;
  
  // Calculate final price
  const total = baseRate * adjustedTime;
  
  // Ensure we return numeric values
  return {
    low: Math.round(total * 0.9),
    high: Math.round(total * 1.1),
    estimatedTime: parseFloat(adjustedTime.toFixed(2))
  };
};
