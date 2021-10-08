import React, {ReactElement} from 'react';

export type ButtonProps = {
  primary : boolean,
  boxShadow: boolean,
  icon: any,
  className: string,
  children: (ReactElement<any> | string)[];
};


export function Button({children ,icon, className, boxShadow = true, primary = false  }: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md  font-body focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full text-center ${
        primary ? 'text-white bg-primary ' + className : className
      } ${boxShadow && 'shadow-sm hover:shadow-lg'} 
      `}
    >
      {icon}
      {children}
    </button>
  );
}