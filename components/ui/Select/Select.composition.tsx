// Icons we are gonna use
import React from 'react';
import { Select } from './Select';

// Composition
export const Primary = () => (
  <Select text="Ubicacion" selectOptions={['Estados Unidos', 'México', 'Colombia']} />
);

export const WithoutLabel = () => (
  <Select selectOptions={['Estados Unidos', 'México', 'Colombia']} />
);
