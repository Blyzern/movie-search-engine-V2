import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovieDetails } from './store/detailsSlice';
import { DetailsPage } from '../../components/DetailsPage';

export const Details = () => {
  const movieId = useSelector((state) => state.description.movieId);

  const {
    title,
    name,
    poster_path,
    overview,
    genres,
    number_of_episodes,
    number_of_seasons,
    runtime,
    vote_average,
  } = useSelector((state) => state.description.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, []);

  return (
    <DetailsPage
      key={movieId}
      title={title || name}
      image={poster_path}
      overview={overview}
      genre={genres}
      numberOfEpisodes={number_of_episodes}
      numberOfSeasons={number_of_seasons}
      runtime={runtime}
      voteAverage={vote_average}
    />
  );
};
