import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`

`;

const FooterFeedback = styled.div`

`;

const ToTopButton = styled.button`

`;

const FooterMenu = styled.ul`

`;

const FooterAccount = styled.div``;

const FooterMembership = styled.div``;

const Etc = styled.ul`

`;

const FooterBottom = styled.div`

`;

const Footer = () => {
  return (
    <>
      <Container>
        <FooterFeedback>
          <h3>모두의 의견에 귀를 기울입니다</h3>
          <p>피드백 감사드립니다. 더 나은 서비스를 위해 노력하겠습니다. </p>
        </FooterFeedback>
        <ToTopButton type="button">
          BACK TO TOP
        </ToTopButton>
        <FooterAccount>
          <a href="/">LOGIN</a>
          <a href="/">장바구니(0)</a>
        </FooterAccount>
        <FooterMembership>
          <h3>지금 멤버십 가입하고 10% 할인 혜택 받으세요.</h3>
          <p>* 이메일 수신동의자에 한해 10% 할인쿠폰 발급</p>
          <button type="button">
            <span>
              회원가입
            </span>
          </button>
        </FooterMembership>
        <FooterMenu>
          <li>
            <a href="/">배송</a>
          </li>
          <li>
            <a href="/">반품</a>
          </li>
          <li>
            <a href="/">주문조회</a>
          </li>
          <li>
            <a href="/">구매 이용약관</a>
          </li>
          <li>
            <a href="/">도움말</a>
          </li>
          <li>
            <a href="/">채용정보</a>
          </li>
        </FooterMenu>
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
          <div className="copyright">
            <span>ⓒ adidas Korea, LLC. All Rights Reserved</span>
          </div>
        </FooterBottom>  
      </Container>
    </>
  );
}

export default Footer;