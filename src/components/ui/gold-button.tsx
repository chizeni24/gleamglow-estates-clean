
import * as React from "react";
import { cn } from "@/lib/utils";

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  showShine?: boolean;
  showGlow?: boolean;
}

const GoldButton = React.forwardRef<HTMLButtonElement, GoldButtonProps>(
  ({ 
    className, 
    children, 
    variant = "solid", 
    size = "md", 
    showShine = false,
    showGlow = false,
    ...props 
  }, ref) => {
    const [isActive, setIsActive] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setIsActive(true);
      setTimeout(() => setIsActive(false), 1000);
      
      if (props.onClick) {
        props.onClick(event);
      }
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden font-medium rounded-md transition-all",
          variant === "solid" && "bg-gold text-white hover:bg-gold-dark",
          variant === "outline" && "border-2 border-gold-lighter text-gold-lighter hover:bg-gold-lighter hover:text-white",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3",
          size === "lg" && "px-8 py-4 text-lg",
          showGlow && "animate-glow",
          isActive && "scale-95",
          className
        )}
        {...props}
        onClick={handleClick}
      >
        <span className="relative z-10">{children}</span>
        {showShine && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] animate-shine"></span>
        )}
        <span 
          className={cn(
            "absolute inset-0 bg-white/20 scale-x-0 origin-left",
            isActive ? "scale-x-100 transition-transform duration-500" : ""
          )}
        ></span>
      </button>
    );
  }
);

GoldButton.displayName = "GoldButton";

export { GoldButton };
