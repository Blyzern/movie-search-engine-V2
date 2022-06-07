import React from 'react';
import {
  PageWrapper,
  Poster,
  Title,
  DetailsWrapper,
  Info,
  Genre,
  Index,
  InfoWrapper,
} from './styles';
import { fetchPoster } from '../../utils/FetchPoster';
export const DetailsPage = ({ title, image, overview, genre = [] }) => {
  return (
    <PageWrapper>
      {<Title>{title || 'no title'}</Title>}
      <DetailsWrapper>
        {<Poster src={fetchPoster(image) || 'none'} alt="Film Poster" />}
        <InfoWrapper>
          {
            <Genre>
              <Index>Genres: </Index>
              {genre.map(
                ({ name }, index) =>
                  name + (index != genre.length - 1 ? ', ' : '. ')
              ) || 'No genres'}
            </Genre>
          }
          {
            <Info>
              <Index>INFO:</Index> {overview || 'No info'}
            </Info>
          }
        </InfoWrapper>
      </DetailsWrapper>
    </PageWrapper>
  );
};
