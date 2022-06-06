import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from './store/homeSlice';
import {
  PageContainer,
  BannerContainer,
  Banner,
} from '../../components/PageContainer/PageContainer';
import { FilmCover } from '../../components/FilmCover/FilmCover';
import { Title } from '../../components/Title/Title';
import { push } from 'redux-first-history';
import { setMovieId } from '../details/store/detailsSlice';

const baseUrlImg = process.env.REACT_APP_IMG_URL;

export const Home = () => {
  const series = useSelector((state) => state.home.series);
  const films = useSelector((state) => state.home.films);
  const dispatch = useDispatch();

  const goTo = (id) => {
    dispatch(setMovieId(id));
    dispatch(push(`/movie/${id}`));
  };
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <PageContainer>
      <BannerContainer>
        <Title>TOP WEEKLY FILMS</Title>
        <Banner>
          {films.map(({ id, poster_path }) => (
            <FilmCover
              src={baseUrlImg + poster_path}
              key={id}
              onClick={() => goTo(id)}
            />
          ))}
        </Banner>
      </BannerContainer>
      <BannerContainer>
        <Title>SERIE TV</Title>
        <Banner>
          {series.map(({ id, poster_path }) => (
            <FilmCover
              src={baseUrlImg + poster_path}
              key={id}
              onClick={() => goTo(id)}
            />
          ))}
        </Banner>
      </BannerContainer>
    </PageContainer>
  );
};
