import React from 'react';
// > components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Poster1 from './components/Main/Poster/Poster1';
import Product from './components/Main/Product/Product';
import Explanation from './components/Main/Explanation';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Poster1 />
        <Product />
        <Explanation />
      </Main>
      <Footer />
    </>
  );
}

export default App;