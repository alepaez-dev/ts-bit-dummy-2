import React from 'react';

export type IntercathCheckboxProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function IntercathCheckbox({ text }: IntercathCheckboxProps) {
  return (
    <fieldset className="space-y-5">
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium font-body text-black-400">
            {text}
          </label>
        </div>
      </div>
    </fieldset>
  );
}