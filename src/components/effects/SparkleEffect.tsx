
import React from 'react';

interface SparkleProps {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}

const Sparkle: React.FC<SparkleProps> = ({
  color = '#EBD27D',
  size = 10,
  style = {},
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 68 68"
      fill="none"
      className="absolute animate-twinkle"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34 0L42.5 25.5L68 34L42.5 42.5L34 68L25.5 42.5L0 34L25.5 25.5L34 0Z"
        fill={color}
      />
    </svg>
  );
};

interface SparkleEffectProps {
  className?: string;
  color?: string;
  minSize?: number;
  maxSize?: number;
  count?: number;
  style?: React.CSSProperties;
}

export const SparkleEffect: React.FC<SparkleEffectProps> = ({
  className = '',
  color = '#EBD27D', // Gold color
  minSize = 4,
  maxSize = 10,
  count = 8,
  style = {},
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={style}>
      {Array.from({ length: count }).map((_, i) => {
        const size = minSize + Math.random() * (maxSize - minSize);
        const sparkleStyle = {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: 0.4 + Math.random() * 0.6,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        };
        return (
          <Sparkle key={i} color={color} size={size} style={sparkleStyle} />
        );
      })}
    </div>
  );
};
