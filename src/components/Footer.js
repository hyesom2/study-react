import React from 'react';
import styled from 'styled-components';
// > icons
import { ReactComponent as IconArrowUp } from '../assets/icons/icon_arrow_up.svg';
import { ReactComponent as IconArrowRight } from '../assets/icons/icon_arrow_right_white.svg';
import { ReactComponent as IconFacebook } from '../assets/icons/icon_facebook.svg';
import { ReactComponent as IconInstagram } from '../assets/icons/icon_instagram.svg';
import { ReactComponent as IconTwitter } from '../assets/icons/icon_twitter.svg';
import { ReactComponent as IconPinterest } from '../assets/icons/icon_pinterest.svg';
import { ReactComponent as IconTiktok } from '../assets/icons/icon_tiktok.svg';
import { ReactComponent as IconYoutube } from '../assets/icons/icon_youtube.svg';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
`;

const FooterFeedback = styled.div`
  background-color: ${({theme}) => theme.colors.border};
  padding: 20px;

  h1 {
    color: ${({theme}) => theme.colors.black};
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  p, .feedback-link {
    color: ${({theme}) => theme.colors.black};
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22px;
  }

  .feedback-link {
    margin-top: 15px;
    text-decoration: underline;
  }

  @media (min-width: 600px) {
  }
  @media (min-width: 960px) {
    display: none;
  }
`;

const ToTopButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  span {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 20px;
    margin-left: 10px;
  }

  @media (min-width: 960px) {
    display: none;
  }
`;

const FooterAccount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  background-color: ${({theme}) => theme.colors.black};

  a {
    color: ${({theme}) => theme.colors.white};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 20px;
    text-transform: uppercase;
  }

  @media (min-width: 960px) {
    display: none;
  }
`;

const FooterMembership = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.highlight};
  padding: 40px;
  text-align: center;

  h3 {
    font-size: 30px;
    font-weight: 700;
    line-height: 32px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22px;
    margin-bottom: 15px;
  }

  button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.black};
    height: 50px;
    padding: 0 15px;
    transition: all 0.3s ease-in-out;

    &:hover {
      span {
        color: ${({theme}) => theme.colors.hover};
      }
      
      // ! hover시 .right-arrow 도 hover 되도록
    }

    span {
      color: ${({theme}) => theme.colors.white};
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 2px;
      line-height: 20px;
    }

    &::after {
      position: absolute;
      top: 2px;
      left: 2px;
      content: '';
      width: 142px;
      height: 50px;
      border: 1px solid ${({theme}) => theme.colors.black};
    }
  }
`;

const FooterMobileMenu = styled.div`
  background-color: ${({theme}) => theme.colors.black};

  .footer-mobile-menu-list {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 0;
  }

  .footer-mobile-menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 10px 15px;

    a {
      display: block;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 16px;
      color: ${({theme}) => theme.colors.white};
    }
  }

  @media (min-width: 600px) {}
  @media (min-width: 960px) {
    display: none;
  }
`;

const FooterPcMenu = styled.div`
  .footer-pc-menu-list {
    display: none;
    width: 100%;
    max-width: 1010px;
    margin: 0 auto;
    padding-top: 20px;
  }
  
  .footer-pc-menu-item {
    flex-basis: 100%;
    padding: 20px 15px 30px 15px;
    text-align: left;

    h5 {
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 1px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
  }

  .menu-list-item {
    a {
      display: block;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 24px;
      white-space: nowrap;
    }

    &:hover {
      a {
        text-decoration: underline;
      }
    }

    .icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      background-color: ${({theme}) => theme.colors.black};
      border-radius: 50%;
      margin-bottom: 8px;
    }
  }

  @media (min-width: 600px) {}
  @media (min-width: 960px) {
    .footer-pc-menu-list {
      display: flex;
    }
  }
`;

const Etc = styled.div`
  ul {
    width: 100%;
    padding: 20px 15px;
    background-color: ${({theme}) => theme.colors.black};
    border-top: 1px solid  ${({theme}) => theme.colors.hover};
  }

  li {
    display: inline;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({theme}) => theme.colors.white};

    &::after {
      content: '|';
      margin: 0 3px;
    }
    &:last-child {
      &::after {
        content: '';
      }
    }
  }

  @media (min-width: 600px) {}
  @media (min-width: 960px) {
    ul {
      max-width: 1010px;
      background-color: ${({theme}) => theme.colors.white};
      border-top: none;
      margin: 0 auto;
      padding: 15px;
    }

    li {
      color: ${({theme}) => theme.colors.black};
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.footer};
  padding: 15px 0;
  border-top: 1px solid ${({theme}) => theme.colors.hover};

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    color: ${({theme}) => theme.colors.gray};
    padding: 15px 0 15px 15px;

    &:last-child {
      width: 100%;
    }

    a {
      font-size: 12px;
      line-height: 16px;
    }
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 15px 0px 15px;

    span {
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      color: ${({theme}) => theme.colors.gray};
    }
  }

  @media (min-width: 960px) {
    ul {
      flex-wrap: nowrap;
      margin: 0 auto;
    }

    li {
      width: auto;

      &::after {
        content: '|';
        margin-left: 15px;
      }
      &:last-child::after {
        content: '';
      }
    }

    a {
      white-space: nowrap;
    }
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <Container id="footer">
        <FooterFeedback>
          <h1>모두의 의견에 귀를 기울입니다</h1>
          <p>
            피드백 감사드립니다. 더 나은 서비스를 위해 노력하겠습니다.
          </p>
          {/* <div className="feedback-link" aria-label="설문 링크">
            <a href="/">
              금방 끝납니다. 설문에 참여해주세요
            </a>
          </div> */}
        </FooterFeedback>
        <ToTopButton type="button" onClick={ scrollToTop } aria-label="위로가기 버튼">
          <IconArrowUp width={16} height={16} fill="#000" aria-hidden />
          <span>
            BACK TO TOP
          </span>
        </ToTopButton>
        <FooterAccount>
          <a href="/" aria-label="로그인 페이지 링크">LOGIN</a>
          <a href="/" aria-label="장바구니 페이지 링크">장바구니 (<span>0</span>)</a>
        </FooterAccount>
        <FooterMembership>
          <h3>지금 멤버십 가입하고 10% 할인 혜택 받으세요.</h3>
          <p>* 이메일 수신동의자에 한해 10% 할인쿠폰 발급</p>
          <button type="button" aria-label="회원가입 버튼">
            <span>
              회원가입
            </span>
            <IconArrowRight className="right-arrow" width={40} height={30} fill="#fff" aria-hidden />
          </button>
        </FooterMembership>
        <FooterMobileMenu>
          <ul className="footer-mobile-menu-list">
            <li className="footer-mobile-menu-item">
              <a href="/">
                배송
              </a>
            </li>
            <li className="footer-mobile-menu-item">
              <a href="/">
                반품
              </a>
            </li>
            <li className="footer-mobile-menu-item">
              <a href="/">
                주문조회
              </a>
            </li>
            <li className="footer-mobile-menu-item">
              <a href="/">
                구매 이용약관
              </a>
            </li>
            <li className="footer-mobile-menu-item">
              <a href="/">
                도움말
              </a>
            </li>
            <li className="footer-mobile-menu-item">
              <a href="/">
                채용정보
              </a>
            </li>
          </ul>
        </FooterMobileMenu>
        <FooterPcMenu>
          <ul className="footer-pc-menu-list">
            <li className="footer-pc-menu-item">
              <h5>products</h5>
              <ul className="menu-list">
                <li className="menu-list-item">
                  <a href="/">
                    신상품
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    공식 아울렛
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-pc-menu-item">
              <h5>sports</h5>
              <ul className="menu-list">
                <li className="menu-list-item">
                  <a href="/">
                    러닝
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    트레이닝
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    아웃도어
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    축구
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    골프
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    요가
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    테니스
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    농구
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    스케이팅보딩
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    수영
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    사이클링
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-pc-menu-item">
              <h5>company info</h5>
              <ul className="menu-list">
                <li className="menu-list-item">
                  <a href="/">
                    회사소개
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    채용정보
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    아디다스 앱
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    컨펌드 앱
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    아디다스 블로그
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-pc-menu-item">
              <h5>membership</h5>
              <ul className="menu-list">
                <li className="menu-list-item">
                  <a href="/">
                    아디클럽
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    adidas Runners
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-pc-menu-item">
              <h5>support</h5>
              <ul className="menu-list">
                <li className="menu-list-item">
                  <a href="/">
                    고객센터, 심의수선
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    주문 / 배송 조회
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    FAQ
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/">
                    구매 이용약관
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-pc-menu-item">
              <h5>follow us</h5>
              <ul className="menu-list">
                <li className="menu-list-item">
                  <a href="/" className="icon-wrapper">
                    <IconFacebook width={20} height={20} fill="#fff" className="icons" />
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/" className="icon-wrapper">
                    <IconInstagram width={20} height={20} fill="#fff" className="icons" />
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/" className="icon-wrapper">
                    <IconTwitter width={20} height={20} fill="#fff" className="icons" />
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/" className="icon-wrapper">
                    <IconPinterest width={20} height={20} fill="#fff" className="icons" />
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/" className="icon-wrapper">
                    <IconTiktok width={20} height={20} fill="#fff" className="icons" />
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="/" className="icon-wrapper">
                    <IconYoutube width={20} height={20} fill="#fff" className="icons" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </FooterPcMenu>
        <Etc>
          <ul>
            <li>아디다스코리아(유)</li>
            <li>서울특별시 서초구 서초대로 74길 4, 삼성생명 서초타워 23층 (06620)</li>
            <li>대표자: 곽근엽</li>
            <li>사업자 등록번호: 214-81-07412</li>
            <li>통신판매업신고: 2007-서울서초-10391</li>
            <li>개인정보관리책임자: 장영태</li>
            <li>호스팅서비스사업자: 아디다스코리아(유)</li>
            <li>고객센터: 1588-8241</li>
            <li>이메일: service@onlineshop.adidas.co.kr</li>
          </ul>
        </Etc>
        <FooterBottom>
          <ul>
            <li>
              <a href="/">쿠키 설정</a>
            </li>
            <li>
              <a href="/">구매 이용약관</a>
            </li>
            <li>
              <a href="/">개인정보 처리방침</a>
            </li>
            <li>
              <a href="/">아디클럽 이용약관</a>
            </li>
            <li>
              <a href="/">사업자정보확인</a>
            </li>
            <li>
              <a href="/">공정거래 자율준수</a>
            </li>
            <li>
              <a href="/">채무지급보증안내</a>
            </li>
          </ul>
          <div className="copyright" aria-label="저작권">
            <span>ⓒ adidas Korea, LLC. All Rights Reserved</span>
          </div>
        </FooterBottom>
      </Container>
    </>
  );
}

export default Footer;