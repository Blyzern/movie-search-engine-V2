import styled from 'styled-components';

export const CloseButton = styled.button`
  position: absolute;
  text-weight: bold;
  color: black;
  width: 2rem;
  height: 2rem;
  right: calc(0%);
  border-radius: 50%;
  width: 2rem;
  cursor: pointer;
  z-index: 100;
  @media (max-width: 360px) {
  }
`;

export const SearchForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Radio = styled.input`
  width: 2rem;
  margin-top: 1rem;
  color: white;
  transform: scale(1.5);
`;

export const SearchBar = styled.input`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 80%;
  height: 1rem;
  border-radius: 5px;
  border: 1px solid black;
`;

export const InputWrapper = styled.div`
  height: fit-content;
`;

export const Label = styled.label`
  color: white;
  font-weight: bold;
`;

export const PopupWrapper = styled.div`
  position: fixed;
  top: 5%;
  left: 40%;
  width: 400px;
  height: fit-content;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  @media (max-width: 360px) {
    left: 0;
    width: 100%;
  }
`;

export const PopupBox = styled.div`
  position: relative;
  width: 80%;
  height: 300px;
  display: flex;
  justify-content: center;
  background-color: rgb(20, 20, 20);
  border-radius: 5px;
  margin-bottom: 1rem;
  overflow: auto;
  @media (max-width: 360px) {
    width: 90%;
  }
`;
