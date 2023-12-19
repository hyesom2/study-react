import React from 'react';
// > components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Poster from './components/Main/Poster/Poster';
import Product from './components/Main/Product/Product';
import Carousel from './components/Main/Carousel/Carousel';
import Explanation from './components/Main/Explanation';
import Footer from './components/Footer';
// > data
import { ProductDataTrend, ProductDataHoodies }from './assets/data/ProductData';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Poster />
        <Product ProductDataTrend={ ProductDataTrend } ProductDataHoodies={ ProductDataHoodies } />
        <Carousel />
        <Product />
        <Carousel />
        <Explanation />
      </Main>
      <Footer />
    </>
  );
}

export default App;