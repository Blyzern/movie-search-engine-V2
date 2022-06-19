import React, { useState } from 'react';
import { Nav, Nav2, ProfileImg, Logo, NavContainer, Lens } from './styles';
import { Popup } from '../Popup';
import { PageLink } from '../PageLink';
import { useEffect } from 'react';

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
        <PageLink linkRef="/Home" content="Home" />
        <PageLink linkRef="/TopRatedFilms" content="Top Rated" />
      </Nav>
      <Nav2>
        <Lens
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Id0WPIw6m-tQYT1E_xaPA6TmMBJnAUVQmw&usqp=CAU"
          onClick={() => handlePopup(true)}
        ></Lens>
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
