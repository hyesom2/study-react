import React, { useState } from 'react';
import styled from 'styled-components';
// > icons
import { ReactComponent as IconAdidasLogo } from '../../assets/icons/icon_adidas_logo.svg';
import { ReactComponent as IconCloseButton } from '../../assets/icons/icon_button_close.svg';
import { ReactComponent as IconSouthKorea } from '../../assets/icons/icon_SouthKorea.svg';
import { ReactComponent as IconArrowRight2 } from '../../assets/icons/icon_arrow_right2.svg';
// > data
import {SideMenuTop, SideMenuBottom} from '../../assets/data/SideMenuData';

const Container = styled.section`
  z-index: 1000;
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
  background-color: ${({theme}) => theme.colors.white};
  transform: translateX(-100%);
  transition: all 0.5s ease-in-out;

  &.open {
    transform: translateX(0);
  }
`;

const SideMenuHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60px;
  border-bottom: 1px solid ${({theme}) => theme.colors.border};

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 32px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
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
  }
`;

const SideMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - (45px + 60px));
  padding: 10px 0;
  overflow-y: scroll;

  .side-content-top {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;

    &:last-child {
      margin-bottom: 0;
    }

    .side-item {
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
        font-weight: 700;
      }
      span {
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
  }

  .side-content-bottom {
    padding-top: 10px;

    .side-item {
      padding: 0 30px;

      a {
        display: block;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        padding: 10px 0;
      }
    }
  }
`;

const SideMenuFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: 0 30px;
  background-color: ${({theme}) => theme.colors.white};
  border-top: 1px solid ${({theme}) => theme.colors.border};

  h3 {
    font-size: 16px;
    order: 2;
    margin-left: 15px;
  }
`;

const SideMenu = (props) => {
  const [sideMenuTopData] = useState(SideMenuTop);
  const [sideMenuBottomData] = useState(SideMenuBottom);

  return (
    <Container className={ props.sideOpen === true ? "open pc-hide" : null }>
        <SideMenuHeader>
          <h1 className="logo">
            <a href="/">
              <IconAdidasLogo />
            </a>
          </h1>
          <button type="button" className="side-close" aria-label="닫기 버튼" onClick={ props.sideMenuHandler }>
            <IconCloseButton width={34} height={34} fill="#000" />
          </button>
        </SideMenuHeader>
        <SideMenuContent>
          <ul className="side-content-top">
            {
              sideMenuTopData.map((data, i) => (
                <li className="side-item" key={i}>
                  <button type="button" aria-label={ data.des }>
                    <span className={ data.name }>{ data.name }</span>
                    <IconArrowRight2 width={16} height={16} fill="#000" />
                  </button>
                </li>
              ))
            }
          </ul>
          <ul className="side-content-bottom">
            {
              sideMenuBottomData.map((data, i) => (
                <li className="side-item">
                  <a href={ data.link } aria-label={ data.des }>{ data.name }</a>
                </li>
              ))
            }
          </ul>
        </SideMenuContent>
        <SideMenuFooter>
          <h3>South Korea</h3>
          <IconSouthKorea alt="태극기" width={20} height={15} />
        </SideMenuFooter>
    </Container>
  );
}

export default SideMenu;