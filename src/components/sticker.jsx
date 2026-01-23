export const Sticker = ({
//   variant = "strawberry", // default color
  size = "default",
  className = "",
  children,
  ...props
}) => {
  const baseClasses = "sticker";
  
//   const variantClasses = {
//     sky: "sticker-sky",
//     strawberry: "sticker-strawberry",
//     inchworm: "sticker-inchworm",
//   };

  const sizeClasses = {
    xs: "w-8 h-8 border-4 rounded-full text-xs",
    sm: "w-16 h-16 border-6 rounded-full text-sm",
    default: "w-24 h-24 border-12 rounded-full text-base",
    lg: "w-32 h-32 border-16 rounded-full text-lg",
    xl: "w-48 h-48 border-20 rounded-full text-xl",
    extended:  "px-4 py-2 border-12 w-[90%] min-w-[200px] rounded-full text-sm sm:px-6 sm:py-3 sm:border-16 sm:min-w-[300px] sm:text-base lg:px-8 lg:py-4 lg:border-20 lg:min-w-[400px] lg:text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};