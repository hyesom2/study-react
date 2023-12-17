import React from 'react';
import styled from 'styled-components';
// > components
import PosterContent1 from './PosterContent1';
import PosterContent2 from './PosterContent2';

const Container = styled.section`
  margin-top: 105px;
  margin-bottom: 40px;

  @media (min-width: 960px) {
    margin-top: 120px;
  }
`;

const Poster = () => {
  return (
    <Container>
      <PosterContent1 />
      <PosterContent2 />
    </Container>
  );
}

export default Poster;