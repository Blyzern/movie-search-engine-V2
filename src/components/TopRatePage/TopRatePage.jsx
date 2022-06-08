import React from 'react';
import { CustomButton } from './styles';

//bubble sorting
const bubbleSort = (arr) => {
  let newArr = [...arr];
  newArr.map((ary) => {
    newArr.map((num, i) => {
      if (newArr[i + 1] !== undefined) {
        if (newArr[i].vote_average < newArr[i + 1].vote_average) {
          [newArr[i + 1], newArr[i]] = [newArr[i], newArr[i + 1]];
        }
      }
    });
  });
  console.log(newArr);
  return newArr;
};

export const TopRatePage = ({ data }) => {
  return (
    <CustomButton onClick={() => bubbleSort(data)}>Bubble Sort</CustomButton>
  );
};
