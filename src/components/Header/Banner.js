import React from 'react';
import styled from 'styled-components';
// > icons
import IconMoreDown from '../../assets/icons/icon_more_down.svg';

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: #000;
  cursor: pointer;

  .banner-title {
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 0.1em;
    line-height: 1.2;
    color: #fff;
    margin-right: 10px;
  }

  .banner-icon-more {
    position: absolute;
    top: calc((100% - 22px) / 2);
    right: 20px;
    display: block;
    width: 24px;
    height: 22px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

const Banner = () => {
  return (
    <>
      <Container id="banner" className="banner" role="banner">
        <h1 className="banner-title" aria-label="배너 내용">
          가입/로그인/배송지 입력 안내
        </h1>
        <div className="banner-icon-more" aria-label="더보기 아이콘">
          <img src={ IconMoreDown } alt="더보기 아이콘" />
        </div>
      </Container>
    </>
  );
}

export default Banner;