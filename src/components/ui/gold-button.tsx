
import * as React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "../effects/Sparkles";

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  showShine?: boolean;
  showGlow?: boolean;
  sparkle?: boolean;
}

const GoldButton = React.forwardRef<HTMLButtonElement, GoldButtonProps>(
  ({ 
    className, 
    children, 
    variant = "solid", 
    size = "md", 
    showShine = false,
    showGlow = false,
    sparkle = false,
    ...props 
  }, ref) => {
    const [isActive, setIsActive] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const [isClicked, setIsClicked] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setIsActive(true);
      setIsClicked(true);
      setTimeout(() => setIsActive(false), 1000);
      setTimeout(() => setIsClicked(false), 2000);
      
      if (props.onClick) {
        props.onClick(event);
      }
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden font-medium rounded-md transition-all",
          variant === "solid" && "bg-gradient-to-r from-gold to-gold-lighter text-white hover:bg-gold-dark",
          variant === "outline" && "border-2 border-gold-lighter text-gold-lighter hover:bg-gold-lighter/10",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3",
          size === "lg" && "px-8 py-4 text-lg",
          showGlow && "shadow-md hover:shadow-lg hover:shadow-gold/20",
          isActive && "scale-95",
          isClicked && "animate-bounce-sm",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
        onClick={handleClick}
      >
        <span className="relative z-10">{children}</span>
        
        {sparkle && isHovered && (
          <Sparkles className="opacity-60" count={8} minSize={1} maxSize={3} />
        )}
        
        {showShine && (
          <span 
            className={cn(
              "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%]",
              isHovered ? "animate-shine" : ""
            )}
          ></span>
        )}
        
        {showGlow && (
          <span className="absolute inset-0 -z-10 bg-gold-lighter/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
        )}
        
        <span 
          className={cn(
            "absolute inset-0 bg-white/20 scale-x-0 origin-left",
            isActive ? "scale-x-100 transition-transform duration-500" : ""
          )}
        ></span>
        
        {variant === "outline" && (
          <span 
            className={cn(
              "absolute inset-0 border-2 border-gold-lighter rounded-md opacity-0",
              isHovered ? "animate-pulse-gold opacity-100" : ""
            )}
          ></span>
        )}
      </button>
    );
  }
);

GoldButton.displayName = "GoldButton";

export { GoldButton };
