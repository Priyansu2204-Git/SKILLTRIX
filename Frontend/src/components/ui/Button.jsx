import React from 'react';

export function Button({ className = '', variant = 'primary', size = 'default', children, ...props }) {
  const baseStyles = 'inline-flex items-center justify-center font-black rounded-lg transition-all duration-300 shadow-sm hover:shadow-md';
  
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    secondary: 'bg-white text-purple-600 hover:bg-slate-50',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50',
    ghost: 'bg-transparent text-slate-600 hover:text-purple-600 hover:bg-purple-50 shadow-none hover:shadow-none',
  };

  const sizes = {
    default: 'px-6 py-3 text-sm',
    sm: 'px-4 py-2 text-xs',
    lg: 'px-8 py-4 text-base',
    icon: 'p-2',
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.default} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
