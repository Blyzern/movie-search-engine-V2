import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovieDetails } from './store/detailsSlice';
import { DetailsPage } from '../../components/DetailsPage';

export const Details = () => {
  const movieId = useSelector((state) => state.description.movieId);
  const isLoading = useSelector((state) => state.description.isLoading);

  const { title, poster_path, overview, genres } = useSelector(
    (state) => state.description.data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, []);

  return (
    <DetailsPage
      key={movieId}
      title={title}
      image={poster_path}
      overview={overview}
      genre={genres}
    />
  );
};
