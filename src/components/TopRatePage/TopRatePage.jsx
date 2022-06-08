import React from 'react';
import { Bubble } from './styles';

const bubbleSort = async (arr) => {
  return arr;
};

export const TopRatePage = ({ data }) => {
  return <Bubble onClick={() => bubbleSort(data)}>Bubble Sort</Bubble>;
};
