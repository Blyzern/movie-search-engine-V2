import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovieDetails } from './store/detailsSlice';
import {
  isLoadingSelector,
  movieIdSelector,
  dataSelector,
} from './store/detailsSelector';
import { fetchPoster } from '../../utils/FetchPoster';
import { isEmpty } from 'lodash';
import {
  PageWrapper,
  Poster,
  Title,
  DetailsWrapper,
  Info,
  Index,
  InfoWrapper,
  Riproduce,
  LoaderContainer,
} from './styles';
import PulseLoader from 'react-spinners/PulseLoader';

export const Details = () => {
  const movieId = useSelector(movieIdSelector);
  const isLoading = useSelector(isLoadingSelector);
  const {
    title,
    name,
    poster_path,
    overview,
    genres = [],
    number_of_episodes,
    number_of_seasons,
    runtime,
    vote_average,
    release_date,
    production_companies = [],
    production_countries = [],
  } = useSelector(dataSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, [movieId]);

  return isLoading ? (
    <LoaderContainer>
      <Title>Loading...</Title>
      <PulseLoader loading={isLoading} color="red" size={25} />
    </LoaderContainer>
  ) : (
    <PageWrapper>
      {<Title>{title || name}</Title>}
      <DetailsWrapper>
        {<Poster src={fetchPoster(poster_path) || 'none'} alt="Film Poster" />}
        <InfoWrapper>
          {
            <Info>
              <Index>Genres: </Index>
              {genres.map(
                ({ name }, index) =>
                  name + (index !== genres.length - 1 ? ', ' : '. ')
              ) || 'No genres'}
            </Info>
          }
          {!isEmpty(release_date) && (
            <Info>
              <Index>Release Date: </Index> {release_date || 'No release date'}
            </Info>
          )}
          <Info>
            <Index>Production Companies: </Index>
            {production_companies.map(
              ({ name }, i) =>
                name + (i !== production_companies.length - 1 ? ', ' : '. ')
            ) || 'No production companies'}
          </Info>
          <Info>
            <Index>Production Countries: </Index>
            {production_countries.map(
              ({ name }, i) =>
                name + (i !== production_countries.length - 1 ? ', ' : '. ')
            ) || 'No production countires'}
          </Info>
          {!isEmpty(number_of_episodes) && (
            <Info>
              <Index>Number of Episodes: </Index> {number_of_episodes}
            </Info>
          )}
          {!isEmpty(number_of_seasons) && (
            <Info>
              <Index>Number of Seasons: </Index>
              {number_of_seasons}
            </Info>
          )}
          {!isEmpty(runtime) && (
            <Info>
              <Index>Runtime: </Index> {runtime} minutes
            </Info>
          )}
          <Info>
            <Index>Vote Average: </Index> {vote_average}
          </Info>

          <Info>
            <Index>INFO:</Index> {overview || 'No info'}
          </Info>

          <Riproduce>Riproduce</Riproduce>
        </InfoWrapper>
      </DetailsWrapper>
    </PageWrapper>
  );
};
