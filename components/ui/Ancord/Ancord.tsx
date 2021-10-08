import React from 'react';

export type AncordProps = {
  href?: string,
  text: string,
  weight?: string
};


export function Ancord({ text, href, weight = "font-medium" }: AncordProps) {
  return (
    <a href={href} className={`${weight} text-indigo-600 hover:text-indigo-500`}>
      {text}
    </a>
  );
}