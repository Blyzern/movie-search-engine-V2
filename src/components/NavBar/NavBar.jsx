import React, { useState } from 'react';
import { Nav, Nav2, Logo, NavContainer } from './styles';
import { SearchPopup } from '../SearchPopup';
import { PageLink } from '../PageLink';
import { useEffect } from 'react';
import { pathnameSelector } from '../../Pages/Home/store/homeSelectors';
import SvgLens from '../../Images/Lens';
import { useSelector } from 'react-redux';

const homelink = '/';

export const NavBar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const pathname = useSelector(pathnameSelector);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {}, [showPopup]);

  const isCurrentPage = (href) => href === pathname;

  return (
    <NavContainer key={'NavBar'}>
      <Nav>
        <Logo
          src="https://www.ecodelcinema.com/wp-content/uploads/2022/02/Netflix-logo.jpg"
          alt="Netflix logo"
        />
        <PageLink
          linkRef={homelink}
          content="Home"
          selected={() => isCurrentPage(homelink)}
        />
        <PageLink linkRef="/TopRatedFilms" content="Top Rated" />{' '}
        {/*Da sistemare*/}
      </Nav>
      <Nav2>
        <SvgLens
          fill="white"
          width="50"
          height="50"
          onClick={() => handlePopup()}
        />
        {showPopup && (
          <SearchPopup handle={handlePopup} setShowPopup={setShowPopup} />
        )}
      </Nav2>
    </NavContainer>
  );
};
