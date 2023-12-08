import { React, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
// > icons
import { ReactComponent as IconMoreDown } from '../../assets/icons/icon_more_down.svg';
import { ReactComponent as IconCloseButton } from '../../assets/icons/icon_button_close.svg';
// > data
import BannerData from '../../assets/data/BannerData';

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

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

const textFade = keyframes`
  0% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
`;

const BannerWrapper = styled.div`
  .banner-title {
    color: ${({ theme }) => theme.colors.white};
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    line-height: 1.2;
    text-transform: uppercase;
    margin-right: 10px;
  }

  .banner-icon-more {
    position: absolute;
    top: calc((100% - 22px) / 2);
    right: 20px;
  }

  @media (min-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${textFade} 4s infinite;

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
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;

  &.modal-open {
    transform: translateY(0);
  }

  @media (min-width: 600px) {}
  @media (min-width: 960px) {
    height: auto;
    max-height: 500px;
  }

  .banner-modal-close-button {
    display: flex;
    justify-content: flex-end;
    padding: 20px 20px 0 0;
    
    .close-button {
      border: 1px solid #000;
      padding: 10px;
      cursor: pointer;
    }

    @media (min-width: 600px) {
      padding: 30px 30px 0 0;
    }
    @media (min-width: 960px) {
      padding: 20px 20px 0 0;
    }
  }

  .banner-modal-content {
    padding: 20px 20px 0 20px;
    margin-bottom: 180px;

    .content {
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }

      h1 {
        font-size: 16px;
        font-weight: 700;
        line-height: 1.25;
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4;
        margin-bottom: 15px;
        max-height: 100px;
        overflow: hidden;
      }
      a {
        display: inline-block;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.15em;
        line-height: 1.3;
        text-decoration: underline;
        max-width: 300px;
        flex: 1 1 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: ${({ theme }) => theme.colors.black};
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }

    @media (min-width: 600px) {
      padding: 126px 0 0 60px;
      margin-bottom: 200px;

      .content {
        width: 400px;
        margin-bottom: 80px;
      }
    }
    @media (min-width: 960px) {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      padding: 30px 0 0 0;
      margin-bottom: 100px;

      .content {
        width: 335px;
        margin-bottom: 0;
      }
    }
  }
`;

const Overlay = styled.div`
  display: block;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  &.modal-close {
    display: none;
  }
`;

const Banner = () => {
  const [banner] = useState(BannerData);
  const [text, setText] = useState(banner[0].title);

  const textChange = () => {
    let array = [];
    for(let i = 0 ; i < banner.length ; i++) {
      let bannerText2 = banner[i].title;
      array.push(bannerText2);
    };
    let current_index = array.indexOf(text);

    if (array.length-1 === current_index) {
      setText(array[0]);
    } else {
      setText(array[current_index + 1]);
    }
  };

  useEffect(() => {
    setTimeout(() => textChange(), 4000)
  });

  const [bannerToggle, setBannerToggle] = useState(false);
  const bannerHandler = () => {
    setBannerToggle(!bannerToggle);
  };
  
  return (
    <>
      <Container id="banner" className="banner" role="banner" onClick={ bannerHandler }>
        <BannerWrapper>
          <h1 className="banner-title" aria-label="배너 내용">
            { text }                
          </h1>
          <div className="banner-icon-more" aria-label="더보기 아이콘">
            <IconMoreDown width={24} height={22} fill="#fff" />
          </div>
        </BannerWrapper>
      </Container>
      <BannerModal id="banner-modal" className={bannerToggle === true ? "modal-open" : null}>
        <div className="banner-modal-close-button" onClick={ bannerHandler }  aria-label="모달 닫기 버튼" >
          <IconCloseButton className="close-button" width={50} height={50} fill="#000" />
        </div>
        <div className="banner-modal-content">
            {
              banner.map((bannerData, i) => (
                <div className="content" key={i}>
                  <h1>{ bannerData.title }</h1>
                  <p>{ bannerData.content }</p>
                  <a href={ bannerData.url_link }>{ bannerData.url_title }</a>
                </div>
              ))
            }
        </div>
      </BannerModal>
      <Overlay id="overlay" className={bannerToggle === true ? null : "modal-close"} onClick={ bannerHandler } aria-hidden />
    </>
  );
}

export default Banner;