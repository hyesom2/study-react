import React from 'react';
import styled, { keyframes } from 'styled-components';
// > icons
import IconMenu from '../../assets/icons/icon_menu_mobile.svg';
import IconHeart from '../../assets/icons/icon_heart.svg';
import IconAdidasLogo from '../../assets/icons/icon_adidas_logo.svg';
import IconPerson from '../../assets/icons/icon_person.svg';
import IconSearch from '../../assets/icons/icon_search.svg';
import IconBasket from '../../assets/icons/icon_shopping_basket.svg';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
  
  @media (min-width: 960px) {
    padding: 0 40px;
  }
`;

const HeaderTop = styled.div`
  display: none;

  ul {
    display: flex;
    justify-content: flex-end;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 32px;
    padding: 0 10px;

    a {
      font-size: 12px;
    }
  }

  @media (min-width: 960px) {
    display: block;
  }
`;

const alertMove = keyframes`
  0% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
`;
const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;

  .header-bottom-left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .header-bottom-left,
  .header-bottom-right {
    button, a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
    }

    img {
      display: block;
      width: 24px;
      height: 26px;
    }
  }

  .header-bottom-left,
  .header-bottom-center {
    flex-grow: 1;
  }
  
  .header-bottom-center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .header-bottom-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button.user {
      position: relative;
    }

    span {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      background-color: #ffd200;
      border-radius: 50%;
      font-size: 12px;
      font-weight: bold;
      opacity: 0.9;
      animation: ${alertMove} 0.5s linear infinite;
    }
  }

  @media (min-width: 600px) {
    .header-bottom-left,
    .header-bottom-right {
      flex-grow: 1;
    }
  }

  @media (min-width: 960px) {
    display: none;
  }
`;

const Menu = () => {
  return (
    <>
      <Container id="header" className="header">
        <HeaderTop className="header-top pc-only">
          {/* pc-only, tablet-only, mobile-only 등 global css 만들기 */}
          <ul>
            <li aria-label="도움말 이동">
              <a href="/">도움말</a>
            </li>
            <li aria-label="주문 및 반품 이동">
              <a href="/">주문 및 반품</a>
            </li>
            <li aria-label="회원가입 이동">
              <a href="/">아디클럽 가입하기</a>
            </li>
          </ul>
        </HeaderTop>
        <HeaderBottom className="header-bottom">
          <div className="header-bottom-left">
            <button type="button" aria-label="메뉴 열기">
              <img src={ IconMenu } alt="모바일 메뉴바 아이콘" />
            </button>
            <a href="/" aria-label="관심목록으로 이동">
              <img src={ IconHeart } alt="관심 목록 아이콘" />
            </a>
          </div>
          <div className="header-bottom-center">
            <img src={ IconAdidasLogo } alt="아디다스 로고 아이콘" />
          </div>
          <div className="header-bottom-right">
            <button type="button" className="user" aria-label="마이 메뉴로 이동">
              <img src={ IconPerson } alt="아디클럽" aria-label="마이 메뉴 아이콘"/>
              <span aria-label="알림">1</span>
            </button>
            <button type="button" aria-label="검색창 열기">
              <img src={ IconSearch } alt="검색창" />
            </button>
            <button type="button" aria-label="장바구니 이동">
              <img src={ IconBasket } alt="장바구니" />
            </button>
          </div>
        </HeaderBottom>
      </Container>
    </>
  );
}

export default Menu;