import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  color: white;
  @media (max-width: 460px) {
    font-size: 2rem;
  }
`;

export const Poster = styled.img`
  width: 22vw;
  height: auto;
  margin-bottom: 1rem;
  align-self: center;
  @media (max-width: 460px) {
    width: 60vw;
  }
`;
export const DetailsWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100vw;
  height: fit-content;
  margin-bottom: 1rem;
  @media (max-width: 460px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
export const Genre = styled.span`
  color: white;
  @media (max-width: 460px) {
    font-size: 1.5rem;
  }
`;

export const Info = styled.p`
  font-size: 1.5rem;
  color: white;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Index = styled.span`
  color: red;
  font-weight: bold;
  @media (max-width: 460px) {
    font-size: 1.5rem;
  }
`;
