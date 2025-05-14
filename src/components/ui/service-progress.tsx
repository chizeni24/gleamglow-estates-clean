
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface ServiceProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  showPulse?: boolean;
}

const ServiceProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ServiceProgressProps
>(({ className, value, showPulse = false, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-gold-light/30",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark transition-all duration-500",
        showPulse && "animate-pulse-gold"
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));

ServiceProgress.displayName = "ServiceProgress";

export { ServiceProgress };
