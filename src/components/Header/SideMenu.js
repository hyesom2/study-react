import React from 'react';
import styled from 'styled-components';
// > icons
import IconAdidasLogo from '../../assets/icons/icon_adidas_logo.png';
import IconCloseButton from '../../assets/icons/icon_button_close.svg';
import IconArrowRight2 from '../../assets/icons/icon_arrow_right2.svg';
import IconSouthKorea from '../../assets/icons/icon_SouthKorea.svg';

const Container = styled.section`
  z-index: 1999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform: translateX(-100%);
  transition: all 0.5s ease-in-out;

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 960px) {
    display: none;
  }
`;

const SideMenuHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60px;
  border-bottom: 1px solid #eee;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      display: inline-block;
      width: 50px;
      height: 32px;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .side-close {
    position: absolute;
    top: 10px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 40px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

const SideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  overflow-y: scroll;

  .side-list-top {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;

    &:last-child {
      margin-bottom: 0;
    }

    .side-list-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 45px;
      padding: 0 30px;
  
      button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
      }
  
      .men,
      .women,
      .kids {
        font-weight: bold;
      }
      a {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
  
      img {
        width: 18px;
        height: 18px;
      }
    }
  }

  .side-list-bottom {

    .side-list-item {
      padding: 0 30px;

      a {
        display: block;
        font-size: 18px;
        line-height: 24px;
        padding: 10px 0;
      }
    }
  }
`;

const SideMenuFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: 0 30px;
  border-top: 1px solid #eee;

  h3 {
    font-size: 16px;
    order: 2;
  }

  img {
    display: block;
    width: 20px;
    height: 15px;
    margin-right: 15px;
    order: 1;
  }
`;

const SideMenu = (props) => {
  return (
    <>
      <Container className={ props.sideOpen === true ? "open" : null }>
        <SideMenuHeader>
          <h1 className="logo">
            <a href="/">
              <img src={ IconAdidasLogo } alt="아디다스 로고 아이콘" />
            </a>
          </h1>
          <button type="button" className="side-close" aria-label="닫기 버튼" onClick={ props.sideMenuHandler }>
            <img src={ IconCloseButton } alt="닫기 버튼" />
          </button>
        </SideMenuHeader>
        <SideMenuWrapper>
          <ul className="side-list-top">
            <li className="side-list-item">
              <button type="button" aria-label="men 카테고리 열기 버튼">
                <a href="/" className="men">men</a>
                <img src={ IconArrowRight2 } alt="" />
              </button>
            </li>
            <li className="side-list-item">
              <button type="button" aria-label="women 카테고리 열기 버튼">
                <a href="/" className="women">women</a>
                <img src={ IconArrowRight2 } alt="" />
              </button>
            </li>
            <li className="side-list-item">
              <button type="button" aria-label="kids 카테고리 열기 버튼">
                <a href="/" className="kids">kids</a>
                <img src={ IconArrowRight2 } alt="" />
              </button>
            </li>
            <li className="side-list-item">
              <button type="button" aria-label="sports 카테고리 열기 버튼">
                <a href="/">sports</a>
                <img src={ IconArrowRight2 } alt="" />
              </button>
            </li>
            <li className="side-list-item">
              <button type="button" aria-label="brands 카테고리 열기 버튼">
                <a href="/">brands</a>
                <img src={ IconArrowRight2 } alt="" />
              </button>
            </li>
            <li className="side-list-item">
              <button type="button" aria-label="members exclusives 페이지 이동 버튼">
                <a href="/">members exclusives</a>
              </button>
            </li>
            <li className="side-list-item">
              <button type="button" aria-label="online outlet 페이지 이동 버튼">
                <a href="/">online outlet</a>
                <img src={ IconArrowRight2 } alt="" />
              </button>
            </li>
          </ul>
          <ul className="side-list-bottom">
            <li className="side-list-item">
              <a href="/" aria-label="주문조회 페이지 이동">주문조회</a>
            </li>
            <li className="side-list-item">
              <a href="/" aria-label="로그인 페이지 이동">로그인 하기</a>
            </li>
            <li className="side-list-item">
              <a href="/" aria-label="아디클럽 가입 페이지 이동">아디클럽 가입하기</a>
            </li>
            <li className="side-list-item">
              <a href="/" aria-label="도움말 페이지 이동">도움말</a>
            </li>
            <li className="side-list-item">
              <a href="/" aria-label="반품 페이지 이동">반품</a>
            </li>
            <li className="side-list-item">
              <a href="/" aria-label="adidas runners 페이지 이동">adidas Runners</a>
            </li>
            <li className="side-list-item">
              <a href="/" aria-label="earn points, get rewards 페이지 이동">EARN POINTS. GET REWARDS</a>
            </li>
            <li className="side-list-item">
              <a href="/" target="_blank" aria-label="피드백 페이지 열기">피드백</a>
            </li>
          </ul>
        </SideMenuWrapper>
        <SideMenuFooter>
          <h3>South Korea</h3>
          <img src={ IconSouthKorea } alt="태극기" />
        </SideMenuFooter>
      </Container>
    </>
  );
}

export default SideMenu;