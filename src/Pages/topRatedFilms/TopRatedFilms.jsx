import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const TopRatedFilms = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieData());
  }, []);
  return;
};
