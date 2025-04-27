
import React from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Glow-Standard",
    rate: "$73.99 /hr – 2-hour minimum",
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
    rate: "From $299 flat (≤ 1,000 sq ft) • +$0.22 / sq ft thereafter",
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
    rate: "$89.99 /hr",
    highlights: [
      "Priority scheduling",
      "Entertainment areas spotlight",
      "Crystal & fine-china care",
      "Fresh linen staging",
      "Optional post-event steam freshen"
    ]
  }
];

export const PriceTable = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell className="font-serif text-xl">Plan</TableCell>
              <TableCell className="font-serif text-xl">Rate</TableCell>
              <TableCell className="font-serif text-xl">Highlights (✓ = included)</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <p className="text-center mt-6 text-gray-700">
        <strong>All rates include supplies, equipment, and taxes.</strong> No booking fees. Ever.
      </p>
    </div>
  );
};

export default PriceTable;
