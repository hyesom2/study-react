import React from 'react';
import styled from 'styled-components';
// > icons
import IconArrowRight from '../../../assets/icons/icon_arrow_right.svg';
// > images
import MobileBg from '../../../assets/images/poster1_mobile.png';
import PcBg from '../../../assets/images/poster1_pc.png';

const Container = styled.section`
  position: relative;
  width : 100%;
	height : 0;
	padding-bottom : calc(800 / 600 * 100%);
  min-height: 30vh;

  @media (min-width: 960px) {
    padding-bottom : calc(853 / 1920 * 100%);
  }
`;

const BackImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url('${MobileBg}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  @media (min-width: 960px) {
    background-image: url('${PcBg}');
    background-size: contain;
  }
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px 15px;
  
  .content-top {
    color: #fff;
    margin-bottom: 30px;

    h1 {
      font-size: 30px;
      font-weight: bold;
      line-height: 32px;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
    }
  }

  .content-bottom {
    margin-bottom: 15px;

    button {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 133px;
      height: 50px;
      padding: 0 15px;
      background-color: #fff;

      &::after {
        position: absolute;
        top: 3px;
        left: 3px;
        content: '';
        width: 133px;
        height: 50px;
        border: 1px solid #fff;
      }

      a {
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        letter-spacing: 2px;
        white-space: nowrap;
        margin-right: 10px;
      }

      img {
        display: block;
        width: 40px;
        height: 20px;
      }
    }
  }

  @media (min-width: 600px) {
    width: 50%;
  }
  @media (min-width: 960px) {
    justify-content: center;
    padding: 40px 15px 60px 15px;
    width: 420px;

    .content-top {
      h1 {
        font-size: 40px;
        line-height: 40px;
      }
    }
  }
`;

const Poster1 = () => {
  return (
    <>
      <Container id="Poster1">
        <BackImg className="poster-background-image" />
        <Content className="content">
          <div className="content-top">
            <h1>THE 2024 COLLECTION</h1>
            <p>Chapter 1: 근본에 충실한 아디다스 바스켓볼 컬렉션. 남다른 안목의 애슬리트를 위해 새롭게 돌아오다.​</p>
          </div>
          <div className="content-bottom">
            <button type="button">
              <a href="/">구매하기</a>
              <img src={ IconArrowRight } alt="" />
            </button>
          </div>
        </Content>
      </Container>
    </>
  );
}

export default Poster1;