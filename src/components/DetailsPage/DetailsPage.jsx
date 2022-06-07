import React from 'react';
import {
  PageWrapper,
  Poster,
  Title,
  DetailsWrapper,
  Info,
  Genre,
  Index,
} from './styles';
import { fetchPoster } from '../../utils/FetchPoster';
export const DetailsPage = ({ title, image, overview, genre }) => {
  return (
    <PageWrapper>
      {<Title>{title || 'no title'}</Title>}
      <DetailsWrapper>
        {<Poster src={fetchPoster(image) || 'none'} alt="Film Poster" />}
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
      </DetailsWrapper>
    </PageWrapper>
  );
};
