import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from './store/homeSlice';
import { isEmpty } from 'lodash';

import {
  Title,
  FilmCover,
  PageContainer,
  BannerContainer,
  Banner,
  LoaderContainer,
} from './styles';

import { push } from 'redux-first-history';
import { setIsSerie, setMovieId } from '../details/store/detailsSlice';
import { fetchPoster } from '../../utils/FetchPoster';
import { loadingSelector } from './store/homeSelectors';
import PulseLoader from 'react-spinners/PulseLoader';
import { nanoid } from '@reduxjs/toolkit';

export const Home = () => {
  const series = useSelector((state) => state.home.series);
  const films = useSelector((state) => state.home.films);
  const isLoading = useSelector(loadingSelector);
  const dispatch = useDispatch();

  const goTo = (id) => {
    dispatch(setMovieId(id));
    dispatch(setIsSerie(false));
    dispatch(push(`/movie/${id}`));
  };
  const goToSerie = (id) => {
    dispatch(setMovieId(id));
    dispatch(setIsSerie(true));
    dispatch(push(`/tv/${id}`));
  };
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return isLoading ? (
    <LoaderContainer>
      <Title>Loading...</Title>
      <PulseLoader loading={isLoading} color="red" size={25} />
    </LoaderContainer>
  ) : (
    <PageContainer>
      <BannerContainer>
        <Title>SERIE TV</Title>
        <Banner>
          {series.map(({ id, poster_path }) => (
            <FilmCover
              src={(!isEmpty(poster_path) && fetchPoster(poster_path)) || null}
              key={id + nanoid()}
              onClick={() => goToSerie(id)}
            />
          ))}
        </Banner>
      </BannerContainer>
      <BannerContainer>
        <Title>TOP WEEKLY FILMS</Title>
        <Banner>
          {films.map(({ id, poster_path }) => (
            <FilmCover
              src={(!isEmpty(poster_path) && fetchPoster(poster_path)) || null}
              key={id + nanoid()}
              onClick={() => goTo(id)}
            />
          ))}
        </Banner>
      </BannerContainer>
    </PageContainer>
  );
};
