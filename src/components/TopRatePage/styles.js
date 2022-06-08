import styled from 'styled-components';

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

export const PageWrapper = styled.div``;
export const FilmsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const Poster = styled.img``;
export const Vote = styled.p`
  color: red;
  width: 1.5rem;
`;
