import React from 'react';
import { Select } from '@intercath/prueba.select'




interface selectOptionObjectInterface {
  text: string,
  labelClassName?: string,
  className?: string,
  selectOptions: string[]
}

export type FormSelectProps = {
  selectOptionObject: Array<selectOptionObjectInterface>,
  className?: string,
};


export function FormSelect({ selectOptionObject, className }: FormSelectProps) {
  /**
   * We are gonna make the the selects dynamic
   */
   const renderSelects = () => {
    return selectOptionObject.map((select) => {
      return (
        <div key={Math.random()} className={select.className}>
          <Select
            text={select.text}
            labelClassName={select.labelClassName}
            selectOptions={select.selectOptions}
          />
        </div>
      );
    });
  };

   return (
<div className={className}>{renderSelects()}</div>
  );
}