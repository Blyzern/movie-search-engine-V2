import React from 'react';
import { Nav, Nav2, ProfileImg, Logo, NavContainer } from './styles';
import { PageLink } from '../PageLink';

export const NavBar = () => {
  return (
    <NavContainer key={'NavBar'}>
      <Nav>
        <Logo
          src="https://www.ecodelcinema.com/wp-content/uploads/2022/02/Netflix-logo.jpg"
          alt="Netflix logo"
        />
        <PageLink linkRef="/Home" content="Home Page" />
        <PageLink linkRef="/TopRated" content="Top Rated Films" />
      </Nav>
      <Nav2>
        <PageLink linkRef="/" content="Register" />
        <ProfileImg
          src="https://www.workforcesolutionsalamo.org/wp-content/uploads/2021/04/board-member-missing-image.png"
          alt="Profile Img"
        />
      </Nav2>
    </NavContainer>
  );
};
