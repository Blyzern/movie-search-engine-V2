import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  background-color: #141414;
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  margin-top: 2rem;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
