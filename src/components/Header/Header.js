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
  const [scrollHide, setScrollHide] = useState(false);

  const wheelHandler = (e) => {
    if (e.deltaY < 0) {
      setScrollHide(false);
    } else if (e.deltaY > 0) {
      setScrollHide(true);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', wheelHandler);
    return () => {
      window.removeEventListener('wheel', wheelHandler);
    };
  }, []);

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