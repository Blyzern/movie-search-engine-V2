import styled from 'styled-components';

const smartPhone = 360;
export const Title = styled.h1`
  color: white;
  font-size: 2rem;
  padding-left: 1.5rem;
  font-weight: bold;
  font-family: Bebas Neue;
  @media (max-width: ${smartPhone}px) {
    font-size: 1.3rem;
  }
`;
