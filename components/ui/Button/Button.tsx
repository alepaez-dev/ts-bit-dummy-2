import React from 'react';

export type ButtonProps = {
  primary?: boolean,
  boxShadow?: boolean,
  reverseIcon?: boolean,
  textCentered?: boolean,
  children?: any,
  icon?: any,
  className?: string,
};


export function Button({children ,icon, className = "text-base", boxShadow = true, primary = false, reverseIcon = false, textCentered = true  }: ButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center px-6 py-3 font-medium font-body focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full text-center ${
        primary ? 'text-white bg-primary ' + className : className
      } ${boxShadow && 'shadow-sm hover:shadow-lg'} ${
        reverseIcon ? 'flex-row-reverse' : 'inline-flex'
      } ${textCentered && 'justify-center'}
      `}
    >
      {icon}
      {children}
    </button>
  );
}