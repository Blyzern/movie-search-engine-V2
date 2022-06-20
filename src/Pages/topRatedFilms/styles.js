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

export const CustomButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  width: 100px;
  height: 50px;
  cursor: pointer;
  :hover {
    background-color: lightblue;
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const Dropdown = styled.select`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: red;
  height: 50px;
  width: 100px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: darkred;
    border: 1px solid #c2c2c2;
  }
`;
export const DropdownOption = styled.option`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #c2c2c2;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100%;
  height: fit-content;
`;
export const FilmsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 460px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
export const FilmCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Poster = styled.img`
  width: 200px;
  margin: 1rem;
  height: auto;
  cursor: pointer;
`;
export const Vote = styled.p`
  color: white;
  font-weight: bold;
  width: 2rem;
  text-align: center;
`;
