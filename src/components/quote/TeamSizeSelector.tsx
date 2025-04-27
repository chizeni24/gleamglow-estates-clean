
import { User } from "lucide-react";
import { motion } from "framer-motion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface TeamSizeSelectorProps {
  value: string;
  onValueChange: (value: "1" | "2") => void;
}

export const TeamSizeSelector = ({ value, onValueChange }: TeamSizeSelectorProps) => {
  return (
    <div className="bg-gold/5 rounded-lg p-6">
      <p className="text-center mb-4 text-gray-600 font-medium">Choose Your Team Size:</p>
      
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={(value) => value && onValueChange(value as "1" | "2")}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <ToggleGroupItem 
          value="1"
          className="flex items-center gap-2 data-[state=on]:bg-gold data-[state=on]:text-white px-4 py-3 rounded-lg border border-gold/20 hover:bg-gold/10 transition-colors"
        >
          <User className="h-4 w-4" />
          <div className="text-left">
            <div className="font-medium">Standard Service</div>
            <div className="text-xs opacity-90">Single Professional Cleaner</div>
          </div>
        </ToggleGroupItem>
        
        <ToggleGroupItem 
          value="2"
          className="flex items-center gap-2 data-[state=on]:bg-gold data-[state=on]:text-white px-4 py-3 rounded-lg border border-gold/20 hover:bg-gold/10 transition-colors"
        >
          <div className="relative">
            <User className="h-4 w-4" />
            <User className="h-4 w-4 absolute -right-2 top-0" />
          </div>
          <div className="text-left">
            <div className="font-medium">Fast Track Service</div>
            <div className="text-xs opacity-90">Two Professional Cleaners</div>
          </div>
        </ToggleGroupItem>
      </ToggleGroup>
      
      {value === "2" && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-gold text-center mt-4"
        >
          🏃 Finish 40% faster with two professionals at a slight additional cost!
        </motion.p>
      )}
    </div>
  );
};

