import styled from 'styled-components';

export const CloseButton = styled.button`
  position: fixed;
  text-weight: bold;
  color: black;
  width: 2rem;
  height: 2rem;
  right: calc(25% - 4.4rem);
  border-radius: 50%;
  width: 2rem;
  cursor: pointer;
  z-index: 100;
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
  position: absolute;
  top: 10%;
  background-color: rgba(0, 0, 0, 0.5);
  left: calc(50% + 2.7rem);
  width: 30%;
  height: 75vh;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;

export const PopupBox = styled.div`
  position: relative;
  min-height: 300px;
  background-color: rgb(20, 20, 20);
  border-radius: 5px;
  width: 80%;
  margin-bottom: 1rem;
  overflow: auto;
`;
