import styled from 'styled-components';

export const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  padding-left: 1rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 360px) {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;
