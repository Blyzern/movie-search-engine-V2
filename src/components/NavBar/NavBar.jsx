import React, { useState } from 'react';
import { Nav, Nav2, ProfileImg, Logo, NavContainer, Lens } from './styles';
import { Popup } from '../Popup';
import { PageLink } from '../PageLink';
import { useEffect } from 'react';
import SvgLens from '../../Images/Lens';

export const NavBar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {}, [showPopup]);

  return (
    <NavContainer key={'NavBar'}>
      <Nav>
        <Logo
          src="https://www.ecodelcinema.com/wp-content/uploads/2022/02/Netflix-logo.jpg"
          alt="Netflix logo"
        />
        <PageLink linkRef="/" content="Home" />
        <PageLink linkRef="/TopRatedFilms" content="Top Rated" />
      </Nav>
      <Nav2>
        <SvgLens
          fill="white"
          width="50"
          height="50"
          onClick={() => handlePopup()}
        />
        {showPopup && <Popup handle={handlePopup} />}
        <PageLink linkRef="/" content="Register" />
        <ProfileImg
          src="https://www.workforcesolutionsalamo.org/wp-content/uploads/2021/04/board-member-missing-image.png"
          alt="Profile Img"
        />
      </Nav2>
    </NavContainer>
  );
};
