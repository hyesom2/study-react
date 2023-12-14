import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// > components
import Banner from './Banner';
import Menu from './Menu';

const Container = styled.header`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(0);
  transition: transform 0.5s ease-in-out;

  &.hide {
    transform: translateY(-100%);
  }
`;

const Header = () => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [scrollHide, setScrollHide] = useState(false);
  
  useEffect(() => {
    (() => {
      window.addEventListener('scroll', () => setCurrentScroll(window.pageYOffset));
      if( currentScroll >= 200 ){
        setScrollHide(true);
      } else {
        setScrollHide(false);
      }
    })();
    return () => {
      window.removeEventListener('scroll', () => {
        setCurrentScroll(window.pageYOffset);
      });
    };
  });

  return (
    <>
      {
        <Container className={scrollHide === true ? "hide" : null}>
          <Banner />
          <Menu />
        </Container>
      }
    </>
  );
}

export default Header;