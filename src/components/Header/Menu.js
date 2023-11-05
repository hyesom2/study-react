import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
// > icons
import IconMenu from '../../assets/icons/icon_menu_mobile.svg';
import IconHeart from '../../assets/icons/icon_heart.svg';
import IconAdidasLogo from '../../assets/icons/icon_adidas_logo.png';
import IconPerson from '../../assets/icons/icon_person.svg';
import IconSearch from '../../assets/icons/icon_search.svg';
import IconBasket from '../../assets/icons/icon_shopping_basket.svg';
// > component
import SideMenu from './SideMenu';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
  border-bottom: 1px solid #eee;
  
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
const HeaderBottomMobile = styled.div`
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

    img {
      display: block;
      width: 50px;
      height: 32px;
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

const HeaderBottomPc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  
  .header-bottom-left {
    flex-grow: 1;

    h1 {
      position: relative;
      width: 60px;
      height: 38px;
    }

    img {
      position: absolute;
      top: -15px;
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }

  .header-bottom-center {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    flex-grow: 1;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 48px;
      padding: 0 10px;
      text-transform: uppercase;

      a {
        font-size: 16px;
        font-weight: bold;
        line-height: 22px;
      }

      a.sports,
      a.brands {
        font-weight: 400;
      }
    }
  }

  .header-bottom-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
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

    .search-form {
      position: relative;
      display: flex;

      input {
        max-width: 230px;
        height: 32px;
        background-color: #eceff1;
        border: 1px solid #eceff1;
        font-size: 14px;
        color: #000;
        padding: 0 35px 0 10px;
        transition: all 1s ease-in-out;
      }
      input::placeholder {
        color: #000;
      }
      input:focus {
        outline: 1px solid #808080;
      }

      img {
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }

    .my-menu {
      position: relative;

      span {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        min-width: 22px;
        height: 22px;
        background-color: #ffd200;
        border-radius: 50%;
        font-size: 12px;
        font-weight: bold;
        opacity: 0.9;
        animation: ${alertMove} 0.5s linear infinite;
      }
    }
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

const Menu = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const sideMenuHandler = () => {
    setSideOpen(!sideOpen);
  };

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
        <HeaderBottomMobile className="header-bottom header-bottom-mobile">
          <div className="header-bottom-left">
            <button type="button" aria-label="메뉴 열기" onClick={ sideMenuHandler }>
              <img src={ IconMenu } alt="모바일 메뉴바 아이콘" />
            </button>
            <a href="/" aria-label="관심목록으로 이동">
              <img src={ IconHeart } alt="관심목록 아이콘" />
            </a>
          </div>
          <div className="header-bottom-center">
            <img src={ IconAdidasLogo } alt="아디다스 로고 아이콘" />
          </div>
          <div className="header-bottom-right">
            <button type="button" className="user" aria-label="마이메뉴로 이동">
              <img src={ IconPerson } alt="아디클럽" aria-label="마이메뉴 아이콘"/>
              <span aria-label="알림">1</span>
            </button>
            <button type="button" aria-label="검색창 열기">
              <img src={ IconSearch } alt="검색 아이콘" />
            </button>
            <button type="button" aria-label="장바구니 이동">
              <img src={ IconBasket } alt="장바구니 아이콘" />
            </button>
          </div>
        </HeaderBottomMobile>
        <HeaderBottomPc className="header-bottom header-bottom-pc">
          <div className="header-bottom-left">
            <h1 className="logo">
              <img src={ IconAdidasLogo } alt="아디다스 로고 아이콘" />
            </h1>
          </div>
          <ul className="header-bottom-center global-menu-list">
            <li className="global-menu-item">
              <a href="/">men</a>
            </li>
            <li className="global-menu-item">
              <a href="/">women</a>
            </li>
            <li className="global-menu-item">
              <a href="/">kids</a>
            </li>
            <li className="global-menu-item">
              <a href="/" className="sports">sports</a>
            </li>
            <li className="global-menu-item">
              <a href="/" className="brands">brands</a>
            </li>
            <li className="global-menu-item">
              <a href="/">online outlet</a>
            </li>
          </ul>
          <div className="header-bottom-right">
            <form className="search-form">
              <input type="text" placeholder="Search" />
              <img src={ IconSearch } alt="검색 아이콘" />
            </form>
            <button type="button" className="my-menu">
              <img src={ IconPerson} alt="마이메뉴 아이콘" />
              <span aria-label="알림">1</span>
            </button>
            <button type="button" className="wish">
              <img src={ IconHeart } alt="관심목록 아이콘" />
            </button>
            <button type="button" className="cart">
              <img src={ IconBasket } alt="장바구니 아이콘" />
            </button>
          </div>
        </HeaderBottomPc>
      </Container>
      <SideMenu sideOpen={ sideOpen } sideMenuHandler={ sideMenuHandler } />
    </>
  );
}

export default Menu;