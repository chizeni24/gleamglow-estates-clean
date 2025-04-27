
import React from "react";
import { motion } from "framer-motion";
import { GoldButton } from "./ui/gold-button";

const SteamDifference = () => {
  return (
    <section id="steam" className="py-20 bg-gold-light/20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <img 
          src="/steam-demo.jpg" 
          alt="Steam cleaning grout" 
          className="rounded-3xl shadow-lg" 
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif mb-4">Why Steam?</h2>
          <ul className="space-y-3 leading-relaxed">
            <li><b>99.9% germ kill</b> without harsh chemicals</li>
            <li>Reaches grout & upholstery fibres ordinary wipes can't</li>
            <li>Leaves <em>zero</em> residue—just a subtle eucalyptus glow</li>
          </ul>
          <GoldButton 
            className="mt-6"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Plans
          </GoldButton>
        </motion.div>
      </div>
    </section>
  );
};

export default SteamDifference;
