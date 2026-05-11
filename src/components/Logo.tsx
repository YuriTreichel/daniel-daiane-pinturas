import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
  width?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  showText = true, 
  light = false,
  width = "280px"
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/assets/images/black_logo.png" 
        alt="Daniel & Daiane Pinturas" 
        className="object-contain transition-all duration-300"
        style={{ width: width, height: 'auto', ...(light ? { filter: 'brightness(0) invert(1)' } : {}) }}
      />
    </div>
  );
};
