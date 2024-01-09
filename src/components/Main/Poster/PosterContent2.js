import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// > icons
import { ReactComponent as RightIcon } from '../../../assets/icons/icon_arrow_right.svg';
// > images
import football_Mobile from '../../../assets/images/poster/football_mobile.png';
import football_Tablet from '../../../assets/images/poster/football_tablet.png';
import football_Pc from '../../../assets/images/poster/football_pc.png';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 0;
  
  &.football-mobile {
    background-image: url(${football_Mobile});
    padding-bottom: calc( 840 / 600 * 100%); // 종횡비: calc( 이미지세로 / 이미지가로 * 100%);
  }

  &.football-tablet {
    background-image: url(${football_Tablet});
    padding-bottom: calc( 960 / 960 * 100%);
  }

  &.football-pc {
    background-image: url(${football_Pc});
    padding-bottom: calc( 853 / 1920 * 100%);
  }
`;

const Content = styled.div`
  position: absolute;
  left: 24px;
  bottom: 20px;

  .content-top {
    margin-bottom: 30px;
  }

  .content-title {
    color: ${({theme}) => theme.colors.white};
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 32px;
    text-transform: uppercase;
    text-wrap: balance;
    margin-bottom: 10px;
  }

  .content-summary {
    color: ${({theme}) => theme.colors.white};
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 24px;
    text-align: left;
    text-transform: uppercase;
    text-wrap: balance;
  }
  
  .content-button {
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
      left: 2px;
      content: "";
      width: 100%;
      height: 100%;
      border: 1px solid ${({theme}) => theme.colors.white};
    }
  }

  @media (min-width: 600px) {
    left: 64px;
    bottom: 40px;
  }
  @media (min-width: 960px) {
    bottom: 50%;
    transform: translateY(50%);

    .content-title {
      font-size: 40px;
    }
  }
`;

const PosterContent2 = () => {
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
    <Container 
      id="PosterContent2" 
      className={ 
        widthSize >= 960 
        ? 
        "football-pc" 
        :
          widthSize >= 600
          ?
          "football-tablet"
          :
          "football-mobile"
        }>
      <Content>
        <div className="content-top">
          <h1 className="content-title">ORIGINALS FOOTBALL ICONS​</h1>
          <p className="content-summary">희미해진 적 없는 클래식, 영원한 선명함으로</p>
        </div>
        <button className="content-button">
          <a href="/">구매하기</a>
          <RightIcon width="24" height="24" fill="#000" />
        </button>        
      </Content>
    </Container>
  );
}

export default PosterContent2;