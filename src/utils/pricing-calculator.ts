
interface PricingRates {
  [key: string]: {
    solo: number;
    team: number;
  };
}

const PRICING_RATES: PricingRates = {
  "Glow-Standard": { solo: 73.99, team: 103.99 },
  "Glow-Deep": { solo: 84.99, team: 118.99 },
  "Glow-Move": { solo: 89.00, team: 124.99 },
};

export const calculateEstimate = (
  bedrooms: number,
  bathrooms: number,
  service: string = "Glow-Standard",
  teamSize: "1" | "2" = "1"
) => {
  if (service === "Glow-Occasion") {
    return null;
  }

  const baseRate = teamSize === "2" 
    ? PRICING_RATES[service]?.team 
    : PRICING_RATES[service]?.solo;

  const extraRooms = Math.max(bedrooms + bathrooms - 2, 0);
  const soloHours = service === "Glow-Move" 
    ? 3 + extraRooms * 0.75 
    : 2 + extraRooms * 0.5;
  
  const totalHours = teamSize === "2" ? soloHours * 0.6 : soloHours;
  const total = baseRate * totalHours;
  
  return {
    low: total * 0.9,
    high: total * 1.1
  };
};

