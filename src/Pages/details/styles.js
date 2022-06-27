import styled from 'styled-components';

const desktop = 1920;
const laptop = 1366;
const smartPhone = 360;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageWrapper = styled.div`
  margin-top: 3rem;
  margin-left: 2rem;
  flexwrap: wrap;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  color: white;
  @media (max-width: ${smartPhone}px) {
    text-align: center;
    font-size: 2.3rem;
  }
`;

export const Poster = styled.img`
  width: 20rem;
  height: fit-content;
  margin-bottom: 1rem;
  margin-right: 1rem;
  @media (max-width: ${768}px) {
    width: 13rem;
    height: auto;
  }
  @media (max-width: ${smartPhone}px) {
    align-self: center;
    width: 12rem;
    height: auto;
  }
`;
export const Riproduce = styled.button`
  background-color: red;
  color: white;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  align-self: center;
  cursor: pointer;
  width: 15rem;
  height: 3rem;
  :hover {
    background-color: darkred;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  width: 100vw;
  height: fit-content;
  margin-bottom: 1rem;
  @media (max-width: ${smartPhone}px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Info = styled.p`
  font-size: 1.5rem;
  color: white;
  flex-wrap: wrap;
  overflow: hidden;
  @media (max-width: ${smartPhone}px) {
    font-size: 1.5rem;
  }
`;

export const Index = styled.span`
  color: red;
  font-weight: bold;
  @media (max-width: ${smartPhone}px) {
    font-size: 1.5rem;
  }
`;
