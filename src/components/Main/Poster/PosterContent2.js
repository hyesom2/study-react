import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
// > icons
import { ReactComponent as RightIcon } from '../../../assets/icons/icon_arrow_right.svg';
import { ReactComponent as VideoPause } from '../../../assets/icons/icon_video_pause.svg';
import { ReactComponent as VideoPlay } from '../../../assets/icons/icon_video_play.svg';
// > images
import myshelterLogo from '../../../assets/images/poster/myshelter-logo.png';
// > video
import posterVideoMobile from '../../../assets/images/poster/myshelter-mobile.mp4';
import posterVideoPc from '../../../assets/images/poster/myshelter-pc.mp4';

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;

  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    z-index: 0;
  }
`;

const VideoController = styled.div`
  z-index: 99;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  padding: 20px 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: auto;
  height: 100%;
  padding: 20px 32px;

  .content-logo {
    display: block;
    width: 200px;
    height: 130px;
    margin-bottom: 15px;
  }

  .content-title {
    color: ${({theme}) => theme.colors.white};
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 32px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .content-summary {
    color: ${({theme}) => theme.colors.white};
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 24px;
    margin-bottom: 30px;
    text-wrap: balance;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.white};
    padding: 5px 15px;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      color: ${({theme}) => theme.colors.black};
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 2px;
      line-height: 20px;
      text-transform: uppercase;
      margin-right: 10px;
    }
  }
`;

const PosterContent2 = () => {
  const videoRef = useRef(null);
  const [pause, setPause] = useState(false);
  const playHandler = () => {
    setPause(!pause);
    if( pause === false ) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const [widthSize, setWidthSize] = useState(window.innerWidth);
  const widthSizeHandle = () => {
    setWidthSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', widthSizeHandle);
    return() => {
      window.removeEventListener('resize', widthSizeHandle);
    };
  });

  return (
    <Container>
      <VideoWrapper>
        {/* windowSize를 responsive 적용되게 (현재 새로고침으로밖에 안됨) */}
        <video ref={videoRef} autoPlay loop playsInline muted>
          <source src={ widthSize >= 960 ? posterVideoPc : posterVideoMobile } type="video/mp4" />
        </video>
      </VideoWrapper>
      <VideoController onClick={ playHandler }>
        {
          pause === false
          ?
          <VideoPause width={44} height={44} fill="#fff" />
          :
          <VideoPlay width={44} height={44} fill="#fff" />
        }
      </VideoController>
      <Content>
        <img src={ myshelterLogo } alt="logo" className="content-logo"/>
        <h2 className="content-title">나의 겨울에 반하다</h2>
        <p className="content-summary">
          샐 틈 없는 3중 단열, 마이쉘터로 더 포근하게
        </p>
        <ButtonWrapper>
          <button type="button">
            <a href="/">구매하기</a>
            <RightIcon width={24} height={24} fill="#000" />
          </button>
          <button type="button">
            <a href="/">여성 제품 더 알아보기</a>
            <RightIcon width={24} height={24} fill="#000" />
          </button>
        </ButtonWrapper>
      </Content>
    </Container>
  );
}

export default PosterContent2;