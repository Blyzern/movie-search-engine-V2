import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: fit-content;
  height: fit-content;
`;

export const OpenButton = styled.button`
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 6rem;
  height: 2rem;
  background-color: #141414;
  margin: 0.5rem;
  color: white;
  font-size: 1rem;
  box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.2),
    0 6px 20px 0 rgba(255, 255, 255, 0.19);
  &:hover {
    background-color: #404040;
  }
`;

export const SelectButton = styled.button`
  cursor: pointer;
  color: ${(props) => (props.remove ? 'red' : 'white')};
  text-align: center;
  font-size: 1.2rem;
  margin: 0.5rem;
  height: 2rem;
  border: none;
  size: 10rem;
  background-color: #141414;
  &:hover {
    background-color: #404040;
  }
`;

export const PopupWrapper = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  border: 2px solid #ccc;
  position: relative;
  width: 25vw;
  min-width: 160px;
  height: fit-content;
  box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.2),
    0 6px 20px 0 rgba(255, 255, 255, 0.19);
`;

export const Popup = styled.div`
  display: flex;
  flex-direction: column;
`;
