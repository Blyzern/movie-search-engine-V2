import React, { useState } from 'react';
import {
  PageWrapper,
  DropdownWrapper,
  Dropdown,
  Poster,
  FilmsWrapper,
  Vote,
} from './styles';

//bubble sorting
const bubbleSort = (arr) => {
  const arrCopy = [...arr];
  arrCopy.map((ary) => {
    arrCopy.map((e, i) => {
      if (arrCopy[i + 1] !== undefined) {
        if (arrCopy[i].vote_average < arrCopy[i + 1].vote_average) {
          [arrCopy[i + 1], arrCopy[i]] = [arrCopy[i], arrCopy[i + 1]];
        }
      }
    });
  });
  return arrCopy;
};

const insertionSort = (arr) => {
  const arrCopy = [...arr];
  arrCopy.map((ary, i, j) => {
    (ary = arrCopy[i]), (j = i - 1);
    while (j > -1 && ary.vote_average > arrCopy[j].vote_average) {
      (arrCopy[j + 1] = arrCopy[j]), j--;
    }
    arrCopy[j + 1] = ary;
  });
  return arrCopy;
};

const selectionSort = (arr) => {
  arr.map((ary, i, min) => {
    (min = i),
      arr.map((e, j = i + 1) => {
        if (arr[j].vote_average < arr[min].vote_average) {
          min = j;
        }
        if (min != i) {
          let temp = arr[i];
          arr[i] = arr[min];
          arr[min] = temp;
        }
      });
  });
  return arr;
};

const quickSort = (arr) => {
  const partition = (array = [], start, end) => {
    const pivotValue = array[end].vote_average;
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (array[i].vote_average > pivotValue) {
        // Swapping elements
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        // Moving to next element
        pivotIndex++;
      }
    }

    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    return pivotIndex;
  };
  let stack = [];
  stack.push(0);
  stack.push(arr.length - 1);
  while (stack[stack.length - 1] >= 0) {
    let end = stack.pop();
    let start = stack.pop();
    let pivotIndex = partition(arr, start, end);

    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
  console.log(arr);
  return arr;
};

export const TopRatePage = ({ data }) => {
  const [select, setSelect] = useState('');
  const [films, setFilms] = useState([]);
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

  const changeHandler = (value, arrData) => {
    setSelect(value);
    switch (value) {
      case 'Select Sort':
        return setFilms(arrData);
      case 'bubbleSort':
        return setFilms(bubbleSort(arrData));
      case 'insertionSort':
        return setFilms(insertionSort(arrData));
      case 'selectionSort':
        return setFilms(selectionSort(arrData));
      case 'quickSort':
        return setFilms(quickSort(arrData));
      default:
        return console.log('error');
    }
  };
  return (
    <PageWrapper>
      <DropdownWrapper>
        <Dropdown onChange={(e) => changeHandler(e.target.value, data)}>
          <option defaultValue="Select Sort">Select Sort</option>
          <option value="bubbleSort">Bubble Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="quickSort">Quick Sort</option>
        </Dropdown>
      </DropdownWrapper>
      <FilmsWrapper>
        {films.map(({ poster_path, id, vote_average }) => (
          <Poster src={baseImgUrl + poster_path} key={id}></Poster>
        ))}
      </FilmsWrapper>
    </PageWrapper>
  );
};
