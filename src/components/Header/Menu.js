import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
// > icons
import { ReactComponent as IconMenu } from '../../assets/icons/icon_menu_mobile.svg';
import { ReactComponent as IconHeart } from '../../assets/icons/icon_heart.svg';
import { ReactComponent as IconAdidasLogo } from '../../assets/icons/icon_adidas_logo.svg';
import { ReactComponent as IconPerson } from '../../assets/icons/icon_person.svg';
import { ReactComponent as IconSearch } from '../../assets/icons/icon_search.svg';
import { ReactComponent as IconBasket } from '../../assets/icons/icon_shopping_basket.svg';
// > component
import SideMenu from './SideMenu';
// > responsive
import { Mobile, Pc } from '../../Responsive';

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

const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  padding: 0 10px;
  background-color: ${({theme}) => theme.colors.white};
  border-bottom: 1px solid ${({theme}) => theme.colors.border};
  
  @media (min-width: 960px) {
    height: 100%;
    padding: 0 40px;
  }
`;

const HeaderTop = styled.div`
  width: 100%;
  height: 32px;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 10px;
  }

  a {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 16px;
  }
`;

const HeaderBottomMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  .header-logo {
    order: 2;
    display: flex;
    flex-grow: 1;
    position: relative;
    top: 3px;
  }
  
  .mobile-menu-left {
    order: 1;
    display: flex;
    flex-grow: 2;
    width: 100%;
  }
  
  .mobile-menu-right {
    order: 3;
    display: flex;
    justify-content: flex-end;
    flex-grow: 2;
    width: 100%;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
  }

  li.user {
    position: relative;

    span {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content:  center;
      align-items: center;
      width: 22px;
      height: 22px;
      background-color: ${({theme}) => theme.colors.alert};
      border-radius: 50%;
      font-size: 12px;
      font-weight: 700;
      opacity: 0.9;
      animation: ${alertMove} 0.5s linear infinite;
    }
  }
`;

const HeaderBottomPc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;

  .header-logo {
    position: relative;
    top: -10px;
    flex-grow: 2;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0 10px;
    flex-grow: 1;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 10px;

    a {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1.87px;
      line-height: 16px;
      text-transform: uppercase;

      &.sports,
      &.brands {
        font-weight: 400;
      }
    }
  }

  .pc-menu-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;

    .search-form {
      position: relative;
      display: flex;

      input {
        width: 200px;
        height: 32px;
        max-width: 230px;
        background-color: ${({theme}) => theme.colors.border};
        border: 1px solid ${({theme}) => theme.colors.border};
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: ${({theme}) => theme.colors.black};
        padding: 0 35px 0 10px;
        transition: all 1s ease-in-out;
      }
      input::placeholder {
        color: ${({theme}) => theme.colors.black};
      }
      input:focus {
        outline: none;
        border: 1px solid #767677;
      }

      .icon-search {
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
    }
    .user {
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

    .cart-wrapper {
      position: relative;

      .cart-modal {
        z-index: 1000;
        position: absolute;
        top: 100%;
        right: 0;
        display: none;
        justify-content: center;
        align-items: center;
        width: 320px;
        height: 60px;
        padding: 10px;  
        background-color: ${({theme}) => theme.colors.white};
        box-shadow: 0 12px 24px #0000001a;

        p {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1px;
          line-height: 24px;
          text-transform: uppercase;
        }
      }

      &:hover {
        .cart-modal {
          display: flex;
        }
      }
    }
  }
`;

const Menu = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const sideMenuHandler = () => {
    setSideOpen(!sideOpen);
  };
  if(sideOpen === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <Container id="header" className="header">
        <Pc>
          <HeaderTop className="header-top">
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
        </Pc>
        <Mobile>
          <HeaderBottomMobile className="header-bottom">
            <h1 className="header-logo">
              <a href="/">
                <IconAdidasLogo width={50} height={32} fill="#000" />
              </a>
            </h1>
            <ul className="mobile-menu-left">
              <li onClick={ sideMenuHandler }>
                <button type="button">
                  <IconMenu width={24} height={26} fill="#000" />
                </button>
              </li>
              <li>
                <a href="/">
                  <IconHeart width={24} height={26} fill="#000" />
                </a>
              </li>
            </ul>
            <ul className="mobile-menu-right">
              <li className="user">
                <a href="/">
                  <IconPerson width={24} height={26} />
                </a>
                <span aria-label="알림">1</span>
              </li>
              <li>
                <button>
                  <IconSearch width={24} height={26} />
                </button>
              </li>
              <li>
                <a href="/">
                  <IconBasket width={24} height={26} />
                </a>
              </li>
            </ul>
          </HeaderBottomMobile>
        </Mobile>
        <Pc>
          <HeaderBottomPc className="header-bottom">
            <h1 className="header-logo">
              <a href="/">
                <IconAdidasLogo width={60} height={40} fill="#000" />
              </a>
            </h1>
            <ul className="pc-menu-center">
              <li>
                <a href="/" className="men">men</a>
              </li>
              <li>  
                <a href="/" className="women">women</a>
              </li>
              <li>
                <a href="/" className="kids">kids</a>
              </li>
              <li>
                <a href="/" className="sports">sports</a>
              </li>
              <li>
                <a href="/" className="brands">brands</a>
              </li>
              <li>
                <a href="/">online outlet</a>
              </li>
            </ul>
            <div className="pc-menu-right">
              <form className="search-form">
                <input className="search" type="text" placeholder="Search" />
                <IconSearch width={24} height={26} className="icon-search" />
              </form>
              <button className="user">
                <a href="/">
                  <IconPerson width={24} height={26} />
                </a>
                <span aria-label="알림">1</span>
              </button>
              <button className="wish">
                <a href="/">
                  <IconHeart width={24} height={26} />
                </a>
              </button>
              <div className="cart-wrapper">
                <button className="cart">
                  <a href="/">
                    <IconBasket width={24} height={26} />
                  </a>
                </button>
                <div className="cart-modal">
                  <p>장바구니가 비었습니다.</p>
                </div>
              </div>
            </div>
          </HeaderBottomPc>
        </Pc>
      </Container>
      <SideMenu sideOpen={ sideOpen } sideMenuHandler={ sideMenuHandler } />
    </>
  );
}

export default Menu;