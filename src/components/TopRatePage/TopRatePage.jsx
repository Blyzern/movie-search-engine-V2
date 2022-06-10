import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  PageWrapper,
  DropdownWrapper,
  Dropdown,
  Poster,
  FilmsWrapper,
  Vote,
  FilmCard,
  DropdownOption,
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
  const arrCopy = [...arr];
  arrCopy.map((ary, i, min) => {
    (min = i),
      arrCopy.map((e, j = i + 1) => {
        if (arrCopy[j].vote_average < arrCopy[min].vote_average) {
          min = j;
        }
        if (min != i) {
          let temp = arrCopy[i];
          arrCopy[i] = arrCopy[min];
          arrCopy[min] = temp;
        }
      });
  });
  return arrCopy;
};

const merge = (left, right) => {
  let sortedArr = []; // the sorted elements will go here

  while (left.length && right.length) {
    // insert the smallest element to the sortedArr
    if (left[0].vote_average > right[0].vote_average) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  // use spread operator and create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
};

const mergeSort = (arr) => {
  const arrCopy = [...arr];
  const half = arrCopy.length / 2;

  // the base case is array length <=1
  if (arrCopy.length <= 1) {
    return arrCopy;
  }

  const left = arrCopy.splice(0, half); // the first half of the array
  const right = arrCopy;
  return merge(mergeSort(left), mergeSort(right));
};

const quickSort = (arr) => {
  const arrCopy = [...arr];
  const partition = (array = [], start, end) => {
    const pivotValue = array[end].vote_average;
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (array[i].vote_average > pivotValue) {
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        pivotIndex++;
      }
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

export const TopRatePage = ({ data }) => {
  const [films, setFilms] = useState([]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    setFilms(data);
  }, [data]);

  const changeHandler = (value, arrData) => {
    switch (value) {
      case 'Select Sort':
        return setFilms(arrData);
      case 'bubbleSort':
        return setFilms(bubbleSort(arrData));
      case 'insertionSort':
        return setFilms(insertionSort(arrData));
      case 'selectionSort':
        return setFilms(selectionSort(arrData));
      case 'mergeSort':
        return setFilms(mergeSort(arrData));
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
          <DropdownOption defaultValue="Select Sort" key="default">
            Select Sort
          </DropdownOption>
          <DropdownOption value="bubbleSort" key="bubbleSort">
            Bubble Sort
          </DropdownOption>
          <DropdownOption value="insertionSort" key="insertionSort">
            Insertion Sort
          </DropdownOption>
          <DropdownOption value="selectionSort" key="selectionSort">
            Selection Sort
          </DropdownOption>
          <DropdownOption value="mergeSort" key="mergeSort">
            Merge Sort
          </DropdownOption>
          <DropdownOption value="quickSort" key="quickSort">
            Quick Sort
          </DropdownOption>
        </Dropdown>
      </DropdownWrapper>
      <FilmsWrapper>
        {films.map(({ poster_path, id, vote_average }) => (
          <FilmCard key={id}>
            <Poster
              src={poster_path !== undefined ? baseImgUrl + poster_path : ''}
              key={id}
              alt="Poster"
            ></Poster>
            <Vote key={id + ' movie'}>Vote: {vote_average}</Vote>
          </FilmCard>
        ))}
      </FilmsWrapper>
    </PageWrapper>
  );
};
