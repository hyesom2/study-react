import { React, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
// > icons
import { ReactComponent as IconMoreDown } from '../../assets/icons/icon_more_down.svg';
// import IconCloseButton from '../../assets/icons/icon_button_close.svg';
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

// const openDropdown = keyframes`
//   0% {
//     height: 0;
//   }
//   100% {
//     height: 100%;
//   }
// `;

// const BannerModal = styled.section`
//   z-index: 1000;
//   position: fixed;
//   top: 0;
//   left: 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   width: 100%;
//   height: 100%;
//   background-color: #fff;

//   &.banner-open {
//     display: block;
//     animation: ${openDropdown} 0.5s ease-in-out;
//   }
  
//   &.banner-close {
//     display: none;
//   }

//   .banner-modal-close-button-wrapper {
//     display: flex;
//     justify-content: flex-end;
//     width: 100%;
//     padding: 20px 20px 0 0;
//   }

//   .banner-modal-close-button {
//     width: 50px;
//     height: 50px;
//     border: 1px solid #000;
    
//     img {
//       display: block;
//       width: 100%;
//       height: 100%;
//       padding: 10px;
//     }
//   }
  
//   .banner-modal-wrapper {
//     padding: 20px 20px 0 20px;
//     margin-bottom: 180px;
//   }

//   .banner-modal-content {
//     margin-bottom: 40px;

//     &:last-child {
//       margin-bottom: 0;
//     }

//     h1 {
//       font-size: 16px;
//       font-weight: bold;
//       line-height: 1.25;
//       margin-bottom: 10px;
//     }

//     p {
//       font-size: 14px;
//       font-weight: normal;
//       line-height: 1.4;
//       margin-bottom: 15px;
//     }

//     a {
//       display: inline-block;
//       font-size: 13px;
//       font-weight: bold;
//       line-height: 1.3;
//       letter-spacing: 0.15em;
//       text-decoration: underline;
//       transition: all 0.3s ease-in-out;

//       &:hover {
//         color: #fff;
//         background-color: #000;
//       }
//     }
//   }

//   @media (min-width: 600px) {
//     height: 100%;

//     .banner-modal-close-button-wrapper {
//       padding: 30px 30px 0 0;
//     }

//     .banner-modal-wrapper {
//       width: 100%;
//       padding: 126px 0 0 60px;
//       margin-bottom: 200px;
    
//       .banner-modal-content {
//         width: 400px;
//         margin-bottom: 80px;
//       }
//     }
//   }
//   @media (min-width: 960px) {
//     max-height: 500px;
//     height: auto;

//     .banner-modal-close-button-wrapper {
//       padding: 20px 20px 0 0;
//     }

//     .banner-modal-wrapper {
//       display: flex;
//       flex-direction: row;
//       justify-content: center;
//       align-items: flex-start;
//       padding: 30px 0 0 0;
//       margin-bottom: 100px;

//       .banner-modal-content {
//         width: 335px;
//         margin-right: 80px;
//         margin-bottom: 0;

//         &:last-child {
//           margin-right: 0;
//         }
//       }
//     }
//   }
// `;

// const Overlay = styled.div`
//   display: block;
//   z-index: 999;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);

//   &.close {
//     display: none;
//   }
// `;

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
  );
}

export default Banner;