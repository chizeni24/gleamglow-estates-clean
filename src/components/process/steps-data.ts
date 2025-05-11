
import { Star } from "lucide-react";

export interface Step {
  step: string;
  title: string;
  text: string;
  color: string;
  icon: typeof Star;
  tip: string;
}

export const steps: Step[] = [
  { 
    step: '1', 
    title: 'Gather & Declutter', 
    text: 'We start by clearing surfaces and preparing your space for the full GleamGlow experience.',
    color: 'bg-gold-light',
    icon: Star,
    tip: "Start fresh by removing all small items from surfaces for a thorough clean."
  },
  { 
    step: '2', 
    title: 'Lift & Dust', 
    text: 'Our top-down dusting approach ensures no surface is left untouched or unloved.',
    color: 'bg-gold-lighter/30',
    icon: Star,
    tip: "Always dust from top to bottom to avoid re-soiling cleaned areas."
  },
  { 
    step: '3', 
    title: 'Prep & Steam', 
    text: 'We apply our signature eco-friendly solutions and prepare our premium steamers.',
    color: 'bg-gold/20',
    icon: Star,
    tip: "Our eco-friendly solutions are safe for all surfaces and leave no harmful residues."
  },
  { 
    step: '4', 
    title: 'Steam-Sanitise', 
    text: 'Our advanced steam technology eliminates 99.9% of germs and bacteria without harsh chemicals.',
    color: 'bg-gold-lighter/40',
    icon: Star,
    tip: "Steam cleaning sanitizes without chemicals, making it perfect for homes with kids and pets."
  },
  { 
    step: '5', 
    title: 'Polish & Glow', 
    text: 'The final touch - we add our signature streak-free shine and perfect every detail.',
    color: 'bg-gold-light/50',
    icon: Star,
    tip: "Our signature polishing cloth is made from ultra-microfiber for a streak-free finish."
  },
];
