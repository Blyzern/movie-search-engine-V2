import styled from 'styled-components';

const smartPhone = 360;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  flex-direction: column;
  justify-content: space-around;
  allign-items: center;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const BannerContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-right: 3rem;
  padding-bottom: 1rem;
`;

export const Banner = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

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

export const FilmCover = styled.img`
  width: 10rem;
  cursor: pointer;
  height: auto;
  margin-right: 0.3rem;
  @media (max-width: ${smartPhone}px) {
    width: 11.7 rem;
  }
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.3);
    margin-left: 0.3rem;
  }
`;
