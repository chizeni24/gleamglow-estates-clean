
import React from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Glow-Standard",
    rate: "$77.99 /hr",
    highlights: [
      "Whole-home coverage — bedrooms, living areas, halls",
      "Kitchen & bath refresh",
      "Surface wipe + HEPA vacuum",
      "Steam on high-touch points",
      "Eco-forward products",
      "Checklist tailored to your needs"
    ]
  },
  {
    name: "Glow-Deep",
    rate: "$84.99 /hr",
    prefix: "Everything in Glow-Standard plus:",
    highlights: [
      "Inside fridge & oven",
      "Baseboards, blinds, vents",
      "Full-home steam pass",
      "Detailed grout & fixture polish"
    ]
  },
  {
    name: "Glow-Move",
    subtitle: "(In / Out)",
    description: "Comprehensive move-in / move-out cleaning service.",
    rate: "$89 /hr (supplies, steam & two bathrooms included)",
    highlights: [
      "Cabinet & drawer wipe-out",
      "Appliance steam-clean",
      "Floor scrub & polish",
      "Garage / balcony sweep",
      "Deposit-ready presentation"
    ]
  },
  {
    name: "Glow-Occasion",
    description: "Bespoke cleaning for events, offices, restaurants, short-term rentals, and commercial turnovers—tailored to any schedule and scope.",
    rate: "Custom quote — scope and schedule tailored on request",
    highlights: [
      "Priority scheduling",
      "Entertainment / guest areas spotlight",
      "Fresh linen staging",
      "Optional next-day steam refresh"
    ]
  }
];

export const PriceTable = () => {
  const navigate = useNavigate();

  const handleSelect = (planName: string) => {
    navigate(`/booking?service=${encodeURIComponent(planName)}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell className="font-serif text-xl">Plan</TableCell>
              <TableCell className="font-serif text-xl">Rate</TableCell>
              <TableCell className="font-serif text-xl">Highlights</TableCell>
              <TableCell className="font-serif text-xl"></TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plans.map((plan) => (
              <TableRow key={plan.name}>
                <TableCell className="align-top font-medium">
                  {plan.name}
                  {plan.subtitle && (
                    <span className="text-gray-600 italic block text-sm">
                      {plan.subtitle}
                    </span>
                  )}
                  {plan.description && (
                    <span className="text-gray-600 text-sm block mt-1">
                      {plan.description}
                    </span>
                  )}
                </TableCell>
                <TableCell className="align-top font-medium whitespace-pre-line">
                  {plan.rate}
                </TableCell>
                <TableCell className="align-top">
                  {plan.prefix && (
                    <div className="font-medium mb-2">{plan.prefix}</div>
                  )}
                  <ul className="space-y-2">
                    {plan.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-gold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell className="align-top">
                  <Button
                    onClick={() => handleSelect(plan.name)}
                    variant="outline"
                    className="whitespace-nowrap hover:bg-gold hover:text-white border-gold text-gold"
                  >
                    {plan.name === "Glow-Occasion" ? "Request Quote" : "Select Service"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <p className="text-center mt-6 text-gray-700">
        <strong>All rates include supplies, steam equipment. No hidden fees.</strong>
      </p>
    </div>
  );
};

export default PriceTable;
