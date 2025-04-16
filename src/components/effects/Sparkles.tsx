
import React from "react";

interface SparklesProps {
  color?: string;
  count?: number;
  minSize?: number;
  maxSize?: number;
  className?: string;
}

export const Sparkles: React.FC<SparklesProps> = ({
  color = "#EBD27D", // gold-lighter color
  count = 12,
  minSize = 1,
  maxSize = 3,
  className = "",
}) => {
  // Generate random sparkles with different positions, sizes, and animation delays
  const sparkles = Array.from({ length: count }).map((_, index) => {
    const size = minSize + Math.random() * (maxSize - minSize);
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
    };
    
    return (
      <span
        key={index}
        className="absolute rounded-full animate-twinkle"
        style={{
          ...style,
          backgroundColor: color,
          opacity: 0.7,
        }}
      />
    );
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {sparkles}
    </div>
  );
};
