import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovieDetails } from './store/descriptionSlice';

export const Description = () => {
  const movieId = useSelector((state) => state.description.movieId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(movieId));
    console.log(
      '🚀 ~ file: Description.jsx ~ line 10 ~ Description ~ movieId',
      movieId
    );
  }, [dispatch]);
  return (
    <>
      <h1>Details</h1>
    </>
  );
};
