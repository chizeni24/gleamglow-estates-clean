import { Check, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { GoldButton } from "@/components/ui/gold-button";

interface EstimateDisplayProps {
  estimate: { low: number; high: number; estimatedTime: number } | null;
  teamSize: string;
  onBookingClick: () => void;
}

export const EstimateDisplay = ({ estimate, teamSize, onBookingClick }: EstimateDisplayProps) => {
  if (!estimate) return null;

  const formatTime = (hours: number) => {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    
    if (wholeHours === 0) {
      return `${minutes} minutes`;
    } else if (minutes === 0) {
      return `${wholeHours} hour${wholeHours !== 1 ? 's' : ''}`;
    } else {
      return `${wholeHours} hour${wholeHours !== 1 ? 's' : ''} ${minutes} minutes`;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 text-center p-4"
    >
      <div className="bg-gold-light/10 rounded-lg p-4">
        <p className="text-gray-600 mb-2">Estimated Price Range:</p>
        <p className="text-3xl font-bold text-gold mb-2">
          ${estimate.low} – ${estimate.high}
        </p>
        <p className="text-sm text-gray-500">
          Includes all supplies and equipment
        </p>
        <p className="text-sm font-medium text-gold mt-2">
          Estimated Time: {formatTime(estimate.estimatedTime)}
          {teamSize === "2" && " • 40% faster with team cleaning"}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <div className="bg-gold/5 rounded-lg p-4">
          <p className="text-sm text-gray-600 fade-in-gentle">
            ⚡ <strong>Please Note:</strong> This is an estimate based on the information provided. Final pricing may vary depending on the property's actual condition and needs.<br />
            📞 <strong>For the most accurate quote, we recommend booking your service and receiving a quick confirmation call from our team.</strong>
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
