import React, { useState } from 'react';
import {
  ComponentWrapper,
  OpenButton,
  PopupWrapper,
  Popup,
  SelectButton,
} from './styles';

export const SelectPopup = ({ handler, Arr }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sortsList = [
    'Reset',
    'Bubble Sort',
    'Insertion Sort',
    'Selection Sort',
    'Merge Sort',
    'Quick Sort',
  ];

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <ComponentWrapper>
      <OpenButton onClick={handleOpen}>Select Sort</OpenButton>,
      {isOpen && (
        <PopupWrapper>
          <Popup>
            {sortsList.map((element, index) => (
              <SelectButton key={index} onClick={() => handler(element, Arr)}>
                {element}
              </SelectButton>
            ))}
            <SelectButton remove onClick={handleOpen}>
              Remove
            </SelectButton>
          </Popup>
        </PopupWrapper>
      )}
    </ComponentWrapper>
  );
};
