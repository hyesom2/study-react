import React from 'react';
import styled from 'styled-components';
// > icons
import IconMoreDown from '../../assets/icons/icon_more_down.svg';
import IconCloseButton from '../../assets/icons/icon_button_close.svg';

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: #000;
  cursor: pointer;
  text-transform: uppercase;

  .banner-title {
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 0.1em;
    line-height: 1.2;
    color: #fff;
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

  @media (min-width: 600px) {
  }
  @media (min-width: 960px) {
    height: 40px;

    .banner-title {
      margin-right: 10px;
    }
    .banner-icon-more {
      position: relative;
      top: 0;
      right: 0;
    }
  }
`;

const BannerModal = styled.section`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: #fff;

  .banner-modal-close-button-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 20px 20px 0 0;
  }

  .banner-modal-close-button {
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    
    img {
      display: block;
      width: 100%;
      height: 100%;
      padding: 10px;
    }
  }
  
  .banner-modal-wrapper {
    padding: 20px 20px 0 20px;
    margin-bottom: 180px;
  }

  .banner-modal-content {
    height: 100%;
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }

    h1 {
      font-size: 16px;
      font-weight: bold;
      line-height: 1.25;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.4;
      margin-bottom: 15px;
    }

    a {
      display: inline-block;
      font-size: 13px;
      font-weight: bold;
      line-height: 1.3;
      letter-spacing: 0.15em;
      text-decoration: underline;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #fff;
        background-color: #000;
      }
    }
  }

  @media (min-width: 600px) {
    .banner-modal-close-button-wrapper {
      padding: 30px 30px 0 0;
    }

    .banner-modal-wrapper {
      width: 100%;
      padding: 126px 0 0 60px;
      margin-bottom: 200px;
    
      .banner-modal-content {
        width: 400px;
        margin-bottom: 80px;
      }
    }
  }
  @media (min-width: 960px) {
    height: auto;
    max-height: 500px;

    .banner-modal-close-button-wrapper {
      padding: 20px 20px 0 0;
    }

    .banner-modal-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      padding: 30px 0 0 0;
      margin-bottom: 100px;

      .banner-modal-content {
        width: 335px;
        margin-right: 80px;
        margin-bottom: 0;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

const Overlay = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
      <BannerModal id="banner-modal" className="banner-modal">
        <div className="banner-modal-close-button-wrapper">
          <button type="button" className="banner-modal-close-button" aria-label="모달 닫기 버튼">
            <img src={IconCloseButton} alt="모달 닫기 버튼" />
          </button>
        </div>
        <div className="banner-modal-wrapper">
          <div className="banner-modal-content">
            <h1>가입/로그인/배송지 입력 안내</h1>
            <p>아디다스 앱 카카오 로그인이 런칭 되었습니다. 이제 앱에서도 간편한 소셜 로그인을 만나보세요! *해외 계정으로 회원 가입시 오류가 발생할 수 있으며, 로그인 오류 및 배송지 입력 기준은 아래 링크를 통해 확인해 주세요.</p>
            <a href="/">가입/로그인/배송지 입력 기준 자세히 보기</a>
          </div>
          <div className="banner-modal-content">
            <h1>회원가입 10% 쿠폰 및 생일 쿠폰 지급 관련 기준 안내</h1>
            <p>아디클럽 가입기념으로 제공되는 Welcome 10% 할인 쿠폰은 adidas.co.kr 회원가입 시 [이메일 수신동의]한 회원에 한해 발급되며, 생일 쿠폰도 이메일 수신동의를 하신 경우에만 쿠폰이 발급됩니다.</p>
            <a href="/">쿠폰 지급 관련 기준 자세히 보기</a>
          </div>
          <div className="banner-modal-content">
            <h1>아디다스 구매 이용약관 개정 공지</h1>
            <p>당사에서 운영하는 사이트와 이용자에게 제공하는 서비스와 관련하여, 2023년 9월 25일 부로 구매 이용약관이 새롭게 개정됩니다. 자세한 내용은 아래 링크를 통해 확인 가능합니다.</p>
            <a href="/">구매 이용약관 개정 사항 보기</a>
          </div>
        </div>
      </BannerModal>
      <Overlay id="overlay" />
    </>
  );
}

export default Banner;