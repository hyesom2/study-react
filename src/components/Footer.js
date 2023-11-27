import React from 'react';
import styled from 'styled-components';
import IconArrowUp from '../assets/icons/icon_arrow_up.svg';
import IconArrowRight from '../assets/icons/icon_arrow_right_white.svg';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
`;

const FooterFeedback = styled.div`
  background-color: #eceff1;
  padding: 20px;

  h1 {
    color: #000;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  p, .feedback-link {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22px;
  }

  .feedback-link {
    margin-top: 15px;
    text-decoration: underline;
  }
`;

const ToTopButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 20px;
  }
`;

const FooterAccount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  background-color: #000;

  a {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 20px;
    text-transform: uppercase;
  }
`;

const FooterMembership = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ede734;
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
    background-color: #000;
    height: 50px;
    padding: 0 15px;
    transition: all 0.3s ease-in-out;

    span {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 2px;
      lien-height: 20px;
    }

    img {
      display: block;
      width: 40px;
      height: 30px;
    }

    &:hover {
      opacity: 0.7;
    }

    &::after {
      position: absolute;
      top: 2px;
      left: 2px;
      content: '';
      width: 142px;
      height: 50px;
      border: 1px solid #000;
    }
  }
`;

const Etc = styled.ul`
  padding: 20px 15px;
  background-color: #000;
  border-top: 1px solid #767677;

  li {
    display: inline;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #fff;

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
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #282c31;
  padding: 15px 0;
  border-top: 1px solid #767677;

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    color: #d3d7da;
    padding: 15px;

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
      color: #d3d7da;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <Container id="footer">
        <FooterFeedback>
          <h1>모두의 의견에 귀를 기울입니다</h1>
          <p>
            피드백 감사드립니다. 더 나은 서비스를 위해 노력하겠습니다.
          </p>
          <div className="feedback-link" aria-label="설문 링크">
            <a href="/">
              금방 끝납니다. 설문에 참여해주세요
            </a>
          </div>
        </FooterFeedback>
        <ToTopButton type="button" aria-label="위로가기 버튼">
          <img src={ IconArrowUp } alt="" />
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
            <img src={ IconArrowRight } alt="이동하기 버튼" aria-hidden />
          </button>
        </FooterMembership>
        <Etc>
          <li>아디다스코리아(유)</li>
          <li>서울특별시 서초구 서초대로 74길 4, 삼성생명 서초타워 23층 (06620)</li>
          <li>대표자: 곽근엽</li>
          <li>사업자 등록번호: 214-81-07412</li>
          <li>통신판매업신고: 2007-서울서초-10391</li>
          <li>개인정보관리책임자: 장영태</li>
          <li>호스팅서비스사업자: 아디다스코리아(유)</li>
          <li>고객센터: 1588-8241</li>
          <li>이메일: service@onlineshop.adidas.co.kr</li>
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