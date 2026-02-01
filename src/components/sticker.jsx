import { useState } from 'react';

export const Sticker = ({
//   variant = "strawberry", // default color
  size = "default",
  className = "",
  children,
  fidget = false, // Enable fidget behavior
  ...props
}) => {
  // Track mouse position relative to sticker center
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const baseClasses = "sticker transition-transform duration-300 ease-out";
  
  const sizeClasses = {
    xs: "w-8 h-8 border-4 rounded-full text-xs",
    sm: "w-16 h-16 border-6 rounded-full text-sm",
    default: "w-24 h-24 border-12 rounded-full text-base",
    lg: "w-32 h-32 border-16 rounded-full text-lg",
    xl: "w-48 h-48 border-20 rounded-full text-xl",
    extended:  "px-4 py-2 border-12 w-[90%] min-w-[200px] rounded-full text-sm sm:px-6 sm:py-3 sm:border-16 sm:min-w-[300px] sm:text-base lg:px-8 lg:py-4 lg:border-20 lg:min-w-[400px] lg:text-lg",
  };

  // Handle mouse movement
  const handleMouseMove = (e) => {
    if (!fidget) return; // Only run if fidget is enabled

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate mouse position relative to center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Move opposite direction (negative values)
    // Divide by 5 to reduce movement intensity
    const moveX = -mouseX / 5;
    const moveY = -mouseY / 5;
    
    setTransform({ x: moveX, y: moveY });
  };

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    if (!fidget) return;
    setTransform({ x: 0, y: 0 });
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <div 
      className={classes}
      style={{
        transform: fidget ? `translate(${transform.x}px, ${transform.y}px)` : 'none'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};