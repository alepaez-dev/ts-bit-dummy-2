// Icons we are gonna use
import React from 'react';
import { FormSelect } from './FormSelect';


const labelClassName = 'text-gray-700 text-sm';
const selectOptionObject = [
  {
    text: 'Dia',
    labelClassName: labelClassName,
    selectOptions: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  },
  {
    text: 'Hora',
    labelClassName: labelClassName,
    selectOptions: ['9:00am', '2:00pm', '3:00am'],
  },
  {
    text: 'Numero de sesiones',
    labelClassName: labelClassName,
    selectOptions: ['8', '16', '24'],
  },
];

// Composition
export const Default = () => (
  <FormSelect selectOptionObject={selectOptionObject} />
);

