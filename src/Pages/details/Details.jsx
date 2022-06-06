import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovieDetails } from './store/detailsSlice';
import { Title } from '../../components/Title/Title';
import { PageContainer } from '../../components/PageContainer/PageContainer';

export const Details = () => {
  const movieId = useSelector((state) => state.description.movieId);
  const title = useSelector((state) => state.description.title);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, []);
  return (
    <PageContainer>
      <Title>{title}</Title>
    </PageContainer>
  );
};
