import styled from 'styled-components';

export const NavContainer = styled.header`
  background-color: black;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: auto;
  @media (max-width: 460px) {
    overflow: hidden;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Nav2 = styled.nav`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ProfileImg = styled.img`
  margin-left: 1rem;
  width: 3rem;
`;

export const Logo = styled.img`
  width: 0;
  @media (min-width: 768px) {
    width: 100px;
  }
`;
