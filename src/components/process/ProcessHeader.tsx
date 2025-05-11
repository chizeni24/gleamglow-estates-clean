
import React from "react";
import { motion } from "framer-motion";
import { SparkleEffect } from "../effects/SparkleEffect";

const ProcessHeader: React.FC = () => {
  return (
    <div className="text-center mb-12 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-serif font-bold mb-4 text-charcoal relative inline-block">
          The <span className="gleam-text relative">
            GleamGlow
            <SparkleEffect className="opacity-60" color="#EBD27D" count={5} minSize={3} maxSize={5} />
          </span> Method
        </h2>
      </motion.div>
      <motion.p 
        className="text-gray-600 mx-auto max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Our signature five-step process transforms any space from ordinary to extraordinary,
        leaving nothing but brilliance in our wake.
      </motion.p>
      
      <div className="flex justify-center space-x-2 mb-8">
        {[0, 1, 2, 3, 4].map((_, index) => (
          <motion.div
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-gold-lighter"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessHeader;
