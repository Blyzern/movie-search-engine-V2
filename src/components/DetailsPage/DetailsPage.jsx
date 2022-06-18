import React from 'react';
import {
  PageWrapper,
  Poster,
  Title,
  DetailsWrapper,
  Info,
  Index,
  InfoWrapper,
  Riproduce,
} from './styles';
import { fetchPoster } from '../../utils/FetchPoster';

export const DetailsPage = ({
  title,
  image,
  overview,
  genre = [],
  numberOfEpisodes,
  numberOfSeasons,
  runtime,
  voteAverage,
}) => {
  return (
    <PageWrapper>
      {<Title>{title || 'no title'}</Title>}
      <DetailsWrapper>
        {<Poster src={fetchPoster(image) || 'none'} alt="Film Poster" />}
        <InfoWrapper>
          {
            <Info>
              <Index>Genres: </Index>
              {genre.map(
                ({ name }, index) =>
                  name + (index !== genre.length - 1 ? ', ' : '. ')
              ) || 'No genres'}
            </Info>
          }
          {numberOfEpisodes !== undefined && (
            <Info>
              <Index>Number of Episodes: </Index> {numberOfEpisodes}
            </Info>
          )}
          {numberOfSeasons !== undefined && (
            <Info>
              <Index>Number of Seasons: </Index>
              {numberOfSeasons}
            </Info>
          )}
          {runtime !== undefined && (
            <Info>
              <Index>Runtime: </Index> {runtime} minutes
            </Info>
          )}
          <Info>
            <Index>Vote Average: </Index> {voteAverage}
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
