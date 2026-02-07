import PropTypes from 'prop-types';

export const Card = ({
    size = "default",
    className = "",
    children,
    ...props
}) =>{
  const sizeClasses = {
    default: "px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg xl:text-xl",
    extended: "px-5 py-2.5 text-base md:px-8 md:py-4 md:text-lg lg:px-10 lg:py-5 lg:text-xl xl:text-2xl",
  };
  const baseClass = "notebook card";
  const classes = `${baseClass} ${sizeClasses[size]} ${className}`;

  return (
      <div className={classes} {...props}>
            {children}
        </div>
    );
}

Card.propTypes = {
  size: PropTypes.oneOf(['default', 'extended']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};