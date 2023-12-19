import React, { useState } from 'react';
import styled from 'styled-components';
// > icons
import { ReactComponent as WishHeart } from '../../../assets/icons/icon_heart.svg';

const Container = styled.section`
  width: 100%;
  margin-bottom: 40px;
  padding: 0 30px;
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
  padding-bottom: 32px;

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
    .price {
      position: absolute;
      left: 5px;
      bottom: 0;
      width: fit-content;
      background-color: ${({theme}) => theme.colors.white};
      color: ${({theme}) => theme.colors.black};
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 16px;
      padding: 2px 5px;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      .price {
        bottom: 3px;
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
  }
`;

const Product = ({ ProductDataTrend, ProductDataHoodies }) => {
  const [TrendData] = useState(ProductDataTrend);
  const [HoodiesData] = useState(ProductDataHoodies);
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
              <button type="button" className="is-active" onClick={ () => tabHandler(0)}>trend now 💫</button>
              <button type="button" onClick={ () => tabHandler(1)}>자주 손이 가는 후드티 🙌</button>
            </div>
            :
            <div className="tab-button-group">
              <button type="button" onClick={ () => tabHandler(0)}>trend now 💫</button>
              <button type="button" className="is-active" onClick={ () => tabHandler(1)}>자주 손이 가는 후드티 🙌</button>
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
                  <div className="card-top">
                    <a href={ data.link }>
                      <img src={ data.imageUrl } alt="" />
                    </a>
                    <button type="button">
                      <WishHeart width={24} height={24} />
                    </button>
                    <span className="price">{ data.price } 원</span>
                  </div>
                  <div className="card-bottom">
                    <h2>{ data.title }</h2>
                    <p>{ data.category }</p>
                  </div>
                </Card>
              ))
            :
              HoodiesData && HoodiesData.map((data) => (
                <Card key={ data.id }>
                  <div className="card-top">
                    <a href={ data.link }>
                      <img src={ data.imageUrl } alt="" />
                    </a>
                    <button type="button">
                      <WishHeart width={24} height={24} />
                    </button>
                    <span className="price">{ data.price } 원</span>
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

export default Product;