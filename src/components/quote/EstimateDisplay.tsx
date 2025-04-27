
import { Check, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { GoldButton } from "@/components/ui/gold-button";

interface EstimateDisplayProps {
  estimate: { low: number; high: number } | null;
  teamSize: string;
  onBookingClick: () => void;
}

export const EstimateDisplay = ({ estimate, teamSize, onBookingClick }: EstimateDisplayProps) => {
  if (!estimate) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 text-center p-4"
    >
      <div className="bg-gold-light/10 rounded-lg p-4">
        <p className="text-gray-600 mb-2">Estimated total:</p>
        <p className="text-3xl font-bold text-gold mb-2">
          ${estimate.low.toFixed(0)} – ${estimate.high.toFixed(0)}
        </p>
        <p className="text-sm text-gray-500">
          Includes all supplies and equipment
          {teamSize === "2" && " • Fast Track service (40% faster)"}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <div className="bg-gold/5 rounded-lg p-4">
          <h4 className="text-gold font-medium mb-2 flex items-center justify-center gap-2">
            <Check className="w-4 h-4" />
            Transparent Pricing
          </h4>
          <p className="text-sm text-gray-600">
            Our quotes are transparent with no hidden fees. The final price may vary based on specific requirements and add-ons discussed during booking.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative"
        >
          <GoldButton
            onClick={onBookingClick}
            className="w-full group relative overflow-hidden"
            showShine
            showGlow
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Confirm Booking
              <Sparkle className="w-4 h-4" />
            </span>
          </GoldButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

