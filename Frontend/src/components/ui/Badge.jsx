import React from 'react';

export function Badge({ className = '', variant = 'default', children, ...props }) {
  const baseStyles = 'px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider inline-flex items-center justify-center';
  
  const variants = {
    default: 'bg-slate-100 text-slate-800',
    primary: 'bg-purple-100 text-purple-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-orange-100 text-orange-800',
    danger: 'bg-red-100 text-red-800',
    solidOrange: 'bg-orange-500 text-white',
    solidBlue: 'bg-blue-500 text-white',
  };

  const classes = `${baseStyles} ${variants[variant] || variants.default} ${className}`;

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
