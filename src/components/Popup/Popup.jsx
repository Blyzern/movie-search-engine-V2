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

const binarySearch = (arr, x) => {
  let l = 0;
  let r = arr.length - 1;
  let mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);

    if (arr[mid] == x) {
      return arr[mid].title;
    }
    if (x > arr[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
};

export const Popup = ({ handle }) => {
  const [data, setData] = useState([]);
  return (
    <PopupWrapper>
      <PopupBox>
        <CloseButton onClick={handle}>X</CloseButton>
        <SearchForm>
          <InputWrapper>
            <Radio
              type="radio"
              name="radio"
              value="Linear Search"
              onChange={() => linearSearch(arr)}
              checked
            />
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
