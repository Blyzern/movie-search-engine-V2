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

import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
} from '../../utils/Sorting';

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
