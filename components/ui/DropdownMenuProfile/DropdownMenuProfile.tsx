import React, {useState} from 'react';
import { ProfilePicture } from '@intercath/prueba.profile-picture';
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline';


interface DropdownMenuProfileInterface {
  id: any,
  patientName: string,
  imgSrc: string
}

export type DropdownMenuProfileProps = {
  optionsInfo: Array<DropdownMenuProfileInterface>,
  labelClassName?: string,
  labelText?: string,
};


/**
 * !!important, this components uses custom classes that are on style.css
 */

export function DropdownMenuProfile({ optionsInfo, labelClassName, labelText }: DropdownMenuProfileProps) {
  // States
  const [checkIcon, setCheckIcon] = useState(0);
  const [dropDownMenu, setDropDownMenu] = useState(false);

  /**
   * dropDownMenuHandler is to appear the dropdown
   */
   const dropDownMenuHandler = () => {
    setDropDownMenu(!dropDownMenu);
  };

  /**
   * checkIconHandler is to make the checkIcon appear everytime an option is clicked
   */
  const checkIconHandler = (event) => {
    setCheckIcon(parseInt(event.currentTarget.id));
    dropDownMenuHandler();
  };

    /**
   * with renderDropdownOptions we are gonna render all the lis
   */
  const renderDropdownOptions = () => {
    return optionsInfo.map((option) => {
      return (
        <li
          key={option.id}
          id={option.id}
          tabIndex={-1}
          aria-selected={true}
          className={`m-0 hover:bg-primary cursor-pointer customDropdownMenu ${
            checkIcon === option.id && 'optionCustom'
          }`}
          role="option"
          onKeyDown={checkIconHandler}
          onClick={checkIconHandler}
        >
          <div className="py-2 px-3 flex items-center justify-between min-w-300px">
            <div className="flex items-center">
              <ProfilePicture className="h-6 w-6" borderWhite={false} imgSrc={option.imgSrc} />
              <p className="m-0 pl-2 font-body">{option.patientName}</p>
            </div>
            {checkIcon === option.id && <CheckIcon className="w-5 h-5 text-primary mr-4" />}
          </div>
        </li>
      );
    });
  };
  
   return (
    <div className="">
      {labelText && (
        <label htmlFor="location" className={`block font-bold font-body ${labelClassName}`}>
          {labelText}
        </label>
      )}
      <button
        id={optionsInfo[checkIcon].id}
        onClick={dropDownMenuHandler}
        className="py-2 px-3 flex items-center justify-between min-w-300px rounded-md border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
      >
        <div className="flex items-center">
          <ProfilePicture
            className="h-6 w-6"
            borderWhite={false}
            imgSrc={optionsInfo[checkIcon].imgSrc}
          />
          <p className="m-0 pl-2 font-body ">{optionsInfo[checkIcon].patientName}</p>
        </div>
        <SelectorIcon className="w-5 h-5 text-gray-400" />
      </button>
      {dropDownMenu && (
        <ul
          role="listbox"
          className="m-0 p-0 my-1 absolute bg-white max-w-300px max-h-300px rounded-md border overflow-y-auto overflow-x-hidden"
        >
          {renderDropdownOptions()}
        </ul>
      )}
    </div>
  );
}