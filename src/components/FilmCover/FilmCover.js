import styled from 'styled-components';

const smartPhone = 360;

export const FilmCover = styled.img`
  width: 10rem;
  cursor: pointer;
  height: auto;
  margin-right: 0.3rem;
  @media (max-width: ${smartPhone}px) {
    width: 11.7 rem;
  }
`;
