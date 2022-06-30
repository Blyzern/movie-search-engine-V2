import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieData } from './store/topRatedSlice';
import { dataSelector, isLoadingSelector } from './store/topRatedSelectors';
import { setMovieId } from '../details/store/detailsSlice';
import { push } from 'redux-first-history';
import { isEmpty } from 'lodash';
import { SelectPopup } from '../../components/SelectPopup';

import {
  PageWrapper,
  DropdownWrapper,
  Dropdown,
  Poster,
  FilmsWrapper,
  Vote,
  FilmCard,
  DropdownOption,
  LoaderContainer,
  Title,
} from './styles';

import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
} from '../../utils/Sorting';

import PulseLoader from 'react-spinners/PulseLoader';
import { nanoid } from '@reduxjs/toolkit';

export const TopRatedFilms = () => {
  const data = useSelector(dataSelector);
  const baseImgUrl = process.env.REACT_APP_IMG_URL;
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  const [films, setFilms] = useState([]);

  const changeHandler = (value, arrData) => {
    switch (value) {
      case 'Reset':
        return setFilms(arrData);
      case 'Bubble Sort':
        return setFilms(bubbleSort(arrData));
      case 'Insertion Sort':
        return setFilms(insertionSort(arrData));
      case 'Selection Sort':
        return setFilms(selectionSort(arrData));
      case 'Merge Sort':
        return setFilms(mergeSort(arrData));
      case 'Quick Sort':
        return setFilms(quickSort(arrData));
      default:
        return console.log('error');
    }
  };

  const goTo = (id) => {
    dispatch(setMovieId(id));
    dispatch(push(`/movie/${id}`));
  };

  useEffect(() => {
    setFilms(data);
  }, [data]);

  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  return isLoading ? (
    <LoaderContainer>
      <Title>Loading...</Title>
      <PulseLoader loading={isLoading} color="red" size={25} />
    </LoaderContainer>
  ) : (
    <PageWrapper>
      <DropdownWrapper>
        <SelectPopup handler={changeHandler} Arr={data} />
      </DropdownWrapper>
      <FilmsWrapper>
        {films.map(({ poster_path, id, vote_average }) => (
          <FilmCard key={id + nanoid()}>
            <Poster
              src={(!isEmpty(poster_path) && baseImgUrl + poster_path) || null}
              key={id + nanoid()}
              alt="Poster"
              onClick={() => goTo(id)}
            ></Poster>
            <Vote key={id}>Vote: {vote_average}</Vote>
          </FilmCard>
        ))}
      </FilmsWrapper>
    </PageWrapper>
  );
};
