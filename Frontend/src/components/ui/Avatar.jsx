import React from 'react';

export function Avatar({ src, alt = "Avatar", name, className = '', size = 'default', ...props }) {
  const sizes = {
    sm: 'w-8 h-8',
    default: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const sizeClass = sizes[size] || sizes.default;
  
  const fallbackSrc = name 
    ? `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random` 
    : 'https://ui-avatars.com/api/?name=User&background=a855f7&color=fff';
    
  let imgClass = "w-full h-full object-cover";

  return (
    <div className={`rounded-full overflow-hidden flex-shrink-0 ${sizeClass} ${className}`} {...props}>
      <img src={src || fallbackSrc} alt={alt} className={imgClass} />
    </div>
  );
}
