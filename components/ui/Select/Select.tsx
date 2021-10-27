import React from 'react';

export type SelectProps = {
  text?: string,
  labelClassName?: string,
  selectClassName?: string,
  selectOptions?: string[]
};


export function Select({ text, labelClassName, selectOptions, selectClassName = 'text-gray-700 text-sm' }: SelectProps) {
  /**
   * className property is mostly to change label text color
   */

  /**
   * renderSelectOptions function is to render all the selected options we will need,
   * this receives an array, this can change in the future depending on the backend
   */
   let renderSelectOptions = () => {
    return selectOptions.map((option, index) => {
      // We add the selected attribute to the first one, !this can change
      if (index === 0) {
        return <option key={index}>{option}</option>;
      }
      return <option key={index}>{option}</option>;
    });
  };

   return (
    <div>
      <label htmlFor="location" className={`block font-bold font-body ${labelClassName}`}>
        {text}
      </label>
      <select
        id="location"
        name="location"
        className={`mt-1 block font-body w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${selectClassName}`}
      >
        {renderSelectOptions()}
      </select>
    </div>
  );
}