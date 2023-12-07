import React, { useState } from 'react';
import styled from 'styled-components';
// > data
import BlogData from './BlogData';

// > fix : 자세히보기 라인을 맞추고 싶다..

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 490px;
  padding: 0 32px;
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
    margin: 0 auto;
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
  margin-right: 10px;
  margin-bottom: 40px;

  &:last-child {
    margin-right: 0;
  }
  
  img {
    display: block;
    width: 267px;
    height: 355px;
    margin-bottom: 10px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;

    h1 {
      color: #000;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0;
      line-height: 22px;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 10px;
    }

    p {
      color: #000;
      font-size: 13px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 17px;
      margin-bottom: 16px;
    }

    button {
      display: flex;
      align-items: flex-end;
      flex-grow: 1;
      flex-shrink: 1;
      
      a {
        color: #000;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 2px;
        line-height: 20px;
        text-transform: uppercase;
        text-decoration: underline;
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
          data.map((cardData, i) => (
            <Card key={i}>
              <img src={ cardData.image } alt="" />
              <div className="content">
                <h1>{ cardData.title }</h1>
                <p>{ cardData.content }</p>
                <button>
                  <a href={ cardData.url }>자세히 보기</a>
                </button>
              </div>
            </Card>
          ))
        }
      </Container>
    </>
  );
}

export default Carousel;