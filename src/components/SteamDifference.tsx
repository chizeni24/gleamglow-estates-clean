
import React from "react";
import { motion } from "framer-motion";
import { GoldButton } from "./ui/gold-button";
import { useNavigate } from "react-router-dom";

const features = [
  { text: "Eliminates 99.9 % of germs & allergens" },
  { text: "Reaches grout & fabric fibres wipes miss" },
  { text: "Leaves zero residue—just a whisper of eucalyptus" },
  { text: "Safe for kids, pets, and fine finishes" }
];

const SteamDifference = () => {
  const navigate = useNavigate();

  return (
    <section id="steam" className="py-20 bg-gold-light/20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <img 
          src="/steam-demo.jpg" 
          alt="Our steam cleaning process" 
          className="rounded-3xl shadow-lg" 
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-serif mb-4">Steam Goes Deeper Than Chemicals</h2>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                <span className="text-gray-700">{feature.text}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="pt-4">
            <GoldButton 
              onClick={() => navigate('/booking')}
              showShine
              showGlow
            >
              See Plans & Pricing
            </GoldButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SteamDifference;
