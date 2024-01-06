import React from 'react';
// > components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Poster from './components/Main/Poster/Poster';
import Product from './components/Main/Product/Product';
import ProductList from './components/Main/Product/ProductList';
import Carousel from './components/Main/Carousel/Carousel';
import Explanation from './components/Main/Explanation';
import BlogCarousel from './components/Main/Carousel/BlogCarousel';
import Footer from './components/Footer';
// > data
import { ProductDataTrend, ProductDataHoodies, ProductDataOuter, ProductDataAcc, ProductDataBest }from './assets/data/ProductData';
import { ProductBlogData, StoryBlogData } from './assets/data/BlogData';


const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Poster />
        <Product ProductDataTrend={ ProductDataTrend } ProductDataHoodies={ ProductDataHoodies } />
        <Carousel ProductBlogData={ ProductBlogData } />
        <ProductList ProductDataOuter={ ProductDataOuter } ProductDataAcc={ ProductDataAcc } ProductDataBest={ ProductDataBest }/>
        <BlogCarousel StoryBlogData={ StoryBlogData } />
        <Explanation />
      </Main>
      <Footer />
    </>
  );
}

export default App;