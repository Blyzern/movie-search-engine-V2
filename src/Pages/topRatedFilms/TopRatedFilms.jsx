import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieData } from './store/topRatedSlice';
import { TopRatePage } from '../../components/TopRatePage';

export const TopRatedFilms = () => {
  const films = useSelector((state) => state.topRated.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieData());
  }, []);
  return <TopRatePage data={films} /> || '';
};
