
import React from "react";
import { motion } from "framer-motion";
import { GoldButton } from "./ui/gold-button";
import { useNavigate } from "react-router-dom";

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
        >
          <h2 className="text-3xl font-serif mb-4">Our Steam-Powered Clean</h2>
          <p className="mb-4 text-gray-700">
            At the heart of every Glow cleaning is our advanced steam technology - the superior 
            way to clean and sanitize your home.
          </p>
          <ul className="space-y-3 leading-relaxed">
            <li><b>99.9% germ elimination</b> without any harsh chemicals</li>
            <li>Penetrates deep into surfaces where traditional methods fail</li>
            <li>Leaves <em>zero</em> chemical residue—just a fresh, clean glow</li>
            <li>Hospital-grade sanitization for true peace of mind</li>
            <li>Safe and effective on all home surfaces</li>
          </ul>
          <GoldButton 
            className="mt-6"
            onClick={() => navigate('/booking')}
            showShine
            showGlow
          >
            Book Your Glow Clean
          </GoldButton>
        </motion.div>
      </div>
    </section>
  );
};

export default SteamDifference;
