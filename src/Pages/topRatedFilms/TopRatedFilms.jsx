import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieData } from './store/topRatedSlice';
import { dataSelector, isLoadingSelector } from './store/topRatedSelectors';
import { setMovieId } from '../details/store/detailsSlice';
import { push } from 'redux-first-history';
import { isEmpty } from 'lodash';

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

export const TopRatedFilms = () => {
  const data = useSelector(dataSelector);
  const baseImgUrl = process.env.REACT_APP_IMG_URL;
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  const [films, setFilms] = useState([]);

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
              src={(!isEmpty(poster_path) && baseImgUrl + poster_path) || null}
              key={id}
              alt="Poster"
              onClick={() => goTo(id)}
            ></Poster>
            <Vote key={id + ' movie'}>Vote: {vote_average}</Vote>
          </FilmCard>
        ))}
      </FilmsWrapper>
    </PageWrapper>
  );
};
