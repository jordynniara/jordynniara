import { Link } from "react-router";

export const Button = ({
  variant = "strawberry", // default color
  size = "default",
  className = "",
  children,
  ...props
}) => {
  const baseClasses = "btn";
  return ButtonBase({
    variant,
    size,
    className: `${baseClasses} ${className}`,
    children,
    ...props
  });
};

export const LinkButton = ({
  variant = "strawberry",
  size = "default",
  to = "/",
  className = "",
  children,
  ...props
}) => {
  const baseClasses = "link-btn";
  const classes = `${baseClasses} ${className}`;
  return (
    <Link to={to} {...props}>
      {ButtonBase({
        variant,
        size,
        className: classes,
        children
      })}
    </Link>
  );
};

function ButtonBase({
  variant = "strawberry",
  size = "default",
  to = "/",
  className = "",
  children,
  ...props
}) {
  const variantClasses = {
    sky: "btn-sky",
    strawberry: "btn-strawberry",
    inchworm: "btn-inchworm",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base",
    default: "px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg xl:text-xl",
    lg: "px-5 py-2.5 text-base md:px-8 md:py-4 md:text-lg lg:px-10 lg:py-5 lg:text-xl xl:text-2xl",
  };

  const classes = `${className} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
      <button className={classes} {...props}>
        {children}
      </button>
  );
}