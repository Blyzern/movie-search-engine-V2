import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {
  CloseButton,
  PopupWrapper,
  PopupBox,
  Radio,
  SearchForm,
  InputWrapper,
  Label,
  SearchBar,
} from './styles';

const linearSearch = (arr, input) => {
  let arrCopy = [...arr];
  arrCopy.map(({ title }, i) => {
    if (title.include(input)) {
      return arrCopy[i];
    }
    return;
  });
};

const binarySearch = (arr, input) => {};

export const Popup = ({ handle }) => {
  const [data, setData] = useState([]);

  const fetchData = async (e) => {
    e.preventDefault();
    const response = await get();
  };

  useEffect(() => {}, []);

  return (
    <PopupWrapper>
      <PopupBox>
        <CloseButton onClick={handle}>X</CloseButton>
        <SearchForm>
          <InputWrapper>
            <Radio type="radio" name="radio" value="Linear Search" checked />
            <Label>Linear Search</Label>
          </InputWrapper>
          <InputWrapper>
            <Radio type="radio" name="radio" value="Binary Search" />
            <Label>Binary Search</Label>
          </InputWrapper>
          <InputWrapper>
            <SearchBar type="text" placeholder="Search Film" />
          </InputWrapper>
        </SearchForm>
      </PopupBox>
    </PopupWrapper>
  );
};
