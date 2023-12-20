import React, { useState } from 'react';
import styled from 'styled-components';
// > icons
import { ReactComponent as WishHeart } from '../../../assets/icons/icon_heart.svg';

const Container = styled.section`
  width: 100%;
  margin-bottom: 40px;
  padding: 0 30px;

  @media (min-width: 600px) {
    padding: 0 60px;
  }
  @media (min-width: 960px) {}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
  @media (min-width: 960px) {}
  
  .tab-button-group {
    display: flex;
    max-width: 100%;
    margin-bottom: 16px;
    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }

    @media (min-width: 600px) {
      margin-bottom: 0;
    }
    @media (min-width: 960px) {}

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      height: 44px;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0;
      line-height: 22px;
      text-transform: uppercase;
      padding: 12px;
      margin-right: 8px;
      white-space: nowrap;
      border: 1px solid ${({theme}) => theme.colors.black};
      transition: all 0.3s ease-in-out;

      &.best-button {
        text-transform: none;
      }

      &.is-active {
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.black};
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.black};
      }
    }
  }

  a {
    display: inline;
    width: fit-content;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
    white-space: nowrap;
    text-decoration: underline;
    color: ${({theme}) => theme.colors.black};
    background-color: ${({theme}) => theme.colors.white};
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${({theme}) => theme.colors.white};
      background-color: ${({theme}) => theme.colors.black};
    }
  }
`;

const ContentBottom = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  padding-bottom: calc(32px + 4px);

  &::-webkit-scrollbar {
    height: 4px;
    background-color: ${({theme}) => theme.colors.border};
  }
  &::-webkit-scrollbar-thumb {
    background-color: #000;
  }
`;

const Card = styled.div`
  margin-right: 8px;
  
  &:last-child {
    margin-right: 0;
  }

  .card-top {
    position: relative;
    width: 163px;
    height: 163px;
    margin-bottom: 10px;

    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      margin: 3px;
    }

    .product-price {
      position: absolute;
      left: 5px;
      bottom: 0;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease-in-out;

      .sale-percent {
        width: fit-content;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0;
        line-height: 16px;
        padding: 2px 5px;
        background-color: ${({theme}) => theme.colors.white};
        color: ${({theme}) => theme.colors.black};      
        margin-bottom: 5px;
      }

      .price-wrapper {
        display: flex;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 16px;
        padding: 2px 5px;
        background-color: ${({theme}) => theme.colors.white};
        color: ${({theme}) => theme.colors.black};
        
        .price {
          width: fit-content;
          margin-right: 5px;

          &.is-sale {
            color: ${({theme}) => theme.colors.hover};
            text-decoration: line-through;
          }
        }

        .sale-price {
          color: ${({theme}) => theme.colors.discount};
        }
      }
    }

    &:hover {
      .product-price {
        bottom: 3px;
      }
    }

    @media (min-width: 600px) {
      width: 316px;
      height: 316px;

      .product-price {
        .sale-percent {
          font-size: 16px;
        }
      }
      .price, .sale-price {
        font-size: 16px;
      }
    }
    @media (min-width: 960px) {
      width: 208px;
      height: 208px;

      &:hover {
        border: 1px solid ${({theme}) => theme.colors.black};
      }
    }
  }

  .card-bottom {
    padding-left: 10px;

    h2 {
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 16px;
      color: ${({theme}) => theme.colors.black};
      margin-bottom: 5px;
    }
    p {
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 16px;
      color: ${({theme}) => theme.colors.hover };
      text-transform: capitalize;
    }

    @media (min-width: 600px) {
      h2, p {
        font-size: 16px;
        line-height: 22px;
      }
    }
    @media (min-width: 960px) {}
  }
`;

const ProductList = ({ ProductDataOuter, ProductDataAcc, ProductDataBest }) => {
  const [TrendData] = useState(ProductDataOuter);
  const [AccData] = useState(ProductDataAcc);
  const [BestData] = useState(ProductDataBest);
  const [tab, setTab] = useState(0);
  const tabHandler = (id) => {
    setTab(id);
  };

  return (
    <Container>
      <Content>
        <ContentTop>
          {
            tab === 0 
            ?
            <div className="tab-button-group">
              <button type="button" className="is-active" onClick={ () => tabHandler(0)}>차가워진 공기를 맞이하는 아우터 ❄️</button>
              <button type="button" onClick={ () => tabHandler(1)}>겨울을 맞이하는 액세서리</button>
              <button type="button" className="best-button" onClick={ () => tabHandler(2)}>Best of adidas🔥</button>
            </div>
            :
              tab === 1
              ?
              <div className="tab-button-group">
                <button type="button" onClick={ () => tabHandler(0)}>차가워진 공기를 맞이하는 아우터 ❄️</button>
                <button type="button" className="is-active" onClick={ () => tabHandler(1)}>겨울을 맞이하는 액세서리</button>
                <button type="button" className="best-button" onClick={ () => tabHandler(2)}>Best of adidas🔥</button>
              </div>
              :
              <div className="tab-button-group">
                <button type="button" onClick={ () => tabHandler(0)}>차가워진 공기를 맞이하는 아우터 ❄️</button>
                <button type="button" onClick={ () => tabHandler(1)}>겨울을 맞이하는 액세서리</button>
                <button type="button"className="best-button is-active" onClick={ () => tabHandler(2)}>Best of adidas🔥</button>
              </div>
          }
          <a href={tab === 0 ? "https://www.adidas.co.kr/trend_now" : "https://www.adidas.co.kr/hoodies"}>전체보기</a>
        </ContentTop>
        <ContentBottom>
        {
            tab === 0
            ?
              TrendData && TrendData.map((data) => (
                <Card key={ data.id }>
                  <a href={ data.link }>
                    <div className="card-top">
                      <a href={ data.link }>
                        <img src={ data.imageUrl } alt="" />
                      </a>
                      <button type="button">
                        <WishHeart width={24} height={24} />
                      </button>
                      <div className="product-price">
                        {
                          data.salePercent > 0
                          ?
                          <span className="sale-percent">{ data.salePercent }</span>
                          :
                          null
                        }
                        {
                          data.discountPrice === ""
                          ?
                          <div className="price-wrapper">
                            <span className="price">{ data.price }원</span>
                          </div>
                          :
                          <div className="price-wrapper">
                            <span className="price is-sale">{ data.price }원</span>
                            <span className="sale-price">{ data.discountPrice }원</span>
                          </div>
                        }
                      </div>
                    </div>
                    <div className="card-bottom">
                      <h2>{ data.title }</h2>
                      <p>{ data.category }</p>
                    </div>
                  </a>
                </Card>
              ))
            :
              tab === 1
              ?
              AccData && AccData.map((data) => (
                <Card key={ data.id }>
                  <div className="card-top">
                    <a href={ data.link }>
                      <img src={ data.imageUrl } alt="" />
                    </a>
                    <button type="button">
                      <WishHeart width={24} height={24} />
                    </button>
                    <div className="product-price">
                        {
                          data.salePercent > 0
                          ?
                          <span className="sale-percent">-{ data.salePercent } %</span>
                          :
                          null
                        }
                        {
                          data.discountPrice === ""
                          ?
                          <div className="price-wrapper">
                            <span className="price">{ data.price }원</span>
                          </div>
                          :
                          <div className="price-wrapper">
                            <span className="price is-sale">{ data.price }원</span>
                            <span className="sale-price">{ data.discountPrice }원</span>
                          </div>
                        }
                    </div>
                  </div>
                  <div className="card-bottom">
                    <h2>{ data.title }</h2>
                    <p>{ data.category }</p>
                  </div>
                </Card>
              ))
              :
              BestData && BestData.map((data) => (
                <Card key={ data.id }>
                  <div className="card-top">
                    <a href={ data.link }>
                      <img src={ data.imageUrl } alt="" />
                    </a>
                    <button type="button">
                      <WishHeart width={24} height={24} />
                    </button>
                    <div className="product-price">
                        {
                          data.salePercent > 0
                          ?
                          <span className="sale-percent">-{ data.salePercent } %</span>
                          :
                          null
                        }
                        {
                          data.discountPrice === ""
                          ?
                          <div className="price-wrapper">
                            <span className="price">{ data.price }원</span>
                          </div>
                          :
                          <div className="price-wrapper">
                            <span className="price is-sale">{ data.price }원</span>
                            <span className="sale-price">{ data.discountPrice }원</span>
                          </div>
                        }
                    </div>
                  </div>
                  <div className="card-bottom">
                    <h2>{ data.title }</h2>
                    <p>{ data.category }</p>
                  </div>
                </Card>
              ))
            }
        </ContentBottom>
      </Content>
    </Container>
  );
}

export default ProductList;