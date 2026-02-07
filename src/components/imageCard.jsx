import PropTypes from 'prop-types';

export const ImageCard = ({
    title = '',
    src = '', 
    alt = '', 
    onClick = () => {},
    className = '' 
}) => {
  return (
    <div id="outside" className={`flex flex-col hover:scale-105 ${className}`} onClick={onClick}>
        <h2 className="bg-white py-2 rounded-t-lg border-4 border-b-0 border-white">
            {title}
        </h2>
        <img 
            src={src} 
            alt={alt}
            loading="lazy"
            className="rounded-t-none border-t-0 mt-0 m-auto rounded-lg shadow-lg border-15 border-white object-cover h-100 w-200"/>
    </div>
  );
};

ImageCard.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};