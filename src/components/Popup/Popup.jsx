import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popupDataSelector } from './store/popupSelectors';
import { getData } from './store/popupSlice';

const quickSort = (arr) => {
  const arrCopy = [...arr];
  const partition = (array = [], start, end) => {
    let i = start;
    const pivotValue = array[end].title;
    let pivotIndex = start;

    while (i < end) {
      if (array[i].title < pivotValue) {
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        pivotIndex++;
      }
      i++;
    }

    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    return pivotIndex;
  };
  let stack = [];
  stack.push(0);
  stack.push(arrCopy.length - 1);
  while (stack[stack.length - 1] >= 0) {
    let end = stack.pop();
    let start = stack.pop();
    let pivotIndex = partition(arrCopy, start, end);

    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
  return arrCopy;
};

import {
  CloseButton,
  PopupWrapper,
  PopupBox,
  Radio,
  SearchWrapper,
  InputWrapper,
  Label,
  SearchBar,
  SearchButton,
  Results,
} from './styles';
import { isEmpty } from 'lodash';

const linearSearch = (arr, input) => {
  let arrCopy = [...arr];
  let results = [];
  arrCopy.map(({ title, id }, i) => {
    if (title.includes(input)) {
      results.push(title);
    }
  });
  return results || 'Not Found';
};

const binarySearch = (arr, x) => {
  let arrCopy = [...arr];
  let l = 0;
  let r = arrCopy.length - 1;
  let mid;
  let results = [];

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    let res = arrCopy[mid].title.localeCompare(x);

    if (arrCopy[mid].title.includes(x)) {
      results.push(arrCopy[mid].title);
    }
    res > 0 ? (r = mid + 1) : (l = mid + 1);
  }
  return results || 'Not Found';
};

export const Popup = ({ handle }) => {
  const dispatch = useDispatch();
  const data = useSelector(popupDataSelector);
  const { title } = data;

  const [sortedData, setSortedData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchOutput = [], setSearchOutput] = useState([]);
  const [searchType, setSearchType] = useState(false);

  useEffect(() => {
    dispatch(getData());
  }, []);
  useEffect(() => {
    if (data !== undefined) {
      setSortedData(quickSort(data, title));
    }
  }, [data]);

  const handleSearch = (type) => {
    type
      ? setSearchOutput(binarySearch(sortedData, searchInput))
      : setSearchOutput(linearSearch(data, searchInput));
  };

  return (
    <PopupWrapper>
      <PopupBox>
        <CloseButton onClick={handle}>X</CloseButton>
        <SearchWrapper>
          <InputWrapper>
            <Radio
              type="radio"
              name="radio"
              value="Linear Search"
              onChange={() => setSearchType(false)}
            />
            <Label>Linear Search</Label>
          </InputWrapper>
          <InputWrapper>
            <Radio
              type="radio"
              name="radio"
              value="Binary Search"
              onChange={() => setSearchType(true)}
            />
            <Label>Binary Search</Label>
          </InputWrapper>
          <InputWrapper>
            <SearchBar
              type="text"
              placeholder="Search Film"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </InputWrapper>
          <SearchButton onClick={() => handleSearch(searchType)}>
            SEARCH
          </SearchButton>
          {!isEmpty(searchOutput) &&
            searchOutput.map((item, i) => <Results key={i}>{item}</Results>)}
        </SearchWrapper>
      </PopupBox>
    </PopupWrapper>
  );
};
