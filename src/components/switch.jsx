import { useState } from "react";
import PropTypes from 'prop-types';

export const Switch = ({
  size = "default",
  left = "Option 1",
  right = "Option 2",
  defaultOption = "left",
  onChange,
  className = "",
  ...props
}) => {
  const baseClasses = "switch";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base",
    default: "px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg xl:text-xl",
    lg: "px-5 py-2.5 text-base md:px-8 md:py-4 md:text-lg lg:px-10 lg:py-5 lg:text-xl xl:text-2xl",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  const [active, setActive] = useState(defaultOption);
  
  const handleToggle = (option) => {
    setActive(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className={classes} {...props}>
      <button 
        onClick={() => handleToggle('left')} 
        className={`switch-option
          ${active.toLowerCase() === 'left' 
            ? 'switch-toggled switch-option-left' 
            : ''
          }
        `}
      >
        {left}
      </button>
      <button 
        onClick={() => handleToggle('right')} 
        className={`switch-option
          ${active.toLowerCase() === 'right' 
            ? ' switch-toggled switch-option-right' 
            : ''
          }
        `}
      >
        {right}
      </button>
    </div>
  );
};

Switch.propTypes = {
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
  left: PropTypes.string,
  right: PropTypes.string,
  defaultOption: PropTypes.oneOf(['left', 'right']),
  onChange: PropTypes.func,
  className: PropTypes.string,
};