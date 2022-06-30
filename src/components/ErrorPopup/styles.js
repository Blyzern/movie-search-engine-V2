import styled from 'styled-components';

export const ErrorPopupWrapper = styled.div`
  margin-top: 2.4rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ErrorPopupBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: fit-content;
  max-width: 768px;
  height: fit-content;
  background-color: rgb(20, 20, 20);
  border-radius: 5px;
  box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.2),
    0 6px 20px 0 rgba(255, 255, 255, 0.19);
  @media (max-width: 420px) {
    max-width: 280px;
    max-height: 80%;
    overflow: auto;
  }
`;

export const ErrorTxt = styled.p`
  color: white;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;
export const CloseButton = styled.button`
  position: absolute;
  text-weight: bold;
  color: black;
  width: 2rem;
  height: 2rem;
  right: 0;
  top: 0;
  border-radius: 50%;
  width: 2rem;
  cursor: pointer;
  z-index: 100;
  @media (max-width: 420px) {
  }
`;
