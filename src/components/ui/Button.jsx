import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary',
  to,
  onClick,
  className = '',
  ...props 
}) => {
  const baseClasses = "px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
    accent: "bg-accent text-white hover:bg-accent-dark",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;