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
    extended: "px-8 py-4 border-20 rounded-full text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};