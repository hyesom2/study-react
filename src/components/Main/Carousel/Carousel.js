import React, { useState } from 'react';
import styled from 'styled-components';
// > data
import BlogData from './BlogData';

const Container = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 32px;
  margin-bottom: 40px;
  overflow-x: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  @media (min-width: 600px) {
    padding: 0 64px;
  }
  @media (min-width: 960px) {
    // margin: 0 auto;
    margin-bottom: 80px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  .link {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 265px;
    height: 355px;
    margin-bottom: 10px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    height: 100%;
    flex: 1 1;

    h1 {
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0;
      line-height: 22px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    
    p {
      font-size: 13px;
      letter-spacing: 0;
      line-height: 17px;
      white-space: normal;
      margin-bottom: 15px;
    }

    .link-more {
      background-color: ${({theme}) => theme.colors.white};
      color: ${({theme}) => theme.colors.black};
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 2px;
      line-height: 20px;
      text-transform: uppercase;
      text-decoration: underline;
      transition: all 0.3s ease-in-out;
      
      &:hover {
        background-color: ${({theme}) => theme.colors.black};
        color: ${({theme}) => theme.colors.white};
      }
    }
  }
`;

const Carousel = () => {
  const [data] = useState(BlogData);

  return (
    <>
      <Container>
        {
          data.map((cardData) => (
            <Card key={ cardData.id }>
              <a href={ cardData.link } className="link">
                <img src={ cardData.imgUrl } alt={ cardData.title } />
                <div className="content">
                  <h1>{ cardData.title }</h1>
                  <p>{ cardData.content }</p>
                  <a href={ cardData.link } className="link-more">지금 구매하기</a>
                </div>
              </a>
            </Card>
          ))
        }
      </Container>
    </>
  );
}

export default Carousel;