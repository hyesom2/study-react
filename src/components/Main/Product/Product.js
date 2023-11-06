import React from 'react';
import styled from 'styled-components';
// > icons, images
import WishHeart from '../../../assets/icons/icon_heart.svg';
import ProductImg0 from '../../../assets/images/product/product0.png';
import ProductImg1 from '../../../assets/images/product/product1.png';

const Container = styled.section`
  margin-bottom: 40px;
`;

const Content = styled.div`
  margin: 0 30px;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  .content-top {
    width: 100%;
    margin-bottom: 32px;
    
    .button-group {
      display: flex;
      margin-bottom: 16px;
      overflow-x: scroll;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }

      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: max-content;
        height: 44px;
        padding: 12px;
        border: 1px solid #000;
        font-size: 16px;
        font-weight: bold;
        line-height: 22px;
        margin-right: 8px;
        white-space: nowrap;
  
        &:last-child {
          margin-right: 0;
        }
        &:hover,
        &:active {
          background-color: #000;
          color: #fff;
        }
      }
      .button-active {
        background-color: #000;
        color: #fff;
      }
    }

    a {
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      text-decoration: underline;
    }
  }
`;

const Products = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    background-color: #eceff1;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #000;
  }

  .product {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 263px;
    margin-right: 8px;
    margin-bottom: 32px;

    &:last-child {
      margin-right: 0;
    }
  }

  .product-image {
    position: relative;
    margin-bottom: 10px;

    img {
      display: block;
      width: 163px;
      height: 163px;
      object-fit: contain;
    }
    
    button {
      position: absolute;
      top: 0;
      right: 0;
      margin: 3px;
      width: 24px;
      height: 24px;
      cursor: initial;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    strong {
      position: absolute;
      left: 0;
      bottom: 0;
      margin-left: 5px;
      width: fit-content;
      padding: 2px 5px;
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      background-color: #fff;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  .product-content {
    padding-left: 10px;

    h2 {
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 16px;
      margin-bottom: 5px;
    }

    p {
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 16px;
      text-transform: capitalize;
      color: #767677;
      margin-bottom: 5px;
    }

    span {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 16px;
    }
  }
`;

const Product = () => {
  return (
    <>
      <Container>
        <Content>
          <div className="content-top">
            <div className="button-group">
              <button type="button" className="button button-active">포근한 하루를 위한 패딩 소재 제품</button>
              <button type="button" className="button">자주 손이 가는 후드티 🙌</button>
            </div>
            <a href="/">전체보기</a>
          </div>
          <Products className="content-bottom">
            <a className="product" href="/">
              <div className="product-image">
                <img src={ ProductImg0 } alt="" />
                <button type="button">
                  <img src={ WishHeart } alt="" />
                </button>
                <strong>119,000<span>원</span></strong>
              </div>
              <div className="product-content">
                <h2>남성 originals White 퍼피렛</h2>
                <p>남성 Originals</p>
                <span className="new">New</span>
              </div>
            </a>
            <a className="product" href="/">
              <div className="product-image">
                <img src={ ProductImg1 } alt="" />
                <button type="button">
                  <img src={ WishHeart } alt="" />
                </button>
                <strong>69,000<span>원</span></strong>
              </div>
              <div className="product-content">
                <h2>Women originals Black 퍼피 새틴 숄더 백</h2>
                <p>Women Originals</p>
                <span className="new">New</span>
              </div>
            </a>
            <a className="product" href="/">
              <div className="product-image">
                <img src={ ProductImg1 } alt="" />
                <button type="button">
                  <img src={ WishHeart } alt="" />
                </button>
                <strong>69,000<span>원</span></strong>
              </div>
              <div className="product-content">
                <h2>Women originals Black 퍼피 새틴 숄더 백</h2>
                <p>Women Originals</p>
                <span className="new">New</span>
              </div>
            </a>
            <a className="product" href="/">
              <div className="product-image">
                <img src={ ProductImg1 } alt="" />
                <button type="button">
                  <img src={ WishHeart } alt="" />
                </button>
                <strong>69,000<span>원</span></strong>
              </div>
              <div className="product-content">
                <h2>Women originals Black 퍼피 새틴 숄더 백</h2>
                <p>Women Originals</p>
                <span className="new">New</span>
              </div>
            </a>
            <a className="product" href="/">
              <div className="product-image">
                <img src={ ProductImg1 } alt="" />
                <button type="button">
                  <img src={ WishHeart } alt="" />
                </button>
                <strong>69,000<span>원</span></strong>
              </div>
              <div className="product-content">
                <h2>Women originals Black 퍼피 새틴 숄더 백</h2>
                <p>Women Originals</p>
                <span className="new">New</span>
              </div>
            </a>
            <a className="product" href="/">
              <div className="product-image">
                <img src={ ProductImg1 } alt="" />
                <button type="button">
                  <img src={ WishHeart } alt="" />
                </button>
                <strong>69,000<span>원</span></strong>
              </div>
              <div className="product-content">
                <h2>Women originals Black 퍼피 새틴 숄더 백</h2>
                <p>Women Originals</p>
                <span className="new">New</span>
              </div>
            </a>
            <a className="product" href="/">
              <div className="product-image">
                <img src={ ProductImg1 } alt="" />
                <button type="button">
                  <img src={ WishHeart } alt="" />
                </button>
                <strong>69,000<span>원</span></strong>
              </div>
              <div className="product-content">
                <h2>Women originals Black 퍼피 새틴 숄더 백</h2>
                <p>Women Originals</p>
                <span className="new">New</span>
              </div>
            </a>
            <a className="product" href="/">
              <div className="product-image">
                <img src={ ProductImg1 } alt="" />
                <button type="button">
                  <img src={ WishHeart } alt="" />
                </button>
                <strong>69,000<span>원</span></strong>
              </div>
              <div className="product-content">
                <h2>Women originals Black 퍼피 새틴 숄더 백</h2>
                <p>Women Originals</p>
                <span className="new">New</span>
              </div>
            </a>
            <a className="product" href="/">
              <div className="product-image">
                <img src={ ProductImg1 } alt="" />
                <button type="button">
                  <img src={ WishHeart } alt="" />
                </button>
                <strong>69,000<span>원</span></strong>
              </div>
              <div className="product-content">
                <h2>Women originals Black 퍼피 새틴 숄더 백</h2>
                <p>Women Originals</p>
                <span className="new">New</span>
              </div>
            </a>
            <a className="product" href="/">
              <div className="product-image">
                <img src={ ProductImg1 } alt="" />
                <button type="button">
                  <img src={ WishHeart } alt="" />
                </button>
                <strong>69,000<span>원</span></strong>
              </div>
              <div className="product-content">
                <h2>Women originals Black 퍼피 새틴 숄더 백</h2>
                <p>Women Originals</p>
                <span className="new">New</span>
              </div>
            </a>
            <a className="product" href="/">
              <div className="product-image">
                <img src={ ProductImg1 } alt="" />
                <button type="button">
                  <img src={ WishHeart } alt="" />
                </button>
                <strong>69,000<span>원</span></strong>
              </div>
              <div className="product-content">
                <h2>Women originals Black 퍼피 새틴 숄더 백</h2>
                <p>Women Originals</p>
                <span className="new">New</span>
              </div>
            </a>
            <a className="product" href="/">
              <div className="product-image">
                <img src={ ProductImg1 } alt="" />
                <button type="button">
                  <img src={ WishHeart } alt="" />
                </button>
                <strong>69,000<span>원</span></strong>
              </div>
              <div className="product-content">
                <h2>Women originals Black 퍼피 새틴 숄더 백</h2>
                <p>Women Originals</p>
                <span className="new">New</span>
              </div>
            </a>
            <a className="product" href="/">
              <div className="product-image">
                <img src={ ProductImg1 } alt="" />
                <button type="button">
                  <img src={ WishHeart } alt="" />
                </button>
                <strong>69,000<span>원</span></strong>
              </div>
              <div className="product-content">
                <h2>Women originals Black 퍼피 새틴 숄더 백</h2>
                <p>Women Originals</p>
                <span className="new">New</span>
              </div>
            </a>
          </Products>
        </Content>
      </Container>
    </>
  );
}

export default Product;