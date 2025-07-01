import React from 'react';

const Card = ({ 
  children, 
  className = '',
  image,
  title,
  description,
  ...props 
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}
      {...props}
    >
      {image && (
        <div className="aspect-video bg-gradient-to-r from-primary to-secondary w-full flex items-center justify-center">
          <span className="text-white font-bold">Imagen del proyecto</span>
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>}
        {description && <p className="text-gray-700 mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;