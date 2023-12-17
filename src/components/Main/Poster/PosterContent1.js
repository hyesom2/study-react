import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// > icons
import { ReactComponent as RightIcon } from '../../../assets/icons/icon_arrow_right.svg';
// > images
import sambaMobile from '../../../assets/images/poster/samba-mobile.gif';
import sambaPc from '../../../assets/images/poster/samba-pc.png';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 0;
  
  &.samba-mobile {
    background-image: url(${sambaMobile});
    padding-bottom: calc( 1080 / 1080 * 100%); // 종횡비: calc( 이미지세로 / 이미지가로 * 100%);
  }

  &.samba-pc {
    background-image: url(${sambaPc});
    padding-bottom: calc( 853 / 1920 * 100%);
  }
`;

const Content = styled.div`
  position: absolute;
  left: 24px;
  bottom: 20px;

  @media (min-width: 600px) {
    left: 42px;
    bottom: 40px;
  }
  @media (min-width: 960px) {
    left: 64px;
    bottom: 50%;
    transform: translateY(50%);
  }
  
  .poster-button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 0 15px;
    color: ${({theme}) => theme.colors.black};
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.white};
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${({theme}) => theme.colors.hover};
    }

    a {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 2px;
      line-height: 20px;
      text-transform: uppercase;
      margin-right: 15px;
    }

    &::after {
      position: absolute;
      top: 3px;
      left: 3px;
      content: "";
      width: 100%;
      height: 100%;
      border: 1px solid ${({theme}) => theme.colors.white};
    }
  }
`;

const PosterContent1 = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);
  const widthSizeHandle = () => {
    setWidthSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', widthSizeHandle);
    return() => {
      window.removeEventListener('resize', widthSizeHandle);
    }
  }, []);

  return (
    <Container id="PosterContent1" className={ widthSize >= 960 ? "samba-pc" : "samba-mobile"}>
      <Content>
        <button className="poster-button">
          <a href="/">구매하기</a>
          <RightIcon width="24" height="24" fill="#000" />
        </button>        
      </Content>
    </Container>
  );
}

export default PosterContent1;