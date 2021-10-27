import React from 'react';
import {Button} from '@intercath/prueba.button';
import {DropdownMenuProfile} from '@intercath/prueba.dropdown-menu-profile';
import {FormSelect} from '@intercath/prueba.form-select';
import {ProfilePicture} from '@intercath/prueba.profile-picture';


interface extraSessionOptionsInfoInterface {
  id: any,
  patientName: string,
  imgSrc: string
}
export type SetUpSessionProps = {
  numberOfSession?: string,
  patientName: string,
  extraSession?: boolean,
  extraSessionOptionsInfo?: Array<extraSessionOptionsInfoInterface>
};


export function SetUpSession({
  numberOfSession,
  patientName,
  extraSessionOptionsInfo,
  extraSession = false,
} : SetUpSessionProps) {
  const labelClassName = 'text-gray-800 text-sm';
  const selectClassName = 'my-2';

  const selectOptionObject = [
    {
      text: 'Dia',
      labelClassName: labelClassName,
      selectOptions: ['1', '2', '3', '4', '5', '6', '7'],
      className: selectClassName,
    },
    {
      text: 'Mes',
      labelClassName: labelClassName,
      selectOptions: ['Septiembre', 'Enero', 'Febrero', 'Marzo', 'Abril'],
      className: selectClassName,
    },
    {
      text: 'Año',
      labelClassName: labelClassName,
      selectOptions: ['2018', '2019', '2020', '2021'],
      className: selectClassName,
    },
    {
      text: 'Hora',
      labelClassName: labelClassName,
      selectOptions: ['2:00pm', '4:00pm', '6:00pm'],
      className: selectClassName,
    },
  ];

   return (
    <div>
    <p
      className={`font-body text-base font-bold my-0 ${
        extraSession ? 'text-black' : 'text-primary'
      }`}
    >
      {extraSession ? 'Sesión extra' : numberOfSession}
    </p>
    {!extraSession && (
      <div
        className="flex items-
    center"
      >
        <ProfilePicture className="h-10 w-10" />
        <p className="font-body text-sm text-gray-600 pl-2">
          Con <strong>{patientName}</strong>
        </p>
      </div>
    )}
    <div>
      <FormSelect
        selectOptionObject={selectOptionObject}
        className="flex justify-between flex-wrap my-2"
      />
      {extraSession && (
        <div className="mt-4 mb-6">
          <DropdownMenuProfile
            optionsInfo={extraSessionOptionsInfo}
            labelText="Paciente"
            labelClassName={labelClassName}
          />
        </div>
      )}
    </div>
    <div className="flex">
      <Button className="bg-white text-black-400 border rounded-md">Cerrar</Button>
      <Button primary={true} className="rounded-md">
        Guardar
      </Button>
    </div>
  </div>
  );
}