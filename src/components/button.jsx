import { Link } from "react-router";
import PropTypes from 'prop-types';

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

export const Button = ({
  variant = "strawberry",
  size = "default",
  className = "",
  children,
  ...props
}) => {
  const baseClasses = "btn";
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export const LinkButton = ({
  variant = "strawberry",
  size = "default",
  className = "",
  to = "/",
  href = null,
  download = null,
  children,
  ...props
}) => {
  const baseClasses = "link-btn";
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (download) {
    return (
      <a 
        href={href} 
        download={download}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (to?.startsWith('#') || href?.startsWith('#')) {
    const anchorHref = to || href;
    return (
      <a 
        href={anchorHref}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  // External link
  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal link
  return (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'inchworm', 'sky', 'strawberry']),
  size: PropTypes.oneOf(['xs', 'sm', 'default', 'lg']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

LinkButton.propTypes = {
  variant: PropTypes.oneOf(['default', 'inchworm', 'sky', 'strawberry']),
  size: PropTypes.oneOf(['xs', 'sm', 'default', 'lg']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  download: PropTypes.string,
  onClick: PropTypes.func,
};