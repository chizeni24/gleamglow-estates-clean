
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  formatNumber?: (n: number) => string;
  className?: string;
  onComplete?: () => void;
}

const AnimatedCounter = ({ 
  target, 
  duration = 2000, 
  formatNumber = (n: number) => n.toLocaleString(), 
  className,
  onComplete
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const startTime = useRef<number | null>(null);
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    if (target === 0) return;
    
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      
      // Calculate the current count based on the progress
      const progressRatio = Math.min(progress / duration, 1);
      const easedProgress = easeOutExpo(progressRatio);
      const currentCount = Math.floor(easedProgress * target);
      
      setCount(currentCount);
      
      if (progress < duration) {
        frameId.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
        setIsComplete(true);
        if (onComplete) onComplete();
      }
    };
    
    frameId.current = requestAnimationFrame(animate);
    
    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, [target, duration, onComplete]);

  // Easing function for smoother animation
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };

  return (
    <span className={cn("transition-all duration-500", isComplete ? "text-gold" : "", className)}>
      {formatNumber(count)}
    </span>
  );
};

export default AnimatedCounter;
